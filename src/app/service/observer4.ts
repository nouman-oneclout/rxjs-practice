import { Observer } from 'rxjs';

export class Observer4 implements Observer<number> {
    next(data: number){
        console.log('observer 4: ', data);
    }

    error(err: string){
        console.log(err);
    }

    complete() {
        console.log('complete done by class')
    }
}