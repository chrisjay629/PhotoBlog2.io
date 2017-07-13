import { NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import {AppComponent} from './app.component';
import {EntryListComponent,EntryComponent, EntryService, EntryCommentFormComponent} from './entries';
import {InMemoryEntryService} from './backend';


// Add meta data @NgModule is is a decorator
// 2nd use the imports array to let angular know that it is going to be used in am web browser


@NgModule({
    imports: [BrowserModule,
              HttpModule,
              FormsModule,
              InMemoryWebApiModule.forRoot(InMemoryEntryService)
    ],
    providers: [EntryService],
    declarations: [
        AppComponent,
        EntryComponent,
        EntryListComponent,
        EntryCommentFormComponent
      ],
    bootstrap: [AppComponent]
})
export class AppModule {



}
