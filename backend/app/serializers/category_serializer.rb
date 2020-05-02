class CategorySerializer < ActiveModel::Serializer
  attributes :id , :name, :categories , :img
  has_many :categories
end
