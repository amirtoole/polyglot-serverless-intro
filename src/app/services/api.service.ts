import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../models/models';


@Injectable()
export class ApiService {

    constructor(@Inject(APP_CONFIG) private appConfig: AppConfig,
                private httpClient: HttpClient) {
    }

    getTodo(): Observable<Todo> {
        return this.httpClient.get<Todo>(`${this.appConfig.basePath}/todo`);
    }
}
