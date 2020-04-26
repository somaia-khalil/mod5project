Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users , :auth_user , :stores , :categories , :products, :offers , :deliveries
  post '/login', to: 'auth_user#create'
  get '/hello' , to: 'users#hello'

  get "/stores/search/:q" , to: "stores#search"

  get "/stores/:id/categories" , to: "stores#category_index"
  get "/stores/:id/categories/:category_id" , to: "stores#category_show"
  get "/stores/:id/mainCategories" , to: "stores#main_categories"



end
