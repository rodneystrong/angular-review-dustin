angular
  .module('notesApp')
  .service('noteService', noteService);

function noteService($scope) {
  $scope.serve = 'im still workin!';
}
