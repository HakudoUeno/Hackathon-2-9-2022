document.addEventListener('DOMContentLoaded', () => {
    initialize();

    //click event for categories
    button1.addEventListener('click', () => {
        console.log( document);
        document.querySelector("#cat").setAttribute("src","src/assets/catR.PNG");
        document.querySelector("#qaBox").style.display = "inline";
        document.querySelector("#answerButton").style.display = "inline";
        document.querySelector("#answerText").style.display = "none";
        document.querySelector("#boxWrapper").style.display = "none";
    
        //jumping function
        let x = 0;
        let interval = setInterval(function() {
        x++;
        document.querySelector("#catBox").style.top = 50 - (-0.1 * x * (x - 50)) + 'px';

        if(x >= 50) clearInterval(interval);
        }, 20);
        //document.querySelector("#answerWrapper").innerText;
        getFacts1();
    });

    button2.addEventListener('click', () => {
        document.querySelector("#cat").setAttribute("src","src/assets/catR.PNG");
        document.querySelector("#qaBox").style.display = "inline";
        document.querySelector("#answerButton").style.display = "inline";
        document.querySelector("#answerText").style.display = "none";
        document.querySelector("#boxWrapper").style.display = "none";

        let x = 0;
        let interval = setInterval(function() {
        x++;
        document.querySelector("#catBox").style.top = 50 - (-0.1 * x * (x - 50)) + 'px';

        if(x >= 50) clearInterval(interval);
        }, 20);
        getFacts2();
    });

    button3.addEventListener('click', () => {
        document.querySelector("#cat").setAttribute("src","src/assets/catR.PNG");
        document.querySelector("#qaBox").style.display = "inline";
        document.querySelector("#answerButton").style.display = "inline";
        document.querySelector("#answerText").style.display = "none";
        document.querySelector("#boxWrapper").style.display = "none";

        let x = 0;
        let interval = setInterval(function() {
        x++;
        document.querySelector("#catBox").style.top = 50 - (-0.1 * x * (x - 50)) + 'px';

        if(x >= 50) clearInterval(interval);
        }, 20);
        getFacts3();
    });

    button4.addEventListener('click', () => {
        document.querySelector("#catVoice1").play();
        let randomNum = Math.floor(Math.random()*4);
        while(randomNum == document.querySelector("body").style.backgroundImage.charAt(document.querySelector("body").style.backgroundImage.length - 5)){
            randomNum = Math.floor(Math.random()*4);
        }
        console.log(document.querySelector("body").style.background)
        console.log(document.querySelector("body").style.background === "")
        if(document.querySelector("body").style.backgroundImage === "") {
            document.querySelector("body").style.backgroundImage = `url(src/assets/catGIFs/cat${randomNum}.gif)`
        }
        else{
            document.querySelector("body").style.backgroundImage = `url(src/assets/catGIFs/cat${randomNum}.gif)`
            //document.querySelector("body").style.background = document.querySelector("body").style.background + `, url(src/assets/catGIFs/cat${randomNum}.gif)`;
        }
        
        console.log(document.querySelector("body").style.backgroundImage)

        let x = 0;
        let interval = setInterval(function() {
        x++;
        document.querySelector("#catBox").style.top = 50 - (-0.1 * x * (x - 50)) + 'px';

        if(x >= 50) clearInterval(interval);
        }, 20);
        getFacts4();
    });

    //event listener  for goback button
    document.querySelector("#gobackButton").addEventListener('click', () => {
        //make the answer button invisible
        document.querySelector("#cat").setAttribute("src","src/assets/catL.PNG");
        document.querySelector("#qaBox").style.display = "none";
        document.querySelector("#answerText").style.display = "none";
        document.querySelector("#gobackButton").style.display = "none";
        document.querySelector("#boxWrapper").style.display = "inline";
    })

});

//functions to get facts appear
function getFacts1(){
    console.log(1);
    //create a random array index 
    let randNum = Math.floor(Math.random() * animals.length);
    //get a random question in animal facts
    document.querySelector("#questionBox").innerText = animals[randNum][0];

    //event listener when clicking reveal answer button
    document.querySelector("#answerButton").addEventListener('click', () => {
        //make the answer button invisible
        document.querySelector("#answerButton").style.display = "none";
        document.querySelector("#answerText").style.display = "inline";
        document.querySelector("#gobackButton").style.display = "inline";
        document.querySelector("#answerText").innerText = animals[randNum][1];

        let x = 0;
        let interval = setInterval(function() {
        x++;
        document.querySelector("#catBox").style.left = 350 + (-0.1 * x * (x - 50)) + 'px';

        if(x >= 50) clearInterval(interval);
        }, 20);

    })
}

