class Company < ApplicationRecord
    has_many :investments
    has_many :users, through: :investments
    has_many :watchlists
end
