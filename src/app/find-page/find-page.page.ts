import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { global } from '../global';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-find-page',
  templateUrl: './find-page.page.html',
  styleUrls: ['./find-page.page.scss'],
})
export class FindPagePage implements OnInit {
  items = [];
  //constructor(public router:Router) {
  //}

  @ViewChild(IonContent, {static: false}) content: IonContent;  
  constructor( public router:Router
  ) { 
    for(let i = 0; i < global.stations.length; ++i) {
      this.items.push(global.stations[i]);
      
    }
  } 
  logScrollStart() { 
  console.log('logScrollStart : Scroll Starts'); 
  } 
  logScrolling() {  
  console.log('logScrolling : Scrolling'); 
  } 
  logScrollEnd() { 
  console.log('logScrollEnd : Scroll Ends'); 
  } 
  ScrollToBottom() { 
  this.content.scrollToBottom(800); 
  } 
  ScrollToTop() { 
  this.content.scrollToTop(800); 
  }

 
  deleteStation(station:string) {
    console.log(station);
    const index = global.stations.indexOf(station);
    console.log(index);
    
    if(index > -1) {
      global.stations.splice(index, 1);
      this.items.splice(index, 1);
    }
  }

  gotoHomePage() {
    this.router.navigateByUrl('/home');
  }

  gotoFindingPage() {
    this.router.navigateByUrl('/finding');
  }

  ngOnInit() {
  }

}
