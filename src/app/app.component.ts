import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Todo } from './models/models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    todos: Todo[] = [];

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {

    }

    fetchTodo() {
        this.apiService.getTodo().subscribe(todo => {
            this.todos.push(todo);
        });
    }
}
