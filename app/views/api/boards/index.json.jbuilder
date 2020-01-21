@boards.each do |board|
  json.users do
    json.set! board.user.username do
      json.partial! 'api/users/user', user: board.user
    end
  end

  json.boards do
    json.set! board.id do
      json.partial! 'api/boards/board', board: board
    end
  end

  json.pins do
    board.board_pins.each do |board_pin|
      json.set! board_pin.id do
        json.partial! 'api/pins/pin', board_pin: board_pin
      end
    end
  end
end