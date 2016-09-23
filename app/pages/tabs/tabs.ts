import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { RoomPage } from '../room/room';
import { MusicPage } from '../music/music';
import { AccountPage} from '../account/account'

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;
  public tab4Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = RoomPage;
    this.tab3Root = MusicPage;
    this.tab4Root = AccountPage;
  }
}
