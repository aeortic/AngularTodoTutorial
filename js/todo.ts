/**
 * Created by chris on 3/13/14.
 */

/// <reference path='../_all.ts' />

class TodoItem {
    constructor(title:string,completed:boolean)

}

class TodoCtrl {
    constructor(private $scope){

        $scope.todos = [];

        $scope.addTodo () => {
            var item:TodoItem = new TodoItem($scope.todoText, false);
            $scope.todos.push(item);
            $scope.todoText = '';
        };

        $scope.remaining () => {
            var count = 0;
            angular.forEach($scope.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        $scope.archive () => {
            var oldTodos = $scope.todos;
            $scope.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) $scope.todos.push(todo);
            });
        };
    }
}