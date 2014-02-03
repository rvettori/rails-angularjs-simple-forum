class AngularFormatConstraints
  def self.matches?(request)
    ['json','view'].include?(request.format)
  end
end

module ActionDispatch::Routing  
  class Mapper
    def angular_resources(*args, &block)
      constraints AngularFormatConstraints do
        resources *args, &block    
      end
      get '/:angular_route', to: 'application#index' , angular_route: /#{args.first.to_s}.*/  
    end
  end
end


SimpleForum::Application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)

  # resources :forums, :defaults => {format: :json} do
  # resources :comments, :defaults => {format: :json}
  # end

  root to: 'application#index'

  # angularize_resources 'meus-forums', :as => :forums

  # DEFINICAO DAS ROTAS DO ANGULARJS - sem angularize
  # constraints AngularFormatConstraints do
  #   resources 'meus-forums', controller: :forums, as: :forums do
  #     resources :comments
  #   end
  # end
  # # CHAMADAS GET VIA URL
  # get '/:angular_route', to: 'application#index' , angular_route: /meus-forums.*/

    angular_resources 'meus-forums', controller: :forums, as: :forums do
      resources :comments
    end


end
