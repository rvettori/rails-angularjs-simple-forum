# desc "Javascript rails routes, ex: rake js:routes['filename:rails_routes.js, root_path:/meus-forums, base_uri:/']"
desc "Javascript rails routes, ex: rake js:routes filename=rails_routes.js root_path=/meus-forums base_uri=/ "
namespace :js do
  # task :routes, [:filename] => :environment do |t, args|
  task :routes, [] => :environment do |t, args|
    filename   = ENV['filename']  || 'rails_routes.js'
    @root_path = ENV['root_path'] || '/'
    @base_uri  = ENV['base_uri']  || '/'
    
  # # task :routes, [:options] => :environment do |t, args|
  #   opt = args[:options].split(/[\s,]/).compact.reject(&:empty?).inject({}){|mem,var| kv=var.split(':'); mem[kv.first.to_sym] = kv.last; mem }
  #   filename  =  opt[:filename].blank?  ? "rails_routes.js" : opt[:filename]
  #   @root_path = opt[:root_path].blank? ? "/" :               opt[:root_path]
  #   @base_uri  = opt[:base_uri].blank?  ? "/" :               opt[:base_uri]

    if Rails.version >= "3.0.0"
      save_path = "#{Rails.root}/app/assets/javascripts/#{filename}"
      routes = generate_routes_for_rails_3
    else
      save_path = "#{RAILS_ROOT}/public/javascripts/#{filename}"
      routes = generate_routes_for_rails_2
    end

    javascript = ""
    javascript = "var Routes = {};" + "\n"
    javascript << "Routes.base_uri = '#{@base_uri}';" + "\n"
    routes.each do |route|
        javascript << generate_method(route[:name], route[:path]) + "\n"
    end

    File.open(save_path, "w") { |f| f.write(javascript) }
    puts "Routes saved to #{save_path}."
  end
end

def generate_method(name, path)
  draw = path.dup
  compare = /:(.*?)(\/|$)/
  path.sub!(compare, "' + params.#{$1} + '#{$2}") while path =~ compare
  
  js_routes_for_root = '';
  if name == 'root'
    path = @root_path
  else
    js_routes_for_root = "Routes.#{name}      = function(options){ return Routes.#{name}_path(options).substr(1); }"
  end

  js_func = %{
  #{js_routes_for_root}
  Routes.#{name}_draw = function(){ return '#{draw}' }
  Routes.#{name}_path = function(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '#{path}?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '#{path}'
    }else if(_.isArray(options)){
      var keys = _.compact(_.map(Routes.#{name}_draw().split('/'), function(item){ return (item.trim().indexOf(':')==0 ? item.trim().replace(':','') : '') }));
      var params = _.reduce(keys,function(mem, key){ mem[key]=options.shift(); return mem; },{});
      return '#{path}';
    }else {
      var params = options;
      return '#{path}'    
    }
  }

}
  return js_func
end

def generate_routes_for_rails_2
  processed_routes = []
  ActionController::Routing::Routes.routes.each do |route|
    name = ActionController::Routing::Routes.named_routes.routes.index(route)
    segs = route.segments.inject("") {|str, s| str << s.to_s}
    segs.chop! if segs.length > 1
    processed_routes << {:name => name, :path => segs.split("(")[0]} unless name.nil?
  end
  return processed_routes
end

def generate_routes_for_rails_3
  Rails.application.reload_routes!
  processed_routes = []
  Rails.application.routes.routes.each do |route|
    processed_routes << {:name => route.name, :path => route.path.spec.to_s.split("(")[0]} unless route.name.nil?
  end
  return processed_routes
end
