document.addEventListener('DOMContentLoaded', () => {
    initialize();

    
    button1.addEventListener('click', () => {
        console.log( document);
        document.querySelector("#answerButton").style.visibility = "visible";
        document.querySelector("#answerText").style.visibility = "hidden";
        //document.querySelector("#answerWrapper").innerText;
        getFacts1();
    });

    button2.addEventListener('click', () => {
        document.querySelector("#answerButton").style.visibility = "visible";
        document.querySelector("#answerText").style.visibility = "hidden";
        getFacts2();
    });

    button3.addEventListener('click', () => {
        document.querySelector("#answerButton").style.visibility = "visible";
        document.querySelector("#answerText").style.visibility = "hidden";
        getFacts3();
    });

    button4.addEventListener('click', () => {
        document.querySelector("#answerButton").style.visibility = "visible";
        document.querySelector("#answerText").style.visibility = "hidden";
        getFacts4();
    });

});

function getFacts1(){
    console.log(1);
    //create a random array index 
    let randNum = Math.floor(Math.random() * animals.length);
    //get a random question in animal facts
    document.querySelector("#questionBox").innerText = animals[randNum][0];
    document.querySelector("#answerButton").addEventListener('click', () => {
        //make the answer button invisible
        document.querySelector("#answerButton").style.visibility = "hidden";
        document.querySelector("#answerText").style.visibility = "visible";
        document.querySelector("#answerText").innerText = animals[randNum][1];

    })
}

function getFacts2(){
    //console.log(2);
    //document.querySelector("#boxWrapper").style.visibility = "hidden";
    //document.querySelector("#boxWrapper").remove();
    let randNum = Math.floor(Math.random() * coding.length);
    //document.querySelector('body').innerText = "button 2 again"

    document.querySelector("#questionBox").innerText = coding[randNum][0];
    document.querySelector("#answerButton").addEventListener('click', () => {
        //make the answer button invisible
        document.querySelector("#answerButton").style.visibility = "hidden";
        document.querySelector("#answerText").style.visibility = "visible";
        document.querySelector("#answerText").innerText = coding[randNum][1];

    });
    
}

function getFacts3(){
    //console.log(3);
    let randNum = Math.floor(Math.random() * geography.length);
    //document.querySelector('body').innerText = "button 3 again"


    document.querySelector("#questionBox").innerText = geography[randNum][0];
    document.querySelector("#answerButton").addEventListener('click', () => {
        //make the answer button invisible
        document.querySelector("#answerButton").style.visibility = "hidden";
        document.querySelector("#answerText").style.visibility = "visible";
        document.querySelector("#answerText").innerText = geography[randNum][1];
        //console.log(document.querySelector("#answerWrapper").innerText);

    });
    
}

function getFacts4(){
    console.log(4);
    // document.querySelector("#boxWrapper").remove();
    // document.querySelector('body').innerText = "button 4 again"
}

//adds button wrapper, boxes, and buttons 1-4
function initialize(){

    const board = document.querySelector('body');

    const boxWrapper = document.createElement('div');
    boxWrapper.setAttribute('id', 'boxWrapper');
    
    //make 4 buttonBox div containing a button
    const buttonBox1 = document.createElement('div');
    const buttonBox2 = document.createElement('div');
    const buttonBox3 = document.createElement('div');
    const buttonBox4 = document.createElement('div');

    buttonBox1.setAttribute("id", "buttonBox1");
    buttonBox2.setAttribute("id", "buttonBox2");
    buttonBox3.setAttribute("id", "buttonBox3");
    buttonBox4.setAttribute("id", "buttonBox4");
    
    buttonBox1.setAttribute('id', 'box1');
    buttonBox2.setAttribute('id', 'box2');
    buttonBox3.setAttribute('id', 'box3');
    buttonBox4.setAttribute('id', 'box4');
    
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');
    const button4 = document.createElement('button');
    
    button1.setAttribute('id', 'button1');
    button2.setAttribute('id', 'button2');
    button3.setAttribute('id', 'button3');
    button4.setAttribute('id', 'button4');
    
    button1.innerText = "Animal Facts";
    button2.innerText = "Coding Facts";
    button3.innerText = "Geography Facts";
    button4.innerText = "Mystery";
    
    buttonBox1.appendChild(button1);
    buttonBox2.appendChild(button2);
    buttonBox3.appendChild(button3);
    buttonBox4.appendChild(button4);
    
    boxWrapper.appendChild(buttonBox1);
    boxWrapper.appendChild(buttonBox2);
    boxWrapper.appendChild(buttonBox3);
    boxWrapper.appendChild(buttonBox4);
    board.appendChild(boxWrapper);

    const catBox = document.createElement('div');
    const cat = document.createElement('img');
    cat.setAttribute("src","src/assets/catL.PNG");
    cat.setAttribute("id", "catBox")
    catBox.appendChild(cat);
    board.appendChild(catBox);
    
    //create a question box
    const questionBox = document.createElement('div');
    questionBox.setAttribute("id", "questionBox");
    //document.querySelector('body').appendChild(questionBox);
    
    const answerWrapper = document.createElement('div');
    //document.querySelector('body').appendChild(answerWrapper);
    answerWrapper.setAttribute("id", "answerWrapper")

    const answerButton = document.createElement('button');
    answerButton.setAttribute("id", "answerButton")
    answerWrapper.appendChild(answerButton);
    answerButton.style.visibility = "hidden";

    const answerText = document.createElement('div');
    answerText.setAttribute("id", "answerText")
    answerWrapper.appendChild(answerText);
    answerText.style.visibility = "hidden";

    const qaBox = document.createElement('div');
    qaBox.setAttribute("id","qaBox");    
    qaBox.appendChild(questionBox);
    qaBox.appendChild(answerWrapper);
    board.appendChild(qaBox);
;
    


    answerButton.innerText = "Reveal answer"
    
    

}