function getFacts2(){
    //console.log(2);
    //document.querySelector("#boxWrapper").style.display = "none";
    //document.querySelector("#boxWrapper").remove();
    let randNum = Math.floor(Math.random() * coding.length);
    //document.querySelector('body').innerText = "button 2 again"

    document.querySelector("#questionBox").innerText = coding[randNum][0];
    //event listener when clicking reveal answer button
    document.querySelector("#answerButton").addEventListener('click', () => {
        //make the answer button invisible
        document.querySelector("#answerButton").style.display = "none";
        document.querySelector("#answerText").style.display = "inline";
        document.querySelector("#gobackButton").style.display = "inline";
        document.querySelector("#answerText").innerText = coding[randNum][1];

        let x = 0;
        let interval = setInterval(function() {
        x++;
        document.querySelector("#catBox").style.left = 350 + (-0.1 * x * (x - 50)) + 'px';

        if(x >= 50) clearInterval(interval);
        }, 20);

    });
    
}

function getFacts3(){
    //console.log(3);
    let randNum = Math.floor(Math.random() * geography.length);
    //document.querySelector('body').innerText = "button 3 again"


    document.querySelector("#questionBox").innerText = geography[randNum][0];

    //event listener when clicking reveal answer button
    document.querySelector("#answerButton").addEventListener('click', () => {
        //make the answer button invisible
        document.querySelector("#answerButton").style.display = "none";
        document.querySelector("#answerText").style.display = "inline";
        document.querySelector("#gobackButton").style.display = "inline";
        document.querySelector("#answerText").innerText = geography[randNum][1];
        //console.log(document.querySelector("#answerWrapper").innerText);

        let x = 0;
        let interval = setInterval(function() {
        x++;
        document.querySelector("#catBox").style.left = 350 + (-0.1 * x * (x - 50)) + 'px';

        if(x >= 50) clearInterval(interval);
        }, 20);

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
    
    // buttonBox1.setAttribute('id', 'box1');
    // buttonBox2.setAttribute('id', 'box2');
    // buttonBox3.setAttribute('id', 'box3');
    // buttonBox4.setAttribute('id', 'box4');
    
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');
    const button4 = document.createElement('button');
    
    button1.setAttribute('id', 'button1');
    button2.setAttribute('id', 'button2');
    button3.setAttribute('id', 'button3');
    button4.setAttribute('id', 'button4');
    
    button1.setAttribute("class","ButtonClass");
    button2.setAttribute("class","ButtonClass");
    button3.setAttribute("class","ButtonClass");
    button4.setAttribute("class","ButtonClass");


    button1.innerText = "Animal Facts";
    button2.innerText = "Coding Facts";
    button3.innerText = "Geography Facts";
    button4.innerText = "Something Fun";
    
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
    cat.setAttribute("id", "cat")
    catBox.setAttribute("id", "catBox")
    catBox.appendChild(cat);
    board.appendChild(catBox);
    
    //create a question box
    const questionBox = document.createElement('div');
    questionBox.setAttribute("id", "questionBox");
    //document.querySelector('body').appendChild(questionBox);
    
    const answerWrapper = document.createElement('div');
    //document.querySelector('body').appendChild(answerWrapper);
    answerWrapper.setAttribute("id", "answerWrapper")

    //create a reveal answer button and answer text
    const answerButton = document.createElement('button');
    answerButton.setAttribute("class","ButtonClass");
    answerButton.setAttribute("id", "answerButton")
    answerWrapper.appendChild(answerButton);
    answerButton.innerText = "Reveal answer";
    answerButton.style.display = "none";

    const answerText = document.createElement('div');
    answerText.setAttribute("id", "answerText")
    answerWrapper.appendChild(answerText);
    answerText.style.display = "none";

    //create a go back button after answer revel is clicked
    const gobackButton = document.createElement('button');
    gobackButton.setAttribute("class","ButtonClass");
    gobackButton.setAttribute("id","gobackButton");
    answerWrapper.appendChild(gobackButton);
    gobackButton.innerText = "Go back"
    answerWrapper.appendChild(gobackButton);
    gobackButton.style.display = "none";

    const qaBox = document.createElement('div');
    qaBox.setAttribute("id","qaBox");    
    qaBox.appendChild(questionBox);
    qaBox.appendChild(answerWrapper);
    board.appendChild(qaBox);
    qaBox.style.display = "none";

    //add some audio to the mystery button
    const catVoice1 = document.createElement('audio');
    catVoice1.setAttribute("src", "src/assets/cat1.mp3");
    catVoice1.setAttribute("id", "catVoice1");
    button4.append(catVoice1);
    
    // const catDanceBox = document.createElement('div')
    // const catDance = document.createElement('img');
    // catDance.setAttribute("src","src/assets/danceCat.gif");
    // catDanceBox.appendChild(catDance);
    // board.appendChild(catDanceBox);
    // catDanceBox.display = "none";
   
    
    

}




