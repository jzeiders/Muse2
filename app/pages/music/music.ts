import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MusicService} from '../../services/music.service.ts';
import { SCService} from '../../services/sc.service.ts';

@Component({
  templateUrl: 'build/pages/music/music.html',
})
export class MusicPage {
  searchTerm;
  tracks: any = [];
  constructor(public navCtrl: NavController, public musicService: MusicService, public scService: SCService) {

  }
  ionViewLoaded() {
    this.musicService.test();
    console.log("hello");
  };
  addTrack(url): any {
    console.log(url);
  }

  cleanTracks(tracks): any {
    return tracks.map((track) => {
      return {
        title: track.title,
        artwork: track.artwork_url,
        stream: track.stream_url,
        artist: track.user.username,
        genre: track.genre
      }
    })
  }
  searchTrack(term) {
    console.log("CtrlSearch");
    this.scService.search(this.searchTerm).subscribe(
      tracks => { this.tracks = this.cleanTracks(tracks); },
      err => { console.log(err) }
    );
  }
}
