const doomCont = document.getElementById("containerDoom");

for (let i = 1; i <= 100; i++, msg="") {
    
    let square = document.createElement("div");
    square.classList.add("square");
    square.append(i);
    doomCont.append(square);
    
    console.log(doomCont);

    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
        square.classList.add('fizzbuzz');
    } else if(i % 3 == 0){
        console.log("Fizz");
        square.classList.add('fizz');
    } else if(i % 5 == 0){
        console.log("Buzz");
        square.classList.add('buzz');
    } else {
        console.log(i);
    };
}