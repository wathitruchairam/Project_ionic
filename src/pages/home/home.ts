import { Component } from '@angular/core';
import { NavController ,AlertController} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NewsDetailPage } from '../news-detail/news-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  datalist:any;
  constructor(public navCtrl: NavController,public http:Http,public alerCtrl: AlertController) {
      this.getNews()
  }

  getNews(){
    this.http.post('http://127.0.0.1/apps/getNews.php',null,null)
    .subscribe(
      data=>{
        this.datalist = data.json();
        console.log(data.json());
      },error=>{
        this.AlertError();
        console.log("เชื่อมบ่ได้เด้อ")
      }
    )
  }

  goDetail(_n){
    this.navCtrl.push(NewsDetailPage,{item:_n});
  }

  AlertError() {
    let alert = this.alerCtrl.create({
      title: 'ไม่สามารถเชื่อมต่อได้!',
      message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
      buttons: ['ตกลง']
    });
    alert.present()
  }
}
