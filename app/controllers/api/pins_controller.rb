class Api::PinsController < ApplicationController
    before_action :require_logged_in, only: [:create, :edit, :update, :destroy]    

    def index            
      if params[:user_id]        
        user = User.find_by(username: params[:user_id])                                    
        
        @board_pins = BoardPin.includes(:board, :user)
              .where(users: { username: params[:user_id] })  
              .order(updated_at: :desc)                       
              # .page(params[:page]).per(10)        
      elsif params[:board_id]                        
        @board_pins = BoardPin.includes(:pin, :board, :user)
              .where(boards: { id: params[:board_id]} )
              # .page(params[:page]).per(10)        
      end
      
      render "api/pins/index"
    end

    def new 
      @pin = Pin.new
      @board = Board.all
    end

    def create
      @pin = Pin.new(pin_params)
      @board = Board.find(params[:board_id])

      if @pin.save        
        # @board.pins << @pin // Note: this code is not used, because it actually saves a pin to board pin, but without the detail
        @board_pin = BoardPin.create!(
          pin_id: @pin.id,
          board_id: @board.id,
          title: params[:pin][:title],
          detail: params[:pin][:detail]
        )        
        render "api/pins/show"
      else
        render json: @pin.errors.full_messages, status: 422
      end      
    end

    def edit 
      @pin = current_user.pins.find(params[:id])
      @board = Board.all
    end    

    def destroy
      @pin = current_user.pins.find(params[:id])  
      @board_pin = current_user.board_pins.find(params[:id])
      @board_pin.destroy
      @pin.destroy
      render "api/pins/show"
    end

    private

    def pin_params
      params.require(:pin).permit(:link_url, :lat, :lng, :picture)
    end

    def board_pin_params
      params.require(:pin).permit(:title, :detail)
    end
end
