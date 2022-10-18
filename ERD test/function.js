// number 1
function Looped(n){
    var numberAmount = n+3;
    for(let i = 1; i<=n; i++){
        let result = ""
        for(let j = 1; j<=numberAmount; j++){
            if (j == i+1) result += "*"
            if (j+1 == i+2) result += "*"
            else result += j;
        }
        console.log(result)
    }
}

Looped(5)
Looped(4)

function selisih(array){
    let maxNum = 1;
    for(let i=0; i<array.length; i++){
        for(let j = array.length-1; j > i; j--){
            let count = array[j] - array[i];
            maxNum = Math.max(count, maxNum);
        }
    }
    console.log(maxNum);
}

let array = [10, 7, 5, 8, 11, 9, 1]
selisih(array);


// kubernetes: it's a cloud which one could upload their program in a scalable environment

// ORM: allows programmers to access the database through the use of queries

// class: class is a classification of an object with their own set of values and functions

// function: it's a tool for developers to repeatedly use the same code over and over again

// devop: it's a part of a lifecycle (development and optimization) which allow a software to be delivered faster

// docker: a tool which allow a team to load their code in a virtual environment with the same system and version specification


// application architecture: microservice arhitecture. This allow a programmer to focus on one scope (frontend/backend) and they could combine many applications into a program through this architecutre