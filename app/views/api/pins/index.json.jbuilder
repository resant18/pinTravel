json.pins do
  @pins.each do |pin|  
    pin.board_pins.each do |board_pin|
      json.set! board_pin.pin_id do
        json.partial! "api/pins/pin", board_pin: board_pin
      end
    end
  end
end

json.boards do
  @pins.each do |pin|
    pin.board_pins.each do |board_pin|
      json.set! board_pin.board_id do
        json.partial! "api/boards/board", board: board_pin.board
      end
    end
  end
end

json.users do
  json.set! board_pins.user.username do
    json.partial! 'api/users/user', user: board_pins.user
  end
end



