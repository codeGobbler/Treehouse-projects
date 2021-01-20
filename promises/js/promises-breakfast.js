const order = false;

const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (order) {
            resolve('Your order is ready!');
        } else {
            reject(Error('Oh man, your shit fucked up!'));
        }
    }, 3000);
});

console.log(breakfastPromise);
breakfastPromise
    .then(val => console.log(val))
    .catch(err => console.log(err));