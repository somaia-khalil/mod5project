class DeliveriesController < ApplicationController

    before_action :find_deliveries, only: [:index]

    def index
        render json: @deliveries
    end

   def create
        delivery = Delivery.create!(customer_id: @user.customer.id, shopper_id: Shopper.all.first.id) #TODO
        params[:orders].each do |offer|
           Order.create!(offer_id: offer["id"].to_i , amount: offer["amount"].to_i, delivery_id: delivery.id)
        end
      #byebug
      render json: {success: "delivery created"}
    end

    private

    def find_deliveries
        @deliveries = Delivery.where(customer: @user.customer.id)
    end
end



