class AngularFormatConstraints
  def self.matches?(request)
    ['json','view'].include?(request.format)
  end
end

SimpleForum::Application.routes.draw do
  # resources :forums, :defaults => {format: :json} do
  # resources :comments, :defaults => {format: :json}
  # end

  root to: 'application#index'

  # DEFINICAO DAS ROTAS DO ANGULARJS
  constraints AngularFormatConstraints do
    resources 'forums', controller: :forums, as: :forums do
      resources :comments
    end
  end
  # CHAMADAS GET VIA URL
  get '/:angular_route', to: 'application#index' , angular_route: /meus_forums.*/


end
