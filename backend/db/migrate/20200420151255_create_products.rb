class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products, id: false do |t|
      t.primary_key :id
      t.string :name
      t.string :description
      t.string :brand
      t.integer :size_value
      t.string :size_unit
      t.string :countryOfOrigin
      t.string :disclaimer
      t.boolean :isRaw
      t.boolean :isMsgFree
      t.boolean :isAntibioticFree
      t.boolean :isCornFree
      t.boolean :isLactoovoVegetarian
      t.boolean :isFairtrade
      t.boolean :isIrradiated
      t.boolean :isCertifiedHumane
      t.boolean :isWildCaught
      t.string :alcohol
      t.string :diets
      t.boolean :hasNoAddedHormones
      t.string :additives
      t.string :allergens
      t.string :ingredients
      t.string :nutrients
      t.string :preparation
      t.string :servings
      t.string :tradeIdentifiers_image
      t.string :tradeIdentifiers_barcode
      t.string :category_id

      t.timestamps
    end
  end
end
