Store.destroy_all 
Product.destroy_all
Category.destroy_all
Offer.destroy_all
Order.destroy_all
Delivery.destroy_all
Shopper.destroy_all
Customer.destroy_all
User.destroy_all



# fetch data to local mock API
def fetch(route)
    (HTTParty.get("http://localhost:3000#{route}")).parsed_response
end
###################################################################################################
def locations
    fetch("/locations")
end 
###################################################################################################
def prices
    fetch("/prices")
end 
###################################################################################################
# products
###################################################################################################
# get all product 

def seed_products()
    fetch("/products").first(200).each do |product|
        Product.create!(id:product["sku"], 
        name: product["name"], 
        description:product["descriptions"]["consumer"],
        brand: product["brand"],
        size_value: product["size"]["value"].to_i,
        size_unit: product["size"]["unitOfMeasure"],
        countryOfOrigin:product["countryOfOrigin"],
        disclaimer: product["disclaimer"],
        isRaw: to_bool(product["isRaw"]),
        isMsgFree: to_bool(product[ "isMsgFree"]),
        isAntibioticFree: to_bool(product["isAntibioticFree"]),
        isCornFree: to_bool(product["isCornFree"]),
        isLactoovoVegetarian: to_bool(product["isLactoovoVegetarian"]),
        isFairtrade: to_bool(product["isFairtrade"]),
        isIrradiated: to_bool(product["isIrradiated"]),
        isCertifiedHumane: to_bool(product["isCertifiedHumane"]),
        isWildCaught: to_bool(product["isWildCaught"]),
        hasNoAddedHormones: to_bool(product["hasNoAddedHormones"]),
        alcohol:product["alcohol"].to_json,
        diets:product["diets"].to_json,
        additives: product["additives"].to_json,
        allergens: product["allergens"].to_json,
        ingredients: product["ingredients"].to_json,
        nutrients: product["nutrients"].to_json,
        preparation: product[ "preparation"][ "instructions"],
        servings: product["servings"]["suggestion"],
        tradeIdentifiers_image: take_first_img(take_first_entry(product["tradeIdentifiers"],"images")),
        tradeIdentifiers_barcode: take_first_entry(take_first_entry(product["tradeIdentifiers"],"barcodes"),"barcode"),
        category_id: get_product_category(product)
      )
    end 
 end

 def get_product_category(product)
    link = product["_links"].find do|link|
        link["rel"] == "category"
    end
    link["href"].split('/')[3].split('?')[0]
 end 

 def take_first_entry(entry,key)
    if  entry && entry.length > 0 && entry[0].key?(key)
    entry[0][key]
    end
 end 

 def take_first_img(tradeIdentifiers)
    
    if tradeIdentifiers && tradeIdentifiers.length > 0  
        tradeIdentifiers[0]
    end
 end 

###################################################################################################
# stores
###################################################################################################
# get all stores
def seed_stores()
   fetch("/stores").last(2).each do |store| 
    Store.create!(id: store["number"].to_i,
        name: store["name"],
        chain: store["type"],
        hasPharmacy: to_bool(store["hasPharmacy"]),
        street: store["address"]["street"],
        city: store["address"]["city"],
        county: store["address"]["county"],
        state_name:store["address"]["state"]["name"],
        zip:store["address"]["zip"])
   end 
end

def to_bool(string)
    string == "true"
end 
###################################################################################################
# categories
###################################################################################################
# get all categories
def seed_categories()
   fetch("/categories").sort {|a,b| a["type"] <=> b["type"]}.each do |category|
    Category.create!(id: category["id"],
        name: category["name"],
        level: category["type"].to_i,
        category_id: getParentId(category["id"],category["type"]))
   end 
end

def getParentId(id , level)
    result = id.split("-")
    case level.to_i
    when 1
       nil
    when 2 
      result[0]
    when 3 
      result[0] +"-"+ result[1] 
    end       
end 

seed_stores()
seed_categories()
seed_products()
###################################################################################################
# offers
###################################################################################################
# get all offers 
Product.all.each do |product| 
    Store.all.each do |store|
        Offer.create!(product_id: product.id , store_id: store.id, price: rand(10)+2 , amount: rand(50))
    end 
end 

###################################################################################################
# users
###################################################################################################


