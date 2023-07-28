// HW1.1
console.log("---------- Homework 1.1 ----------")
const draw1 = function(n){
    let text = "";
    for ( let i=0; i<n; i++){
        text += "*";

    }
    console.log(text);
}

draw1(2);
draw1(3);
draw1(4);


// HW1.2
console.log("---------- Homework 1.2 ----------")
const draw2 = function(n){
    let text = "";
    for ( let i=0; i<n; i++){
        for ( let j=0; j<n; j++){
        text += "*";}
        text += "\n";
    }
    console.log(text);
}

draw2(2);
draw2(3);
draw2(4);


//HW1.3
console.log("---------- Homework 1.3 ----------")
const draw3 = function(n){
    let text = "";
    for ( let i=0; i<n; i++){
        for ( let j=0; j<n; j++){
        text += j+1;}
        text += "\n";
    }
    console.log(text);
}

draw3(2);
draw3(3);
draw3(4);


//HW1.4
console.log("---------- Homework 1.4 ----------")
const draw4 = function(n){
    let text = "";
    for ( let i=0; i<n; i++){
        for ( let j=0; j<n; j++){
        text += i+1;}
        text += "\n";
    }
    console.log(text);
}

draw4(2);
draw4(3);
draw4(4);



//HW1.5
console.log("---------- Homework 1.5 ----------")
const draw5 = function(n){
    let text = "";
    for ( let i=0; i<n; i++){
        for ( let j=1; j<n; j++){
        text += n-i;}
        text += "\n";
    }
    console.log(text);
}

draw5(2);
draw5(3);
draw5(4);



//HW1.6
console.log("---------- Homework 1.6 ----------")

const draw6 = function(n){
    let text = "";
    let number = 1;  
    for (let i=0; i<n; i++) {
        for (let j=1; j<=n; j++) {
            text = text + number; 
            number++;            
        }                       
        text = text + "\n";        
    }
    return text;
}
console.log(draw6(2)); 
console.log(draw6(3));
console.log(draw6(4));  



