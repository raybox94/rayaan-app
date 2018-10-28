
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

let ran = 0;

function top_left()
{
	if(document.getElementById("top-left-text").innerHTML === "")
	{
	$("#top-left-text").html("X");
	count = count+1;
	user_1 =1;
	user.push(1);
	array.push(1);
	for(i = 0;i<avai.length;i++)
	{
		if(avai[i] === 1)
			avai.splice(i,1);
	}

	ai(1);
    }
    else{
    	alert("Tile is already filled please click another Tile.");
    }


}//function for top left on clicked


function top_center()
{
	if(document.getElementById("top-center-text").innerHTML === "")
	{
	$("#top-center-text").html("X");
	count = count+1;
	user_2 =1;
	user.push(2);
	array.push(2);
	for(i = 0;i<avai.length;i++)
	{
		if(avai[i] === 2)
			avai.splice(i,1);
	}

	ai(2);
	}
	 else{
    	alert("Tile is already filled please click another Tile.");
    }
}//function for top center on clicked


function top_right()
{
	if(document.getElementById("top-right-text").innerHTML === "")
	{
	$("#top-right-text").html("X");
	count = count+1;
	user_3 =1;
	user.push(3);
	array.push(3);
	for(i = 0;i<avai.length;i++)
	{
		if(avai[i] === 3)
			avai.splice(i,1);
	}

		ai(3);
	}
	 else{
    	alert("Tile is already filled please click another Tile.");
    }
}//function for top right on clicked


function middle_left()
{
   if(document.getElementById("middle-left-text").innerHTML === "")
	{
	$("#middle-left-text").html("X");
	count = count+1;
	user_4 =1;
	user.push(4);
	array.push(4);
	for(i = 0;i<avai.length;i++)
	{
		if(avai[i] === 4)
			avai.splice(i,1);
	}

	ai(4);
	}
	 else{
    	alert("Tile is already filled please click another Tile.");
    }	

}//function for middle left on clicked



function middle_center()
{
	if(document.getElementById("middle-center-text").innerHTML === "")
	{
	$("#middle-center-text").html("X");
	count = count+1;
	user_5 = 1;
	user.push(5);
	array.push(5);
	for(i = 0;i<avai.length;i++)
	{
		if(avai[i] === 5)
			avai.splice(i,1);
	}

	ai(5);
	}
	 else{
    	alert("Tile is already filled please click another Tile.");
    }
}//function for middle center on clicked



function middle_right()
{
	if(document.getElementById("middle-right-text").innerHTML === "")
	{
	$("#middle-right-text").html("X");
	count = count+1;
	user_6 = 1;
	user.push(6);
	array.push(6);
	for(i = 0;i<avai.length;i++)
	{
		if(avai[i] === 6)
			avai.splice(i,1);
	}

	ai(6);
	}
	 else{
    	alert("Tile is already filled please click another Tile.");
    }
}//function for middle right on clicked



function bottom_left()
{
	if(document.getElementById("bottom-left-text").innerHTML === "")
	{
	$("#bottom-left-text").html("X");
	count = count+1;
	user_7 = 1;
	user.push(7);
	array.push(7);
	for(i = 0;i<avai.length;i++)
	{
		if(avai[i] === 7)
			avai.splice(i,1);
	}

	ai(7);
	}
	 else{
    	alert("Tile is already filled please click another Tile.");
    }
}//function for bottom left on clicked



function bottom_center()
{
	if(document.getElementById("bottom-center-text").innerHTML === "")
	{
	$("#bottom-center-text").html("X");
	count = count+1;
	user_8 = 1;
	user.push(8);
	array.push(8);
	for(i = 0;i<avai.length;i++)
	{
		if(avai[i] === 8)
			avai.splice(i,1);
	}

	ai(8);
	}
	 else{
    	alert("Tile is already filled please click another Tile.");
    }
}//function for bottom center on clicked



function bottom_right()
{
	if(document.getElementById("bottom-right-text").innerHTML === "")
	{
	$("#bottom-right-text").html( "X");
	count = count+1;
	user_9 = 1;
	user.push(9);
	array.push(9);
	for(i = 0;i<avai.length;i++)
	{
		if(avai[i] === 9)
			avai.splice(i,1);
	}

	ai(9);
	}
	 else{
    	alert("Tile is already filled please click another Tile.");
    }
}//function for bottom right on clicked


