angular.module( 'friendsList' ).controller( 'mainCtrl', function( $scope) {
  $scope.friends = [ 'Masego', 'John', 'Neil', 'Mischa', 'Mark' ];

  $scope.addFriend = function() {
    $scope.friends.push( $scope.newFriend );
  };
} );
