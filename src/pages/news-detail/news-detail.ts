import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {
  listdetail:Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listdetail = this.navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailPage');
  }

}
