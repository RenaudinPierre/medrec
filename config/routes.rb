Rails.application.routes.draw do
  root to: 'pages#home'


  devise_for :users

  resources :patients, except: [ :show, :edit, :update, :destroy ]
  resources :boards, only: [ :show ] do
    resources :sources, only: [ :create]
  end
  resources :sources, only: [] do
    resources :drugs, only: [ :create ]
  end
  resources :drugs, only: [ :update ]

  get "drugs/search"
end
