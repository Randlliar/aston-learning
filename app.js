function memoize(callback) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args.sort());
        console.log(key);
        console.log('cache before ', cache);



        if (cache[`${key}`] !== undefined) {
            console.log('Get from cache');
            console.log('123',cache[`${key}`])
            return cache[`${key}`];
        }

        console.log('First calculation')
        const result = callback(...args);
        cache[`${key}`] = result;
        console.log('cache after ', cache);

        return result;
    }
}

function sum(...args) {
 return args.reduce((acc, item) => {
     acc += item;
     return acc;
 }, 0)
}

const sumWithCache = memoize(sum)

sumWithCache(2,3,4);
sumWithCache(2,4,3);
sumWithCache(-1,4,2);
sumWithCache(2,4,-1);

//task 2

function add(a) {
    let sum = a;

    function next(b) {
        if (b === undefined) {
            return sum;
        }
        sum += b;
        return next;
    }

    return next;
}

console.log(add(1)(2)(3)());
console.log(add(4)(5)(6)(7)());

//task 3

function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.call(obj);
logger.apply(obj);
logger.bind(obj)();

//task 4

function myBind(func, context) {
    return function(...args) {
        return func.apply(context, args);
    }
}

const a = function () {
    return this;
}

const b = myBind(a, {foo: 'bar' });
console.log(b())