function ai(tile)
{

//single click of user
  if(tile !== 5 && count === 1)
  {
	  document.getElementById("middle-center-text").innerHTML = "O";
	  document.getElementById("middle-center-text").style.color="red";
  	com_5 = 1;
  	com.push(5);
  	array.push(5);
	for(i = 0;i<avai.length;i++)
	{
		if(avai[i] === 5)
			avai.splice(i,1);
	}
  	count = count +1;
  }

if(tile === 5 && count === 1)
{
	let beg = [1,2,3,4];
	var a = beg[Math.floor(Math.random()*beg.length)];
	if(a === 1)
	{
				 document.getElementById("top-left-text").innerHTML = "O";   
				 document.getElementById("top-left-text").style.color="red";

                    com_1 = 1;
                    com.push(1);
                    array.push(1);
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 1)
						avai.splice(i,1);
							}

                     count = count + 1;

	}
	if(a === 2)
	{
		 document.getElementById("top-center-text").innerHTML = "O";   
		 document.getElementById("top-center-text").style.color="red";

                    com_2 = 1;
                    com.push(2);
                    array.push(2);
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 2)
						avai.splice(i,1);
							}

                     count = count + 1;

	}

		if(a === 3)
	{
		 document.getElementById("top-right-text").innerHTML = "O";   
		 document.getElementById("top-right-text").style.color="red";

                    com_3 = 1;
                    com.push(3);
                    array.push(3);
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 3)
						avai.splice(i,1);
							}

                     count = count + 1;

	}
	if(a === 4)
	{
 document.getElementById("middle-left-text").innerHTML = "O";  
 document.getElementById("middle-left-text").style.color="red";
 
                    com_4 = 1;
                    com.push(4);
                    array.push(4);
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 4)
						avai.splice(i,1);
							}

                     count = count + 1;

	}


}//end of single user game



