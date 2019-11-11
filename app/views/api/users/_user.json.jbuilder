json.extract! user, :id, :email, :username, :first_name, :last_name, :board_ids
# json.boards user.boards.each do |board|
#     json.extract! board, :id, :name
#     # json.pincount board.pins.count
# end