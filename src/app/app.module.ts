import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './services/api.service';
import { environment } from '../environments/environment';
import { APP_CONFIG, AppConfig } from './app.config';


const appConfig: AppConfig = {
    basePath: environment.production ? 'https://4wkeo5ny21.execute-api.us-west-2.amazonaws.com/dev' :
        `${window.location.protocol}//${window.location.hostname}:3000`,
};


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        ApiService,
        {
            provide: APP_CONFIG,
            useValue: appConfig
        },
    ],
    exports: [],
    bootstrap: [
        AppComponent
    ],
    entryComponents: []
})
export class AppModule {
}
