class AuthUserController < ApplicationController
    skip_before_action :check_authentication, only: [:create]
    
    def create
        user = User.find_by(email: params[:email])

        if user && user.authenticate(params[:password])
            render json: {email: user.email, token: encode_token({user_id: user.id})}
        else
            render json: {error: "Invalid username or Password"}
        end
    end
    
end
