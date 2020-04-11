import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Scroll to desired section within profile
   * @param section name and id of section
   */
  public navigate(section: string): void {
    console.log(section);
    if (document.getElementById(section)) {
      document.getElementById(section).scrollIntoView({behavior: 'smooth'});
    }
  }

}