//HW1.7
console.log("---------- Homework 1.7 ----------")
const draw7 = function(n){
    let text = '';
    let number = n*n;  
    for (let i=0; i<n; i++) {
        for (let j=1; j<=n; j++) {
            text = text + number; 
            number--;            
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw7(2));
console.log(draw7(3));
console.log(draw7(4));


//HW1.8
console.log("---------- Homework 1.8 ----------")
const draw8 = function(n){
    let text = '';     
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j+=n) {
            text = text + (i*2);                        
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw8(2));
console.log(draw8(3));
console.log(draw8(4));




//HW1.9
console.log("---------- Homework 1.9 ----------")
const draw9 = function(n){
    let text = '';     
    for (let i=1; i<=n; i++) {
        for (let j=0; j<n; j+=n) {
            text = text + (i*2);                        
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw9(2));
console.log(draw9(3));
console.log(draw9(4));




//HW1.10
console.log("---------- Homework 1.10 ----------")
const draw10 = function(n){
    let text = '';     
    for (let i=0; i<n; i++) {
        for (let j=1; j<=n; j++) {
            text = text + (j+(j*i));                        
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw10(2));
console.log(draw10(3));
console.log(draw10(4));



//HW1.11
console.log("---------- Homework 1.11 ----------")
const draw11 = function(n){
    let text = '';     
    for (let i=1; i<=n; i++) {
        for (let j=1; j<=n; j++) {
            let symbol = (j === i) ? '-' : '*' ;
            text = text + symbol;                        
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw11(2));
console.log(draw11(3));
console.log(draw11(4));




//HW1.12
console.log("---------- Homework 1.12 ----------")
const draw12 = function(n){
    let text = '';     
    for (let i=n; i>=1; i--) {
        for (let j=1; j<=n; j++) {
            let symbol = (j === i) ? '-' : '*' ;
            text = text + symbol;                        
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw12(2));
console.log(draw12(3));
console.log(draw12(4));


//HW2.1
console.log("---------- Homework 2.1 ----------")
const draw2o1 = function(n){
    let text = '';       
    for (let i=1; i<=n; i++) {
        for (let j=1; j<=n; j++) {
            let symbol = (j > i) ? '-' : '*' ;
            text = text + symbol;                        
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw2o1(2));
console.log(draw2o1(3));
console.log(draw2o1(4));

//HW2.2
console.log("---------- Homework 2.2 ----------")
const draw2o2 = function(n){
    let text = '';       
    for (let i=n; i>=1; i--) {
        for (let j=1; j<=n; j++) {
            let symbol = (j > i) ? '-' : '*' ;
            text = text + symbol;                        
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw2o2(2));
console.log(draw2o2(3));
console.log(draw2o2(4));


//HW2.3
console.log("---------- Homework 2.3 ----------")
const draw2o3 = function(n){
    let text = '';       
    for (let i=1; i<=n; i++) {
        for (let j=1; j<=n; j++) {
            let symbol = (j > i) ? '-' : '*' ;
            text = text + symbol;                        
        }                       
        text = text + '\n';        
    }
    for (let i=(n-1); i>=1; i--) {
        for (let j=1; j<=n; j++) {
            let symbol = (j > i) ? '-' : '*' ;
            text = text + symbol;                        
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw2o3(2));
console.log(draw2o3(3));
console.log(draw2o3(4));


//HW2.4
console.log("---------- Homework 2.4 ----------")
const draw2o4 = function(n){
    let text = '';
    let count = 1; 
    for (let i=n; i>=1; i--) {
        for (let j=1; j<=n; j++) {
            let symbol = (j < i) ? '-' : Number(count) ;
            text = text + symbol;
            if (typeof symbol === 'number') {
                count++;
            }
        }                       
        text = text + '\n';        
    }      
    for (let i=2; i<=n; i++) {
        for (let j=1; j<=n; j++) {
            let symbol = (j < i) ? '-' : Number(count) ;
            text = text + symbol;
            if (typeof symbol === 'number') {
                count++;
            }                                   
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw2o4(2));
console.log(draw2o4(3));
console.log(draw2o4(4));


//HW2.5
console.log("---------- Homework 2.5 ----------")
const draw2o5 = function(n){
    let text = '';       
    for (let i=n; i>=1; i--) {
        for (let j=1; j<=n; j++) {
            let symbol = (j < i) ? '-' : '*' ;
            text = text + symbol;                        
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw2o5(2));
console.log(draw2o5(3));
console.log(draw2o5(4));


//HW2.6
console.log("---------- Homework 2.6 ----------")
const draw2o6 = function(n){
    let text = '';       
    for (let i=1; i<=n; i++) {
        for (let j=1; j<=n; j++) {
            let symbol = (j < i) ? '-' : '*' ;
            text = text + symbol;                        
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw2o6(2));
console.log(draw2o6(3));
console.log(draw2o6(4));


//HW2.7
console.log("---------- Homework 2.7 ----------")
const draw2o7 = function(n){
    let text = ''; 
    for (let i=n; i>=1; i--) {
        for (let j=1; j<=n; j++) {
            let symbol = (j < i) ? '-' : '*' ;
            text = text + symbol;                        
        }                       
        text = text + '\n';        
    }      
    for (let i=2; i<=n; i++) {
        for (let j=1; j<=n; j++) {
            let symbol = (j < i) ? '-' : '*' ;
            text = text + symbol;                        
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw2o7(2));
console.log(draw2o7(3));
console.log(draw2o7(4));



//HW2.8
console.log("---------- Homework 2.8 ----------")
const draw2o8 = function(n){
    let text = '';
    let count = 1; 
    for (let i=n; i>=1; i--) {
        for (let j=1; j<=n; j++) {
            let symbol = (j < i) ? '-' : Number(count) ;
            text = text + symbol;
            if (typeof symbol === 'number') {
                count++;
            }
        }                       
        text = text + '\n';        
    }      
    for (let i=2; i<=n; i++) {
        for (let j=1; j<=n; j++) {
            let symbol = (j < i) ? '-' : Number(count) ;
            text = text + symbol;
            if (typeof symbol === 'number') {
                count++;
            }                                   
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw2o8(2));
console.log(draw2o8(3));
console.log(draw2o8(4));



//HW2.9
console.log("---------- Homework 2.9 ----------")
const draw2o9 = function(n){
    let text = '';         
    for (let i=n; i>=1; i--) {
        for (let j=1; j<=n; j++) {
            let symbol = (j < i) ? '-' : '*' ;
            text = text + symbol;                        
        }
        for (let j=(n-1); j>=1; j--) {
            let symbol = (j < i) ? '-' : '*' ;
            text = text + symbol;                        
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw2o9(2));
console.log(draw2o9(3));
console.log(draw2o9(4));


//HW2.10
console.log("---------- Homework 2.10 ----------")
const draw2o10 = function(n){
    let text = '';         
    for (let i=1; i<=n; i++) {
        for (let j=1; j<=n; j++) {
            let symbol = (j < i) ? '-' : '*' ;
            text = text + symbol;                        
        }
        for (let j=(n-1); j>=1; j--) {
            let symbol = (j < i) ? '-' : '*' ;
            text = text + symbol;                        
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw2o10(2));
console.log(draw2o10(3));
console.log(draw2o10(4));



//HW3.1
console.log("---------- Homework 3.1 ----------")
const draw3o1 = function(n){
    let text = '';         
    for (let i=n; i>=1; i--) {
        for (let j=1; j<=n; j++) {
            let symbol = (j < i) ? '-' : '*' ;
            text = text + symbol;                        
        }
        for (let j=(n-1); j>=1; j--) {
            let symbol = (j < i) ? '-' : '*' ;
            text = text + symbol;                        
        }                       
        text = text + '\n';        
    }
    for (let i=1; i<=n; i++) {
        for (let j=1; j<=n; j++) {
            let symbol = (j < i) ? '-' : '*' ;
            text = text + symbol;                        
        }
        for (let j=(n-1); j>=1; j--) {
            let symbol = (j < i) ? '-' : '*' ;
            text = text + symbol;                        
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw3o1(2));
console.log(draw3o1(3));
console.log(draw3o1(4));


//HW3.2
console.log("---------- Homework 3.2 ----------")
const draw3o2 = function(n){
    let text = '';
    let count = 1;
    for (let i=n; i>=1; i--) {
        for (let j=1; j<=n; j++) {
            let symbol = (j < i) ? '-' : Number(count) ;
            text = text + symbol;
            if (typeof symbol === 'number') {
                count++;
            }                        
        }
        for (let j=(n-1); j>=1; j--) {
            let symbol = (j < i) ? '-' : Number(count) ;
            text = text + symbol; 
            if (typeof symbol === 'number') {
                count++;
            }                       
        }                       
        text = text + '\n';        
    }       
    for (let i=2; i<=n; i++) {        
        for (let j=1; j<=n; j++) {
            let symbol = (j < i) ? '-' : Number(count) ;
            text = text + symbol; 
            if (typeof symbol === 'number') {
                count++;
            }                       
        }
        for (let j=(n-1); j>=1; j--) {
            let symbol = (j < i) ? '-' : Number(count) ;
            text = text + symbol; 
            if (typeof symbol === 'number') {
                count++;
            }                       
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw3o2(2));
console.log(draw3o2(3));
console.log(draw3o2(4));


//HW3.3
console.log("---------- Homework 3.3 ----------")


let myList = [
    ["*-"],
    ["**"],
    ["*--"],
    ["**-"],
    ["***"],
    ["*---"],
    ["**--"],
    ["***-"],
    ["****"]
   ];
   let text = '';
   for (let i = 0; i < myList.length; i++) {
    for (let j = 0; j < myList[i].length; j++) {
      text += myList[i][j];
    }
    text += '\n';
   }
   console.log(text);


//HW3.4
console.log("---------- Homework 3.4 ----------")
const draw3o4 = function(n){
    let text = '';         
    for (let i=n; i>=1; i--) {
        for (let j=1; j<=n; j++) {
            let symbol = (j < i) ? '-' : '*' ;
            text = text + symbol;                        
        }
        for (let j=(n-1); j>=1; j--) {
            let symbol = (j < i) ? '-' : '*' ;
            text = text + symbol;                        
        }                       
        text = text + '\n';        
    }
    for (let i=1; i<=n; i++) {
        for (let j=1; j<=n; j++) {
            let symbol = (j < i) ? '-' : '*' ;
            text = text + symbol;                        
        }
        for (let j=(n-1); j>=1; j--) {
            let symbol = (j < i) ? '-' : '*' ;
            text = text + symbol;                        
        }                       
        text = text + '\n';        
    }
    return text;
}
console.log(draw3o4(2));
console.log(draw3o4(3));
console.log(draw3o4(4));



