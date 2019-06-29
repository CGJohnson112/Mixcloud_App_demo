import { Component } from '@angular/core';
import { MusicService } from './music.service';
import {music} from './music';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _musicService: MusicService){

  }

  lstmusic:music[];

  ngOnInit() {
  	this. _musicService.getMusic()
  		.subscribe
  		(
  			data=> 
  			{
  				this.lstmusic = data;
  			}

  		);
  }
}
