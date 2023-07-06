class AuthUserController < ApplicationController
    skip_before_action :check_authentication, only: [:create]
    
    def create
        user = User.find_by(email: auth_user_params[:email])

        if user && user.authenticate(auth_user_params[:password])
            render json: {email: user.email, token: encode_token({user_id: user.id})}
        else
            render json: {error: "Invalid username or Password"}
        end
    end


private

  def auth_user_params
    params.permit(:password, :password_confirmation, :email)
  end

    
end

