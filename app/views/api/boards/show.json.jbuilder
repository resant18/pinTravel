json.user do
  json.partial! 'api/users/user', user: @board.user
end

json.board do
  json.partial! 'api/boards/board', board: @board
end

json.pins do
  @board.boards_pins.each do |board_pin|
    json.set! board_pin.id do
      json.partial! 'api/pins/pin', board_pin: board_pin
    end
  end
end

