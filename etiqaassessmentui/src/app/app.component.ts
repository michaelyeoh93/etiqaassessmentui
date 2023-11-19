import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Etiqa Assessment';
  httpClient: HttpClient;
  baseUrl = environment.apiEndpoint;
  data: any;
  options = {
    headers: new HttpHeaders({
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
    })
};

  constructor(private _httpClient: HttpClient) {
    this.httpClient = _httpClient;
  }

  ngOnInit(): void {
    this.getList();
  }

  GET_USER_LIST = this.baseUrl + "/User";
  getList() {
    this.httpClient.get<any>(this.GET_USER_LIST, { headers: this.options.headers }).subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }

}