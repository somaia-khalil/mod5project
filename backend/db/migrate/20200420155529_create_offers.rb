class CreateOffers < ActiveRecord::Migration[6.0]
  def change
    create_table :offers do |t|
      t.integer :product_id
      t.integer :store_id
      t.integer :price
      t.integer :amount

      t.timestamps
    end
  end
end

