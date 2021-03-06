# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
guest = User.create( {id: 1, email: 'guest@gmail.com', username: 'guest', first_name: 'Guest', last_name: 'of Honor', password:'password' })
mariko = User.create( {id: 2, email: 'mariko@gmail.com', username: 'mariko', first_name: 'Mariko', password:'password' })
james = User.create( {id: 3, email: 'james@gmail.com', username: 'james', first_name: 'James', last_name: 'Kai', password:'password' })

Board.destroy_all
board1 = Board.create({id: 1, name: 'Summer Vacation', category_id: 1, cover_id: 1, secret: false, user_id: guest.id})
# board2 = Board.create({id: 2, name: 'Bali', category_id: 2, cover_id: 2, secret: false, user_id: guest.id})
# board3 = Board.create({id: 3, name: 'Cheapest Travel Destination', category_id: 2, cover_id: 3, secret: false, user_id: james.id})
# board4 = Board.create({id: 4, name: 'Favorite Store', category_id: 2, cover_id: 4, secret: false, user_id: guest.id})
# board5 = Board.create({id: 5, name: 'LA Places to Visit', category_id: 3, cover_id: 5, secret: false, user_id: guest.id})
# board6 = Board.create({id: 6, name: 'Indonesia Places to Visit 2019', category_id: 2, cover_id: 6, secret: false, user_id: guest.id})
# board7 = Board.create({id: 7, name: 'Ireland Itinerary', category_id: 1, cover_id: 7, secret: false, user_id: mariko.id})
# board8 = Board.create({id: 8, name: 'Summer Vacation 2019', category_id: 1, cover_id: 1, secret: false, user_id: guest.id})
# board9 = Board.create({id: 9, name: 'Bali in Summer', category_id: 2, cover_id: 2, secret: false, user_id: guest.id})
# board10 = Board.create({id: 10, name: 'Expensive Travel Destination', category_id: 2, cover_id: 3, secret: false, user_id: james.id})
# board11 = Board.create({id: 11, name: 'Favorite Book Store', category_id: 2, cover_id: 4, secret: false, user_id: guest.id})
# board12 = Board.create({id: 12, name: 'San Diego Must Visit', category_id: 3, cover_id: 5, secret: false, user_id: guest.id})
# board13 = Board.create({id: 13, name: 'Sydney Holiday 2020', category_id: 2, cover_id: 6, secret: false, user_id: guest.id})
# board14 = Board.create({id: 14, name: 'Japan Itinerary', category_id: 1, cover_id: 7, secret: false, user_id: mariko.id})
# board15 = Board.create({id: 15, name: 'Crotia Summer Vacation', category_id: 1, cover_id: 1, secret: false, user_id: guest.id})
# board16 = Board.create({id: 16, name: 'Lombok', category_id: 2, cover_id: 2, secret: false, user_id: guest.id})
# board17 = Board.create({id: 17, name: 'Board 17', category_id: 2, cover_id: 3, secret: false, user_id: james.id})
# board18 = Board.create({id: 18, name: 'Board 18', category_id: 2, cover_id: 4, secret: false, user_id: guest.id})
# board19 = Board.create({id: 19, name: 'Board 19', category_id: 3, cover_id: 5, secret: false, user_id: guest.id})
# board20 = Board.create({id: 20, name: 'Board 20', category_id: 2, cover_id: 6, secret: false, user_id: guest.id})
# board21 = Board.create({id: 21, name: 'Board 21', category_id: 1, cover_id: 7, secret: false, user_id: mariko.id})

Pin.destroy_all
pin1 = Pin.create({id: 1, lat: 34.052240, lng: -118.243340 })
# pin2 = Pin.create({id: 2, lat: 34.1391749, lng: -118.3543047 })
# pin3 = Pin.create({id: 3, lat: 33.8136476, lng: -117.9197157 })
# pin4 = Pin.create({id: 4, lat: 34.1340991, lng: -118.3216523 })
# pin5 = Pin.create({id: 5, lat: 43.2855508, lng: 5.3823162 })
# pin6 = Pin.create({id: 6, lat: -8.7263055, lng: 115.1775518 })
# pin7 = Pin.create({id: 7, lat: -8.6524973, lng: 115.2191175 })
# pin8 = Pin.create({id: 8, lat: -8.7891548, lng: 115.1630097 })

