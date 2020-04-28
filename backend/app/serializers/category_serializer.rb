class CategorySerializer < ActiveModel::Serializer
  attributes :id , :name, :categories
  has_many :categories
end
