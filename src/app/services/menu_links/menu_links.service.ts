import { Injectable }   from '@angular/core';
import { MenuLink }     from 'classes/menu_link';

const LINKS: MenuLink[] = [
  { id: 1, path: "/onas",        name: "О НАС" },
  { id: 2, path: "/faq",         name: "FAQ" },
  { id: 3, path: "/tarif",       name: "ТАРИФЫ" },
  { id: 4, path: "/bezopasnost", name: "БЕЗОПАСНОСТЬ" },
  { id: 5, path: "/legal",       name: "ПРАВОВАЯ ИНФОРМАЦИЯ" }
];

@Injectable({
  providedIn: 'root'
})


export class MenuLinksService {
  
  constructor() { }

  footerLinks(): MenuLink[] {
    return LINKS;
  }
  headerLinks(): MenuLink[] {
    return LINKS;
  }
  
}
