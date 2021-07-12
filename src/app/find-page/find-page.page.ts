import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-page',
  templateUrl: './find-page.page.html',
  styleUrls: ['./find-page.page.scss'],
})
export class FindPagePage implements OnInit {

  constructor(public router:Router) { }

  gotoHomePage() {
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}
