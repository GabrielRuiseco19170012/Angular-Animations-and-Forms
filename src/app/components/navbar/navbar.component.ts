import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  status = false;

  constructor() {
  }

  ngOnInit(): void {
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {

  }
}
