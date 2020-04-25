class ProductsController < ApplicationController
    skip_before_action :check_authentication, only: [:show]
    before_action :find_product, only: [:show]

    def show
        render json: @product
    end

    private

    def find_product
        @product = Product.find(params[:id])
    end
end
