import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Benifits } from '../pages/benifits/benifits';
import { More } from '../pages/more/more';
import { GetHelp } from '../pages/get-help/get-help';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    Benifits,
    GetHelp,
    More
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    ContactPage,
    HomePage,
    TabsPage,
    Benifits,
    GetHelp,
    More  
  ],
  providers: []
})
export class AppModule {}
