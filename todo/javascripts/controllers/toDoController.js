toDo.controller('toDoController', ['$scope',
  function($scope) {
    $scope.toDos = [ { text: "Get groceries from the store",
                      dueDate: new Date(),
                      completed: false },
                      { text: "Get groceries from the store",
                                        dueDate: new Date(),
                                        completed: false } ];

    $scope.createTask = function() {
      var newRes = { text: $scope.taskName,
                     dueDate: $scope.taskDeadline,
                     completed: false };
      $scope.toDos.push(newRes);
      $scope.taskName = "";
      $scope.taskDeadline = new Date();
    };

    $scope.taskDeadline = new Date();

  }]);
