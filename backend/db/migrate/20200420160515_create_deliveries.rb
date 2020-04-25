class CreateDeliveries < ActiveRecord::Migration[6.0]
  def change
    create_table :deliveries do |t|
      t.integer :shopper_id
      t.integer :customer_id
      t.string :status

      t.timestamps
    end
  end
end
