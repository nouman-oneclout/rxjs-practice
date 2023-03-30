import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer4 } from './service/observer4';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rxjs-practice';
  // create an array
  constructor() { }

  ngOnInit(): void {
    const newObservale = new Observable<number>(observer => {
      for(let i = 0; i < 5; i++){
        observer.next(i); 
      }
      observer.complete();
    })

    let observer = {
      next: (data: number) => console.log('observer 1: ',data),
      error: (error: string) => console.log(error),
      complete: () => console.log('Complete all done'),
    }
    // one way
    newObservale.subscribe(observer);

    // second way
    newObservale.subscribe({
      next: (data: number) => console.log('observer 2: ',data),
      error: (error: string) => console.log(error),
      complete: () => console.log('Complete all done'),
    })

    // third way (using comma method callback) but this method is depricated
    newObservale.subscribe(
      (data)=> console.log('observer 3: ',data),
      (error) => console.log(error),
      () => console.log('complet done!')
    )

    // fourth way using class base approach
    newObservale.subscribe(new Observer4())
  }

}
