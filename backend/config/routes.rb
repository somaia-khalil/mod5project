Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users , :auth_user , :stores , :categories , :products, :offers 
  post '/login', to: 'auth_user#create'
  get '/hello' , to: 'users#hello'

  get "/stores/:id/search/:q" , to: "stores#search"

  get "/stores/:id/categories" , to: "stores#category_index"
  get "/stores/:id/categories/:category_id" , to: "stores#category_show"
  get "/stores/:id/categories/:category_id/offers" , to: "stores#offer_index"
  get "/stores/:id/offers/search/:barcode" , to: "stores#offer_search"


  get "/deliveries" , to: "deliveries#index"
  post "/deliveries" , to: "deliveries#create"


end
