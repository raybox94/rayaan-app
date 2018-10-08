
/*
this code is written by Rayaan Ahmed
contact:raybox94@gmail.com

*/

let count = 0;
let array = [];
let user = [];
let com = [];
let avai = [1,2,3,4,5,6,7,8,9];

let combination = 0;

let user_1 = 0;
let user_2 = 0;
let user_3 = 0;
let user_4 = 0;
let user_5 = 0;
let user_6 = 0;
let user_7 = 0;
let user_8 = 0;
let user_9 = 0;

let com_1 = 0;
let com_2 = 0;
let com_3 = 0;
let com_4 = 0;
let com_5 = 0;
let com_6 = 0;
let com_7 = 0;
let com_8 = 0;
let com_9 = 0;

let ran = 1;

function top_left()
{
	if(document.getElementById("top-left-text").innerHTML === "")
	{
        if(ran % 2 !== 0)
        {
        	document.getElementById("top-left-text").innerHTML = "X";
            count = count+1;
            ran = ran + 1;
            user_1 = 1;
            console.log(user_1);
        	ai(1);
          }else{
            document.getElementById("top-left-text").innerHTML = "O";
            document.getElementById("top-left-text").style.color = "red";
            count = count+1;
            ran = ran + 1;
        	com_1 =1;
        	ai(1);  
          }

    
}else{
    alert("Tile is already filled please click another Tile.");
}

}//function for top left on clicked


function top_center()
{
	if(document.getElementById("top-center-text").innerHTML === "")
	{
        if(ran % 2 !== 0)
        {

	document.getElementById("top-center-text").innerHTML = "X";
    count = count+1;
    ran = ran + 1;
	user_2 =1;
	ai(2);
        }else{
            document.getElementById("top-center-text").innerHTML = "O";
            document.getElementById("top-center-text").style.color = "red";
            count = count+1;
            ran = ran +1;
            com_2 =1;
            ai(2);

        }


    }
	 else{
    	alert("Tile is already filled please click another Tile.");
    }
}//function for top center on clicked


function top_right()
{
	if(document.getElementById("top-right-text").innerHTML === "")
	{

        if(ran % 2 !== 0)
        {
	document.getElementById("top-right-text").innerHTML = "X";
    count = count+1;
    ran = ran + 1;
	user_3 =1;
        ai(3);
        
        }else{
            document.getElementById("top-right-text").innerHTML = "O";
            document.getElementById("top-right-text").style.color = "red";
            count = count+1;
            ran = ran + 1;
            com_3 =1;
                ai(3);
                
            
        }


	}
	 else{
    	alert("Tile is already filled please click another Tile.");
    }
}//function for top right on clicked


function middle_left()
{
   if(document.getElementById("middle-left-text").innerHTML === "")
	{

        if(ran % 2 !== 0)
        {
	document.getElementById("middle-left-text").innerHTML = "X";
    count = count+1;
    ran = ran + 1;
	user_4 =1;
    ai(4);
    
}else{
    document.getElementById("middle-left-text").innerHTML = "O";
    document.getElementById("middle-left-text").style.color = "red";

    count = count+1;
    ran = ran + 1;
	com_4 =1;
    ai(4);
            
}


	}
	 else{
    	alert("Tile is already filled please click another Tile.");
    }	

}//function for middle left on clicked



function middle_center()
{
	if(document.getElementById("middle-center-text").innerHTML === "")
	{


        if(ran % 2 !== 0)
        {
	document.getElementById("middle-center-text").innerHTML = "X";
    count = count+1;
    ran = ran + 1;
	user_5 = 1;
    ai(5);
 
}else{
    document.getElementById("middle-center-text").innerHTML = "O";
    document.getElementById("middle-center-text").style.color = "red";

    count = count+1;
    ran = ran + 1;
	com_5 = 1;
    ai(5);
 
            
}   


	}
	 else{
    	alert("Tile is already filled please click another Tile.");
    }
}//function for middle center on clicked



function middle_right()
{
	if(document.getElementById("middle-right-text").innerHTML === "")
	{


        if(ran % 2 !== 0)
        {
	document.getElementById("middle-right-text").innerHTML = "X";
    count = count+1;
    ran = ran + 1;
	user_6 = 1;
    ai(6);
    

}else{
    document.getElementById("middle-right-text").innerHTML = "O";
    document.getElementById("middle-right-text").style.color = "red";

    count = count+1;
    ran = ran + 1;
	com_6 = 1;
    ai(6);
    
            
}

	}
	 else{
    	alert("Tile is already filled please click another Tile.");
    }
}//function for middle right on clicked



