import {Component} from '@angular/core';

@Component ({
    //Note this is take from your html folder <app-root>
    selector : 'app-root',
    templateUrl : 'app.component.html',
   styleUrls : ['app.component.css']

})
export class AppComponent {
    emoji = ['🎉', '😍', '😜', '👍'];
    // this event will set your emoji input form the .html file 
    activeEmoji : string;
    changeEmoji() {
    this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];

        }

    }



