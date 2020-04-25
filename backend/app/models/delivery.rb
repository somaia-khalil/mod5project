class Delivery < ApplicationRecord
    belongs_to :customer
    belongs_to :shopper
    has_many :orders
    has_many :offers , through: :orders
end
