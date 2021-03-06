
    let choice;

    //highlight the choosen box
     function selectMe(id){
        //dehighlight the other choices (boxes)  
         // if we have many choices then we better use for() to all other siblings to dehilight 
         if(id=="red"){
             document.getElementById("green").style.borderColor="black";
             document.getElementById("blue").style.borderColor="black";
             document.getElementById(id).style.borderColor="yellow";
            document.getElementById(id).style.borderWidth="10px";
            
         }if(id=="green"){
             document.getElementById("red").style.borderColor="black";
             document.getElementById("blue").style.borderColor="black";
             document.getElementById(id).style.borderColor="yellow";
            document.getElementById(id).style.borderWidth="10px";
        }else{
             document.getElementById("red").style.borderColor="black";
             document.getElementById("green").style.borderColor="black";
            document.getElementById(id).style.borderColor="yellow";
            document.getElementById(id).style.borderWidth="10px";
        }
             
        choice = id;
     } 
    
    // hit play if a box had been selected then animateMe() if not alert user
    function play(){
        //when hit play: if sound for previous result is playing then stop
        audioRight.pause();
        audioWrong.pause();
        //setting image back to default
        document.getElementById("img").src="images/roulette.png";
        document.getElementById("anime").style.background = "lightgray";
        
        if(choice==null)
            alert("Choose a color");
        else
            animateMe();
    }

    
    //initiate array of colors for the animation
    //initiat colorNum which refers to the final computer's choice of color
    var colorNum;
    var colors = ["green","red","blue"];
    var score=0;
    
    function animateMe(){
        document.getElementById("img").style.display="hide";
        var myTimer=200;
        for( var i =0 ; i< 10; i++){
            setTimeout(flashBox,myTimer);
            myTimer +=200;
        }
        
        setTimeout(answerCheck,4000);
    }
    
    //change colors for the animated area and saves the final color value to colorNum
    function flashBox(){
            colorNum = Math.floor(Math.random() * 3 ) ;
            document.getElementById("anime").style.background = colors[colorNum]; 
    }
    
    //initiating sounds objects for results
    var audioRight = new Audio('audio/right.mp3');
    var audioWrong = new Audio('audio/wrong.m4a');
    //check the answer: compare user's choice with computer's final choice colors[colorNum]
    function answerCheck(){
         if(choice==colors[colorNum]){
            document.getElementById("img").src="images/win.png";
             audioRight.play();
             //document.getElementById("img").style.background = "lightgray";
             score++;
        } else {
            document.getElementById("img").src="images/lose.png";
            audioWrong.play();
            //document.getElementById("img").style.background = "lightgray";
            score--;
        }
        
        if(score<0){
            setTimeout(function(){
                alert("Game Over. Click OK to start over");
                location.reload();
            }, 1000);
        }
        
        //print out score
        document.getElementById("score").innerHTML="<b> Score <hr>" + score + "<b>";
        
        //set the animated area image back to default image (after 1.4 sec)
        setTimeout(function(){
            document.getElementById("img").src="images/roulette.png";
            document.getElementById("anime").style.background = "lightgray";
        },3000);
        
        function refresh(){
            location.reload;
        }
        
        
    }