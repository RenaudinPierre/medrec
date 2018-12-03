Rails.application.routes.draw do
  root to: 'pages#home'


  devise_for :users

  resources :patients, except: [ :show, :edit, :update, :destroy ]
  resources :boards, only: [ :show ] do
    resources :sources, only: [ :create]
    resources :drugs, only: [ :create ]
  end
  resources :drugs, only: [ :create ]
  resources :divergences, only: [ :create ]
  get "drugs/search"
end
