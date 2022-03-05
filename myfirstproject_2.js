let val1=Math.floor(Math.random()*256);
let val2=Math.floor(Math.random()*256);
let val3=Math.floor(Math.random()*256);
document.getElementById("colrcode").innerHTML="&nbsp; &nbsp; rgb("+val1+","+val2+","+val3+")";
let arr=[];
let size=18;
for(let i=0;i<size;i++)
{
    arr.push(Math.floor(Math.random()*256));
}
// let result=document.querySelector(".colrcode");
// result.innerHTML="guys";
// console.log(result);

document.getElementById("two").addEventListener("click",easy);
function easy()
{
    let data=document.getElementsByClassName(".box");
    data.style.visibility="visible";
}
let val=Math.floor(Math.random()*3);
console.log(val);
console.log(arr);

if(val==1)
{
 document.getElementById("1").style.backgroundColor="rgb("+val1+","+val2+","+val3+")";
 document.getElementById("2").style.backgroundColor="rgb("+arr[0]+","+arr[1]+","+arr[2]+")";
 document.getElementById("0").style.backgroundColor="rgb("+arr[3]+","+arr[4]+","+arr[5]+")";

}
else if(val==0)
{
  document.getElementById("0").style.backgroundColor="rgb("+val1+","+val2+","+val3+")";
  document.getElementById("1").style.backgroundColor="rgb("+arr[6]+","+arr[7]+","+arr[8]+")";
  document.getElementById("2").style.backgroundColor="rgb("+arr[9]+","+arr[10]+","+arr[11]+")";
}
else
{
    document.getElementById("2").style.backgroundColor="rgb("+val1+","+val2+","+val3+")";
    document.getElementById("1").style.backgroundColor="rgb("+arr[12]+","+arr[13]+","+arr[14]+")";
    document.getElementById("0").style.backgroundColor="rgb("+arr[15]+","+arr[16]+","+arr[17]+")";
}

document.getElementById("0").addEventListener("click",hide1);
function hide1(){
    if(document.activeElement.id!=val)
    {
        document.getElementsByClassName("box")[0].style.visibility="hidden";
        document.getElementById("comment").innerHTML="TRY AGAIN";
    }
    else
    {
    document.getElementsByClassName("bg").style.backgroundColor="rgb("+val1+","+val2+","+val3+")";
    document.getElementById("comment").innerHTML="CORRECT!!!";
    }
 
}
document.getElementById("1").addEventListener("click",hide2);
function hide2(){
    if(document.activeElement.id!=val)
    {
        document.getElementsByClassName("box")[1].style.visibility="hidden";
        document.getElementById("comment").innerHTML="TRY AGAIN";
    }
    else
    {
        document.getElementsByClassName("bg").style.backgroundColor="rgb("+val1+","+val2+","+val3+")";
        document.getElementById("comment").innerHTML="CORRECT!!!";
    }
 
}
document.getElementById("2").addEventListener("click",hide3);
function hide3(){
    if(document.activeElement.id!=val)
    {
        document.getElementsByClassName("box")[2].style.visibility="hidden";
        document.getElementById("comment").innerHTML="TRY AGAIN";
    }
    else
    {
        document.getElementsByClassName("bg").style.backgroundColor="rgb("+val1+","+val2+","+val3+")";
        document.getElementById("comment").innerHTML="CORRECT!!!";
    }
 
}
