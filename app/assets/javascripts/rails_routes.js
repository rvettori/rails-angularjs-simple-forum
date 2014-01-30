var Routes = {};
Routes.base_uri = '/';

  
  Routes.root_draw = function(){ return '/' }
  Routes.root_path = function(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/'
    }else if(_.isArray(options)){
      var keys = _.compact(_.map(Routes.root_draw().split('/'), function(item){ return (item.trim().indexOf(':')==0 ? item.trim().replace(':','') : '') }));
      var params = _.reduce(keys,function(mem, key){ mem[key]=options.shift(); return mem; },{});
      return '/';
    }else {
      var params = options;
      return '/'    
    }
  }



  Routes.forum_comments      = function(options){ return Routes.forum_comments_path(options).substr(1); }
  Routes.forum_comments_draw = function(){ return '/meus-forums/:forum_id/comments' }
  Routes.forum_comments_path = function(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/meus-forums/' + params.forum_id + '/comments?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/meus-forums/' + params.forum_id + '/comments'
    }else if(_.isArray(options)){
      var keys = _.compact(_.map(Routes.forum_comments_draw().split('/'), function(item){ return (item.trim().indexOf(':')==0 ? item.trim().replace(':','') : '') }));
      var params = _.reduce(keys,function(mem, key){ mem[key]=options.shift(); return mem; },{});
      return '/meus-forums/' + params.forum_id + '/comments';
    }else {
      var params = options;
      return '/meus-forums/' + params.forum_id + '/comments'    
    }
  }



  Routes.new_forum_comment      = function(options){ return Routes.new_forum_comment_path(options).substr(1); }
  Routes.new_forum_comment_draw = function(){ return '/meus-forums/:forum_id/comments/new' }
  Routes.new_forum_comment_path = function(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/meus-forums/' + params.forum_id + '/comments/new?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/meus-forums/' + params.forum_id + '/comments/new'
    }else if(_.isArray(options)){
      var keys = _.compact(_.map(Routes.new_forum_comment_draw().split('/'), function(item){ return (item.trim().indexOf(':')==0 ? item.trim().replace(':','') : '') }));
      var params = _.reduce(keys,function(mem, key){ mem[key]=options.shift(); return mem; },{});
      return '/meus-forums/' + params.forum_id + '/comments/new';
    }else {
      var params = options;
      return '/meus-forums/' + params.forum_id + '/comments/new'    
    }
  }



  Routes.edit_forum_comment      = function(options){ return Routes.edit_forum_comment_path(options).substr(1); }
  Routes.edit_forum_comment_draw = function(){ return '/meus-forums/:forum_id/comments/:id/edit' }
  Routes.edit_forum_comment_path = function(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/meus-forums/' + params.forum_id + '/comments/' + params.id + '/edit?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/meus-forums/' + params.forum_id + '/comments/' + params.id + '/edit'
    }else if(_.isArray(options)){
      var keys = _.compact(_.map(Routes.edit_forum_comment_draw().split('/'), function(item){ return (item.trim().indexOf(':')==0 ? item.trim().replace(':','') : '') }));
      var params = _.reduce(keys,function(mem, key){ mem[key]=options.shift(); return mem; },{});
      return '/meus-forums/' + params.forum_id + '/comments/' + params.id + '/edit';
    }else {
      var params = options;
      return '/meus-forums/' + params.forum_id + '/comments/' + params.id + '/edit'    
    }
  }



  Routes.forum_comment      = function(options){ return Routes.forum_comment_path(options).substr(1); }
  Routes.forum_comment_draw = function(){ return '/meus-forums/:forum_id/comments/:id' }
  Routes.forum_comment_path = function(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/meus-forums/' + params.forum_id + '/comments/' + params.id + '?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/meus-forums/' + params.forum_id + '/comments/' + params.id + ''
    }else if(_.isArray(options)){
      var keys = _.compact(_.map(Routes.forum_comment_draw().split('/'), function(item){ return (item.trim().indexOf(':')==0 ? item.trim().replace(':','') : '') }));
      var params = _.reduce(keys,function(mem, key){ mem[key]=options.shift(); return mem; },{});
      return '/meus-forums/' + params.forum_id + '/comments/' + params.id + '';
    }else {
      var params = options;
      return '/meus-forums/' + params.forum_id + '/comments/' + params.id + ''    
    }
  }



  Routes.forums      = function(options){ return Routes.forums_path(options).substr(1); }
  Routes.forums_draw = function(){ return '/meus-forums' }
  Routes.forums_path = function(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/meus-forums?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/meus-forums'
    }else if(_.isArray(options)){
      var keys = _.compact(_.map(Routes.forums_draw().split('/'), function(item){ return (item.trim().indexOf(':')==0 ? item.trim().replace(':','') : '') }));
      var params = _.reduce(keys,function(mem, key){ mem[key]=options.shift(); return mem; },{});
      return '/meus-forums';
    }else {
      var params = options;
      return '/meus-forums'    
    }
  }



  Routes.new_forum      = function(options){ return Routes.new_forum_path(options).substr(1); }
  Routes.new_forum_draw = function(){ return '/meus-forums/new' }
  Routes.new_forum_path = function(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/meus-forums/new?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/meus-forums/new'
    }else if(_.isArray(options)){
      var keys = _.compact(_.map(Routes.new_forum_draw().split('/'), function(item){ return (item.trim().indexOf(':')==0 ? item.trim().replace(':','') : '') }));
      var params = _.reduce(keys,function(mem, key){ mem[key]=options.shift(); return mem; },{});
      return '/meus-forums/new';
    }else {
      var params = options;
      return '/meus-forums/new'    
    }
  }



  Routes.edit_forum      = function(options){ return Routes.edit_forum_path(options).substr(1); }
  Routes.edit_forum_draw = function(){ return '/meus-forums/:id/edit' }
  Routes.edit_forum_path = function(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/meus-forums/' + params.id + '/edit?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/meus-forums/' + params.id + '/edit'
    }else if(_.isArray(options)){
      var keys = _.compact(_.map(Routes.edit_forum_draw().split('/'), function(item){ return (item.trim().indexOf(':')==0 ? item.trim().replace(':','') : '') }));
      var params = _.reduce(keys,function(mem, key){ mem[key]=options.shift(); return mem; },{});
      return '/meus-forums/' + params.id + '/edit';
    }else {
      var params = options;
      return '/meus-forums/' + params.id + '/edit'    
    }
  }



  Routes.forum      = function(options){ return Routes.forum_path(options).substr(1); }
  Routes.forum_draw = function(){ return '/meus-forums/:id' }
  Routes.forum_path = function(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/meus-forums/' + params.id + '?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/meus-forums/' + params.id + ''
    }else if(_.isArray(options)){
      var keys = _.compact(_.map(Routes.forum_draw().split('/'), function(item){ return (item.trim().indexOf(':')==0 ? item.trim().replace(':','') : '') }));
      var params = _.reduce(keys,function(mem, key){ mem[key]=options.shift(); return mem; },{});
      return '/meus-forums/' + params.id + '';
    }else {
      var params = options;
      return '/meus-forums/' + params.id + ''    
    }
  }



  Routes.rails_info_properties      = function(options){ return Routes.rails_info_properties_path(options).substr(1); }
  Routes.rails_info_properties_draw = function(){ return '/rails/info/properties' }
  Routes.rails_info_properties_path = function(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/rails/info/properties?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/rails/info/properties'
    }else if(_.isArray(options)){
      var keys = _.compact(_.map(Routes.rails_info_properties_draw().split('/'), function(item){ return (item.trim().indexOf(':')==0 ? item.trim().replace(':','') : '') }));
      var params = _.reduce(keys,function(mem, key){ mem[key]=options.shift(); return mem; },{});
      return '/rails/info/properties';
    }else {
      var params = options;
      return '/rails/info/properties'    
    }
  }


