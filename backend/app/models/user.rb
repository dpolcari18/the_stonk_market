class User < ApplicationRecord
    has_many :investments
    has_many :companies, through: :investments
    has_many :watchlists
    validates :username, uniqueness: true, presence: true
    validates :first_name, :last_name, presence: true

end
