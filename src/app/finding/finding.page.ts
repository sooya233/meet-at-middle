import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finding',
  templateUrl: './finding.page.html',
  styleUrls: ['./finding.page.scss'],
})
export class FindingPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/result')
    }, 2000);
  }

}
