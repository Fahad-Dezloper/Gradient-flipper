let randomColor11, randomColor12, randomColor13, color11Hex, color12Hex, color13Hex, randomColor21, randomColor22, randomColor23, color21Hex, color22Hex, color23Hex, randomColor31, randomColor32, randomColor33, color31Hex, color32Hex, color33Hex, randomColor41, randomColor42, randomColor43, randomColor51, randomColor52,randomColor53, color41Hex, color42Hex, color43Hex, color51Hex, color52Hex, color53Hex,
randomColor61, randomColor62, randomColor63, randomColor71, randomColor72,randomColor73, color61Hex, color62Hex, color63Hex, color71Hex, color72Hex, color73Hex, 
randomColor81, randomColor82,randomColor83, color81Hex, color82Hex, color83Hex;


const btn = document.querySelector(".btn");
btn.addEventListener("click", function(){


randomColor11 = Math.floor(Math.random()*155) + 101;
color11Hex = decimalToHex(randomColor11);
console.log(color11Hex);
    
randomColor12 = Math.floor(Math.random()*155) + 101;
color12Hex = decimalToHex(randomColor12);
console.log(color12Hex);

randomColor13 = Math.floor(Math.random()*155) + 101;
color13Hex = decimalToHex(randomColor13);
console.log(color13Hex);

randomColor21 = Math.floor(Math.random()*155) + 101;
color21Hex = decimalToHex(randomColor21);
console.log(color21Hex);

randomColor22 = Math.floor(Math.random()*155) + 101;
color22Hex = decimalToHex(randomColor22);
console.log(color22Hex);

randomColor23 = Math.floor(Math.random()*155) + 101;
color23Hex = decimalToHex(randomColor23);
console.log(color23Hex);

randomColor31 = Math.floor(Math.random()*155) + 101;
color31Hex = decimalToHex(randomColor31);
console.log(color31Hex);

randomColor32 = Math.floor(Math.random()*155) + 101;
color32Hex = decimalToHex(randomColor32);
console.log(color32Hex);

randomColor33 = Math.floor(Math.random()*155) + 101;
color33Hex = decimalToHex(randomColor33);
console.log(color33Hex);

randomColor41 = Math.floor(Math.random()*155) + 101;
color41Hex = decimalToHex(randomColor41);
console.log(color41Hex);

randomColor42 = Math.floor(Math.random()*155) + 101;
color42Hex = decimalToHex(randomColor42);
console.log(color42Hex);

randomColor43 = Math.floor(Math.random()*155) + 101;
color43Hex = decimalToHex(randomColor43);
console.log(color43Hex);

randomColor51 = Math.floor(Math.random()*155) + 101;
color51Hex = decimalToHex(randomColor51);
console.log(color51Hex);

randomColor52 = Math.floor(Math.random()*155) + 101;
color52Hex = decimalToHex(randomColor52);
console.log(color52Hex);

randomColor53 = Math.floor(Math.random()*155) + 101;
color53Hex = decimalToHex(randomColor53);
console.log(color53Hex);

randomColor61 = Math.floor(Math.random()*155) + 101;
color61Hex = decimalToHex(randomColor61);
console.log(color61Hex);

randomColor62 = Math.floor(Math.random()*155) + 101;
color62Hex = decimalToHex(randomColor62);
console.log(color62Hex);

randomColor63 = Math.floor(Math.random()*155) + 101;
color63Hex = decimalToHex(randomColor63);
console.log(color63Hex);


randomColor71 = Math.floor(Math.random()*155) + 101;
color71Hex = decimalToHex(randomColor71);
console.log(color71Hex);

randomColor72 = Math.floor(Math.random()*155) + 101;
color72Hex = decimalToHex(randomColor72);
console.log(color72Hex);

randomColor73 = Math.floor(Math.random()*155) + 101;
color73Hex = decimalToHex(randomColor73);
console.log(color73Hex);


randomColor81 = Math.floor(Math.random()*155) + 101;
color81Hex = decimalToHex(randomColor81);
console.log(color81Hex);

randomColor82 = Math.floor(Math.random()*155) + 101;
color82Hex = decimalToHex(randomColor82);
console.log(color82Hex);

randomColor83 = Math.floor(Math.random()*155) + 101;
color83Hex = decimalToHex(randomColor83);
console.log(color83Hex);

console.log(inset());

document.querySelector(".boxx").style.boxShadow = inset();
document.querySelector(".boxx").style.transition = "0.8s";

});


