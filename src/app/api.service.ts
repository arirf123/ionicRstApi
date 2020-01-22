import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
	API_KEY ='adb24cc320db40a9810eb2868eeb9ca4';

  constructor(private HttpClient: HttpClient) { }
		getNews(){
			return this.HttpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=adb24cc320db40a9810eb2868eeb9ca4')
		}
}