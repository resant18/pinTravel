class BoardPin < ApplicationRecord
    validates :board_id, :pin_id, presence: true    

    belongs_to :pin,
        foreign_key: :pin_id,
        class_name: :Pin 

    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board
    
    has_one :user, through: :board, source: :user
end
