class OffersController < ApplicationController
    skip_before_action :check_authentication, only: [:show]
    before_action :find_offer, only: [:show]

    def show
        render json: @offer
    end

    private

    def find_offer
        @offer = Offer.find(params[:id])
    end
end
