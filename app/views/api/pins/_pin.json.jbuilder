
# json.extract! board_pin, :id, :link_url, :lat, :lng
json.extract! board_pin, :id, :board_id, :pin_id, :title, :detail
json.extract! board_pin.pin, :link_url, :lat, :lng
# json.pictureUrl url_for(pinjoin.pin.picture)
