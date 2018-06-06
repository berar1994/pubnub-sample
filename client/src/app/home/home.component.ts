declare var eon: any;

import { Component, OnInit } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private pubnubClient = undefined;    
    
  constructor(pubnub: PubNubAngular) {
      this.pubnubClient = pubnub.init({
          publishKey : '[your-publish-key]',
          subscribeKey : '[your-subscribe-key]',
          ssl: true       
        });
  }

  ngOnInit() {
    eon.chart({
        pubnub: this.pubnubClient,
        channels: ['telemetry'],
        flow: true,
        limit: 20,
        generate: {
            bindto: '#chartContainer'
        },
        history: true,
        rate: 1000
    });
  }

}
