class Store < ApplicationRecord
    has_many :offers 
    has_many :products , through: :offers

    def self.findByZipcode(zipcode)
        where(zip: zipcode)
    end

    def getOffersByCategory(category)
       Offer.where(store_id: self.id, product_id: category.product_ids)
    end
    
end