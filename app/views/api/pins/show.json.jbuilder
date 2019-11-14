json.pin do
  json.partial! 'api/pins/pin', board_pin: @board_pin
end

json.board do
  json.partial! 'api/boards/board', board: @board_pin.board
end

json.user do
  json.partial! 'api/users/user', user: @board_pin.user
end
