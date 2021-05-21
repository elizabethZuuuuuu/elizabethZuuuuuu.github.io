function ChangeColor(color)
{    
    switch(color)
    {
        case 'Green':
            document.getElementById("body").style.backgroundColor = "#4CAF50"
            break;

        case 'Blue':
            document.getElementById("body").style.backgroundColor = "#008CBA"
            break;
        case 'Red':
        document.getElementById("body").style.backgroundColor = "#f44336"
        break;
        case 'Gray':
            document.getElementById("body").style.backgroundColor = "#e7e7e7"
            break;
        case 'Black':
            document.getElementById("body").style.backgroundColor = "#555555"
            break;
    }
}

function ChangeNames()
{
    if(document.getElementById('userSurname').value != '')
        document.getElementById('hSurname').innerHTML=document.getElementById('userSurname').value
    if(document.getElementById('userName').value != '')
        document.getElementById('hName').innerHTML=document.getElementById('userName').value
}

function GetRandColor()
{
    col = Math.round(255.0*Math.random());
    r = col.toString(16);
    col = Math.round(255.0*Math.random());
    g=col.toString(16);
    col = Math.round(255.0*Math.random());
    d=col.toString(16);
    col=r+g+d;
    return col;
}