// Print odds 1-20

for(i = 1; i <= 20; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}

// Decreasing multiples of 3

for(i = 100; i > 0; i--){
    if(i % 3 == 0){
        console.log(i);
    }
}

// Print the sequence 4, 2.5, 1, -0.5, -2, -3.5

for(i = 4; i >= -3.5; i = i - 1.5){
    console.log(i);
}

// Sigma - write code that will add all of the values from 1 - 100

var sum = 0;

for(i = 1; i <= 100; i++){
    console.log(sum += i);
}

// Factorial write code will multiply all values from 1-12

var product = 1;

for(i = 1; i <= 12; i++){
    console.log(product = product * i);
}