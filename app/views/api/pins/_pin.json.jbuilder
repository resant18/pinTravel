json.extract! board_pin, :id, :board_id, :pin_id, :title, :detail, :user
json.extract! board_pin.pin, :link_url, :lat, :lng
json.pictureUrl url_for(board_pin.pin.picture)
