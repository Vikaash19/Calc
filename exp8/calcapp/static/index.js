function dis(val) 
{
    document.getElementById("result").value += val;
}

function clr() 
{
    document.getElementById("result").value = "";
}

function solve() 
{
    x = document.getElementById("result").value;
    y = eval(x);
    document.getElementById("result").value = y;
}

function percent() 
{
    x = document.getElementById("result").value;
    y = eval(x);
    percentage = y / 100;
    document.getElementById("result").value = percentage;
}