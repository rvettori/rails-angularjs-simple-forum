describe("Witch URI functions", function() {

	var utils;
  var uri = '/forums/1/comments/2';
	var uri_draw = '/forums/:forum_id/comments/:id';

	beforeEach(function() {
	  utils = new Utils();
	});

	it("should extract params from uri draw", function() {
	  expect(utils.uriParams(uri_draw).toBe(['forum_id', 'id'])

	});

});