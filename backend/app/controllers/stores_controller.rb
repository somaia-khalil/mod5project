class StoresController < ApplicationController
    skip_before_action :check_authentication, only: [:index, :show, :search, :category_index, :category_show]
    before_action :find_store, only: [:show, :category_show]
    

    def index
        stores = Store.all 
        render json: stores
    end

    def show
        render json: @store
    end

    def search
        stores = Store.findByZipcode(params[:q])
        render json:stores
    end

    def category_show
        category = Category.find_by(id: params[:category_id])
        offers = @store.getOffersByCategory(category)
        render json: {category: category , offers: offers}
    end

    def category_index
        categories  = Category.all
        render json: categories
    end

    private

    def find_store
        @store = Store.find(params[:id])
    end
end
