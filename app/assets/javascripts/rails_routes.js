var Routes = {}

  Routes['root_path'] = function(options){
    if (options==='draw') {return '/'}
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
    }else {
      var params = options;
      return '/'
    }
  }

  Routes['forum_comments_path'] = function(options){
    if (options==='draw') {return '/forums/:forum_id/comments'}
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/forums/' + params.forum_id + '/comments?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/forums/' + params.forum_id + '/comments'
    }else {
      var params = options;
      return '/forums/' + params.forum_id + '/comments'
    }
  }

  Routes['new_forum_comment_path'] = function(options){
    if (options==='draw') {return '/forums/:forum_id/comments/new'}
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/forums/' + params.forum_id + '/comments/new?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/forums/' + params.forum_id + '/comments/new'
    }else {
      var params = options;
      return '/forums/' + params.forum_id + '/comments/new'
    }
  }

  Routes['edit_forum_comment_path'] = function(options){
    if (options==='draw') {return '/forums/:forum_id/comments/:id/edit'}
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/forums/' + params.forum_id + '/comments/' + params.id + '/edit?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/forums/' + params.forum_id + '/comments/' + params.id + '/edit'
    }else {
      var params = options;
      return '/forums/' + params.forum_id + '/comments/' + params.id + '/edit'
    }
  }

  Routes['forum_comment_path'] = function(options){
    if (options==='draw') {return '/forums/:forum_id/comments/:id'}
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/forums/' + params.forum_id + '/comments/' + params.id + '?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/forums/' + params.forum_id + '/comments/' + params.id + ''
    }else {
      var params = options;
      return '/forums/' + params.forum_id + '/comments/' + params.id + ''
    }
  }

  Routes['forums_path'] = function(options){
    if (options==='draw') {return '/forums'}
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/forums?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/forums'
    }else {
      var params = options;
      return '/forums'
    }
  }

  Routes['new_forum_path'] = function(options){
    if (options==='draw') {return '/forums/new'}
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/forums/new?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/forums/new'
    }else {
      var params = options;
      return '/forums/new'
    }
  }

  Routes['edit_forum_path'] = function(options){
    if (options==='draw') {return '/forums/:id/edit'}
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/forums/' + params.id + '/edit?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/forums/' + params.id + '/edit'
    }else {
      var params = options;
      return '/forums/' + params.id + '/edit'
    }
  }

  Routes['forum_path'] = function(options){
    if (options==='draw') {return '/forums/:id'}
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/forums/' + params.id + '?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/forums/' + params.id + ''
    }else {
      var params = options;
      return '/forums/' + params.id + ''
    }
  }

  Routes['rails_info_properties_path'] = function(options){
    if (options==='draw') {return '/rails/info/properties'}
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
    }else {
      var params = options;
      return '/rails/info/properties'
    }
  }
