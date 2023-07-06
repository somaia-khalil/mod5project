class CreateStores < ActiveRecord::Migration[6.0]
  def change
    create_table :stores , id: false  do |t|
      t.primary_key :id
      t.string :name
      t.string :chain
      t.boolean :hasPharmacy
      t.string :street
      t.string :city
      t.string :county
      t.string :state_name
      t.string :zip

      t.timestamps
    end
  end
end

