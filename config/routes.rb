Rails.application.routes.draw do
  resources :images
  resources :users do
    resources :images
  end
  get 'insta_mock', to: 'insta_mock#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
