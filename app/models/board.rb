class Board < ApplicationRecord
    validates :name, uniqueness: true
    validates :name, :user_id, :category_id, presence: true
    validates :secret, inclusion: [true, false]

    belongs_to :user
end
