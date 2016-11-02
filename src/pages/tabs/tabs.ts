import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { Benifits } from '../benifits/benifits';
import { More } from '../more/more';
import { GetHelp } from '../get-help/get-help';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  homeRoot: any = HomePage;
  contactRoot: any = ContactPage;   
  benifitsRoot: any = Benifits;
  getHelpRoot: any = GetHelp;
  moreRoot: any = More;

  constructor() {

  }
}
