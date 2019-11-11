class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by(email: params[:user][:email]) 

        if @user
            @user = User.find_by_credentials(
                params[:user][:email],
                params[:user][:password]
            )

            if @user
                login(@user)
                render "api/users/show"
            else
                render json: { password: ["The password you entered is incorrect. Try again."] }, status: 401
            end
        else 
            render json: { email: ["The email you entered does not belong to any account."] }, status: 401
        end
    end

    def destroy
        @user = current_user
            if @user
            logout
            render "api/users/show"
        else
            render json: ["Nobody signed in"], status: 404
        end
    end
end