function bottom_left()
{
	if(document.getElementById("bottom-left-text").innerHTML === "")
	{

        if(ran % 2 !== 0)
        {
	document.getElementById("bottom-left-text").innerHTML = "X";
    count = count+1;
    ran = ran + 1;
	user_7 = 1;
    ai(7);
    

}else{
    document.getElementById("bottom-left-text").innerHTML = "O";
    document.getElementById("bottom-left-text").style.color = "red";

    count = count+1;
    ran = ran + 1;
	com_7 = 1;
    ai(7);
    
            
}

	}
	 else{
    	alert("Tile is already filled please click another Tile.");
    }
}//function for bottom left on clicked



function bottom_center()
{
	if(document.getElementById("bottom-center-text").innerHTML === "")
	{


        if(ran % 2 !== 0)
        {
	document.getElementById("bottom-center-text").innerHTML = "X";
    count = count+1;
    ran = ran + 1;
	user_8 = 1;
    ai(8);
 
}else{
    document.getElementById("bottom-center-text").innerHTML = "O";
    document.getElementById("bottom-center-text").style.color = "red";

    count = count+1;
    ran = ran + 1;
	com_8 = 1;
    ai(8);
            
}   


	}
	 else{
    	alert("Tile is already filled please click another Tile.");
    }
}//function for bottom center on clicked



function bottom_right()
{
	if(document.getElementById("bottom-right-text").innerHTML === "")
	{

        if(ran % 2 !== 0)
        {
	document.getElementById("bottom-right-text").innerHTML = "X";
    count = count+1;
    ran = ran + 1;
	user_9 = 1;
    ai(9);
    

}else{
    document.getElementById("bottom-right-text").innerHTML = "O";
    document.getElementById("bottom-right-text").style.color = "red";

    count = count+1;
    ran = ran + 1;
	com_9 = 1;
    ai(9);
            
}

	}
	 else{
    	alert("Tile is already filled please click another Tile.");
    }
}//function for bottom right on clicked


function ai(tile)
{
//game User 1 Win statement

 if(count >= 3)
 {
 	if(user_1 === 1 && user_5 === 1 && user_9 === 1)
 	{
 		alert("User 1 Win!!!!!");
 		clear();
 	}
 	if(user_1 === 1 && user_4 === 1 && user_7 === 1)
 	{
 		alert("User 1 Win!!!!!");
 		clear();
 	}
 	if(user_1 === 1 && user_2 === 1 && user_3 === 1)
 	{
 		alert("User 1 Win!!!!!");
 		clear();
 	}
 	if(user_2 === 1 && user_5 === 1 && user_8 === 1)
 	{
 		alert("User 1 Win!!!!!");
 		clear();
 	}
 	if(user_3 === 1 && user_6 === 1 && user_9 === 1)
 	{
 		alert("User 1 Win!!!!!");
 		clear();
 	}
 	if(user_3 === 1 && user_5 === 1 && user_7 === 1)
 	{
 		alert("User 1 Win!!!!!");
 		clear();
 	}
 	if(user_4 === 1 && user_5 === 1 && user_6 === 1)
 	{
 		alert("User 1 Win!!!!!");
 		clear();
 	}
 	if(user_7 === 1 && user_8 === 1 && user_9 === 1)
 	{
 		alert("User 1 Win!!!!!");
 		clear();
 	}


 }//end of game User 1 Win statement
//begining of com win statement
if(count>=3)
{

 	if(com_1 === 1 && com_5 === 1 && com_9 === 1)
 	{
 		alert("User 2 Win!!!!!");
 		clear();
 	}
 	if(com_1 === 1 && com_4 === 1 && com_7 === 1)
 	{
 		alert("User 2 Win!!!!!");
 		clear();
 	}
 	if(com_1 === 1 && com_2 === 1 && com_3 === 1)
 	{
 		alert("User 2 Win!!!!!");
 		clear();
 	}
 	if(com_2 === 1 && com_5 === 1 && com_8 === 1)
 	{
 		alert("User 2 Win!!!!!");
 		clear();
 	}
 	if(com_3 === 1 && com_6 === 1 && com_9 === 1)
 	{
 		alert("User 2 Win!!!!!");
 		clear();
 	}
 	if(com_3 === 1 && com_5 === 1 && com_7 === 1)
 	{
 		alert("User 2 Win!!!!!");
 		clear();
 	}
 	if(com_4 === 1 && com_5 === 1 && com_6 === 1)
 	{
 		alert("User 2 Win!!!!!");
 		clear();
 	}
 	if(com_7 === 1 && com_8 === 1 && com_9 === 1)
 	{
 		alert("User 2 Win!!!!!");
 		clear();
 	}

}//end of com win statement


//game end statement
	if(count===9)
	{
		alert("Game Over!!!")

		clear();

	}//end of game 
}//end of ai function



//creating game start
function clear()
{
location.reload();

} //end of game start