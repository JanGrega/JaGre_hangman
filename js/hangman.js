var secret = "JAVASCRIPT";
var lettersGuessed = "";
var counter = 1;




function getGuessedWord(secret, lettersGuessed)
{
  var result='';
  for(var c of secret)
    {
      if(lettersGuessed.indexOf(c)>=0)
        {
          result+=c;
        }
      else
        result+='_';
    }

  return result;

}


function myFunction() {
  
  var pre = 0;
  
  pre = getGuessedWord(secret, lettersGuessed);

  localStorage.setItem("secret", pre);

  document.getElementById("secret").textContent = pre;
}


function onClick(event)
{
 var el = event.target;

 el.setAttribute("disabled","disabled");

 lettersGuessed += el.textContent;

var pre = getGuessedWord(secret,lettersGuessed);
//counter++;
//console.log(counter);

console.log(lettersGuessed);

//  pre vypis SECRET na stranke ak uhadnem pismeno
el = document.getElementById("secret");
el.textContent = pre;

// if(secret == els.textContent)
// {
//   for(var btn of document.getElementById('buttons'))
// }

// pocitadlo
}

////////////////////////////////////////////////////////////////////////////

alphabet();
function alphabet()
{
 
  for(i = 65 ;i <= 90; i++ )
  {

    ///vytvor nasvat vsetko hnoda kde a napchat append to div      
    //document.body.appendChild(btn);
    
    
    var btn = document.createElement("button"); // vytvorim tlacidlo
    btn.setAttribute("type","button"); // nastavim typ a hodnotu
    btn.setAttribute("class","btn btn-default");

    btn.addEventListener("click",onClick)

    btn.setAttribute("value",String.fromCharCode(i));
    btn.textContent = String.fromCharCode(i);
   
    var elem = document.getElementById("buttons");    

    elem.appendChild(btn);

   // console.log(String.fromCharCode(i));

  }



}


function f1(objButton){  
   /// alert(objButton.value);
  document.getElementById("secret").textContent = objButton.value;
}

function bavi(){

 var buttonValue = document.getElementById('buttons').value
 
    document.getElementById("secret").textContent = buttonValue;  

}


