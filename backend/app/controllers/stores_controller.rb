class StoresController < ApplicationController
    skip_before_action :check_authentication, only: [:index, :show, :search, :category_index, :category_show, :offer_index,:main_categories, :offer_search]
    before_action :find_store, only: [:show, :category_show, :offer_index, :search, :offer_search]
    

    def index
        stores = Store.all 
        render json: stores
    end

    def show
        render json: @store
    end

#    def search
#        stores = Store.findByZipcode(params[:q])
#        render json:stores
#    end

    def search
        offers = @store.offers.joins(:product).where("products.name LIKE ?", "%#{params[:q]}%")
                                            #  .where(products: {name: params[:q]})
        render json: offers
    end

    def category_show
        category = Category.find_by(id: params[:category_id])
        offers = @store.getOffersByCategory(category)
        render json: offers
    end



    def category_index
        categories  = Category.mainCategories
        render json: categories
    end

    def category_show
        category = Category.find_by(id: params[:category_id])
        #offers = @store.getOffersByCategory(category)
        render json: category
    end

    def offer_index
        category = Category.find_by(id: params[:category_id])
        offers = @store.getOffersByCategory(category)
        render json: offers
    end

    def offer_search
        offer = @store.findOfferByBarcode(params[:barcode])
        render json: offer
    end

    private

    def find_store
        @store = Store.find(params[:id])
    end
end

