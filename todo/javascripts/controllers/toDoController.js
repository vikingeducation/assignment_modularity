toDo.controller('toDoController', ['$scope',
  function($scope) {
    $scope.toDos = [ { text: "Get groceries from the store",
                      dueDate: new Date(),
                      completed: false },
                      { text: "Get groceries from the store",
                                        dueDate: new Date(),
                                        completed: false } ];

    $scope.myToDo = { text: "Get groceries from the store",
                      dueDate: new Date(),
                      completed: false };

  }]);
