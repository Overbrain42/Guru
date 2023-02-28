import {Component, OnInit} from '@angular/core';
import {RequestsService} from '../services/requests.service';
import {Data} from '../static/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: Data[] = [];
  title = 'Guru App';
  constructor(
    private request: RequestsService
  ) {
  }

  ngOnInit() {
    this.request.get().subscribe(res => {
      localStorage.setItem('data', JSON.stringify(res));
      this.data = res;
    })
  }
}
