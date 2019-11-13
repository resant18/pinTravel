class Board < ApplicationRecord
    validates :name, uniqueness: true
    validates :name, :user_id, :category_id, presence: true
    validates :secret, inclusion: [true, false]

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :board_pins, dependent: :destroy
    has_many :pins,
        through: :board_pins,
        source: :pin
end