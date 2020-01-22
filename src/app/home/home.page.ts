import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	articles;

  constructor(private ApiService: ApiService) {}



ionViewDidEnter(){

	this.ApiService.getNews	().subscribe((data)=>{
		console.log(data);
		this.articles = data['articles'];
	}	);	
}
}