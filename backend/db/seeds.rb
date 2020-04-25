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
    fetch("/products").each do |product|
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
   fetch("/stores").each do |store| 
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










 
