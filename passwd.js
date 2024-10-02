function authenticate()
{
    var x=document.forms["psswdform"]["pss"].value;
    if(x=='suraj' || x=='vinod' || x=='aditya' || x==1)
    {
        return true;
    }
    else{
        window.alert("Enter correct password");
        return false;
    }
}
