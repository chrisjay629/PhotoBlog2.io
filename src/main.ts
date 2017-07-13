// Import global stylesheet
import './styles/main.css';

//This will start bootstrap for your page
import { platformBrowserDynamic }  from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// import {enableProdMode} from '@angular/core';
//
// enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
