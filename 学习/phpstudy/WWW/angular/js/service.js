var m1 = angular.module('myModule', []);

m1.factory("mySecvics", function() {
	return {
		name: "hello",
		show: function() {
			return this.name + ": angular.js";
		}
	}
})