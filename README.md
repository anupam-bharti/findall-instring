# findall-instring

String as first argument, Accept array of string as second argument, Search in a string and find all occurance count with indexes

For Eg:

let toSearchArr = ['a', 'e', 'o', 'i', 'u'];

let str = 'This is Sample string to be searched';

let res = findme(str, toSearchArr);

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
