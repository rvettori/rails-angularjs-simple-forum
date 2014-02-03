class ForumsController < ApplicationController # < InheritedResources::Base
  respond_to :view, :json
  inherit_resources
end

