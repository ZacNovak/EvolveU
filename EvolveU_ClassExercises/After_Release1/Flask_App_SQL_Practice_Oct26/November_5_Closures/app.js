/********************8
*
*/

var myModule = (function() {
    
    
    
    function printArray(inputArray){
        var returnString ="";
        for(let i=0; i<inputArray.length; i++){
            returnString += i + ", " + inputArray[i] + "<br>";
        }
        return returnString;
    };
    
    function myPrint(information){
        console.log(information);
    };
    
    function getSmallest(insertedArray){
        var smallest = insertedArray[0];
        for(var i=1; i<insertedArray.length; i++){
            if(insertedArray[i]<smallest){
                smallest = insertedArray[i];
            };
        };
    return smallest; 
    };
    
    function getLargest(insertedArray){
        var largest = insertedArray[0];
        for(var i=1; i<insertedArray.length; i++){
            if(insertedArray[i]>largest){
                largest = insertedArray[i];
            };
        };
        return largest;
    };
   
    function printObject(insertedObject){
        var returnStringObject ="";
        for(var key in insertedObject){
            returnStringObject += key + ": " + insertedObject[key] + "<br>";       
        };
        return returnStringObject;
    };
     
    
    document.querySelector('.putbelow').addEventListener('click', function() {
        console.log("This button is not working anymore");
        
    });

    console.log("Play Module");
    document.querySelector('.JSON').addEventListener('click', function() {
        var inputText = document.querySelector('.toptext').value;
        var JSONInputText = JSON.parse(inputText);
        if(Array.isArray(JSONInputText)){
            var printInputText = printArray(JSONInputText); 
                document.querySelector('.bottomtext').innerHTML = printInputText;

            document.querySelector('.smallestnumber').innerHTML = getSmallest(JSONInputText);
             document.querySelector('.largestnumber').innerHTML = getLargest(JSONInputText);
        } else {
            document.querySelector('.bottomtext').innerHTML = printObject(JSONInputText);
        };
    });

    document.querySelector('.PrintArray').addEventListener('click', function() {
        var myArray = [1, 7, 3, 8, 10];
        console.log(printArray(myArray));
    });

    document.querySelector('.PrintObject').addEventListener('click', function() {
        var myObject = { 
            name: 'Zac',
            age: 29
        };
        for(var key in myObject){
            console.log(key + ", " + myObject[key]);
        };  
    });
    
     
    
   var counter = 1;  
    document.querySelector('.DivBuilder').addEventListener('click', function() {
        let container = document.getElementById("divHolder");
        let div = document.createElement('DIV');
        let text = document.createTextNode(counter);
        
        div.id = counter;
        div.classList.add('box');
        div.onclick = remChild;
        div.appendChild(text);
        
        container.appendChild(div);
        counter++;
        
         
     });
    
    function remChild(e){
        e.target.parentNode.removeChild(e.target);
    }
    
//    function httpGet(theUrl){
//        return fetch(url, {
//            method: "GET", // *GET, POST, PUT, DELETE, etc.
//            mode: "no-cors", // no-cors, cors, *same-origin
//            body: JSON.stringify(data), // body data type must match "Content-Type" header
//        })
//        .then(response => response.json()); // parses response to JSON
    //}
//};
    

    
//    document.querySelector('.GetClient').addEventListener('click', function() {
//        httpGet('http://0.0.0.0:5000/client/1').then(data => console.log(JSON.stringify(data))); // JSON-string from `response.json()` call  
//        });
    
})();



console.log(myModule);
//console.log(myModule.myString);