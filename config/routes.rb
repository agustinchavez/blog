Rails.application.routes.draw do

  devise_for :users
    resources :posts do
      resources :comments
  end

  root "pages#about"

  get "/about", to: 'pages#about'

  post 'pages/thank_you'

end
