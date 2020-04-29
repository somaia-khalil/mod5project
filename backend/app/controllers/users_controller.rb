class UsersController < ApplicationController
    skip_before_action :check_authentication, only: [:create]
    def index
        @users = User.all
        render json: @users 
    end 

    def hello
        render json: { hey:1 ,heyy:2}
    end 
  # Sign Up
  def create
   @user = User.new(user_params)
    if @user.valid?
      @user.save
      Customer.create!(user: @user)
      Shopper.create!(user: @user)    #TODO all users both roles ??
      render json: @user, status: :created
    else
      render json: {error: "Failed to create a user"}, status: :not_acceptable
    end
  end

  private

  def user_params
    params.permit(:password, :password_confirmation, :email)
  end
end



