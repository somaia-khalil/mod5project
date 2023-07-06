class Offer < ApplicationRecord
    belongs_to :product
    belongs_to :store
    has_many :orders 
end

