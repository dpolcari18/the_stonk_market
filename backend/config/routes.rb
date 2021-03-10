Rails.application.routes.draw do
  resources :watchlists, only: [:destroy]
  resources :investments, only: [:create, :update, :destroy]
  resources :users, only: [:show, :index, :create]
  resources :companies, only: [:show, :index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
