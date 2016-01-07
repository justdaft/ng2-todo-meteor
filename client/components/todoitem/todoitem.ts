/// <reference path="../../../typings/app.d.ts" />

import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'todo-item',
    templateUrl: 'client/components/todoitem/todoitem.html',
    styleUrls: ['client/components/todoitem/todoitem.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoItem {
    editMode = false;

    @Input()
    todo: ITodo;

    @Output()
    delete = new EventEmitter<ITodo>();

    @Output()
    todoUpdated = new EventEmitter<ITodoUpdatedEvent>();

    deleteClicked() {
        this.delete.emit(this.todo);
    }

    toggle() {
        this.todoUpdated.emit({
            todoId: this.todo._id,
            completed: !this.todo.completed
        });
    }

    enterEditMode(element: HTMLInputElement) {
        this.editMode = true;
        if (this.editMode) {
            setTimeout(() => { element.focus(); }, 0);
        }
    }

    cancelEdit(element: HTMLInputElement) {
        this.editMode = false;
        element.value = this.todo.text;
    }

    commitEdit(updatedText: string) {
        this.editMode = false;
        this.todoUpdated.emit({
            todoId: this.todo._id,
            text: updatedText
        });
    }

}
