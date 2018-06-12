var prev="0";
var operator=0;
var current="0";
var max=10;

var currentn=0;
var prevn=0;

var i=0;
var f=1;


function digit(n)
{
	if (current.length>max)
	{
		document.getElementById('display').value = "Too long";
	}

	else 
	{
		if (eval(current)==0 && current.indexOf(".")==-1) 		//current does not hold any value
		{
			current=n;
		}

		else
		{
			current= current+n;
		}
	}

	document.getElementById('display').value=current;
}

function op(s)
{
	prev=current;
	current="0";
	operator=s;
	document.getElementById('display').value=current;
	// s= 1 for +, 2 for -, 3 for x, 4 for /, 5 for !, 6 for hcf, 7 for lcm
}

function factorial(num)
{
	f=1;
	for (i=1; i<=num; i++)
	{
		f*=i;
	}
	return f;
}

 function hcf(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
}

function lcm(a,b) 
{
	return ( a*b/(hcf(a,b)) );
}


function calculations()
{
	currentn= Number(current);
	prevn= Number(prev);

	switch(operator)
	{
		case 0:
			document.getElementById('display').value="Invalid";
			break;
		case 1:
			prevn=( (prevn + currentn) );
			break;
		case 2:
			prevn= ( (prevn - currentn) );
			break;
		case 3:
			prevn= ( (prevn * currentn) );
			break;
		case 4:
			prevn=( (prevn / currentn) );
			break;
		case 5:
			if (Number.isInteger(currentn))
			{ prevn= (factorial(currentn)); }
			else { document.getElementById('display').value="Invalid"; }
			break;
		case 6:
			if (Number.isInteger(currentn) && Number.isInteger(prevn))
			{ prevn= (hcf(currentn, prevn)); }
			else {document.getElementById('display').value="Invalid"; }
			break;
		case 7:
			if (Number.isInteger(currentn) && Number.isInteger(prevn))
			{ prevn= (lcm(currentn, prevn)); }
			else {document.getElementById('display').value="Invalid"; }
			break;

	}

	current="0";
	operator=0;
	prev=toString(prevn);
	document.getElementById('display').value=toString(prevn);
}

function clear()
{
	current="0";
	document.getElementById('display').value="0";
}

function allclear()
{
	current="0";
	prev="0";
	operator=0;
	document.getElementById('display').value="0";
}