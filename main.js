//Merge

let a = ['a', 'b', 'c']
let b = [1, 2, 3]
const c = b.concat(a)

for(i of c)
{
    console.log(i)
}

//every() kiem tra even number
let d = [2,4,5,6]
let e = [2,4,6]
console.log(e.every(evennumber))
console.log(d.every(evennumber))
function evennumber(a)
{
  return ((a%2) == 0)
}

//some()
let f = [1, 1, 3, 5, 7]
console.log(d.some(evennumber)) 
console.log(f.some(evennumber)) 
function evennumber(a)
{
  return ((a%2) == 0)
}

//filter()
const ft = [1, -2, 3, 4, -5];
const result = ft.filter(positive_number);

function positive_number(ft) {
  return ft > 0;
}
console.log(result)

// find() and findIndex()

const array1 = [-1, -2, 3, 4 -5]
const array2= [-1, -2]

function found(array)
{
  const result = array.find((element) => element > 0)
  const index = array.findIndex((element) => element >0)
  if(result !== undefined)
  {
    console.log(index, result)
  }
  else console.log ("No result")
}
found(array1)
found(array2)

//forEach()


//join()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const num = [1, 2, 3]
console.log(fruits.join())
console.log(num.join())