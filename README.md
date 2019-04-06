## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install @anupam.bharti/findinstring
```


## Usage

```js
const findme = require('@anupam.bharti/findinstring');

var toSearchArr = ['A', 'B', 'o', 'i', 'u'];
let str = 'This is Sample string to be searched';

let res = findme(str, toSearchArr, 1);

console.log(res);

Will Output : 

{ 
  count: [ a: 2, e: 4, o: 1, i: 3 ],
  indexes:
   [ a: [ 9, 30 ],
     e: [ 13, 26, 29, 34 ],
     o: [ 23 ],
     i: [ 2, 5, 18 ] ] 
}

```