//begining of user 2nd click
if(count === 3)
{
	if(user_1 === 1 && user_2 === 1)
	{

				 document.getElementById("top-right-text").innerHTML = "O";  
				 document.getElementById("top-right-text").style.color="red";
 
                    com_3 = 1;
                    com.push(3);
                    array.push(3);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 3)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 1
	}else if(user_5 === 1 && user_9 === 1 && com_1 === 1)
	{


		document.getElementById("top-right-text").innerHTML = "O";   
		document.getElementById("top-right-text").style.color="red";

		   com_3 = 1;
		   com.push(3);
		   array.push(3);
		   combination = 1;
		   ran = 1;
		   for(i = 0;i<avai.length;i++)
			   {
			   if(avai[i] === 3)
			   avai.splice(i,1);
				   }
		  count = count + 1;

	}else if(user_5 === 1 && user_7 === 1 && com_3 === 1)
	{


		document.getElementById("top-left-text").innerHTML = "O";   
		document.getElementById("top-left-text").style.color="red";

		   com_1 = 1;
		   com.push(1);
		   array.push(1);
		   combination = 1;
		   ran = 1;
		   for(i = 0;i<avai.length;i++)
			   {
			   if(avai[i] === 1)
			   avai.splice(i,1);
				   }
		  count = count + 1;



	}else if(user_5 === 1 && user_6 === 1 && com_4 === 1)
	{


		document.getElementById("top-left-text").innerHTML = "O";   
		document.getElementById("top-left-text").style.color="red";

		   com_1 = 1;
		   com.push(1);
		   array.push(1);
		   combination = 1;
		   ran = 1;
		   for(i = 0;i<avai.length;i++)
			   {
			   if(avai[i] === 1)
			   avai.splice(i,1);
				   }
		  count = count + 1;

	}else if(user_5 === 1 && user_8 === 1 && com_2 === 1)
	{
		document.getElementById("top-right-text").innerHTML = "O";   
		document.getElementById("top-right-text").style.color="red";

		   com_3 = 1;
		   com.push(3);
		   array.push(3);
		   combination = 1;
		   ran = 1;
		   for(i = 0;i<avai.length;i++)
			   {
			   if(avai[i] === 3)
			   avai.splice(i,1);
				   }
		  count = count + 1;

	}else if(user_1 === 1 && user_3 === 1)
	{
				 document.getElementById("top-center-text").innerHTML = "O";   
				 document.getElementById("top-center-text").style.color="red";

                    com_2 = 1;
                    com.push(2);
                    array.push(2);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 2)
						avai.splice(i,1);
							}
                   count = count + 1;

		//combination 2
	}else if(user_1 === 1 && user_4 === 1)
	{

				 document.getElementById("bottom-left-text").innerHTML = "O";   
				 document.getElementById("bottom-left-text").style.color="red";

                    com_7 = 1;
                    com.push(7);
                    array.push(7);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 7)
						avai.splice(i,1);
							}
                   count = count + 1;

		//combination 3
	}else if(user_1 === 1 && user_7 === 1)
	{

					 document.getElementById("middle-left-text").innerHTML = "O";   
					 document.getElementById("middle-left-text").style.color="red";

                    com_4 = 1;
                    com.push(4);
                    array.push(4);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 4)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 4
	}else if(user_2 === 1 && user_3 === 1)
	{
				 document.getElementById("top-left-text").innerHTML = "O";   
				 document.getElementById("top-left-text").style.color="red";

                    com_1 = 1;
                    com.push(1);
                    array.push(1);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 1)
						avai.splice(i,1);
							}
                   count = count + 1;

		//combination 5
	}else if(user_3 === 1 && user_6 === 1)
	{

				 document.getElementById("bottom-right-text").innerHTML = "O";   
				 document.getElementById("bottom-right-text").style.color="red";

                    com_9 = 1;
                    com.push(9);
                    array.push(9);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 9)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 6
	}else if(user_3 === 1 && user_9 === 1)
	{

					 document.getElementById("middle-right-text").innerHTML = "O";   
					 document.getElementById("middle-right-text").style.color="red";

                    com_6 = 1;
                    com.push(6);
                    array.push(6);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 6)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 7
	}else if(user_4 === 1 && user_7 === 1)
	{

						 document.getElementById("top-left-text").innerHTML = "O";  
						 document.getElementById("top-left-text").style.color="red";
 
                    com_1 = 1;
                    com.push(1);
                    array.push(1);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 1)
						avai.splice(i,1);
							}
                   count = count + 1;

		//combination 8
	}else if(user_5 === 1 && user_4 === 1)
	{

						 document.getElementById("middle-right-text").innerHTML = "O";   
						 document.getElementById("middle-right-text").style.color="red";

                    com_6 = 1;
                    com.push(6);
                    array.push(6);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 6)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 9
	}else if(user_5 === 1 && user_7 === 1)
	{
						 document.getElementById("top-right-text").innerHTML = "O";   
						 document.getElementById("top-right-text").style.color="red";

                    com_3 = 1;
                    com.push(3);
                    array.push(3);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 3)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 10
	}else if(user_5 === 1 && user_2 === 1)
	{
						 document.getElementById("bottom-center-text").innerHTML = "O";  
						 document.getElementById("bottom-center-text").style.color="red";
 
                    com_8 = 1;
                    com.push(8);
                    array.push(8);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 8)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 11
	}else if(user_5 === 1 && user_8 === 1)
	{
						 document.getElementById("top-center-text").innerHTML = "O";   
						 document.getElementById("top-center-text").style.color="red";

                    com_2 = 1;
                    com.push(2);
                    array.push(2);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 2)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 12
	}else if(user_5 === 1 && user_3 === 1)
	{
				 document.getElementById("bottom-left-text").innerHTML = "O";   
				 document.getElementById("bottom-left-text").style.color="red";

                    com_7 = 1;
                    com.push(7);
                    array.push(7);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 7)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 13
	}else if(user_5 === 1 && user_6 === 1)
	{
						 document.getElementById("middle-left-text").innerHTML = "O";   
						 document.getElementById("middle-left-text").style.color="red";

                    com_4 = 1;
                    com.push(4);
                    array.push(4);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 4)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 14
	}else if(user_5 === 1 && user_1 === 1)
	{
				 document.getElementById("bottom-right-text").innerHTML = "O";   
				 document.getElementById("bottom-right-text").style.color="red";

                    com_9 = 1;
                    com.push(9);
                    array.push(9);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 9)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 15
	}else if(user_5 === 1 && user_9 === 1)
	{
				 document.getElementById("top-left-text").innerHTML = "O";  
				 document.getElementById("top-left-text").style.color="red";
 
                    com_1 = 1;
                    com.push(1);
                    array.push(1);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 1)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 16
	}else if(user_6 === 1 && user_9 === 1)
	{
						 document.getElementById("top-right-text").innerHTML = "O";   
						 document.getElementById("top-right-text").style.color="red";

                    com_3 = 1;
                    com.push(3);
                    array.push(3);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 3)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 17
	}else if(user_7 === 1 && user_8 === 1)
	{
						 document.getElementById("bottom-right-text").innerHTML = "O";  
						 document.getElementById("bottom-right-text").style.color="red";
 
                    com_9 = 1;
                    com.push(9);
                    array.push(9);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 9)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 18
	}else if(user_7 === 1 && user_9 === 1)
	{
						 document.getElementById("bottom-center-text").innerHTML = "O";  
						 document.getElementById("bottom-center-text").style.color="red";
 
                    com_8 = 1;
                    com.push(8);
                    array.push(8);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 8)
						avai.splice(i,1);
							}
                   count = count + 1;

		//combination 19
	}else if(user_8 === 1 && user_9 === 1)
	{
				 document.getElementById("bottom-left-text").innerHTML = "O";   
				 document.getElementById("bottom-left-text").style.color="red";

                    com_7 = 1;
                    com.push(7);
                    array.push(7);
					combination = 1;
					ran = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 7)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 20
	}	
	else if(ran === 0){
		var item = avai[Math.floor(Math.random()*avai.length)];
console.log("r");
            if(item === 1)
            {
					document.getElementById("top-left-text").innerHTML = "O";   
					document.getElementById("top-left-text").style.color="red";

                    com_1 = 1;
                    com.push(1);
                    array.push(1);
                    for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 1)
                        avai.splice(i,1);
                            }

                     count = count + 1;

            }
            if(item === 2)
            {
					  document.getElementById("top-center-text").innerHTML = "O";
					  document.getElementById("top-center-text").style.color="red";


                    com_2 = 1;
                    com.push(2);
                    array.push(2);
                    for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 2)
                        avai.splice(i,1);
                        }

                    count = count + 1;
                 


            }
            if(item === 3)
            {
					document.getElementById("top-right-text").innerHTML = "O";
					document.getElementById("top-right-text").style.color="red";


                    com_3 = 1;
                    com.push(3);
                    array.push(3);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 3)
                        avai.splice(i,1);
                        }
                    count = count + 1;

            }

            if(item === 4)
            {
					 document.getElementById("middle-left-text").innerHTML = "O";
					 document.getElementById("middle-left-text").style.color="red";


                    com_4 = 1;
                    com.push(4);
                    array.push(4);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 4)
                        avai.splice(i,1);
                        }
                    count = count + 1;

            }
            if(item === 5)
            {
					 document.getElementById("middle-center-text").innerHTML = "O";
					 document.getElementById("middle-center-text").style.color="red";


                    com_5 = 1;
                    com.push(5);
                    array.push(5);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 5)
                        avai.splice(i,1);
                        }
                    count = count + 1;

            }
            if(item === 6)
            {
					 document.getElementById("middle-right-text").innerHTML = "O";  
					 document.getElementById("middle-right-text").style.color="red";


                    com_6 = 1;
                    com.push(6);
                    array.push(6);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 6)
                        avai.splice(i,1);
                        }
                    count = count + 1;

            }

            if(item === 7)
            {
					document.getElementById("bottom-left-text").innerHTML = "O";
					document.getElementById("bottom-left-text").style.color="red";


                    com_7 = 1;
                    com.push(7);
                    array.push(7);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 7)
                        avai.splice(i,1);
                        }
                    count = count + 1;

            }
            if(item === 8)
            {
					 document.getElementById("bottom-center-text").innerHTML = "O";
					 document.getElementById("bottom-center-text").style.color="red";

                    com_8 = 1;
                    com.push(8);
                    array.push(8);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 8)
                        avai.splice(i,1);
                        }
                    count = count + 1;

            }
            if(item === 9)
            {
					 document.getElementById("bottom-right-text").innerHTML = "O";    
					 document.getElementById("bottom-right-text").style.color="red";
  
                    com_9 = 1;
                    com.push(9);
                    array.push(9);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 9)
                        avai.splice(i,1);
                        }
                    count = count + 1;

            }
	}//end of main else

}//end of checking winnng probobility
//end of user second click
//end of count 3


