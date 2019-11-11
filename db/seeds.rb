# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
guest = User.create( {id: 1, email: 'guest@gmail.com', first_name: 'Guest', last_name: 'of Honor', password:'password' })
mariko = User.create( {id: 2, email: 'mariko@gmail.com', first_name: 'Mariko', password:'password' })
james = User.create( {id: 3, email: 'james@gmail.com', first_name: 'James', last_name: 'Kai', password:'password' })

Board.destroy.all
board1 = Board.create({id: 1, name: 'Summer Vacation', category_id: 1, cover_id: 1, secret: false, user_id: guest.id})
board2 = Board.create({id: 2, name: 'Bali', category_id: 2, cover_id: 2, secret: false, user_id: guest.id})
board3 = Board.create({id: 3, name: 'Cheapest Travel Destination', category_id: 2, cover_id: 3, secret: false, user_id: james.id})
board4 = Board.create({id: 4, name: 'Favorite Store', category_id: 2, cover_id: 4, secret: false, user_id: guest.id})
board5 = Board.create({id: 5, name: 'LA Places to Visit', category_id: 3, cover_id: 5, secret: false, user_id: guest.id})
board6 = Board.create({id: 6, name: 'Indonesia Places to Visit 2019', category_id: 2, cover_id: 6, secret: false, user_id: guest.id})
board7 = Board.create({id: 7, name: 'Ireland Itinerary', category_id: 1, cover_id: 7, secret: false, user_id: mariko.id})
board8 = Board.create({id: 8, name: 'Summer Vacation', category_id: 1, cover_id: 1, secret: false, user_id: guest.id})
board9 = Board.create({id: 9, name: 'Bali', category_id: 2, cover_id: 2, secret: false, user_id: guest.id})
board10 = Board.create({id: 10, name: 'Expensive Travel Destination', category_id: 2, cover_id: 3, secret: false, user_id: james.id})
board11 = Board.create({id: 11, name: 'Favorite Book Store', category_id: 2, cover_id: 4, secret: false, user_id: guest.id})
board12 = Board.create({id: 12, name: 'San Diego Must Visit', category_id: 3, cover_id: 5, secret: false, user_id: guest.id})
board13 = Board.create({id: 13, name: 'Sydney Holiday 2020', category_id: 2, cover_id: 6, secret: false, user_id: guest.id})
board14 = Board.create({id: 14, name: 'Japan Itinerary', category_id: 1, cover_id: 7, secret: false, user_id: mariko.id})
board15 = Board.create({id: 15, name: 'Crotia Summer Vacation', category_id: 1, cover_id: 1, secret: false, user_id: guest.id})
board16 = Board.create({id: 16, name: 'Lombok', category_id: 2, cover_id: 2, secret: false, user_id: guest.id})
board17 = Board.create({id: 17, name: 'Board 17', category_id: 2, cover_id: 3, secret: false, user_id: james.id})
board18 = Board.create({id: 18, name: 'Board 18', category_id: 2, cover_id: 4, secret: false, user_id: guest.id})
board19 = Board.create({id: 19, name: 'Board 19', category_id: 3, cover_id: 5, secret: false, user_id: guest.id})
board20 = Board.create({id: 20, name: 'Board 20', category_id: 2, cover_id: 6, secret: false, user_id: guest.id})
board21 = Board.create({id: 21, name: 'Board 21', category_id: 1, cover_id: 7, secret: false, user_id: mariko.id})

Pin.destroy_all
pin1 = Pin.create({id: 1, name: 'MoCA', detail: 'World-class contemporary art museum', lat: 34.052240, lng: -118.243340, board_id: board5.id })
pin2 = Pin.create({id: 2, name: 'Universal Studios Hollywood', detail: 'Big movie-themed amusement park', lat: 34.1391749, lng: -118.3543047, board_id: board5.id })
pin3 = Pin.create({id: 3, name: 'Disneyland Park', detail: 'Famed amusement park', lat: 33.8136476, lng: -117.9197157, board_id: board5.id })
pin4 = Pin.create({id: 4, name: 'Hollywood Sign', detail: 'Iconic letters atop Mount Lee', lat: 34.1340991, lng: -118.3216523, board_id: board5.id })
pin5 = Pin.create({id: 5, name: 'Ubud', detail: 'Monkey forest, art museum and temples', lat: 43.2855508, lng: 5.3823162, board_id: board5.id })
pin6 = Pin.create({id: 6, name: 'Kuta', detail: 'Busy beach town with surfing', lat: -8.7263055, lng: 115.1775518, board_id: board5.id })
pin7 = Pin.create({id: 7, name: 'Denpasar', detail: '', lat: -8.6524973, lng: 115.2191175, board_id: board5.id })
pin8 = Pin.create({id: 8, name: 'Jimbaran', detail: 'Jimbaran bay', lat: -8.7891548, lng: 115.1630097, board_id: board5.id })

pin9 = Pin.create({id: 9, name: 'Walmart', detail: '', lat: 34.052240, lng: -118.243340, board_id: board4.id })
pin10 = Pin.create(id: 10, {name: 'Target', detail: '', lat: 34.1391749, lng: -118.3543047, board_id: board4.id })
pin11 = Pin.create({id: 11, name: 'Rail Road Vintage Shop', detail: '', lat: 33.8136476, lng: -117.9197157, board_id: board4.id })
pin12 = Pin.create({id: 12, name: 'Michael''s Consignment', detail: '', lat: 40.776550, lng: -73.961600, board_id: board4.id })
pin13 = Pin.create({id: 13, name: 'Hell''s Kitchen Flea Market', detail: '', lat: 40.756770, lng: -73.994460, board_id: board4.id })
pin14 = Pin.create({id: 14, name: 'New York Vintage', detail: '', lat: 40.744680, lng: -73.992520, board_id: board4.id })
pin15 = Pin.create({id: 15, name: 'Family Jewels Vintage Clothing', detail: '', lat: 40.743140, lng: -73.994030, board_id: board4.id })
pin16 = Pin.create({id: 16, name: 'Pippin Vintage Jewelry', detail: '', lat: 40.739560, lng: -73.996360, board_id: board4.id })

pin17 = Pin.create({id: 17, name: 'Home Depot', detail: '', lat: 0.0, lng: 0.0, board_id: board6.id })
pin18 = Pin.create({id: 18, name: 'Modsy', detail: '', lat: 34.1391749, lng: -118.3543047, board_id: board7.id })
pin19 = Pin.create({id: 19, name: 'Magnolia Home', detail: '', lat: 0.0, lng: 0.0, board_id: board8.id })
pin20 = Pin.create({id: 20, name: 'Lazboy', detail: '', lat: 34.1340991, lng: -118.3216523, board_id: board8.id })
pin21 = Pin.create({id: 21, name: 'Small Wood Home', detail: '', lat: 43.2855508, lng: 5.3823162, board_id: board9.id })
pin22 = Pin.create({id: 22, name: '', detail: '', lat: 0.0, lng: 0.0, board_id: board10.id })
pin23 = Pin.create({id: 23, name: '', detail: '', lat: 0.0, lng: 0.0, board_id: board14.id })
pin24 = Pin.create({id: 24, name: 'Living Spaces', detail: '', lat: -8.7891548, lng: 115.1630097, board_id: board15.id })