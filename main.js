let texts=['"Good decisions come from experience.Experience comes from making bad decisions"-Mark Twain',
             '"Enjoy life.There is plenty of time to be dead"- Hans Christian Andersen',
             '"If you want to fly,give up everything that weights you down"-Buddha',
             '"If your dreams do not scare you,they are too small"-Richard Branson',
             '"Taking care of myself does not mean "me first",it means "me too""-L.R knosts',
             '"If someone does not appreciate your presence then let them appreciate your absence"-Anonymous',
             '"To heal a wond you need to stop touching it"-Anonymous',
             '"Train your mind to see the good in every situation"-Anonymous',
             '"If people are doubting how far you can go,go so far that you cannot hear them"-Michele Ruiz',
             '"Do not give up because you had a bad day,forgive yourself and do better tomorrow"-Anonymous',
             '"Sometimes Allah allows you to taste the bitterness of this world so that you fully appreciate the sweetness of faith"-omar Suleiman',];


function RandomQuote()
{
    document.getElementById("TEXTAREA").innerHTML= texts[Math.round(Math.random()*4)];
}

function Green()
{
    document.getElementById("TEXTAREA").style.backgroundColor="#519E8A";
    document.getElementById("TEXTAREA").style.fontStyle = "italic";
    document.getElementById("TEXTAREA").style.fontFamily = "Impact,Charcoal,sans-serif";
    document.getElementById("TEXTAREA").style.borderColor="#2B8853";
    document.getElementById("TEXTAREA").style.borderStyle="solid dotted solid dotted";
    document.getElementById("TEXTAREA").style.color="white";
    document.getElementById("TEXTAREA").style.fontFamily ="Times New Roman";
    
}


function Yellow()
{
    document.getElementById("TEXTAREA").style.backgroundColor="#F4D35E";
    document.getElementById("TEXTAREA").style.fontStyle = "italic";
    document.getElementById("TEXTAREA").style.borderColor="#EE964B";
      document.getElementById("TEXTAREA").style.borderStyle="dotted solid double dashed";
      document.getElementById("TEXTAREA").style.color="black";
      document.getElementById("TEXTAREA").style.fontFamily ="Pacifico, cursive";
}

function Blue()
{
    document.getElementById("TEXTAREA").style.backgroundColor="#58A4B0";
    document.getElementById("TEXTAREA").style.borderColor="#083D77";
    document.getElementById("TEXTAREA").style.borderStyle="dotted dashed";
     document.getElementById("TEXTAREA").style.color="white";
     document.getElementById("TEXTAREA").style.fontFamily ="Helvetica";
    
    
}

function Pink()
{
    document.getElementById("TEXTAREA").style.backgroundColor="#DAA49A";
    document.getElementById("TEXTAREA").style.borderColor="pink";
      document.getElementById("TEXTAREA").style.borderStyle="groove";
      document.getElementById("TEXTAREA").style.color="black";
      document.getElementById("TEXTAREA").style.fontStyle = "inherit";
      document.getElementById("TEXTAREA").style.fontFamily ="arial";
}

function Cnvrt() {
	let cnvTyp = document.getElementById('CnvTyp').value;
    valu = document.getElementById('cvt').value;
    let text="";

	if (cnvTyp=="P2K") {
        x= valu * 0.4536;
        text=" "+x+" kilograms";
		document.getElementById('ans').innerHTML = text;

	} else if (cnvTyp=="K2P") {
        x= valu * 2.2046;
        text="  "+x+" pounds";
		document.getElementById('ans').innerHTML = text;
	}
}



let input;
let numbers;
let maxNumber=0;
let maxI=0;
let minI=0;
let currentSum;



function Calculate()
{
     input =  document.getElementById("CALCULATETEXT");
     numbers = input.value.split(",");
   Max();
   Min();
   Sum();
   Average();
   Reverse();
   
}


function Max()
{
     
   
    
    for(let i=maxI ; i<numbers.length ; i++)
       {
           if(parseInt(numbers[i])>parseInt(maxNumber))
          
               {
                   maxNumber=numbers[i];
                   maxI=i;
               }
       }
       document.getElementById("MAX").value = maxNumber;
   
}


function Min()
{
     
   
    var minNumber= numbers[0];
    
    for(var i=minI ; i<numbers.length ; i++)
       {
           if(parseInt(numbers[i])<=parseInt(minNumber))
               {
                   minNumber=numbers[i];
                   minI=i;
               }
       }
       document.getElementById("MIN").value = minNumber;
   
}


function Sum()
{
     
   var sum=0;
  
    for(var i=0 ; i<numbers.length ; i++)
       {
          sum=parseInt(sum) + parseInt(numbers[i]); 
       }
    
   document.getElementById("SUM").innerHTML = sum;
    currentSum = sum;
}


function Average()
{
       
    document.getElementById("AVERAGE").innerHTML = (currentSum/numbers.length)
  
}


function Reverse()
{
    let reverseArray = numbers.reverse();
    document.getElementById("REVERSE").innerHTML =reverseArray;

 
}

function Clear()
{
    document.getElementById("TEXTAREA2").value="";
}

function Sort()
{
    let texts = document.getElementById("TEXTAREA2").value.split("\n");
    
      let sortedText = texts.sort();
    
    let text = "";
    
    for(let i=0 ; i<sortedText.length ; i++)
        {
            text = text + "\n" + sortedText[i] ;
        }
    document.getElementById("TEXTAREA2").value = text.toString();  
   
}


function reversetext() {
    let input = document.getElementById("TEXTAREA2");
    let array1 = input.value.split("\n");
    let array2 = [array1.length];
    let text=""
    for (i = array1.length-1; i>=0; i--) {
       text = text + array1[i]+"\n" ;

    }
    document.getElementById("TEXTAREA2").value = text.toString();  
    
}

let flag = false;

function Capitalize()
{
    if(flag==false){
        flag=true;
        document.getElementById("TEXTAREA2").style.textTransform = "uppercase";
    }
    else{
        flag=false;
        document.getElementById("TEXTAREA2").style.textTransform = "lowercase";
    }
       
        

}


function Shuffle(){
    let input = document.getElementById("TEXTAREA2");
    let array = input.value.split("\n");
    let text="";
    for (i = 0; i < array.length; i++) {
        let rand = Math.floor(Math.random() * array.length);
        let temp = array[rand];
        array[rand] = array[i];
        array[i] = temp;
    }
    for(j=0;j<array.length;j++){
        text = text + array[j]+"\n" ;
        console.log(array[j]);
        console.log(text);
    }
    document.getElementById("TEXTAREA2").value = text.toString();

}

function Addi()
{
    let input = document.getElementById("TEXTAREA2");
    let array1 = input.value.split("\n");
    
    let sum2= 0;
    let text="";
    let num=1;
    
    for(let i=0 ; i<array1.length ; i++)
        {
            
           text=text+num+"."+array1[i]+"\n";
           num++;
        }
        num=0;
    document.getElementById("TEXTAREA2").value = text.toString();  
   
}

function Trim()
{
    let texts = document.getElementById("TEXTAREA2").value.split("\n");
    let text="";
    
     for(let i=0 ; i<texts.length ; i++)
        {
            texts[i].trim();
            text = text.trim() + "\n" + texts[i].trim() ;
        }
    document.getElementById("TEXTAREA2").value = text.toString();  
   
}