u1 = User.create!(firstname: "Florian",lastname: "Fey", password: "123456789", email: "feyf@wwu.de",zipcode: "07054",phone:"8343448324", street:"456 main road"  )
u2 = User.create!(firstname: "Sumaya",lastname: "Khalil", password: "12345", email: "sumaya_khair@live.com",zipcode: "77490",phone:"8343447824", street:"2356 fry road"  )
u3 = User.create!(firstname: "David",lastname: "Mark", password: "123", email: "david_mark@gmail.com",zipcode: "13090",phone:"8343448324", street:"7272 Moss Creek Cir"  )

###################################################################################################
# shopper 
###################################################################################################

s1 = Shopper.create!(user_id: u1.id )
s2 = Shopper.create!(user_id: u3.id )

###################################################################################################
# Customer
###################################################################################################


c1 = Customer.create!(user_id: u2.id )
c2 = Customer.create!(user_id: u3.id )
###################################################################################################
# delivery
###################################################################################################

d1 = Delivery.create!(shopper_id: s1.id ,customer_id:c1.id )
d2 = Delivery.create!(shopper_id: s1.id ,customer_id:c2.id )
###################################################################################################
# order
###################################################################################################

Order.create!(offer_id: Offer.all.first.id,delivery_id: d1.id, available: 5 , amount: 3)

# #####################
# Bakery
# https://assets-prd-weg.unataops.com/web/category_tile/561.jpg

# Bread, Fresh Baked
# https://assets-prd-weg.unataops.com/web/category_tile/907.jpg

# Bread, Packaged
# https://assets-prd-weg.unataops.com/web/category_tile/562.jpg

# Breakfast
# https://assets-prd-weg.unataops.com/web/category_tile/c54f3ca1c8fbc7f031efb6fc20d22ae111cd68e2.jpg
# Cakes
# https://assets-prd-weg.unataops.com/web/category_tile/1661.jpg

# Cookies
# https://assets-prd-weg.unataops.com/web/category_tile/1662.jpg

# Desserts & Pastries
# https://assets-prd-weg.unataops.com/web/category_tile/566.jpg

# Rolls
# https://assets-prd-weg.unataops.com/web/category_tile/564.jpg

# Stuffing, Pitas, Flatbreads, Wraps & Pizza Shells
# https://assets-prd-weg.unataops.com/web/category_tile/563.jpg




# ###################
# Seafood
# https://assets-prd-weg.unataops.com/web/category_tile/270a0e2f92800f555dac6a44b5461a4fcede1f4c.jpg

# Crab and Lobster
# https://assets-prd-weg.unataops.com/web/category_tile/ac9c4f4bf3a837b0cbf01d6428c7fd98707b9991.jpg

# Fresh Seafood
# https://assets-prd-weg.unataops.com/web/category_tile/3cf0390619b00b082bcbf6d66df891c4d6b97827.jpg

# Frozen Shrimp & Seafood
# https://assets-prd-weg.unataops.com/web/category_tile/5571ea7564207926366bbc1f8d8d704c57d56dc1.jpg

# Ready to Cook Seafood
# https://assets-prd-weg.unataops.com/web/category_tile/00a00b0f1c02956f69ec051a0ae795e939122660.jpg






# #################
# Meat
# https://assets-prd-weg.unataops.com/web/category_tile/843f1c438bb400c2557883715116c455a72d14fa.jpg

# Beef
# https://assets-prd-weg.unataops.com/web/category_tile/650e70a2009f8e56cad2993a9a2fb26169bd4d78.jpg

# Sausage
# https://assets-prd-weg.unataops.com/web/category_tile/184be8334677deff633b28fa7744aeb61d8135b4.jpg

# Chicken
# https://assets-prd-weg.unataops.com/web/category_tile/4aab7f56cf56dec6fbf9eb5175a0b10ac1f3ec35.jpg

# Pork
# https://assets-prd-weg.unataops.com/web/category_tile/b2b4ce8fab542c7ca0e2c00cc7301721b4a2306e.jpg

# EZ Meals
# https://assets-prd-weg.unataops.com/web/category_tile/6944.jpg

# Bacon
# https://assets-prd-weg.unataops.com/web/category_tile/1f5bbe639541626b7bcdac908ad160b574d471bd.jpg

# Ground Meat
# https://assets-prd-weg.unataops.com/web/category_tile/1f8f51c5e18fade80850d4a11754a1d7d26cf4e9.jpg

# Lamb, Veal, & Other Meat
# https://assets-prd-weg.unataops.com/web/category_tile/b1bea2081f13e80d9b005defc2b4a82658dfae13.jpg

# Halal Meat

