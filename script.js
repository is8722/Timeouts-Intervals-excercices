// Exercice 1
// let i = 0;
// let wilson = "wilson-2";
// const para = document.createElement("p");
// let div = document.getElementById("myDiv");

// function typewritter(text){
//     para.textContent += text[i];
//     div.appendChild(para);
//     console.log(text[i]);
//     i++;
// }
// let myInterval = setInterval(typewritter, 1000, wilson);

// function stopInterval(){
//     clearInterval(myInterval);
// }

// setInterval(stopInterval, (wilson.length*1000));

// Exercice 2

// let sec = 1;
// let min = 1;
// const secP = document.createElement("p");
// const minP = document.createElement("p");
// let div = document.getElementById("myDiv");

// function elapsedSeconds(){
//     secP.textContent = "seconds elapsed : ";
//     secP.textContent += sec;
//     // console.log("seconds elapsed : " + sec);
//     sec++;
//     if(sec==60){
//         minP.textContent = min;
//         minP.textContent += " minute has passed";
//         // console.log(min + " minute has passed");
//         sec = 0;
//         min++;
//     }
// }

// div.appendChild(secP);
// div.appendChild(minP);
// myInterval = setInterval(elapsedSeconds, 1000);