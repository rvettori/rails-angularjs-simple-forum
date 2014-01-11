SimpleForum::Application.routes.draw do
  # resources :forums, :defaults => {format: :json} do
  # resources :comments, :defaults => {format: :json}
  # end

  root to: 'application#index'

  resources :forums, :constraints => lambda { |req| ['json','view'].include?(req.format) } do
    resources :comments, :constraints => lambda { |req| ['json','view'].include?(req.format) }
  end

  get 'forums' => 'application#index'
  get 'forums/*ng-view' => 'application#index'

  get 'hello-forum' => 'forums#hello'

end
