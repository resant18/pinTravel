# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create( {email: 'guest@gmail.com', first_name: 'Guest', last_name: 'of Honor', password:'password' })
mariko = User.create( {email: 'mariko@gmail.com', first_name: 'Mariko', password:'password' })
james = User.create( {email: 'james@gmail.com', first_name: 'James', last_name: 'Kai', password:'password' })

board1 = Board.create({name: 'Summer Vacation', category_id: 1, cover_id: 1, secret: false, user_id: guest.id})
board2 = Board.create({name: 'Bali', category_id: 2, cover_id: 2, secret: false, user_id: guest.id})
board3 = Board.create({name: 'Cheapest Travel Destination', category_id: 2, cover_id: 3, secret: false, user_id: james.id})
board4 = Board.create({name: 'Favorite Store', category_id: 2, cover_id: 4, secret: false, user_id: guest.id})
board5 = Board.create({name: 'LA Places to Visit', category_id: 3, cover_id: 5, secret: false, user_id: guest.id})
board6 = Board.create({name: 'Indonesia Places to Visit 2019', category_id: 2, cover_id: 6, secret: false, user_id: guest.id})
board7 = Board.create({name: 'Ireland Itinerary', category_id: 1, cover_id: 7, secret: false, user_id: mariko.id})
