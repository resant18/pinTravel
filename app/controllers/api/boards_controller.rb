class Api::BoardsController < ApplicationController
    before_action :require_logged_in, only: [:create, :edit, :update, :destroy]

    def index
        @boards = Board.all.includes(:user, :board_pins, :pins)
        render "api/boards/index"
    end

    def show
        @board = Board.includes(:user, :board_pins, :pins).find(params[:id])
        render "api/boards/show"
    end

    def create        
        @board = Board.new(board_params)
        @board.user_id = current_user.id
        if @board.save
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def update
        @board = current_user.boards.find(params[:id])
        if @board
            if @board.update(board_params)
                render "api/boards/show"
            else
                render json: @board.errors.full_messages, status: 422
            end
        else
            render json: ["You have to login first to create a board"], status: 401
        end
    end

    def destroy
        @board = current_user.boards.find(params[:id])
        if @board
            @board.destroy
        else
            render json: ["You have to login first to delete a board"], status: 401
        end
    end

    private

    def board_params
        params.require(:board).permit(:name, :category_id, :cover_id, :secret)
    end
end
