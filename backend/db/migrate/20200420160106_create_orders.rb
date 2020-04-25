class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :offer_id
      t.integer :delivery_id
      t.integer :available
      t.integer :amount

      t.timestamps
    end
  end
end
