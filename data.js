
function ajax(){

    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    //condition
    if(this.readyState==4&&this.status==200){
        var response= JSON.parse(this.responseText);
        var Jgrocery = response.grocery;
        //console.log(Jgrocery);
        var output ="<table>";
        for(var i=0;i<Jgrocery.length;i++){
           
            output += "<tr><td>"+Jgrocery[i].Name+"</td>" +"<td>"+Jgrocery[i].Quantity+"</td>" +"<td>" + Jgrocery[i].Unit+"</td>"  +"<td>" + Jgrocery[i].Department+"</td>"+"<td>" + Jgrocery[i].Notes+"</td>"+"</tr>";
            }
        output +="</table>";
        document.getElementById("demo").innerHTML=output;

        
    }
}
xhttp.open("GET","grocery.json",true);
xhttp.send();
}
// document.addEventListener("DOMContentLoaded", function(event) {
//     ajax();
//   });