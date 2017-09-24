import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PricesComponent } from './prices/prices.component';
import { BlogComponent } from './blog/blog.component';
import { HelpComponent } from './help/help.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GuideComponent } from './guide/guide.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PricesComponent,
    BlogComponent,
    HelpComponent,
    HomepageComponent,
    NavigationComponent,
    GuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
    {
      path: 'app-homepage',
      component: HomepageComponent
    },
    {
      path:'app-about',
      component: AboutComponent
    },
    {
      path: 'app-guide',
      component: GuideComponent
    },
    {
      path:'app-prices',
      component: PricesComponent
    },
    {
      path:'app-blog',
      component: BlogComponent
    },
    {
      path:'app-help',
      component: HelpComponent
    }    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