//count is 5

if(count === 5)
{
	if(com_1 === 1 && com_2 === 1 && user_3 === 0)
	{

				 document.getElementById("top-right-text").innerHTML = "O";   
				 document.getElementById("top-right-text").style.color="red";

                    com_3 = 1;
                    com.push(3);
                    array.push(3);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 3)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 1
	}else if(com_1 === 1 && com_3 === 1 && user_2 === 0)
	{
				 document.getElementById("top-center-text").innerHTML = "O";  
				 document.getElementById("top-center-text").style.color="red";
 
                    com_2 = 1;
                    com.push(2);
                    array.push(2);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 2)
						avai.splice(i,1);
							}
                   count = count + 1;

		//combination 2
	}else if(com_1 === 1 && com_4 === 1 && user_7 === 0)
	{

				 document.getElementById("bottom-left-text").innerHTML = "O";   
				 document.getElementById("bottom-left-text").style.color="red";

                    com_7 = 1;
                    com.push(7);
                    array.push(7);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 7)
						avai.splice(i,1);
							}
                   count = count + 1;

		//combination 3
	}else if(com_1 === 1 && com_7 === 1 && user_4 === 0)
	{

					 document.getElementById("middle-left-text").innerHTML = "O";   
					 document.getElementById("middle-left-text").style.color="red";

                    com_4 = 1;
                    com.push(4);
                    array.push(4);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 4)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 4
	}else if(com_2 === 1 && com_3 === 1 && user_1 === 0)
	{
				 document.getElementById("top-left-text").innerHTML = "O";   
				 document.getElementById("top-left-text").style.color="red";

                    com_1 = 1;
                    com.push(1);
                    array.push(1);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 1)
						avai.splice(i,1);
							}
                   count = count + 1;

		//combination 5
	}else if(com_3 === 1 && com_6 === 1 && user_9 === 0)
	{

				 document.getElementById("bottom-right-text").innerHTML = "O";   
				 document.getElementById("bottom-right-text").style.color="red";

                    com_9 = 1;
                    com.push(9);
                    array.push(9);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 9)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 6
	}else if(com_3 === 1 && com_9 === 1 && user_6 === 0)
	{

						 document.getElementById("middle-right-text").innerHTML = "O";   
						 document.getElementById("middle-right-text").style.color="red";

                    com_6 = 1;
                    com.push(6);
                    array.push(6);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 6)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 7
	}else if(com_4 === 1 && com_7 === 1 && user_1 === 0)
	{

						 document.getElementById("top-left-text").innerHTML = "O";   
						 document.getElementById("top-left-text").style.color="red";

                    com_1 = 1;
                    com.push(1);
                    array.push(1);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 1)
						avai.splice(i,1);
							}
                   count = count + 1;

		//combination 8
	}else if(com_5 === 1 && com_4 === 1 && user_6 === 0)
	{

						 document.getElementById("middle-right-text").innerHTML = "O";   
						 document.getElementById("middle-right-text").style.color="red";

                    com_6 = 1;
                    com.push(6);
                    array.push(6);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 6)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 9
	}else if(com_5 === 1 && com_7 === 1 && user_3 === 0)
	{
						 document.getElementById("top-right-text").innerHTML = "O";   
						 document.getElementById("top-right-text").style.color="red";

                    com_3 = 1;
                    com.push(3);
                    array.push(3);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 3)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 10
	}else if(com_5 === 1 && com_2 === 1 && user_8 === 0)
	{
						 document.getElementById("bottom-center-text").innerHTML = "O";   
						 document.getElementById("bottom-center-text").style.color="red";

                    com_8 = 1;
                    com.push(8);
                    array.push(8);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 8)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 11
	}else if(com_5 === 1 && com_8 === 1 && user_2 === 0)
	{
						 document.getElementById("top-center-text").innerHTML = "O";  
						 document.getElementById("top-center-text").style.color="red";
 
                    com_2 = 1;
                    com.push(2);
                    array.push(2);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 2)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 12
	}else if(com_5 === 1 && com_3 === 1 && user_7 === 0)
	{
				 document.getElementById("bottom-left-text").innerHTML = "O";  
				 document.getElementById("bottom-left-text").style.color="red";
 
                    com_7 = 1;
                    com.push(7);
                    array.push(7);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 7)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 13
	}else if(com_5 === 1 && com_6 === 1 && user_4 === 0)
	{
						 document.getElementById("middle-left-text").innerHTML = "O";   
						 document.getElementById("middle-left-text").style.color="red";

                    com_4 = 1;
                    com.push(4);
                    array.push(4);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 4)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 14
	}else if(com_5 === 1 && com_1 === 1 && user_9 === 0)
	{
				 document.getElementById("bottom-right-text").innerHTML = "O";   
				 document.getElementById("bottom-right-text").style.color="red";

                    com_9 = 1;
                    com.push(9);
                    array.push(9);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 9)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 15
	}else if(com_5 === 1 && com_9 === 1 && user_1 === 0)
	{
				 document.getElementById("top-left-text").innerHTML = "O";   
				 document.getElementById("top-left-text").style.color="red";

                    com_1 = 1;
                    com.push(1);
                    array.push(1);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 1)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 16
	}else if(com_6 === 1 && com_9 === 1 && user_3 ===0)
	{
						 document.getElementById("top-right-text").innerHTML = "O";   
						 document.getElementById("top-right-text").style.color="red";

                    com_3 = 1;
                    com.push(3);
                    array.push(3);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 3)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 17
	}else if(com_7 === 1 && com_8 === 1 && user_9 === 0)
	{
						 document.getElementById("bottom-right-text").innerHTML = "O";   
						 document.getElementById("bottom-right-text").style.color="red";

                    com_9 = 1;
                    com.push(9);
                    array.push(9);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 9)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 18
	}else if(com_7 === 1 && com_9 === 1 && user_8 === 0)
	{
						 document.getElementById("bottom-center-text").innerHTML = "O";   
						 document.getElementById("bottom-center-text").style.color="red";

                    com_8 = 1;
                    com.push(8);
                    array.push(8);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 8)
						avai.splice(i,1);
							}
                   count = count + 1;

		//combination 19
	}else if(com_8 === 1 && com_9 === 1 && user_7 === 0)
	{
				 document.getElementById("bottom-left-text").innerHTML = "O";   
				 document.getElementById("bottom-left-text").style.color="red";

                    com_7 = 1;
                    com.push(7);
                    array.push(7);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 7)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 20
	}else if(user_1 === 1 && user_2 === 1 && com_3 === 0)
	{

				 document.getElementById("top-right-text").innerHTML = "O";   
				 document.getElementById("top-right-text").style.color="red";

                    com_3 = 1;
                    com.push(3);
                    array.push(3);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 3)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 1
	}else if(user_1 === 1 && user_3 === 1 && com_2 === 0)
	{
				 document.getElementById("top-center-text").innerHTML = "O";   
				 document.getElementById("top-center-text").style.color="red";

                    com_2 = 1;
                    com.push(2);
                    array.push(2);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 2)
						avai.splice(i,1);
							}
                   count = count + 1;

		//combination 2
	}else if(user_1 === 1 && user_4 === 1 && com_7 === 0)
	{

				 document.getElementById("bottom-left-text").innerHTML = "O";   
				 document.getElementById("bottom-left-text").style.color="red";

                    com_7 = 1;
                    com.push(7);
                    array.push(7);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 7)
						avai.splice(i,1);
							}
                   count = count + 1;

		//combination 3
	}else if(user_1 === 1 && user_7 === 1 && com_4 === 0)
	{

					 document.getElementById("middle-left-text").innerHTML = "O";   
					 document.getElementById("middle-left-text").style.color="red";

                    com_4 = 1;
                    com.push(4);
                    array.push(4);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 4)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 4
	}else if(user_2 === 1 && user_3 === 1 && com_1 === 0)
	{
				 document.getElementById("top-left-text").innerHTML = "O";   
				 document.getElementById("top-left-text").style.color="red";

                    com_1 = 1;
                    com.push(1);
                    array.push(1);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 1)
						avai.splice(i,1);
							}
                   count = count + 1;

		//combination 5
	}else if(user_3 === 1 && user_6 === 1 && com_9 === 0)
	{

				 document.getElementById("bottom-right-text").innerHTML = "O";   
				 document.getElementById("bottom-right-text").style.color="red";

                    com_9 = 1;
                    com.push(9);
                    array.push(9);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 9)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 6
	}else if(user_3 === 1 && user_9 === 1 && com_6 === 0)
	{

						 document.getElementById("middle-right-text").innerHTML = "O";  
						 document.getElementById("middle-right-text").style.color="red";
 
                    com_6 = 1;
                    com.push(6);
                    array.push(6);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 6)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 7
	}else if(user_4 === 1 && user_7 === 1 && com_1 === 0)
	{

						 document.getElementById("top-left-text").innerHTML = "O";   
						 document.getElementById("top-left-text").style.color="red";

                    com_1 = 1;
                    com.push(1);
                    array.push(1);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 1)
						avai.splice(i,1);
							}
                   count = count + 1;

		//combination 8
	}else if(user_5 === 1 && user_4 === 1 && com_6 === 0)
	{

						 document.getElementById("middle-right-text").innerHTML = "O";   
						 document.getElementById("middle-right-text").style.color="red";

                    com_6 = 1;
                    com.push(6);
                    array.push(6);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 6)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 9
	}else if(user_5 === 1 && user_7 === 1 && com_3 === 0)
	{
						 document.getElementById("top-right-text").innerHTML = "O";  
						 document.getElementById("top-right-text").style.color="red";
 
                    com_3 = 1;
                    com.push(3);
                    array.push(3);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 3)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 10
	}else if(user_5 === 1 && user_2 === 1 && com_8 === 0)
	{
						 document.getElementById("bottom-center-text").innerHTML = "O";   
						 document.getElementById("bottom-center-text").style.color="red";

                    com_8 = 1;
                    com.push(8);
                    array.push(8);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 8)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 11
	}else if(user_5 === 1 && user_8 === 1 && com_2 === 0)
	{
						 document.getElementById("top-center-text").innerHTML = "O";   
						 document.getElementById("top-center-text").style.color="red";

                    com_2 = 1;
                    com.push(2);
                    array.push(2);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 2)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 12
	}else if(user_5 === 1 && user_3 === 1 && com_7 === 0)
	{
				 document.getElementById("bottom-left-text").innerHTML = "O";   
				 document.getElementById("bottom-left-text").style.color="red";

                    com_7 = 1;
                    com.push(7);
                    array.push(7);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 7)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 13
	}else if(user_5 === 1 && user_6 === 1 && com_4 === 0)
	{
						 document.getElementById("middle-left-text").innerHTML = "O";   
						 document.getElementById("middle-left-text").style.color="red";

                    com_4 = 1;
                    com.push(4);
                    array.push(4);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 4)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 14
	}else if(user_5 === 1 && user_1 === 1 && com_9 === 0)
	{
				 document.getElementById("bottom-right-text").innerHTML = "O";  
				 document.getElementById("bottom-right-text").style.color="red";
 
                    com_9 = 1;
                    com.push(9);
                    array.push(9);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 9)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 15
	}else if(user_5 === 1 && user_9 === 1 && com_1 === 0)
	{
				 document.getElementById("top-left-text").innerHTML = "O";  
				 document.getElementById("top-left-text").style.color="red";
 
                    com_1 = 1;
                    com.push(1);
                    array.push(1);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 1)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 16
	}else if(user_6 === 1 && user_9 === 1 && com_3 === 0)
	{
						 document.getElementById("top-right-text").innerHTML = "O";   
						 document.getElementById("top-right-text").style.color="red";

                    com_3 = 1;
                    com.push(3);
                    array.push(3);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 3)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 17
	}else if(user_7 === 1 && user_8 === 1 && com_9 === 0)
	{
						 document.getElementById("bottom-right-text").innerHTML = "O";   
						 document.getElementById("bottom-right-text").style.color="red";

                    com_9 = 1;
                    com.push(9);
                    array.push(9);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 9)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 18
	}else if(user_7 === 1 && user_9 === 1 && com_8 === 0)
	{
						 document.getElementById("bottom-center-text").innerHTML = "O";   
						 document.getElementById("bottom-center-text").style.color="red";

                    com_8 = 1;
                    com.push(8);
                    array.push(8);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 8)
						avai.splice(i,1);
							}
                   count = count + 1;

		//combination 19
	}else if(user_8 === 1 && user_9 === 1 && com_7 === 0)
	{
				 document.getElementById("bottom-left-text").innerHTML = "O";   
				 document.getElementById("bottom-left-text").style.color="red";

                    com_7 = 1;
                    com.push(7);
                    array.push(7);
                    combination = 1;
                    for(i = 0;i<avai.length;i++)
						{
						if(avai[i] === 7)
						avai.splice(i,1);
							}
                   count = count + 1;
		//combination 20
	}else
	{
		
			var item = avai[Math.floor(Math.random()*avai.length)];


            if(item === 1)
            {
					document.getElementById("top-left-text").innerHTML = "O";   
					document.getElementById("top-left-text").style.color="red";

                    com_1 = 1;
                    com.push(1);
                    array.push(1);
                    for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 1)
                        avai.splice(i,1);
                            }

                     count = count + 1;

            }
            if(item === 2)
            {
					  document.getElementById("top-center-text").innerHTML = "O";
					  document.getElementById("top-center-text").style.color="red";


                    com_2 = 1;
                    com.push(2);
                    array.push(2);
                    for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 2)
                        avai.splice(i,1);
                        }

                    count = count + 1;
                 


            }
            if(item === 3)
            {
					document.getElementById("top-right-text").innerHTML = "O";
					document.getElementById("top-right-text").style.color="red";


                    com_3 = 1;
                    com.push(3);
                    array.push(3);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 3)
                        avai.splice(i,1);
                        }
                    count = count + 1;

            }

            if(item === 4)
            {
					 document.getElementById("middle-left-text").innerHTML = "O";
					 document.getElementById("middle-left-text").style.color="red";


                    com_4 = 1;
                    com.push(4);
                    array.push(4);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 4)
                        avai.splice(i,1);
                        }
                    count = count + 1;

            }
            if(item === 5)
            {
					 document.getElementById("middle-center-text").innerHTML = "O";
					 document.getElementById("middle-center-text").style.color="red";


                    com_5 = 1;
                    com.push(5);
                    array.push(5);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 5)
                        avai.splice(i,1);
                        }
                    count = count + 1;

            }
            if(item === 6)
            {
					 document.getElementById("middle-right-text").innerHTML = "O";  
					 document.getElementById("middle-right-text").style.color="red";


                    com_6 = 1;
                    com.push(6);
                    array.push(6);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 6)
                        avai.splice(i,1);
                        }
                    count = count + 1;

            }

            if(item === 7)
            {
					document.getElementById("bottom-left-text").innerHTML = "O";
					document.getElementById("bottom-left-text").style.color="red";


                    com_7 = 1;
                    com.push(7);
                    array.push(7);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 7)
                        avai.splice(i,1);
                        }
                    count = count + 1;

            }
            if(item === 8)
            {
					 document.getElementById("bottom-center-text").innerHTML = "O";
					 document.getElementById("bottom-center-text").style.color="red";

                    com_8 = 1;
                    com.push(8);
                    array.push(8);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 8)
                        avai.splice(i,1);
                        }
                    count = count + 1;

            }
            if(item === 9)
            {
					 document.getElementById("bottom-right-text").innerHTML = "O";     
					 document.getElementById("bottom-right-text").style.color="red";
 
                    com_9 = 1;
                    com.push(9);
                    array.push(9);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 9)
                        avai.splice(i,1);
                        }
                    count = count + 1;

            }


	}//end of else



			console.log("ray");

	

}//end of checking winnng probobility
//end of user computer win
//end of count 5








