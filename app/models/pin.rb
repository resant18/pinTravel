class Pin < ApplicationRecord    
    has_many :board_pins,
        foreign_key: :pin_id,
        class_name: :BoardPin
    
    has_many :boards, 
        through: :boards_pins, 
        source: :board
end
