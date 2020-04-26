class Category < ApplicationRecord
    self.primary_key = 'id'
    belongs_to :category , optional: true
    has_many :categories
    has_many :products 
    has_many :offers, through: :products

    def self.mainCategories
       where(level: 1)
    end
end
