Rails.application.routes.draw do
  resources :watchlists
  resources :investments
  resources :users
  resources :companies
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
