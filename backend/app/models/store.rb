class Store < ApplicationRecord
    has_many :offers 
    has_many :products , through: :offers

    def self.findByZipcode(zipcode)
        where(zip: zipcode)
    end

    def getOffersByCategory(category)
       Offer.where(store_id: self.id, product_id: category.product_ids)
    end

  def findOfferByBarcode(barcode)
       product = Product.find_by(tradeIdentifiers_barcode: barcode)
       if product
         Offer.find_by(store_id: self.id , product_id: product.id)
       else
         nil
       end
    end
    



    
end


