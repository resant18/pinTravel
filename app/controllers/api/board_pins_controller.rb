class Api::BoardPinsController < ApplicationController
  before_action :require_logged_in, only: [:create, :edit, :update, :destroy]

  def index      
      @board_pins = BoardPin.includes(:pin, :board, :user).all
      render 'api/pins/index'
  end

  # get all pin that is not current user pins for news feeds
  def feeds
    board_ids = current_user ? current_user.board_ids : []
  
    @board_pins = BoardPin.includes(:pin, :board)
                        .where.not(board_id: board_ids)
                        # .page(params[:page]).per(10)
    
    render 'api/pins/index'
  end   
  
  def user_pins
      # @board_pins = BoardPin.includes(:pin, :board, :user)
      #     .where(user_id: params[:user_id])
      #     .page(params[:page]).per(10)
  end

  def board_pins
      @board_pins = BoardPin.includes(:pin, :board, :user)
          .where(board_id: params[:board_id])
          .page(params[:page]).per(10)
  end

  def show
    @board_pin = BoardPin.includes(:pin, :board, :user).find(params[:id])
    render 'api/pins/show'
  end

  # def create
  #   @board_pin = PinJoin.new(board_pin_params)
  #   @board_pin.board_id = params[:board_id]
  #   @board_pin.save!
  #   render 'api/pins/show'
  # end

  def update
    @board_pin = current_user.board_pins.find(params[:id])
    @board_pin.update!(board_pin_params)
    render 'api/pins/show'
  end


  def destroy
    @board_pin = current_user.pin_joins.find(params[:id])
    @board_pin.destroy
    render 'api/pins/show'
  end

  private

  def board_pin_params
    params.require(:pin).permit(:description, :title, :pin_id, :board_id)
  end  
end
