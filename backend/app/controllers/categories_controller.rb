class CategoriesController < ApplicationController
    before_action :find_action, only: [:show, :edit, :update, :destroy]

    def index
        actions = Action.all 
    end

    def show
        render json: action
    end

    def new

    end

    def create
        action = Action.create(action_params)
        render json: action
    end

    def edit

    end

    def update
        action.update(action_params)
        render json: action
    end

    def destroy
        action.destroy
    end

    private

    def action_params
        params.require(:action).permit(:time)
    end

    def find_action
        action = Action.find(params[:id])
    end
end
