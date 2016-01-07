/// <reference path="../../../typings/app.d.ts" />

import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'project-item',
    templateUrl: 'client/components/projectitem/projectitem.html',
    styleUrls: ['client/components/projectitem/projectitem.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProjectItem {
    editMode = false;

    @Input()
    project: IProject;

    @Output()
    delete = new EventEmitter<IProject>();

    @Output()
    projectUpdated = new EventEmitter<IProjectUpdatedEvent>();

    deleteClicked() {
        this.delete.emit(this.project);
    }

    toggle() {
        this.projectUpdated.emit({
            projectId: this.project._id,
            completed: !this.project.completed
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
        element.value = this.project.text;
    }

    commitEdit(updatedText: string) {
        this.editMode = false;
        this.projectUpdated.emit({
            projectId: this.project._id,
            text: updatedText
        });
    }

}
