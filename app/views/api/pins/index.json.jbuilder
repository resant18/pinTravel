@pins.each do |pin|
  json.pins do
    json.set! pin.board_id do
      json.partial! "api/pins/pin", board_pin: board_pin
    end
  end

  json.boards do
    json.set! pin.board_id do
      json.partial! "api/boards/board", board: board_pin.board
    end
  end

  json.users do
    json.set! board_pin.user.username do
      json.partial! "api/users/user", user: board_pin.user
    end
  end
end



