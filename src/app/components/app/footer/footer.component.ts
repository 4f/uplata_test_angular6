import { Component, OnInit } from '@angular/core';
import { MenuLinksService }  from 'services/menu_links/menu_links.service';
import { MenuLink }          from 'classes/menu_link'


@Component({
  selector:    'app-footer',
  templateUrl: './footer.component.html',
  styleUrls:  ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  links: MenuLink[];

  constructor(private MLS: MenuLinksService) { }

  ngOnInit() {
    this.setLinks();
  }

  setLinks(): void {
    this.links = this.MLS.footerLinks();
  }

}
