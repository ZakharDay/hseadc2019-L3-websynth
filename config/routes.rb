Rails.application.routes.draw do
  resources :oscillators
  get 'welcome/index'
  root 'welcome#index'
end
