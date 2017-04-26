import { Component } from '@angular/core';
 
@Component({
    selector: 'app',
    template: `
        <youtube-player
      [videoId]="id"
      (ready)="savePlayer($event)"
      (change)="onStateChange($event)"
    ></youtube-player>
    `
})
export class AppComponent {  
    player: YT.Player;
    //private id: string = 'qDuKsiwS5xw';
 
    savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
    }
  onStateChange(event){
    console.log('player state', event.data);
  }}