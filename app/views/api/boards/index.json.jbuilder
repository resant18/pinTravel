@boards.each do |board|
  json.set! board.id do
    json.extract! board, :id, :name, :user_id
    # json.pin_count board.pins.count
    # json.pins_by_board board.pins
  end
end
