class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users ,optional: true do |t|
      t.string :firstname
      t.string :lastname
      t.string :password_digest
      t.string :email
      t.string :zipcode
      t.string :phone
      t.string  :street
      t.timestamps
    end
  end
end

