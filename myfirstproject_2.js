alert("HI! CHOOSE THE DIFFICULTY TO START");
let val1=Math.floor(Math.random()*256);
let val2=Math.floor(Math.random()*256);
let val3=Math.floor(Math.random()*256);
document.getElementById("colrcode").innerHTML="&nbsp; &nbsp; rgb("+val1+","+val2+","+val3+")";
document.getElementById("colrcode").style.fontSize="xxx-large";
let arr=[];
let size=90;
for(let i=0;i<size;i++)
{
    arr.push(Math.floor(Math.random()*256));
}
// let result=document.querySelector(".colrcode");
// result.innerHTML="guys";
// console.log(result);

document.getElementById("easy").addEventListener("click",eas);
function eas()
{   
   document.getElementById("0").style.visibility="visible";    
   document.getElementById("1").style.visibility="visible";    
   document.getElementById("2").style.visibility="visible";    
   click(3);
}
document.getElementById("difficult").addEventListener("click",diff);
function diff(){
    document.getElementById("0").style.visibility="visible";  
    document.getElementById("1").style.visibility="visible";  
    document.getElementById("2").style.visibility="visible";  
    document.getElementById("3").style.visibility="visible";  
    document.getElementById("4").style.visibility="visible";  
    document.getElementById("5").style.visibility="visible";  
    click(6);
}
function click(n){
let val=Math.floor(Math.random()*n);
console.log(val);
// console.log(arr);

if(val==1)
{
 document.getElementById("1").style.backgroundColor="rgb("+val1+","+val2+","+val3+")";
 document.getElementById("2").style.backgroundColor="rgb("+arr[0]+","+arr[1]+","+arr[2]+")";
 document.getElementById("0").style.backgroundColor="rgb("+arr[3]+","+arr[4]+","+arr[5]+")";
 document.getElementById("3").style.backgroundColor="rgb("+arr[6]+","+arr[7]+","+arr[8]+")";
 document.getElementById("4").style.backgroundColor="rgb("+arr[9]+","+arr[10]+","+arr[11]+")";
 document.getElementById("5").style.backgroundColor="rgb("+arr[12]+","+arr[13]+","+arr[14]+")";

}
else if(val==0)
{
  document.getElementById("0").style.backgroundColor="rgb("+val1+","+val2+","+val3+")";
  document.getElementById("1").style.backgroundColor="rgb("+arr[15]+","+arr[16]+","+arr[17]+")";
  document.getElementById("2").style.backgroundColor="rgb("+arr[18]+","+arr[19]+","+arr[20]+")";
  document.getElementById("3").style.backgroundColor="rgb("+arr[21]+","+arr[22]+","+arr[23]+")";
  document.getElementById("4").style.backgroundColor="rgb("+arr[24]+","+arr[25]+","+arr[26]+")";
  document.getElementById("5").style.backgroundColor="rgb("+arr[27]+","+arr[28]+","+arr[29]+")";
}
else if(val==2)
{
    document.getElementById("2").style.backgroundColor="rgb("+val1+","+val2+","+val3+")";
    document.getElementById("1").style.backgroundColor="rgb("+arr[30]+","+arr[31]+","+arr[32]+")";
    document.getElementById("5").style.backgroundColor="rgb("+arr[33]+","+arr[34]+","+arr[35]+")";
    document.getElementById("0").style.backgroundColor="rgb("+arr[36]+","+arr[37]+","+arr[38]+")";
    document.getElementById("4").style.backgroundColor="rgb("+arr[39]+","+arr[40]+","+arr[41]+")";
    document.getElementById("3").style.backgroundColor="rgb("+arr[42]+","+arr[43]+","+arr[44]+")";
}
else if(val==3)
{
    document.getElementById("3").style.backgroundColor="rgb("+val1+","+val2+","+val3+")";
    document.getElementById("1").style.backgroundColor="rgb("+arr[45]+","+arr[46]+","+arr[47]+")";
    document.getElementById("0").style.backgroundColor="rgb("+arr[48]+","+arr[49]+","+arr[50]+")";
    document.getElementById("5").style.backgroundColor="rgb("+arr[51]+","+arr[52]+","+arr[53]+")";
    document.getElementById("4").style.backgroundColor="rgb("+arr[54]+","+arr[55]+","+arr[56]+")";
    document.getElementById("2").style.backgroundColor="rgb("+arr[57]+","+arr[58]+","+arr[59]+")";
}
else if(val==4)
{
    document.getElementById("4").style.backgroundColor="rgb("+val1+","+val2+","+val3+")";
    document.getElementById("1").style.backgroundColor="rgb("+arr[60]+","+arr[61]+","+arr[62]+")";
    document.getElementById("0").style.backgroundColor="rgb("+arr[63]+","+arr[64]+","+arr[65]+")";
    document.getElementById("3").style.backgroundColor="rgb("+arr[66]+","+arr[67]+","+arr[68]+")";
    document.getElementById("2").style.backgroundColor="rgb("+arr[69]+","+arr[70]+","+arr[71]+")";
    document.getElementById("5").style.backgroundColor="rgb("+arr[72]+","+arr[73]+","+arr[74]+")";
}
else 
{
    document.getElementById("5").style.backgroundColor="rgb("+val1+","+val2+","+val3+")";
    document.getElementById("1").style.backgroundColor="rgb("+arr[75]+","+arr[76]+","+arr[77]+")";
    document.getElementById("0").style.backgroundColor="rgb("+arr[78]+","+arr[79]+","+arr[80]+")";
    document.getElementById("2").style.backgroundColor="rgb("+arr[81]+","+arr[82]+","+arr[83]+")";
    document.getElementById("3").style.backgroundColor="rgb("+arr[84]+","+arr[85]+","+arr[86]+")";
    document.getElementById("4").style.backgroundColor="rgb("+arr[87]+","+arr[88]+","+arr[89]+")";
}

document.getElementById("0").addEventListener("click",hide1);
function hide1(){
    if(val!=0)
    {
       
        document.getElementsByClassName("box")[0].style.visibility="hidden";
        document.getElementById("comment").innerHTML="TRY AGAIN";
    }
    else
    {
    document.querySelector(".bg").style.backgroundColor="rgb("+val1+", "+val2+", "+val3+")";
    // document.getElementsByClassName("bg")[0].style.backgroundColor="rgb("+val1+", "+val2+", "+val3+")";
    document.getElementById("comment").innerHTML="CORRECT!!!"; 
    same_color();
    
    }
      
}
document.getElementById("1").addEventListener("click",hide2);

function hide2(){
    if(val!=1)
    {
        document.getElementsByClassName("box")[1].style.visibility="hidden";
        document.getElementById("comment").innerHTML="TRY AGAIN";
    }
    else
    {
        
        document.querySelector(".bg").style.backgroundColor="rgb("+val1+", "+val2+", "+val3+")";
        document.getElementById("comment").innerHTML="CORRECT!!!";
        same_color();
    }
 
}
document.getElementById("2").addEventListener("click",hide3);
function hide3(){
    if(val!=2)
    {
        document.getElementsByClassName("box")[2].style.visibility="hidden";
        document.getElementById("comment").innerHTML="TRY AGAIN";
    }
    else
    {
        
        document.querySelector(".bg").style.backgroundColor="rgb("+val1+", "+val2+", "+val3+")";
        document.getElementById("comment").innerHTML="CORRECT!!!";
        same_color();
    }
 
}

document.getElementById("3").addEventListener("click",hide4);
function hide4(){
    if(val!=3)
    {
        document.getElementsByClassName("box")[3].style.visibility="hidden";
        document.getElementById("comment").innerHTML="TRY AGAIN";
    }
    else
    {
        
        document.querySelector(".bg").style.backgroundColor="rgb("+val1+", "+val2+", "+val3+")";
        document.getElementById("comment").innerHTML="CORRECT!!!";
        same_color();
    }
 
}

document.getElementById("4").addEventListener("click",hide5);
function hide5(){
    if(val!=4)
    {
        document.getElementsByClassName("box")[4].style.visibility="hidden";
        document.getElementById("comment").innerHTML="TRY AGAIN";
    }
    else
    {
        
        document.querySelector(".bg").style.backgroundColor="rgb("+val1+", "+val2+", "+val3+")";
        document.getElementById("comment").innerHTML="CORRECT!!!";
        same_color();
    }
 
}

document.getElementById("5").addEventListener("click",hide6);
function hide6(){
    if(val!=5)
    {
        document.getElementsByClassName("box")[5].style.visibility="hidden";
        document.getElementById("comment").innerHTML="TRY AGAIN";
    }
    else
    {
        
        document.querySelector(".bg").style.backgroundColor="rgb("+val1+", "+val2+", "+val3+")";
        document.getElementById("comment").innerHTML="CORRECT!!!";
        same_color();
    }
 
}
}
function same_color(){
    document.getElementsByClassName("box")[0].style.backgroundColor="rgb("+val1+", "+val2+", "+val3+")";
    document.getElementsByClassName("box")[1].style.backgroundColor="rgb("+val1+", "+val2+", "+val3+")";
    document.getElementsByClassName("box")[2].style.backgroundColor="rgb("+val1+", "+val2+", "+val3+")";
    document.getElementsByClassName("box")[3].style.backgroundColor="rgb("+val1+", "+val2+", "+val3+")";
    document.getElementsByClassName("box")[4].style.backgroundColor="rgb("+val1+", "+val2+", "+val3+")";
    document.getElementsByClassName("box")[5].style.backgroundColor="rgb("+val1+", "+val2+", "+val3+")";
}
function reset(){
    location.reload();
}
// function click_diff(){

// }