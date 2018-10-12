import { Component, OnInit } from '@angular/core';
import { MenuLinksService }  from 'services/menu_links/menu_links.service';
import { MenuLink }          from 'classes/menu_link'


@Component({
  selector:    'app-header',
  templateUrl: './header.component.html',
  styleUrls:  ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links:        MenuLink[];
  dialogLogin:  Boolean     = false;
  dialogSignup: Boolean     = false;

  constructor(private MLS: MenuLinksService) { }

  ngOnInit() {
    this.setLinks();
  }

  setLinks(): void {
    this.links = this.MLS.headerLinks();
  }

  openLogin(b: Boolean = true): void {
    this.dialogLogin = b;
  }

  openSignup(b: Boolean = true): void {
    this.dialogSignup = b;
  }


}
