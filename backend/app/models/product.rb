class Product < ApplicationRecord
    belongs_to :category 
    has_many :offers 
    has_many :stores , through: :offers 
end
