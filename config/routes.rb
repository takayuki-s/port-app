Rails.application.routes.draw do
  root to: 'port#index'
  get 'port/index'
end
