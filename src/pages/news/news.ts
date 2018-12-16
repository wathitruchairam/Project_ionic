import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NewsDetailPage } from '../news-detail/news-detail';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  datalist:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.getNews()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  getNews(){
    this.http.post('http://127.0.0.1/apps/getNews.php',null,null)
    .subscribe(
      data=>{
        this.datalist = data.json();
        console.log(data.json());
      }
    )
  }

  goDetail(_n){
    this.navCtrl.push(NewsDetailPage,{item:_n});
  }
}
