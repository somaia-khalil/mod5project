# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_01_234414) do

  create_table "categories", id: false, force: :cascade do |t|
    t.string "id", null: false
    t.string "name"
    t.integer "level"
    t.string "category_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "img"
    t.index ["id"], name: "index_categories_on_id", unique: true
  end

  create_table "customers", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "deliveries", force: :cascade do |t|
    t.integer "shopper_id"
    t.integer "customer_id"
    t.string "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "offers", force: :cascade do |t|
    t.integer "product_id"
    t.integer "store_id"
    t.integer "price"
    t.integer "amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "orders", force: :cascade do |t|
    t.integer "offer_id"
    t.integer "delivery_id"
    t.integer "available"
    t.integer "amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "brand"
    t.integer "size_value"
    t.string "size_unit"
    t.string "countryOfOrigin"
    t.string "disclaimer"
    t.boolean "isRaw"
    t.boolean "isMsgFree"
    t.boolean "isAntibioticFree"
    t.boolean "isCornFree"
    t.boolean "isLactoovoVegetarian"
    t.boolean "isFairtrade"
    t.boolean "isIrradiated"
    t.boolean "isCertifiedHumane"
    t.boolean "isWildCaught"
    t.string "alcohol"
    t.string "diets"
    t.boolean "hasNoAddedHormones"
    t.string "additives"
    t.string "allergens"
    t.string "ingredients"
    t.string "nutrients"
    t.string "preparation"
    t.string "servings"
    t.string "tradeIdentifiers_image"
    t.string "tradeIdentifiers_barcode"
    t.string "category_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "shoppers", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "stores", force: :cascade do |t|
    t.string "name"
    t.string "chain"
    t.boolean "hasPharmacy"
    t.string "street"
    t.string "city"
    t.string "county"
    t.string "state_name"
    t.string "zip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "password_digest"
    t.string "email"
    t.string "zipcode"
    t.string "phone"
    t.string "street"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end

