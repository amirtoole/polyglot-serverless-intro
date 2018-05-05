import { InjectionToken } from '@angular/core';

export interface AppConfig {
    basePath: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
