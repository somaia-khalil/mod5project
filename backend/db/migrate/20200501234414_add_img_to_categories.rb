class AddImgToCategories < ActiveRecord::Migration[6.0]
  def change
    add_column :categories, :img, :string
  end
end

