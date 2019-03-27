                        // FIRST TASK
// İstifadəçidən yaratmaq istədiyi Array-in uzunluğunu soruşursunuz. Həmin rəqəm qədər istifadəçidən ədəd istəyirsiniz və bir array-ə doldurursunuz. Daha sonra o rəqəmlər arasında ən böyüyünü, ən kiçiyini və orta rəqəmi tapın
//  "user strict";
//  let numbers=[];


// for(let i = 0; i <4; i++) {
//     let userInput = prompt(i+1 + "-ci reqemi daxil edin:");    
//     let userNumber = +userInput;
//     numbers.push(userNumber);
// }

// let max = numbers[0];

// for (let i=0 ; i <4; i++){
//     if(numbers[i] > max)
//     {
//      max = numbers[i];
//     }
// }

// let min = numbers[0];

// for (let i=0 ; i < numbers.length; i++){
//     if(numbers[i] < min)
//     {
//      min = numbers[i];
//     }
// }

// reqemlerin cemi
// let sum = 0;
// for (let i=0 ; i < numbers.length; i++){
//     sum = sum + numbers[i];
// }

// ededi orta
// let middle = sum / numbers.length;


// console.log(numbers);
// console.log("maximum reqem = " + max);
// console.log("minimum reqem = " + min);
// console.log("ededlerin ededi ortasi = " + middle);

                    //SECOND TASK     

// İstifadəçidən yaratmaq istədiyi Array-in uzunluğunu soruşursunuz. Həmin rəqəm qədər istifadəçidən ədəd istəyirsiniz və bir array-ə doldurursunuz. Daha sonra o rəqəmlər arasında yalnız cüt ədədlərin sayını tapırsınız və console-a yazdırırsınız.
// "user strict";
//  let numbers=[];


// for(let i = 0; i <5; i++) {
//     let userInput = prompt(i+1 + "-ci reqemi daxil edin:");    
//     let userNumber = +userInput;
//     numbers.push(userNumber);
// }
// for(let i=0;i <numbers.length ; i++)

// if((arr[i] % 2) === 0){
//     numbers++;
// }
// console.log(numbers);

                        // THIRD TASK
 // İstifadəçidən yaratmaq istədiyi Array-in uzunluğunu soruşursunuz. 
// let arrayinUzunlugu = prompt("Please enter the size of array");

// let dolduracagimizArray = [];

// let saygac = 0;
// let butunReqemlerinCemi=0;
// let tekReqemlerinCemi=0;
// let cutReqemlerinCemi=0;

// Həmin rəqəm qədər istifadəçidən ədəd istəyirsiniz və bir array-ə doldurursunuz. 
// for(let i = 0 ; i < arrayinUzunlugu ; i++) {
//     dolduracagimizArray.push(parseInt(prompt("Please enter number")));
// }

// for(let i=0; i < dolduracagimizArray.length;i++) {

    // Daha sonra bütün rəqəmlərin cəmini
    // butunReqemlerinCemi = butunReqemlerinCemi + dolduracagimizArray[i];

    // tək rəqəmlərin cəmini
    // if(dolduracagimizArray[i] % 2 !== 0) {
    //     tekReqemlerinCemi += dolduracagimizArray[i];
    // }

    // cüt rəqəmlərin cəmini 
//     if(dolduracagimizArray[i] % 2 === 0) {
//         cutReqemlerinCemi += dolduracagimizArray[i];
//     }

// }

// console.log("The numbers you entered are " + dolduracagimizArray)

// console.log("The sum of all nubmers is " + butunReqemlerinCemi);
// console.log("The sum of all odd nubmers is " + tekReqemlerinCemi);
// console.log("The sum of all even nubmers is " + cutReqemlerinCemi);



//  let words=[];

// for(let i=10; i<5;i++)
// {

//     let word = prompt(i+1 + "-ci reqemi daxil edin:");    
//        words.push(word);
// }
// let maxword = words[0];
// let minword = words[0];

// for( let w of words)

// {
//     w.length>maxword.length? maxword =w : null;
//     w.length<minword.length? minword =w : null;

// }


// console.log(maxword,minword);
