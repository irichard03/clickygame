const originalArray = ["cat", "dog", "duck", "bear", "rabbit"];
let currentArray; 

    function outputArray(arrayInput) {
        arrayInput.forEach(element => {
            console.log(element);
        });
    }

    function removeIndex(arrayInput, index){
        let myArray = arrayInput.filter(myIndex => myIndex !== index);
        return myArray;
    }
       
    function shuffleArray(arrayInput){
        console.log(arrayInput);
        let myArray = arrayInput;
        let n = myArray.length;
        let temp
        let rando;
        
        //Fisher–Yates shuffle Algorithm
        //n = array lenght, get a random integer between 0 and i, when i = 0 stop.
        for( let i = n-1; i > 0; i--){
            rando = randomizer( 0, i);
            //set temp = to the value of i, it will go into the randomized element
            temp = myArray[i];
            myArray[i] = myArray[rando];
            myArray[rando] = temp;

        }
        console.log(myArray);
    }

    function randomizer(min, max){
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    //outputArray(originalArray);
    //currentArray = removeIndex(originalArray, "bear");
    //outputArray(currentArray);
    shuffleArray(originalArray);
