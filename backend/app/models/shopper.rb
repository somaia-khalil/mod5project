class Shopper < ApplicationRecord
    belongs_to :user 
    has_many :deliveries
    has_many :customers, through: :deliveries
end
