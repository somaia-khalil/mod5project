class Customer < ApplicationRecord
    belongs_to :user 
    has_many :deliveries
    has_many :shoppers, through: :deliveries
end
