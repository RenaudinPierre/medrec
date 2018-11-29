Rails.application.routes.draw do

  root to: 'pages#home'


  devise_for :users

  resources :patients, except: [ :show, :edit, :update, :destroy ]
  resources :boards, only: [ :show ]

  get "drugs/search"
  resources :drugs, only: [ :create]
end
