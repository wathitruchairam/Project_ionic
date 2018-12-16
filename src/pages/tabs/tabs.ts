import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NewsPage } from '../news/news';
import { MenuPage } from '../menu/menu';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewsPage;
  tab3Root = MenuPage;
  tab4Root = AboutPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
