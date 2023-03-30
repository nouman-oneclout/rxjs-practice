import { AfterViewInit, Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'rxjs-practice';
  // create an array
  postArray = [
    { title: 'Leela1', description: 'Leela1 Description'},
    { title: 'Leela1', description: 'Leela1 Description'},
    { title: 'Leela1', description: 'Leela1 Description'}
  ]
  // now convert array into observable
  postArrayObservable$ = from(this.postArray);

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolve the promise. sending data');
    },3000)
  })
  // convert promise into observable
  promiseObservable$ = from(this.promise);

  constructor(){
    this.postArrayObservable$.subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log('Complete done!'),
    });

    this.promiseObservable$.subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log('promise done!'),
    });
  }
  ngAfterViewInit(): void {
    fromEvent(document.getElementById('click-button')!, 'click').subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log('promise done!'),
    });
  }  
}
