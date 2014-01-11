class ForumsController < InheritedResources::Base
  respond_to :view, :json

  def hello
    render :inline =>"hello", :layout=>'application'
  end
end

