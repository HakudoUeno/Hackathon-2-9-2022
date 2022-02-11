document.addEventListener('DOMContentLoaded', () => {
    initialize();
    button1.addEventListener('click', () => {
        document.querySelector("#mainCat").setAttribute("src","src/assets/catR.PNG");
        document.querySelector("#qaWrapper").style.visibility = "visible";
        document.querySelector("#answerButton").style.visibility = "visible";
        document.querySelector("#answerText").style.visibility = "hidden";
        document.querySelector("#buttonWrapper").style.visibility = "hidden";
        
        let x = 0;
        let interval = setInterval(function() {
            x++;
            document.querySelector("#mainCat").style.top = 50 - (-0.1 * x * (x - 50)) + 'px';
            if(x >= 50) clearInterval(interval);
        }, 20);
        catVoice1.play()
        getFacts1();
    });

    button2.addEventListener('click', () => {
        document.querySelector("#mainCat").setAttribute("src","src/assets/catR.PNG");
        document.querySelector("#qaWrapper").style.visibility = "visible";
        document.querySelector("#answerButton").style.visibility = "visible";
        document.querySelector("#answerText").style.visibility = "hidden";
        document.querySelector("#buttonWrapper").style.visibility = "hidden";

        let x = 0;
        let interval = setInterval(function() {
        x++;
        document.querySelector("#mainCat").style.top = 50 - (-0.1 * x * (x - 50)) + 'px';
        if(x >= 50) clearInterval(interval);
        }, 20);
        catVoice1.play()
        getFacts2();
    });

    button3.addEventListener('click', () => {
        document.querySelector("#mainCat").setAttribute("src","src/assets/catR.PNG");
        document.querySelector("#qaWrapper").style.visibility = "visible";
        document.querySelector("#answerButton").style.visibility = "visible";
        document.querySelector("#answerText").style.visibility = "hidden";
        document.querySelector("#buttonWrapper").style.visibility = "hidden";

        let x = 0;
        let interval = setInterval(function() {
        x++;
        document.querySelector("#mainCat").style.top = 50 - (-0.1 * x * (x - 50)) + 'px';
        if(x >= 50) clearInterval(interval);
        }, 20);
        catVoice1.play()
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
        document.querySelector("#mainCat").style.top = 50 - (-0.1 * x * (x - 50)) + 'px';
        if(x >= 50) clearInterval(interval);
        }, 20);
        catSong.play();
        document.getElementById('catLogo').setAttribute('href','./src/assets/catGIFs/newLogo.jpg');
    });

    //event listener  for goback button
    document.querySelector("#goBackButton").addEventListener('click', () => {
        //make the answer button invisible
        document.querySelector("#mainCat").setAttribute("src","src/assets/catL.PNG");
        document.querySelector("#qaWrapper").style.visibility = "hidden";
        document.querySelector("#answerText").style.visibility = "hidden";
        document.querySelector("#goBackButton").style.visibility = "hidden";
        document.querySelector("#questionBox").style.visibility = "hidden";
        document.querySelector("#buttonWrapper").style.visibility = "visible";
    })

});

//functions to get facts appear
function getFacts1(){
    let randNum = Math.floor(Math.random() * animals.length);
    document.querySelector("#questionBox").style.visibility = "visible";
    document.querySelector("#questionBox").innerText = animals[randNum][0];
    document.querySelector("#answerButton").addEventListener('click', () => {
        document.querySelector("#answerButton").style.visibility = "hidden";
        document.querySelector("#answerText").style.visibility = "visible";
        document.querySelector("#goBackButton").style.visibility = "visible";
        document.querySelector("#answerText").innerText = animals[randNum][1];
    });
}

function getFacts2(){
    let randNum = Math.floor(Math.random() * coding.length);
    document.querySelector("#questionBox").style.visibility = "visible";
    document.querySelector("#questionBox").innerText = coding[randNum][0];
    document.querySelector("#answerButton").addEventListener('click', () => {
        document.querySelector("#answerButton").style.visibility = "hidden";
        document.querySelector("#answerText").style.visibility = "visible";
        document.querySelector("#goBackButton").style.visibility = "visible";
        document.querySelector("#answerText").innerText = coding[randNum][1];
    });
    
}

