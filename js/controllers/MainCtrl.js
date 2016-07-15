angular
  .module('notesApp')
  .controller('MainCtrl', MainCtrl);

function MainCtrl($scope, noteService) {
  //$scope.testWord = 'im workin!';
  $scope.words = noteService.words;
}
