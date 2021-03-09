# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require_relative '../.api_key.rb'
require 'net/http'
require 'pry'

Watchlist.destroy_all
Investment.destroy_all
User.destroy_all
Company.destroy_all

url = "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=#{FINNHUB_KEY}"
uri = URI(url)
response = Net::HTTP.get(uri)
companies = JSON.parse(response)

companies.each { |company| 
    Company.create(description: company["description"], symbol: company["symbol"], company_type: company["type"], currency: company["currency"])
}


user1 = User.create(username: "username", first_name: "David", last_name: "Josh")

# company1 = Company.create(description: "Game Stop", symbol: "GME", company_type: "stock", currency: "USD")
# company2 = Company.create(description: "Apple", symbol: "APPL", company_type: "stock", currency: "USD")
# company3 = Company.create(description: "Equinor", symbol: "EQNR", company_type: "stock", currency: "USD")

investment1 = Investment.create(user_id: user1.id, company_id: Company.all.ids[rand(Company.all.ids.length)], quantity: 1000)
investment2 = Investment.create(user_id: user1.id, company_id: Company.all.ids[rand(Company.all.ids.length)], quantity: 500)
investment3 = Investment.create(user_id: user1.id, company_id: Company.all.ids[rand(Company.all.ids.length)], quantity: 1)

watchlist1 = Watchlist.create(user_id: user1.id, company_id: Company.all.ids[rand(Company.all.ids.length)])
watchlist2 = Watchlist.create(user_id: user1.id, company_id: Company.all.ids[rand(Company.all.ids.length)])
watchlist3 = Watchlist.create(user_id: user1.id, company_id: Company.all.ids[rand(Company.all.ids.length)])


