class EmailValidator < ActiveModel::EachValidator
    def validate_each(record, attribute, value)
        unless value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
        record.errors[attribute] << (options[:message] || "is not a valid email")
        end
    end
end

class User < ApplicationRecord
    validates :email, email: true
    validates :email, :password_digest, :session_token, :first_name, presence: true
    validates :email, :password_digest, :session_token, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
       
    after_initialize :ensure_session_token

    has_many :boards,
        foreign_key: :user_id,
        class_name: :Board,
        dependent: :destroy

    has_many :board_pins, 
        through: :boards, 
        source: :board_pins,
        dependent: :destroy

    has_many :pins, 
        through: :boards, 
        source: :pins

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end

    private

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end
end
