# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "username", first_name: "David", last_name: "Josh")

company1 = Company.create(description: "Game Stop", symbol: "GME", company_type: "stock", currency: "USD")

investment1 = Investment.create(user_id: user1.id, company_id: company1.id, quantity: 1000)

watchlist1 = Watchlist.create(user_id: user1.id, company_id: company1.id)