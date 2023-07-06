class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories, id: false do |t|
      t.string :id, null: false
      t.string :name
      t.integer :level
      t.string :category_id

      t.timestamps
    end
    add_index :categories, :id, unique: true
  end
end

