function text(){
let array = (["Wambui","Kate","Cherry","Paisley"]);
for(let words of array){
    console.log(words.toString())
 }
}
text();

// Write a function that accepts an array of numbers 
//and uses the forEach() method to console.log each number multiplied by 2.

let nums = [71,78,87,79];
multiply(nums);
function multiply(Arr) {
    Arr.forEach(function(number) {
      console.log(number * 2);
    });
  }
  


// // Write a function that takes in an array of numbers and
// //  consoles the first four items multiplied by 8 and the last 
// //  two added by 5. Console the array with the new values
let array8 = [6,10,13,17,23,52];
inside (array8);

function inside(item) {
    for (let i = 0; i < 4; i++) {
      item[i] = item[i] * 8;
    }
    let lastnumbers= item.length - 1;
    item[lastnumbers] += 5;
    item[lastnumbers- 1] += 5;
    console.log(item);
}



// // }
let array5 =[10,20,30,40,50,60,70];
 doneit (array5);

function doneit (array1){
    let i =0;
    while(i<array1.length){

        if(array1[i]===array1[4]){
            break;

            console.log(array1[i]);
            i++;
        }
    }

}

// Write a function that takes in a an array of strings 
// and use a continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']
let fruits =['apple','plum','banana','strawberries','kiwi'];
    thisfruit =(fruits);

    function thisfruit(array7){
        for(let i = 0; i< array7.length; i++){
            
            if(i===2){  
                continue;
            }
        }
        console.log({"continue":array7[i]}); 
    }
    thisfruit()
