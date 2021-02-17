var output = "";
var x=document.getElementById("demo");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState==4&&this.status) {
        var Objlist = JSON.parse(this.responseText);
        // var Objlist = JSONlist.products;
        for (let i = 0; i < Objlist.length; i++) {
            if (Objlist[i].completed===true) {
                output += "<input type = checkbox checked disabled style=width:20px;height:20px;>"+Objlist[i].title+"<br>"+"<hr>";
            }
            else{
                output += `<input type =checkbox style=width:20px;height:20px; class=myCheck onchange = flagCheck();>${Objlist[i].title}<br><hr>`
            }   
            document.getElementById("demo").innerHTML=output;
            document.getElementById("demo").style.padding="20px"; 
            document.getElementById("demo").style.fontSize="25px"; 
            document.getElementById("demo").style.fontFamily="TimesNewRoman";                    
         
    }

    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

function flagCheck(){
    var flag= 0;
    var checkBox = document.getElementsByClassName("myCheck");
    var size = checkBox.length;
    for (let i = 0; i < size; i++) {
        if(checkBox[i].checked == true){
            flag++;
        }
    }
    // if (flag == 5){alert("Congrats!!5 tasks has completed!!");}
    if(flag%5 === 0)
    {
        var j=(flag/5);

    alert("Congrats!!"+(5*j)+" tasks has completed!!");

    }
}
xhttp.onload;

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {

      document.getElementById("myUL").appendChild(li);
      
    }
    document.getElementById("myInput").value = "";
  
    // var span = document.createElement("SPAN");
    // // var txt = document.createTextNode("\u00D7");
    // // span.className = "close";
    // span.appendChild(txt);
    // li.appendChild(span);
  
    // for (i = 0; i < close.length; i++) {
    //   close[i].onclick = function() {
    //     var div = this.parentElement;
    //     div.style.display = "none";
    //   }
    // }
  }