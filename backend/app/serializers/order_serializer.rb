class OrderSerializer < ActiveModel::Serializer
  attributes :id , :available , :amount , :offer
  belongs_to :offer
end



