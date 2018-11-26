Rails.application.routes.draw do

  get 'patients/index'
  get 'patients/new'
  get 'patients/create'
  root to: 'pages#home'


  devise_for :users

  resources :patients, except: [ :show, :edit, :update, :destroy ] do
    resources :boards, except: [ :destroy ]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