function getFacts3(){
    let randNum = Math.floor(Math.random() * geography.length);
    document.querySelector("#questionBox").style.visibility = "visible";
    document.querySelector("#questionBox").innerText = geography[randNum][0];
    document.querySelector("#answerButton").addEventListener('click', () => {
        document.querySelector("#answerButton").style.visibility = "hidden";
        document.querySelector("#answerText").style.visibility = "visible";
        document.querySelector("#goBackButton").style.visibility = "visible";
        document.querySelector("#answerText").innerText = geography[randNum][1];
    });
    
}


function initialize(){

    const bodyEle = document.querySelector('body');
    const ThreePartContainer = document.createElement('div');
    ThreePartContainer.setAttribute('id', 'ThreePartContainer');

    const buttonWrapper = document.createElement('div');
    buttonWrapper.setAttribute('id', 'buttonWrapper');
    
    //make 4 buttonBox div containing a button
    const buttonBox1 = document.createElement('div');
    const buttonBox2 = document.createElement('div');
    const buttonBox3 = document.createElement('div');
    const buttonBox4 = document.createElement('div');
    buttonBox1.setAttribute("id", "buttonBox1");
    buttonBox2.setAttribute("id", "buttonBox2");
    buttonBox3.setAttribute("id", "buttonBox3");
    buttonBox4.setAttribute("id", "buttonBox4");
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
    buttonWrapper.appendChild(buttonBox1);
    buttonWrapper.appendChild(buttonBox2);
    buttonWrapper.appendChild(buttonBox3);
    buttonWrapper.appendChild(buttonBox4);
    ThreePartContainer.appendChild(buttonWrapper);

    //cat wrapper
    const catWrapper = document.createElement('div');
    catWrapper.setAttribute("id", "catWrapper")
    const mainCat = document.createElement('img');
    mainCat.setAttribute("src","src/assets/catL.PNG");
    mainCat.setAttribute("id", "mainCat")
    catWrapper.appendChild(mainCat);
    ThreePartContainer.appendChild(catWrapper);
    
    //create a q/a box
    const qaWrapper = document.createElement('div');
    qaWrapper.setAttribute("id", "qaWrapper");
    qaWrapper.style.visibility = "hidden";
    //q
    const questionBox = document.createElement('div');
    questionBox.setAttribute("id", "questionBox")
    questionBox.style.visibility = "hidden";
    qaWrapper.appendChild(questionBox)
    //a
    const answerWrapper = document.createElement('div');
    answerWrapper.setAttribute("id", "answerWrapper")
    const answerButton = document.createElement('button');
    answerButton.setAttribute("class","ButtonClass");
    answerButton.setAttribute("id", "answerButton");
    answerButton.innerText = "Reveal answer";
    answerButton.style.visibility = "hidden";
    answerWrapper.appendChild(answerButton);
    const answerText = document.createElement('div');
    answerText.setAttribute("id", "answerText");
    answerText.style.visibility = "hidden";
    answerWrapper.appendChild(answerText);
    const goBackButton = document.createElement('button');
    goBackButton.setAttribute("class","ButtonClass");
    goBackButton.setAttribute("id","goBackButton");
    goBackButton.style.visibility = "hidden";
    goBackButton.innerText = "Go back"
    answerWrapper.appendChild(goBackButton);
    qaWrapper.appendChild(answerWrapper);
    
    ThreePartContainer.appendChild(qaWrapper);

    //add some audio to the mystery button
    const catVoice1 = document.createElement('audio');
    catVoice1.setAttribute("src", "src/assets/cat1.mp3");
    catVoice1.setAttribute("id", "catVoice1");
    button4.append(catVoice1);

    const catSong = document.createElement('audio');
    catSong.setAttribute("src", "src/assets/song.mp3");
    catSong.setAttribute("id", "catSong");
    catSong.volume = .1;
    button4.append(catSong);

    bodyEle.appendChild(ThreePartContainer);
}




