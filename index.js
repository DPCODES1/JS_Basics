// conditional statements & looping statements
// cond-if if..else if..else switch-cases
// loops-for,for-in,for-of,while,do-while
const val = +prompt("Input");
if(val==1) {
    console.log("hello")
} else if(val==2) {
    console.log("Elseif")
} else {
    console.log("Else")
}

switch (
  val //===
) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  default:
    console.log("default");
    break;
}

init;cond;increment/decrementation

const arr = [1,2,3,4,6]
for(let i = 0;i<arr.length;) {
    console.log(arr[i])
    i++
}

for(const arrItems of arr) { //To Iterate through arrays you will use for-of
    console.log(arrItems)
}

const obj = {name:"Deepak",age:23}
for(const key in obj) {
    console.log(obj[key])
}

function randomGen() {
    return Math.floor(Math.random() * 20) + 1
}

let random = randomGen()

while(random != 15) {
    console.log(random)
    random = randomGen()
}

do {
    console.log(random)
    random = randomGen()
} while(random == 15)