Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do    
    resources :users, only: [:create, :show] do
      resources :pins, only: [:index]      
    end
    
    resource :session, only: [:create, :destroy, :show] 
    resources :boards, only: [:index, :show, :create, :update, :destroy] do
      resources :pins, only: [:index]
    end

    resources :pins, only: [:show, :create, :update, :destroy]
    resources :boards_pins, only: [:index, :create, :update, :destroy] do
      collection do
        get "feeds"
      end
    end
  end

  root "static_pages#root"

end