function decimalToHex(decimalNumber) {
    let hexNumber = "";
  
    while (decimalNumber > 0) {
        let remainder = decimalNumber % 16;
        hexNumber = "0123456789ABCDEF"[remainder] + hexNumber;
        decimalNumber = Math.floor(decimalNumber / 16);
    }
    
    return hexNumber;
}

function inset(){
    return "inset 0 0 50px #" + color11Hex + color12Hex + color13Hex + ",inset 20px 0 80px #" + color21Hex + color22Hex + color23Hex + ",inset -20px 0 80px #" + color31Hex + color32Hex + color33Hex + ", inset 20px 0 300px #" + color41Hex + color42Hex + color43Hex + ", inset -20px 0 300px #" + color51Hex + color52Hex + color53Hex + ", 0 0 50px #" + color61Hex + color62Hex + color63Hex + ", -10px 0 80px #" + color71Hex + color72Hex + color73Hex + ", -10px 0 80px #" + color81Hex + color82Hex + color83Hex;

}



// color11Hex, color12Hex, color13Hex, color21Hex, color22Hex, color23Hex, color31Hex, color32Hex, color33Hex


// let randomColorR, randomColorB, randomColorG, randomColorA, randomValue;

// let randomColor11, randomColor12, randomColor13, color11Hex, color12Hex, color13Hex, randomColor21, randomColor22, randomColor23, color21Hex, color22Hex, color23Hex, randomColor31, randomColor32, randomColor33, color31Hex, color32Hex, color33Hex;

// const btn = document.querySelector(".bkg-btn");
// btn.addEventListener("click", function(){
// randomColorR = Math.floor(Math.random()*155 + 1);
// randomColorG = Math.floor(Math.random()*155 + 1);
// randomColorB = Math.floor(Math.random()*155 + 1);
// randomValue = Math.random();
// randomColorA = parseInt(randomValue.toString().split('.')[1][0], 10);


// randomColor11 = Math.floor(Math.random()*155 + 1);
// color11Hex = decimalToHex(randomColor11);

// randomColor12 = Math.floor(Math.random()*155 + 1);
// color12Hex = decimalToHex(randomColor12);

// randomColor13 = Math.floor(Math.random()*155 + 1);
// color13Hex = decimalToHex(randomColor13);

// randomColor21 = Math.floor(Math.random()*155 + 1);
// color21Hex = decimalToHex(randomColor21);

// randomColor22 = Math.floor(Math.random()*155 + 1);
// color22Hex = decimalToHex(randomColor22);

// randomColor23 = Math.floor(Math.random()*155 + 1);
// color23Hex = decimalToHex(randomColor23);

// randomColor31 = Math.floor(Math.random()*155 + 1);
// color31Hex = decimalToHex(randomColor31);

// randomColor32 = Math.floor(Math.random()*155 + 1);
// color32Hex = decimalToHex(randomColor32);

// randomColor33 = Math.floor(Math.random()*155 + 1);
// color33Hex = decimalToHex(randomColor33);


// document.querySelector(".boxx").style.boxShadow = randomColor();
// console.log(randomColor());

// // document.querySelector(".clr").innerHTML = randomColor();
// });

// function randomColor(){
//     // return "rgba(" + randomColorR + "," + randomColorG + "," + randomColorB + "," + "0." + randomColorA +")";

//     return "inset " + "0 " + "0 " + "50px " + "#" + color11Hex + color12Hex + color13Hex + "," + "inset " + "20px " + "0 " + "80px " + "#" + color21Hex + color22Hex + color23Hex + "," + "inset " + "-20px " + "0 " + "80px " + "#" + color31Hex + color32Hex + color33Hex;
//     }

// function decimalToHex(decimalNumber) {
//             let hexNumber = "";
          
//             while (decimalNumber > 0) {
//                 let remainder = decimalNumber % 16;
//                 hexNumber = "0123456789ABCDEF"[remainder] + hexNumber;
//                 decimalNumber = Math.floor(decimalNumber / 16);
//             }
            
//             return hexNumber;
//         }
