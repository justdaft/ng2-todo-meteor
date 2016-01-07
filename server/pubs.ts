/// <reference path="../typings/angular2-meteor.d.ts" />

import {TODOS} from '../collections/todos';

Meteor.publish('todos', function() {
    return TODOS.find({});
});

Meteor.publish('todo', function(todoId: string) {
    return TODOS.find(todoId);
});

Meteor.methods({
    deleteTodo: function(todoId: string) {
        TODOS.remove(todoId);
    },
    setCompletedTodo: function(todoId: string, setCompleted: boolean) {
        let todo = TODOS.findOne(todoId);
        TODOS.update(todoId, {
            $set: { completed: setCompleted }
        });
    }
});