//count is 7

if(count === 7)
{

if(avai[0] === 1)
{
		document.getElementById("top-left-text").innerHTML = "O";
		document.getElementById("top-left-text").style.color="red";

					com_1 = 1;
                    com.push(1);
                    array.push(1);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 1)
                        avai.splice(i,1);
                        }
                    count = count + 1;


}else if(avai[0] === 2)
{
		document.getElementById("top-center-text").innerHTML = "O";
		document.getElementById("top-center-text").style.color="red";

					com_2 = 1;
                    com.push(2);
                    array.push(2);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 2)
                        avai.splice(i,1);
                        }
                    count = count + 1;
}else if(avai[0] === 3)
{
		document.getElementById("top-left-text").innerHTML = "O";
		document.getElementById("top-left-text").style.color="red";

					com_3 = 1;
                    com.push(3);
                    array.push(3);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 3)
                        avai.splice(i,1);
                        }
                    count = count + 1;
}else if(avai[0] === 4)
{
		document.getElementById("middle-left-text").innerHTML = "O";
		document.getElementById("middle-left-text").style.color="red";

					com_4 = 1;
                    com.push(4);
                    array.push(4);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 4)
                        avai.splice(i,1);
                        }
                    count = count + 1;
}else if(avai[0] === 5)
{
		document.getElementById("middle-center-text").innerHTML = "O";
		document.getElementById("middle-center-text").style.color="red";

					com_5 = 1;
                    com.push(5);
                    array.push(5);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 5)
                        avai.splice(i,1);
                        }
                    count = count + 1;
}else if(avai[0] === 6)
{
		document.getElementById("middle-right-text").innerHTML = "O";
		document.getElementById("middle-right-text").style.color="red";

					com_6 = 1;
                    com.push(6);
                    array.push(6);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 6)
                        avai.splice(i,1);
                        }
                    count = count + 1;	
}else if(avai[0] === 7)
{
		document.getElementById("bottom-left-text").innerHTML = "O";
		document.getElementById("bottom-left-text").style.color="red";

					com_7 = 1;
                    com.push(7);
                    array.push(7);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 7)
                        avai.splice(i,1);
                        }
                    count = count + 1;	
}else if(avai[0] === 8)
{
		document.getElementById("bottom-center-text").innerHTML = "O";
		document.getElementById("bottom-center-text").style.color="red";

					com_8 = 1;
                    com.push(8);
                    array.push(8);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 8)
                        avai.splice(i,1);
                        }
                    count = count + 1;	
}else if(avai[0] === 9)
{
		document.getElementById("bottom-right-text").innerHTML = "O";
		document.getElementById("bottom-right-text").style.color="red";

					com_9 = 1;
                    com.push(9);
                    array.push(9);
                     for(i = 0;i<avai.length;i++)
                        {
                        if(avai[i] === 9)
                        avai.splice(i,1);
                        }
                    count = count + 1;
}







}//end of count 7





