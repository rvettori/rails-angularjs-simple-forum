'use strict';



// Routes.AngularModel('app','Forum', 'forum_path', true)
// Routes.AngularModel('app','Comment', 'forum_comment_path', true)

// app.factory('Forum', ['$resource', function($resource) {
//     // return $resource('/forums/:id', {id: '@id'}, {responseType: 'json'});
//     return $resource(Routes.forum_draw, {id: '@id'});
// }]);

// app.factory('Comment', ['$resource', function($resource) {
//     // return $resource('/forums/:forumId/comments/:id', {forumId: '@forumId', id: '@id'});
//     return $resource(Routes.forum_comment_draw, {forum_id: '@forum_id', id: '@id'});
// }]);