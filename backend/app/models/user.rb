class User < ApplicationRecord
    has_many :investments
    has_many :companies, through: :investments
    has_many :watchlists
end
