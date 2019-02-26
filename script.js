//form variables

let people=document.getElementById("peopleamt").value;


function onPress(){
    let bill=document.getElementById("billamt").value;
    let dropdown=document.getElementById("serviceQual").value;
    let people=document.getElementById("peopleamt").value;
    if(bill==''){
        alert("Please enter the selling amount")
    }
    else if(dropdown==0){
        alert("Please select the commisson");
    }
    else if(people=='')
    {
        alert("Please select the number of people");
    }
    else{
        let total=(bill*dropdown)/people;
        document.getElementById("tip").innerHTML=total;
        document.getElementById("tip1").innerHTML="For "+people+" people";
    }   
}