//game user win statement
 if(user.length >= 3)
 {
 	if(user_1 === 1 && user_5 === 1 && user_9 === 1)
 	{
 		alert("User Win!!!!!");
 		clear();
 	}
 	if(user_1 === 1 && user_4 === 1 && user_7 === 1)
 	{
 		alert("User Win!!!!!");
 		clear();
 	}
 	if(user_1 === 1 && user_2 === 1 && user_3 === 1)
 	{
 		alert("User Win!!!!!");
 		clear();
 	}
 	if(user_2 === 1 && user_5 === 1 && user_8 === 1)
 	{
 		alert("User Win!!!!!");
 		clear();
 	}
 	if(user_3 === 1 && user_6 === 1 && user_9 === 1)
 	{
 		alert("User Win!!!!!");
 		clear();
 	}
 	if(user_3 === 1 && user_5 === 1 && user_7 === 1)
 	{
 		alert("User Win!!!!!");
 		clear();
 	}
 	if(user_4 === 1 && user_5 === 1 && user_6 === 1)
 	{
 		alert("User Win!!!!!");
 		clear();
 	}
 	if(user_7 === 1 && user_8 === 1 && user_9 === 1)
 	{
 		alert("User Win!!!!!");
 		clear();
 	}


 }//end of game user win statement
