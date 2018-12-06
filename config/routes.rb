Rails.application.routes.draw do

  authenticated :user do
    root :to => "patients#index"
  end

  root to: 'pages#home'

  devise_for :users

  resources :patients, except: [ :show, :edit, :update, :destroy, :index ]
  resources :boards, only: [ :show ] do
    get 'print'
    resources :sources, only: [ :create]
    resources :syncs, only: [ :create ]
  end
  resources :sources, only: [] do
    resources :drugs, only: [ :create ]
  end

  resources :divergences, only: [ :create, :update ]

  resources :drugs, only: [ :update ]

  get "drugs/search"
end
