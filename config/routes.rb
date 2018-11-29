Rails.application.routes.draw do

  root to: 'pages#home'


  devise_for :users

  resources :patients, except: [ :show, :edit, :update, :destroy ]
  resources :boards, only: [ :show ]
  resources :drugs, only: [ :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
