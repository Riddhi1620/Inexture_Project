var pos=[0,0,0,0,0,0,0,0,0];
var user=1;
var comp=2;
var min=0;
var max=8;
var tie=0;
var win=[[0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
        ];
        var user_val = '0';
        var comp_val ='X';
function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}
function btnclick(btnObj)
{   tie++;
    var r_array=document.getElementsByName('select');
    for(let k=0;k<r_array.length;k++)
    {
        if(r_array[k].checked)
            user_val=r_array[k].value;
            // else
            // alert("please select any one symbol");
            // break;

    }    
    if(user_val=='X')
        comp_val='0';
        else
        comp_val='X';
    var id=btnObj.id;
        pos[id]=1; 
    console.log(id);
    btnObj.innerHTML=user_val;
    btnObj.onclick=null;
    // btnObj.style.backgroundColor="red";
    // x[0].style.backgroundColor = "yellow";            
    //winer();

   
    for(var i=0;i<pos.length;i++)
     {
        var randvalue=randomInt(min,max);
        randvalue=randvalue.toString();
        if(pos[randvalue]==0)
        {
            // console.log(randvalue);
            setTimeout(function(){document.getElementById(randvalue).innerHTML=comp_val;
        }, 200);

            document.getElementById(randvalue).onclick=null;
            // winer();
        
            pos[randvalue]=2;
            tie++;
            break;
        }
     }
    winer();
}
function winer()
{
    var flag=0;
    // console.log("winer "+win[0][0]);
    for(var i=0 ;i<8;i++)
    {
        for(var j=0;j<3;j++)
        {
            if(pos[win[i][j]] & pos[win[i][j+1]] & pos[win[i][j+2]] & user)
            {
                document.getElementById(win[i][j]).style.backgroundColor="green";
                document.getElementById(win[i][j+1]).style.backgroundColor="green";
                document.getElementById(win[i][j+2]).style.backgroundColor="green";
                setTimeout(function(){alert("user win"); }, 100);
                flag=1;
                resetLink();
               
                break;
            }
            else if((pos[win[i][j]] & pos[win[i][j+1]] & pos[win[i][j+2]] & comp)==2)
            {
                document.getElementById(win[i][j]).style.backgroundColor="red";
                document.getElementById(win[i][j+1]).style.backgroundColor="red";
                document.getElementById(win[i][j+2]).style.backgroundColor="red";
                setTimeout(function(){  alert("Computer win"); }, 500);
                resetLink();
                flag=2;
                break;
            }
            else{
                
            }

        }
    }   
    if((flag==0)&&(tie==9))
    {
    setTimeout(function(){  alert("Game Tie"); }, 500);}

}
function resetLink()
{
    document.getElementById('0').onclick=null;
    document.getElementById('1').onclick=null;
    document.getElementById('2').onclick=null;
    document.getElementById('3').onclick=null;
    document.getElementById('4').onclick=null;
    document.getElementById('5').onclick=null;
    document.getElementById('6').onclick=null;
    document.getElementById('7').onclick=null;
    document.getElementById('8').onclick=null;
}
function reset()
{
    setTimeout(function(){location.reload();  }, 100);

}