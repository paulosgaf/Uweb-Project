var dados=
{	/*** Mudar o nome das imagens***/
	1:{"nome":"Monalisa","texto":"Texto sobre monalisa","original":"img/Monalisa/Monalisa.png","m1":"img/Monalisa/m1.png","m2":"img/Monalisa/m2.png","m3":"img/Monalisa/m3.png","m4":"img/Monalisa/m4.png","m5":"img/Monalisa/m5.png","m6":"img/Monalisa/m6.png"},
	2:{"nome":"Grito","texto":"Texto sobre grito","original":"img/grito/Grito.png","m1":"img/grito/m1.png","m2":"img/grito/m2.png","m3":"img/grito/m3.png","m4":"img/grito/m4.png","m5":"img/grito/m5.png","m6":"img/grito/m6.png"},
	3:{"nome":"Abaporu","texto":"Texto sobre Abaporu","original":"img/Abaporu/Abaporu.png","m1":"img/Abaporu/m1.png","m2":"img/Abaporu/m2.png","m3":"img/Abaporu/m3.png","m4":"img/Abaporu/m4.png","m5":"img/Abaporu/m5.png","m6":"img/Abaporu/m6.png"},
	4:{"nome":"A percistência da memoria","texto":"Texto sobre a percistência da memoria","original":"img/memoria/Memoria.png","m1":"img/memoria/m1.png","m2":"img/memoria/m2.png","m3":"img/memoria/m3.png","m4":"img/memoria/m4.png","m5":"img/memoria/m5.png","m6":"img/memoria/m6.png"},
	5:{"nome":"Ceia","texto":"Texto sobre a santa ceia","original":"img/Ceia/Ceia.png","m1":"img/Ceia/m1.png","m2":"img/Ceia/m2.png","m3":"img/Ceia/m3.png","m4":"img/Ceia/m4.png","m5":"img/Ceia/m5.png","m6":"img/Ceia/m6.png"},
	6:{"nome":"Homem Vitruviano","texto":"Texto sobre Homem Vitruviano","original":"img/homem/Homem.png","m1":"img/homem/m1.png","m2":"img/homem/m2.png","m3":"img/homem/m3.png","m4":"img/homem/m4.png","m5":"img/homem/m5.png","m6":"img/homem/m6.png"},
};
var count=1
function prox()
{
	count++;
	if(count>6)
	{
		count=1
	};
	document.getElementById("nome").innerHTML= dados[count]["nome"];
	document.getElementById("texto").innerHTML= dados[count]["texto"];
	document.getElementById("original").src=dados[count]["original"];
	document.getElementById("m1").src=dados[count]["m1"];
	document.getElementById("m2").src=dados[count]["m2"];
	document.getElementById("m3").src=dados[count]["m3"];
	document.getElementById("m4").src=dados[count]["m4"];
	document.getElementById("m5").src=dados[count]["m5"];
	document.getElementById("m6").src=dados[count]["m6"];


};

function ant()
{
	count--;
	if(count<1)
	{
		count=6
	};
	document.getElementById("nome").innerHTML= dados[count]["nome"];
	document.getElementById("texto").innerHTML= dados[count]["texto"];
	document.getElementById("original").src=dados[count]["original"];
	document.getElementById("m1").src=dados[count]["m1"];
	document.getElementById("m2").src=dados[count]["m2"];
	document.getElementById("m3").src=dados[count]["m3"];
	document.getElementById("m4").src=dados[count]["m4"];
	document.getElementById("m5").src=dados[count]["m5"];
	document.getElementById("m6").src=dados[count]["m6"];

};
