document.getElementById("demo").innerHTML = "god"

let x, y, z;
x= 5
y= 15
z= x*y;
document.getElementById("resultado").innerHTML= z

let a, b;
a = 3
b = (100+50*a)

document.getElementById("resultado2").innerHTML= b

function pegarvalor()
{
    ///pegando o elemento input pelo id e armazenamento em uma variavel
    let sasa = document.getElementById("meuinput")
    let valordigitado = sasa.value; ///exttrai o valor digitado usando o .value
    document.getElementById("ola").innerHTML = valordigitado;
}
