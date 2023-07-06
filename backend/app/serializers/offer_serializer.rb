class OfferSerializer < ActiveModel::Serializer
  attributes :id , :price , :amount , :product
  belongs_to :product
end

