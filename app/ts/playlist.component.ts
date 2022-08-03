import { Component } from "angular2/core";
import { Video } from "./Video";

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html' /* always give the full file path because this could be used later on in index.html e.g. */,
    inputs: ['videos']
})

export class PlaylistComponent{
    onSelect(video:Video){
        console.log(JSON.stringify(video))
    }
}

