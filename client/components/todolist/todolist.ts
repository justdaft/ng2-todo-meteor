/// <reference path="../../../typings/app.d.ts" />


import {Component, EventEmitter, OnInit } from 'angular2/core';
import {NgFor, NgIf, NgClass} from 'angular2/common';

// import { List, Map } from 'immutable';

import {MeteorComponent} from 'angular2-meteor';
import { TODOS } from '../../../collections/todos';
import { TodoItem } from '../todoitem/todoitem';

@Component({
    selector: 'todo-list',
    templateUrl: 'client/components/todolist/todolist.html',
    styleUrls: ['client/components/todolist/todolist.css'],
      directives: [TodoItem]
})

export class TodoList extends MeteorComponent implements OnInit {
    //  todosImm: List<any>;
    todos: Mongo.Cursor<ITodo>;
    newTodo = 'test';
    isLoading: boolean;
    hideCompleted: boolean;
    message: any;
    countOfCompleted: number = 0;

    addTodo(text: any) {
        TODOS.insert({
            text: text,
            completed: false,
            private: false
        });
        this.newTodo = '';
    }

    deleteTodo(todo: ITodo) {
        // this.store.removeItem(todo._id);
    }

    todoUpdated(event: ITodoUpdatedEvent) {
        if (event.text !== undefined) {
            if (event.text === '') {
                // this.store.removeItem(event.itemId);
                this.call('deleteTodo', event.todoId);
            } else {
                // this.store.updateText(event.itemId, event.text);
            }
        }
        if (event.completed !== undefined) {
            this.call('setCompletedTodo', event.todoId, event.completed);
            //   this.store.updatedCompletion(event.itemId, event.completed);
        }
    }

    ngOnInit() {
        console.log('Oninit: TodoList');
        this.isLoading = true;
        this.autorun(() => {
            this.todos = TODOS.find();
        }, true);

        this.subscribe('todos', () => {
            this.isLoading = false;
        }, true);
    }

    constructor() {
        super();
         console.log('constructor: TodoList');
        this.isLoading = true;
        this.autorun(() => {
            this.todos = TODOS.find();
        }, true);

        this.subscribe('todos', () => {
            this.isLoading = false;
        }, true);

    }


}
