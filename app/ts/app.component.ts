import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './Video';
import { PlaylistComponent } from './playlist.component'; /* gotta import all components into the one that gets bootstrapped */

@Component({
    selector: 'app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    main_heading= Config.MAIN_HEADING;

    videos: Array<Video>;

    constructor(){
        this.videos= [
            new Video(1, "LEAGUE MIC CHECK", "lNq32GfsP4Q", "HERE WE CAN VOICE COMMS OF PRO LOL PLAYERS WHILE PLAYING IN LEC GAMES ON STAGE."),
            new Video(2, "STAN BUT THE GOOD PART ONLY", "f8qBeaGe2S4", "PAIN")
        ]
    } /* what we need to do here to send data from this component 'app' to 'playlist', q? why not create the entire thing in 'playlist'? might do later */ 
}
