
const myObservable = new Rx.Observable(myObservable => {
    setTimeout(() => {
        myObservable.next('dog');
        myObservable.next('cat');
    }, 100);
})

myObservable.subscribe(result => {
    console.log('observable', result);
})