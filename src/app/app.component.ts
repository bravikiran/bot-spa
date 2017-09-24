import { Component } from '@angular/core';

import { NavigationComponent } from './navigation/navigation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { GuideComponent } from './guide/guide.component';
import { PricesComponent } from './prices/prices.component';
import { BlogComponent } from './blog/blog.component';
import { HelpComponent } from './help/help.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
