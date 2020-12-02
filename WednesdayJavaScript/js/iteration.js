// QA Exercises



// Q1
// let a = 100;
// do {
//     console.log(a);
//     a++;
// } while (a < 201);


//Q2
// for (let i = 100; i <= 200; i++) {
//     a % 2 == 0 ? console.log("- " + a) : console.log("* " + a);
//     a++;
// }


//Q3
// for (let i = 1; i < 11; i++) {
//     for (let j = 1; j < 11; j++) {
//         console.log(j);
//     }
// }


//Q4
// for (let a = 100; a <= 200; a++) {
//     console.log(`a = ${a}`);
//   }


//Q5
let d = new Date();
let n = d.getDay();
switch (n) {
    case 0:
        console.log("It's Sunday");
        break
    case 1:
        console.log("It's Monday");
        break
    case 2:
        console.log("It's Tuesday");
        break
    case 3:
        console.log("It's Wednesday");
        break
    case 4:
        console.log("It's Thursday");
        break
    case 5:
        console.log("It's Friday");
        break
    case 6:
        console.log("It's Saturday");
        break
    default:
        console.log("Que?");
        break;
}