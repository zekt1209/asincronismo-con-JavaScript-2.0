const promise = new Promise(function (resolve, reject) {
    resolve('Hey!');
});

const cows = 15;

const countCows = new Promise (function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject(`There are no cows on the darm`);
    }
});

countCows.then((result) => {
    console.log(result);
})