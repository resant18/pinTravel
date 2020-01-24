json.user do
  json.partial! "api/users/user", user: @user    
end

json.boards do
  @user.boards.each do |board|
    json.set! board.id do
      json.partial! 'api/boards/board', board: board
    end
  end
end

json.pins do
  @user.board_pins.each do |board_pin|    
    json.set! board_pin.id do
      json.partial! 'api/pins/pin', board_pin: board_pin
    end
  end  
end