# pin9 = Pin.create({id: 9, lat: 34.052240, lng: -118.243340 })
# pin10 = Pin.create({id: 10, lat: 34.1391749, lng: -118.3543047 })
# pin11 = Pin.create({id: 11, lat: 33.8136476, lng: -117.9197157 })
# pin12 = Pin.create({id: 12, lat: 40.776550, lng: -73.961600 })
# pin13 = Pin.create({id: 13, lat: 40.756770, lng: -73.994460 })
# pin14 = Pin.create({id: 14, lat: 40.744680, lng: -73.992520 })
# pin15 = Pin.create({id: 15, lat: 40.743140, lng: -73.994030 })
# pin16 = Pin.create({id: 16, lat: 40.739560, lng: -73.996360 })

# pin17 = Pin.create({id: 17, lat: 0.0, lng: 0.0 })
# pin18 = Pin.create({id: 18, lat: 34.1391749, lng: -118.3543047 })
# pin19 = Pin.create({id: 19, lat: 0.0, lng: 0.0 })
# pin20 = Pin.create({id: 20, lat: 34.1340991, lng: -118.3216523 })
# pin21 = Pin.create({id: 21, lat: 43.2855508, lng: 5.3823162 })
# pin22 = Pin.create({id: 22, lat: 0.0, lng: 0.0 })
# pin23 = Pin.create({id: 23, lat: 0.0, lng: 0.0 })
# pin24 = Pin.create({id: 24, lat: -8.7891548, lng: 115.1630097 })

# pin25 = Pin.create({id: 25, lat: 34.052240, lng: -118.243340 })
# pin26 = Pin.create({id: 26, lat: 34.1391749, lng: -118.3543047 })
# pin27 = Pin.create({id: 27, lat: 33.8136476, lng: -117.9197157 })
# pin28 = Pin.create({id: 28, lat: 34.1340991, lng: -118.3216523 })
# pin29 = Pin.create({id: 29, lat: 43.2855508, lng: 5.3823162 })
# pin30 = Pin.create({id: 30, lat: -8.7263055, lng: 115.1775518 })
# pin31 = Pin.create({id: 31, lat: -8.6524973, lng: 115.2191175 })
# pin32 = Pin.create({id: 32, lat: -8.7891548, lng: 115.1630097 })

# pin33 = Pin.create({id: 33, lat: 34.052240, lng: -118.243340 })
# pin34 = Pin.create({id: 34, lat: 34.1391749, lng: -118.3543047 })
# pin35 = Pin.create({id: 35, lat: 33.8136476, lng: -117.9197157 })
# pin36 = Pin.create({id: 36, lat: 40.776550, lng: -73.961600 })
# pin37 = Pin.create({id: 37, lat: 40.756770, lng: -73.994460 })
# pin38 = Pin.create({id: 38, lat: 40.744680, lng: -73.992520 })
# pin39 = Pin.create({id: 39, lat: 40.743140, lng: -73.994030 })
# pin40 = Pin.create({id: 40, lat: 40.739560, lng: -73.996360 })

# pin41 = Pin.create({id: 41, lat: 0.0, lng: 0.0 })
# pin42 = Pin.create({id: 42, lat: 34.1391749, lng: -118.3543047 })
# pin43 = Pin.create({id: 43, lat: 0.0, lng: 0.0 })
# pin44 = Pin.create({id: 44, lat: 34.1340991, lng: -118.3216523 })
# pin45 = Pin.create({id: 45, lat: 43.2855508, lng: 5.3823162 })
# pin46 = Pin.create({id: 46, lat: 0.0, lng: 0.0 })
# pin47 = Pin.create({id: 47, lat: 0.0, lng: 0.0 })
# pin48 = Pin.create({id: 48, lat: -8.7891548, lng: 115.1630097 })
# pin49 = Pin.create({id: 49, lat: 43.2855508, lng: 5.3823162 })
# pin50 = Pin.create({id: 50, lat: 0.0, lng: 0.0 })
# pin51 = Pin.create({id: 51, lat: 0.0, lng: 0.0 })
# pin52 = Pin.create({id: 52, lat: -8.7891548, lng: 115.1630097 })
# pin53 = Pin.create({id: 53, lat: 0.0, lng: 0.0 })
# pin54 = Pin.create({id: 54, lat: 0.0, lng: 0.0 })
# pin55 = Pin.create({id: 55, lat: -8.7891548, lng: 115.1630097 })


