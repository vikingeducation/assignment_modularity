toDo.controller('toDoController', ['$scope',
  function($scope) {
    $scope.myToDo = { text: "Get groceries from the store",
                      dueDate: new Date(),
                      completed: false };
  }]);
