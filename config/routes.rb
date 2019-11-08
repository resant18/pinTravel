Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do    
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show] 
    resources :boards, only: [:index,:show,:create,:update,:destroy]
    resources :pins, only: [:index,:show,:create,:update,:destroy]   
  end

  root "static_pages#root"
end