BoardPin.destroy_all
bpin1 = BoardPin.create({id: 1, board_id: 1, pin_id: 1, name: 'Croatia Beautiful Neighborhood', detail: 'Croatia'})
# bpin2 = BoardPin.create({id: 2, board_id: 1, pin_id: 2, name: 'MoCA', detail: 'World-class contemporary art museum'})
# bpin3 = BoardPin.create({id: 3, board_id: 1, pin_id: 3, name: 'Elephant riding', detail: ''})
# bpin4 = BoardPin.create({id: 4, board_id: 1, pin_id: 4, name: 'Jungle Activity', detail: ''})
# bpin5 = BoardPin.create({id: 5, board_id: 10, pin_id: 2, name: 'MoCA', detail: 'World-class contemporary art museum'})
# bpin6 = BoardPin.create({id: 6, board_id: 10, pin_id: 3, name: 'Elephant riding', detail: ''})
# bpin7 = BoardPin.create({id: 7, board_id: 9, pin_id: 5, name: 'Ubud', detail: 'Monkey forest, art museum and temples'})
# bpin8 = BoardPin.create({id: 8, board_id: 9, pin_id: 6, name: 'Croatia House View near water', detail:''})
# bpin9 = BoardPin.create({id: 9, board_id: 9, pin_id: 7, name: 'Denpasar', detail: 'Bali capital city'})
# bpin10 = BoardPin.create({id: 10, board_id: 9, pin_id: 8, name: 'Paris tower', detail: ''})
# bpin11 = BoardPin.create({id: 11, board_id: 8, pin_id: 3, name: 'Elephant riding', detail: ''})
# bpin12 = BoardPin.create({id: 12, board_id: 8, pin_id: 4, name: 'Jungle Activity', detail: ''})
# bpin13 = BoardPin.create({id: 13, board_id: 8, pin_id: 2, name: 'MoCA', detail: 'World-class contemporary art museum'})
# bpin14 = BoardPin.create({id: 14, board_id: 8, pin_id: 1, name: 'Croatia Beautiful Neighborhood', detail: 'Croatia'})
# bpin15 = BoardPin.create({id: 15, board_id: 8, pin_id: 5, name: 'Ubud', detail: 'Monkey forest, art museum and temples'})
# bpin16 = BoardPin.create({id: 16, board_id: 4, pin_id: 9, name: 'Houses view near water'})
# bpin17 = BoardPin.create({id: 17, board_id: 4, pin_id: 10, name: 'Ayodya Hoteli', detail: 'Hotel Bali'})
# bpin18 = BoardPin.create({id: 18, board_id: 4, pin_id: 11, name: 'Golden Gate Bridge', detail: 'San Francisco'})
# bpin19 = BoardPin.create({id: 19, board_id: 4, pin_id: 12, name: 'Michael''s Consignment', detail: ''})
# bpin20 = BoardPin.create({id: 20, board_id: 4, pin_id: 13, name: 'Windmill', detail: ''})
# bpin21 = BoardPin.create({id: 21, board_id: 4, pin_id: 14, name: 'Tulip garden view', detail: ''})
# bpin22 = BoardPin.create({id: 22, board_id: 4, pin_id: 15, name: 'Chinatown', detail: ''})
# bpin23 = BoardPin.create({id: 23, board_id: 4, pin_id: 16, name: 'Croatia view', detail: ''})
# bpin24 = BoardPin.create({id: 24, board_id: 4, pin_id: 17, name: 'Paris tower', detail: ''})
# bpin25 = BoardPin.create({id: 25, board_id: 4, pin_id: 47, name: 'Pier Import', detail: ''})
# bpin26 = BoardPin.create({id: 26, board_id: 4, pin_id: 49, name: 'Nordstorm', detail: ''})
# bpin27 = BoardPin.create({id: 27, board_id: 11, pin_id: 15, name: 'Chinatown', detail: ''})
# bpin28 = BoardPin.create({id: 28, board_id: 11, pin_id: 16, name: 'Croatia view', detail: ''})
# bpin29 = BoardPin.create({id: 29, board_id: 11, pin_id: 17, name: 'Paris tower', detail: ''})
# bpin30 = BoardPin.create({id: 30, board_id: 17, pin_id: 17, name: 'Paris tower', detail: ''})
# bpin31 = BoardPin.create({id: 31, board_id: 18, pin_id: 18, name: 'Yosemite Lake', detail: ''})
# bpin32 = BoardPin.create({id: 32, board_id: 19, pin_id: 19, name: 'Kuta', detail: 'Busy beach town with surfing'})
# bpin33 = BoardPin.create({id: 33, board_id: 18, pin_id: 20, name: 'Lazboy', detail: ''})
# bpin34 = BoardPin.create({id: 34, board_id: 19, pin_id: 21, name: 'Yosemite Dome', detail: ''})
# bpin35 = BoardPin.create({id: 35, board_id: 19, pin_id: 22, name: 'Kayaking', detail: ''})
# bpin36 = BoardPin.create({id: 36, board_id: 15, pin_id: 25, name: 'Croatia ', detail: ''})
# bpin37 = BoardPin.create({id: 37, board_id: 16, pin_id: 26, name: 'Amazing Lombok', detail: ''})
# bpin38 = BoardPin.create({id: 38, board_id: 11, pin_id: 27, name: 'Favourite Bookstore', detail: ''})
# bpin39 = BoardPin.create({id: 39, board_id: 13, pin_id: 28, name: 'Sydney Opera House', detail: ''})
# bpin40 = BoardPin.create({id: 40, board_id: 16, pin_id: 29, name: 'Lombok Underwater', detail: ''})
# bpin41 = BoardPin.create({id: 41, board_id: 13, pin_id: 30, name: 'Sydney 3 Days', detail: ''})
# bpin42 = BoardPin.create({id: 42, board_id: 16, pin_id: 31, name: 'Lombok Beach', detail: ''})
# bpin43 = BoardPin.create({id: 43, board_id: 1, pin_id: 32, name: 'Cup Noodle Museum', detail: 'Yokohama'})
# bpin44 = BoardPin.create({id: 44, board_id: 15, pin_id: 33, name: 'Perfect Croatia', detail: ''})
# bpin45 = BoardPin.create({id: 45, board_id: 15, pin_id: 34, name: 'Crotia Stairs', detail: ''})
# bpin46 = BoardPin.create({id: 46, board_id: 14, pin_id: 35, name: 'Awesome Things in Yokohama', detail: ''})
# bpin47 = BoardPin.create({id: 47, board_id: 16, pin_id: 36, name: 'The Best Thing in Yokohama', detail: ''})
# bpin48 = BoardPin.create({id: 48, board_id: 13, pin_id: 37, name: 'Gili Island', detail: 'Lombok Best Beach'})
# bpin49 = BoardPin.create({id: 49, board_id: 14, pin_id: 38, name: 'Luna Park', detail: 'Kids Amusement Park'})
# bpin50 = BoardPin.create({id: 50, board_id: 14, pin_id: 39, name: 'Yokohama Parade', detail: ''})
# bpin51 = BoardPin.create({id: 51, board_id: 13, pin_id: 40, name: 'Kangaroo', detail: 'Best place to see kangaroo'})
# bpin52 = BoardPin.create({id: 52, board_id: 13, pin_id: 41, name: 'Best Syndey', detail: ''})
# bpin53 = BoardPin.create({id: 53, board_id: 15, pin_id: 42, name: 'Breathtaking Croatia', detail: ''})
# bpin54 = BoardPin.create({id: 54, board_id: 14, pin_id: 43, name: 'Bookstore', detail: ''})
# bpin55 = BoardPin.create({id: 55, board_id: 13, pin_id: 44, name: 'Ultimate Sydney Bucket List', detail: ''})
# bpin56 = BoardPin.create({id: 56, board_id: 16, pin_id: 45, name: 'Stunning Lombok Beach', detail: ''})
# bpin57 = BoardPin.create({id: 57, board_id: 14, pin_id: 46, name: 'Japanese Cute Donut', detail: ''})
# bpin58 = BoardPin.create({id: 58, board_id: 17, pin_id: 47, name: 'Pier Import', detail: ''})
# bpin59 = BoardPin.create({id: 59, board_id: 5, pin_id: 48, name: '20 Things to do in LA', detail: ''})
# bpin60 = BoardPin.create({id: 60, board_id: 18, pin_id: 49, name: 'Nordstorm', detail: ''})
# bpin61 = BoardPin.create({id: 61, board_id: 5, pin_id: 50, name: 'Downtown LA', detail: ''})
# bpin62 = BoardPin.create({id: 62, board_id: 4, pin_id: 51, name: 'Marby Elm', detail: ''})
# bpin63 = BoardPin.create({id: 63, board_id: 4, pin_id: 52, name: 'Cool Store', detail: ''})
# bpin64 = BoardPin.create({id: 64, board_id: 6, pin_id: 53, name: 'Hindu Temple', detail: ''})
# bpin65 = BoardPin.create({id: 65, board_id: 6, pin_id: 54, name: 'Yogyakarta', detail: ''})
# bpin66 = BoardPin.create({id: 66, board_id: 6, pin_id: 55, name: 'Komodo Island', detail: ''})
# bpin67 = BoardPin.create({id: 67, board_id: 2, pin_id: 6, name: 'Croatia House View near water', detail:''})
