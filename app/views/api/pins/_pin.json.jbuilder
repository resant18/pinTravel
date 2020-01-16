
# json.extract! board_pin, :id, :link_url, :lat, :lng
json.extract! board_pin, :id, :board_id, :pin_id
json.extract! board_pin.pin, :name, :link_url, :lat, :lng
# json.pictureUrl url_for(pinjoin.pin.picture)
