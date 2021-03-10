class Watchlist < ApplicationRecord
  belongs_to :user
  belongs_to :company
  validates_uniqueness_of :company_id, scope: :user_id, message: "cannot be followed twice."
end
