class DeliverySerializer < ActiveModel::Serializer
  attributes :id , :status, :shopper , :customer , :orders
  belongs_to :shopper
  belongs_to :customer
  has_many :orders
end
