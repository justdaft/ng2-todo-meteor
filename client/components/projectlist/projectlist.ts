/// <reference path="../../../typings/app.d.ts" />


import {Component, EventEmitter, OnInit } from 'angular2/core';
import {NgFor, NgIf, NgClass} from 'angular2/common';

// import { List, Map } from 'immutable';

import {MeteorComponent} from 'angular2-meteor';
import { PROJECTS } from '../../../collections/projects';
import { ProjectItem } from '../projectitem/projectitem';

@Component({
    selector: 'project-list',
    templateUrl: 'client/components/projectlist/projectlist.html',
    styleUrls: ['client/components/projectlist/projectlist.css'],
      directives: [ProjectItem]
})

export class ProjectList extends MeteorComponent implements OnInit {
    //  projectsImm: List<any>;
    projects: Mongo.Cursor<IProject>;
    newProject = 'test';
    isLoading: boolean;
    hideCompleted: boolean;
    message: any;
    countOfCompleted: number = 0;

    addProject(text: any) {
        PROJECTS.insert({
            text: text,
            completed: false,
            private: false
        });
        this.newProject = '';
    }

    deleteProject(project: IProject) {
        // this.store.removeItem(project._id);
    }

    projectUpdated(event: IProjectUpdatedEvent) {
        if (event.text !== undefined) {
            if (event.text === '') {
                // this.store.removeItem(event.itemId);
                this.call('deleteProject', event.projectId);
            } else {
                // this.store.updateText(event.itemId, event.text);
            }
        }
        if (event.completed !== undefined) {
            this.call('setCompletedProject', event.projectId, event.completed);
            //   this.store.updatedCompletion(event.itemId, event.completed);
        }
    }

    ngOnInit() {
        console.log('Oninit: ProjectList');
        this.isLoading = true;
        this.autorun(() => {
            this.projects = PROJECTS.find();
        }, true);

        this.subscribe('projects', () => {
            this.isLoading = false;
        }, true);
    }

    constructor() {
        super();
         console.log('constructor: ProjectList');
        this.isLoading = true;
        this.autorun(() => {
            this.projects = PROJECTS.find();
        }, true);

        this.subscribe('projects', () => {
            this.isLoading = false;
        }, true);

    }


}
