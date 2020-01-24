class Api::UsersController < ApplicationController
    def create    
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: { signup: @user.errors.full_messages }, status: 422
        end
    end
    
    def show   
        @user = User.includes(:boards, :board_pins, :pins).find_by(username: params[:id])        
        render :show
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :username, :first_name, :last_name)
    end
end