//begining of com win statement
if(com.length>=3)
{

 	if(com_1 === 1 && com_5 === 1 && com_9 === 1)
 	{
 		alert("Computer Win!!!!!");
 		clear();
 	}
 	if(com_1 === 1 && com_4 === 1 && com_7 === 1)
 	{
 		alert("Computer Win!!!!!");
 		clear();
 	}
 	if(com_1 === 1 && com_2 === 1 && com_3 === 1)
 	{
 		alert("Computer Win!!!!!");
 		clear();
 	}
 	if(com_2 === 1 && com_5 === 1 && com_8 === 1)
 	{
 		alert("Computer Win!!!!!");
 		clear();
 	}
 	if(com_3 === 1 && com_6 === 1 && com_9 === 1)
 	{
 		alert("Computer Win!!!!!");
 		clear();
 	}
 	if(com_3 === 1 && com_5 === 1 && com_7 === 1)
 	{
 		alert("Computer Win!!!!!");
 		clear();
 	}
 	if(com_4 === 1 && com_5 === 1 && com_6 === 1)
 	{
 		alert("Computer Win!!!!!");
 		clear();
 	}
 	if(com_7 === 1 && com_8 === 1 && com_9 === 1)
 	{
 		alert("Computer Win!!!!!");
 		clear();
 	}

}//end of com win statement


//game end statement
	if(count===9)
	{
		alert("Game Over!!!")

		clear();

	}//end of game 

	return 0;
}//end of ai function



//creating game start
function clear()
{
location.reload();
} //end of game start