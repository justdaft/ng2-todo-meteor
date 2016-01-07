/// <reference path="../typings/app.d.ts" />

import {Component, View, provide, enableProdMode} from 'angular2/core';

import {FORM_DIRECTIVES} from 'angular2/common';


// import {Tasks} from 'tasks';

import {TodoList} from './components/todolist/todolist';

import {bootstrap} from 'angular2-meteor';

enableProdMode();

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'client/app.html',
    styleUrls: ['client/app.css'],
  directives: [FORM_DIRECTIVES, TodoList]
})
export class Todos {
//   addTask(text) {
//     Tasks.insert({
//       text: text,
//       checked: false,
//       private: false
//     });
//   }

//   get todoCount() {
//     return Tasks.find({
//       checked: false
//     }).count();
//   };
}

bootstrap(Todos);