# Turkey
# https://assets-prd-weg.unataops.com/web/category_tile/cf381dc2d3b51c8d063c5126ea8ba9486bdb228c.jpg

# Stir Fry & Thin Cut Meat

# Ham
# https://assets-prd-weg.unataops.com/web/category_tile/0a6d980fbd042dd0a8952cd9e481eb419878d996.jpg





# ###################
# Produce
# https://assets-prd-weg.unataops.com/web/category_tile/601.jpg

# Vegetables
# https://assets-prd-weg.unataops.com/web/category_tile/606.jpg

# Fruit
# https://assets-prd-weg.unataops.com/web/category_tile/6946.jpg





# #########################
# Prepared Foods
# https://assets-prd-weg.unataops.com/web/category_tile/6642.jpg

# Prepared Meals
# https://assets-prd-weg.unataops.com/web/category_tile/6961.jpg

# Pizza & Wings
# https://assets-prd-weg.unataops.com/web/category_tile/6602.jpg

# Sushi
# https://assets-prd-weg.unataops.com/web/category_tile/6796.jpg

# Asian
# https://assets-prd-weg.unataops.com/web/category_tile/6962.jpg

# Subs & Sandwiches
# https://assets-prd-weg.unataops.com/web/category_tile/6615.jpg

# Salads
# https://assets-prd-weg.unataops.com/web/category_tile/6963.jpg

# Soups
# https://assets-prd-weg.unataops.com/web/category_tile/6645.jpg




# ####################
# Cheese
# https://assets-prd-weg.unataops.com/web/category_tile/917.jpg

# Goat & Sheep
# src="https://assets-prd-weg.unataops.com/web/category_tile/6981.jpg"

# Accompaniments
# https://assets-prd-weg.unataops.com/web/category_tile/6984.jpg

# Blue Cheese
# https://assets-prd-weg.unataops.com/web/category_tile/922.jpg

# Antipasto
# https://assets-prd-weg.unataops.com/web/category_tile/765550d995f47af01ee98447c33bd8e3ec1f6d37.jpg

# Italian Cheese
# https://assets-prd-weg.unataops.com/web/category_tile/930.jpg

# Fresh Cheese & Butters
# https://assets-prd-weg.unataops.com/web/category_tile/dd69950fa23db8951ee18c2acf2d0dd21c306b53.jpg

# Snacking & Entertaining
# https://assets-prd-weg.unataops.com/web/category_tile/6983.jpg

# Cave-Ripened Cheese
# https://assets-prd-weg.unataops.com/web/category_tile/41613beaba0857f5bd202e479f41c269b1b1d142.jpg

# Cheddar, Gouda, Swiss & more
# https://assets-prd-weg.unataops.com/web/category_tile/6980.jpg

# Feta Cheese
# https://assets-prd-weg.unataops.com/web/category_tile/921.jpg





# ##########################
# Other Departments
# https://assets-prd-weg.unataops.com/web/category_tile/6942.jpg

# Pet Supplies
# https://assets-prd-weg.unataops.com/web/category_tile/678.jpg

# Bulk Foods
# https://assets-prd-weg.unataops.com/web/category_tile/1021.jpg

# Kosher
# https://assets-prd-weg.unataops.com/web/category_tile/575.jpg

# Deli
# https://assets-prd-weg.unataops.com/web/category_tile/731.jpg

# Frozen Foods
# https://assets-prd-weg.unataops.com/web/category_tile/651.jpg

# Grocery
# https://assets-prd-weg.unataops.com/web/category_tile/629.jpg

# Floral
# https://assets-prd-weg.unataops.com/web/category_tile/871.jpg


# Beverages
# https://assets-prd-weg.unataops.com/web/category_tile/654.jpg

# Baby
# https://assets-prd-weg.unataops.com/web/category_tile/638.jpg

# Health and Wellness
# https://assets-prd-weg.unataops.com/web/category_tile/6681.jpg

# Dairy
# https://assets-prd-weg.unataops.com/web/category_tile/577.jpg

# Nature's Marketplace
# https://assets-prd-weg.unataops.com/web/category_tile/579.jpg




# ########

# Wine, Beer & Spirits
# https://assets-prd-weg.unataops.com/web/category_tile/6941.jpg

# Wine
# src="https://assets-prd-weg.unataops.com/web/category_tile/6657.jpg"

# Beer Shop
# https://assets-prd-weg.unataops.com/web/category_tile/2521.jpg

# Spirits
# src="https://assets-prd-weg.unataops.com/web/category_tile/6657.jpg"









 

