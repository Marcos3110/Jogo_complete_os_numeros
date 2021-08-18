 /*F1N1*/
    var ponto_a1 = 0;
    var erro_a2 = 0;
function completar_a1(input){
    var input = document.querySelector("#completar_a1");
    var completar_a1 = input.value;
    if(completar_a1 == 02){
        ponto_a1 = 2
   }
    else{
        erro_a2 = 1
    }
}
var ponto_a3 = 0;
var erro_a4 = 0;
function completar_a2(input){
    var input = document.querySelector("#completar_a2");
    var completar_a2 = input.value;
    if(completar_a2 == 04){
        ponto_a3 = 2
    }
        else{
            erro_a4 = 1
        }
}
var ponto_a5 = 0;
var erro_a6 = 0;
function completar_a3(input){
        var input = document.querySelector("#completar_a3");
        var completar_a3 = input.value;
    if(completar_a3 == 06){
        ponto_a5 = 2
        }
            else{
                erro_a6 = 1
            }
}
var ponto_a7 = 0;
var erro_a8 = 0;
function completar_a4(input){
    var input = document.querySelector('#completar_a4');
    var completar_a4 = input.value;
    if(completar_a4 == 08){
        ponto_a7 = 2
    }
    else{
        erro_a8 = 1
    }
}
var ponto_a9 = 0;
var erro_a10 = 0;
function completar_a5(input){
    var input = document.querySelector('#completar_a5');
    var completar_a5 = input.value;
    if(completar_a5 == 10){
        ponto_a9 = 2
    }
    else{
        erro_a10 = 1
    }
}
function button01(){
    var pontosa01 = parseInt(ponto_a1)+parseInt(ponto_a3)+parseInt(ponto_a5)+parseInt(ponto_a7)+parseInt(ponto_a9);
    document.getElementById('pontos1').innerHTML =pontosa01;
    sessionStorage.setItem('pontosA1',pontosa01);
    var errosa01 = parseInt(erro_a2)+parseInt(erro_a4)+parseInt(erro_a6)+parseInt(erro_a8)+parseInt(erro_a10);
    sessionStorage.setItem('erroA2',errosa01)
}



/*F1N2*/
var  ponto_b1 = 0;
var erro_b2 = 0;
function completar_b1(input){
var input = document.querySelector("#completar_b1");
var completar_b1 = input.value;
if(completar_b1 == 20){
    ponto_b1 = 2
}
    else{
        erro_b2 = 1
   }
}
var  ponto_b3 = 0;
var erro_b4 = 0;
function completar_b2(input){
var input = document.querySelector("#completar_b2");
var completar_b2 = input.value;
if(completar_b2 == 22){
    ponto_b3 = 2
}
    else{
        erro_b4 = 1
    }
}
var  ponto_b5 = 0;
var erro_b6 = 0;
function completar_b3(input){
    var input = document.querySelector("#completar_b3");
    var completar_b3 = input.value;
if(completar_b3 == 24){
    ponto_b5 = 2
    }
        else{
            erro_b6 = 1
        }
}
var  ponto_b7 = 0;
var erro_b8 = 0;
function completar_b4(input){
    var input = document.querySelector('#completar_b4');
    var completar_b4 = input.value;
    if(completar_b4 == 26){
        ponto_b7 = 2
    }
    else{
        erro_b8 = 1
    }
}
var  ponto_b9 = 0;
var erro_b10 = 0;
function completar_b5(input){
    var input = document.querySelector('#completar_b5');
    var completar_b5 = input.value;
    if(completar_b5 == 28){
        ponto_b9 = 2
    }
    else{
        erro_b10 = 1
    }
}
function button02(){
    var pontosb01= parseInt( ponto_b1)+parseInt( ponto_b3)+parseInt( ponto_b5)+parseInt( ponto_b7)+parseInt( ponto_b9);
    document.getElementById('pontos2').innerHTML =pontosb01;
    var errosb02 = parseInt(erro_b2)+parseInt(erro_b4)+parseInt(erro_b6)+parseInt(erro_b8)+parseInt(erro_b10);
    sessionStorage.setItem('erroB2',errosb02);
    sessionStorage.setItem('pontosB1',pontosb01);
}
/*f1n3*/
var ponto_c1 = 0;
var erro_c2 = 0;
function completar_c1(input){
var input = document.querySelector("#completar_c1");
var completar_c1 = input.value;
if(completar_c1 == 57){
    ponto_c1 = 2
}
    else{
        erro_c2 = 1
   }
}
var ponto_c3 = 0;
var erro_c4 = 0;
function completar_c2(input){
var input = document.querySelector("#completar_c2");
var completar_c2 = input.value;
if(completar_c2 == 55){
    ponto_c3 = 2
}
    else{
        erro_c4 = 1
    }
}
var ponto_c5 = 0;
var erro_c6 = 0;
function completar_c3(input){
var input = document.querySelector("#completar_c3");
var completar_c3 = input.value;
if(completar_c3 == 53){
    ponto_c5 = 2
}
    else{
        erro_c6 = 1
    }
}
var ponto_c7 = 0;
var erro_c8 = 0;
function completar_c4(input){
    var input = document.querySelector('#completar_c4');
    var completar_c4 = input.value;
    if(completar_c4 == 51){
        ponto_c7 = 2
    }
    else{
        erro_c8 = 1
    }
}
var ponto_c9 = 0;
var erro_c10 = 0;
function completar_c5(input){
    var input = document.querySelector('#completar_c5');
    var completar_c5 = input.value;
    if(completar_c5 == 49){
        ponto_c9 = 2
    }
    else{
        erro_c10 = 1
    }
}
function button03(){
    var pontosc01 = parseInt(ponto_c1)+parseInt(ponto_c3)+parseInt(ponto_c5)+parseInt(ponto_c7)+parseInt(ponto_c9);
    document.getElementById('pontos3').innerHTML =pontosc01;
    var errosc02 = parseInt(erro_c2)+parseInt(erro_c4)+parseInt(erro_c6)+parseInt(erro_c8)+parseInt(erro_c10);
    sessionStorage.setItem('erroC2',errosc02);
    sessionStorage.setItem('pontosC1',pontosc01);
}
/*F2N1*/
var ponto_d1 = 0;
var erro_d2 = 0;
function completar_d1(input){
var input = document.querySelector("#completar_d1");
var completar_d1 = input.value;
if(completar_d1 == 04){
    ponto_d1 = 2
}
    else{
        erro_d2 = 1
   }
}
var ponto_d3 = 0;
var erro_d4 = 0;
function completar_d2(input){
var input = document.querySelector("#completar_d2");
var completar_d2 = input.value;
if(completar_d2 == 08){
    ponto_d3 = 2
}
    else{
        erro_d4 = 1
    }
}
var ponto_d5 = 0;
var erro_d6 = 0;
function completar_d3(input){
var input = document.querySelector("#completar_d3");
var completar_d3 = input.value;
if(completar_d3 == 12){
    ponto_d5 = 2
}
    else{
        erro_d6 = 1
    }
}
var ponto_d7 = 0;
var erro_d8 = 0;
function completar_d4(input){
    var input = document.querySelector('#completar_d4');
    var completar_d4 = input.value;
    if(completar_d4 == 16){
        ponto_d7 = 2
    }
    else{
        erro_d8 = 1
    }
}
var ponto_d9 = 0;
var erro_d10 = 0;
function completar_d5(input){
    var input = document.querySelector('#completar_d5');
    var completar_d5 = input.value;
    if(completar_d5 == 20){
        ponto_d9 = 2
    }
    else{
        erro_d10 = 1
    }
}
function button04(){
    var pontosd01 = parseInt(ponto_d1)+parseInt(ponto_d3)+parseInt(ponto_d5)+parseInt(ponto_d7)+parseInt(ponto_d9);
    document.getElementById('pontos4').innerHTML =pontosd01;
    var errosd02 = parseInt(erro_d2)+parseInt(erro_d4)+parseInt(erro_d6)+parseInt(erro_d8)+parseInt(erro_d10);
    sessionStorage.setItem('erroD2',errosd02);
    sessionStorage.setItem('pontosD1',pontosd01);
}

/*F2N2*/ 
var ponto_e1 = 0;
var erro_e2 = 0;
function completar_e1(input){
var input = document.querySelector("#completar_e1");
var completar_e1 = input.value;
if(completar_e1 == 05){
    ponto_e1 = 2
}
    else{
        erro_e2 = 1
   }
}
var ponto_e3 = 0;
var erro_e4 = 0;
function completar_e2(input){
var input = document.querySelector("#completar_e2");
var completar_e2 = input.value;
if(completar_e2 == 09){
    ponto_e3 = 2
}
    else{
        erro_e4 = 1
    }
}
var ponto_e5 = 0;
var erro_e6 = 0;
function completar_e3(input){
var input = document.querySelector("#completar_e3");
var completar_e3 = input.value;
if(completar_e3 == 13){
    ponto_e5 = 2
}
    else{
        erro_e6 = 1
    }
}
var ponto_e7 = 0;
var erro_e8 = 0;
function completar_e4(input){
    var input = document.querySelector('#completar_e4');
    var completar_e4 = input.value;
    if(completar_e4 == 17){
        ponto_e7 = 2
    }
    else{
        erro_e8 = 1
    }
}
var ponto_e9 = 0;
var erro_e10 = 0;
function completar_e5(input){
    var input = document.querySelector('#completar_e5');
    var completar_e5 = input.value;
    if(completar_e5 == 21){
        ponto_e9 = 2
    }
    else{
        erro_e10 = 1
    }
}
function button05(){
    var pontose01 = parseInt(ponto_e1)+parseInt(ponto_e3)+parseInt(ponto_e5)+parseInt(ponto_e7)+parseInt(ponto_e9);
    document.getElementById('pontos5').innerHTML = pontose01;
    var errose02 = parseInt(erro_e2)+parseInt(erro_e4)+parseInt(erro_e6)+parseInt(erro_e8)+parseInt(erro_e10);
    sessionStorage.setItem('erroE2',errose02);
    sessionStorage.setItem('pontosE1',pontose01);
}
/*F2N3*/
var ponto_f1 = 0;
var erro_f2 = 0;
function completar_f1(input){
var input = document.querySelector("#completar_f1");
var completar_f1 = input.value;
if(completar_f1 == 93){
    ponto_f1 = 2
}
    else{
        erro_f2 = 1
   }
}
var ponto_f3 = 0;
var erro_f4 = 0;
function completar_f2(input){
var input = document.querySelector("#completar_f2");
var completar_f2 = input.value;
if(completar_f2 == 89){
    ponto_f3 = 2
}
    else{
        erro_f4 = 1
    }
}
var ponto_f5 = 0;
var erro_f6 = 0;
function completar_f3(input){
var input = document.querySelector("#completar_f3");
var completar_f3 = input.value;
if(completar_f3 == 85){
    ponto_f5 = 2
}
    else{
        erro_f6 = 1
    }
}
var ponto_f7 = 0;
var erro_f8 = 0;
function completar_f4(input){
    var input = document.querySelector('#completar_f4');
    var completar_f4 = input.value;
    if(completar_f4 == 81){
        ponto_f7 = 2
    }
    else{
        erro_f8 = 1
    }
}
var ponto_f9 = 0;
var erro_f10 = 0;
function completar_f5(input){
    var input = document.querySelector('#completar_f5');
    var completar_f5 = input.value;
    if(completar_f5 == 77){
        ponto_f9 = 2
    }
    else{
        erro_f10 = 1
    }
}
function button06(){
    var pontosf01 = parseInt(ponto_f1)+parseInt(ponto_f3)+parseInt(ponto_f5)+parseInt(ponto_f7)+parseInt(ponto_f9);
    document.getElementById('pontos6').innerHTML = pontosf01;
    var errosf02 = parseInt(erro_f2)+parseInt(erro_f4)+parseInt(erro_f6)+parseInt(erro_f8)+parseInt(erro_f10);
    sessionStorage.setItem('erroF2',errosf02);
    sessionStorage.setItem('pontosF1',pontosf01);
}
/*F3N1*/
var ponto_g1 = 0;
var erro_g2 = 0;
function completar_g1(input){
var input = document.querySelector("#completar_g1");
var completar_g1 = input.value;
if(completar_g1 == 07){
    ponto_g1 = 2
}
    else{
        erro_g2 = 1
   }
}
var ponto_g3 = 0;
var erro_g4 = 0;
function completar_g2(input){
var input = document.querySelector("#completar_g2");
var completar_g2 = input.value;
if(completar_g2 == 13){
    ponto_g3 = 2
}
    else{
        erro_g4 = 1
    }
}
var ponto_g5 = 0;
var erro_g6 = 0;
function completar_g3(input){
var input = document.querySelector("#completar_g3");
var completar_g3 = input.value;
if(completar_g3 == 19){
    ponto_g5 = 2
}
    else{
        erro_g6 = 1
    }
}
var ponto_g7 = 0;
var erro_g8 = 0;
function completar_g4(input){
    var input = document.querySelector('#completar_g4');
    var completar_g4 = input.value;
    if(completar_g4 == 29){
        ponto_g7 = 2
    }
    else{
        erro_g8 = 1
    }
}
var ponto_g9 = 0;
var erro_g10 = 0;
function completar_g5(input){
    var input = document.querySelector('#completar_g5');
    var completar_g5 = input.value;
    if(completar_g5 == 37){
        ponto_g9 = 2
    }
    else{
        erro_g10 = 1
    }
}
function button07(){
    var pontosg01 = parseInt(ponto_g1)+parseInt(ponto_g3)+parseInt(ponto_g5)+parseInt(ponto_g7)+parseInt(ponto_g9);
    document.getElementById('pontos7').innerHTML = pontosg01;
    var errosg02 = parseInt(erro_g2)+parseInt(erro_g4)+parseInt(erro_g6)+parseInt(erro_g8)+parseInt(erro_g10);
    sessionStorage.setItem('erroG2',errosg02);
    sessionStorage.setItem('pontosG1',pontosg01);
}
/*F3N2*/
var ponto_h1 = 0;
var erro_h2 = 0;
function completar_h1(input){
var input = document.querySelector("#completar_h1");
var completar_h1 = input.value;
if(completar_h1 == 28){
    ponto_h1 = 2
}
    else{
        erro_h2 = 1
   }
}
var ponto_h3 = 0;
var erro_h4 = 0;
function completar_h2(input){
var input = document.querySelector("#completar_h2");
var completar_h2 = input.value;
if(completar_h2 == 36){
    ponto_h3 = 2
}
    else{
        erro_h4 = 1
    }
}
var ponto_h5 = 0;
var erro_h6 = 0;
function completar_h3(input){
var input = document.querySelector("#completar_h3");
var completar_h3 = input.value;
if(completar_h3 == 44){
    ponto_h5 = 2
}
    else{
        erro_h6 = 1
    }
}
var ponto_h7 = 0;
var erro_h8 = 0;
function completar_h4(input){
    var input = document.querySelector('#completar_h4');
    var completar_h4 = input.value;
    if(completar_h4 == 52){
        ponto_h7 = 2
    }
    else{
        erro_h8 = 1
    }
}
var ponto_h9 = 0;
var erro_h10 = 0;
function completar_h5(input){
    var input = document.querySelector('#completar_h5');
    var completar_h5 = input.value;
    if(completar_h5 == 60){
        ponto_h9 = 2
    }
    else{
        erro_h10 = 1
    }
}
function button08(){
    var pontosh01 = parseInt(ponto_h1)+parseInt(ponto_h3)+parseInt(ponto_h5)+parseInt(ponto_h7)+parseInt(ponto_h9);
    document.getElementById('pontos8').innerHTML = pontosh01;
    var errosh02 = parseInt(erro_h2)+parseInt(erro_h4)+parseInt(erro_h6)+parseInt(erro_h8)+parseInt(erro_h10);
    sessionStorage.setItem('erroH2',errosh02);
    sessionStorage.setItem('pontosH1',pontosh01);
}
/*F3N3*/ 
var ponto_i1 = 0;
var erro_i2 = 0;
function completar_i1(input){
var input = document.querySelector("#completar_i1");
var completar_i1 = input.value;
if(completar_i1 == 24){
    ponto_i1 = 2
}
    else{
        erro_i2 = 1
   }
}
var ponto_i3 = 0;
var erro_i4 = 0;
function completar_i2(input){
var input = document.querySelector("#completar_i2");
var completar_i2 = input.value;
if(completar_i2 == 36){
    ponto_i3 = 2
}
    else{
        erro_i4 = 1
    }
}
var ponto_i5 = 0;
var erro_i6 = 0;
function completar_i3(input){
var input = document.querySelector("#completar_i3");
var completar_i3 = input.value;
if(completar_i3 == 48){
    ponto_i5 = 2
}
    else{
        erro_i6 = 1
    }
}
var ponto_i7 = 0;
var erro_i8 = 0;
function completar_i4(input){
    var input = document.querySelector('#completar_i4');
    var completar_i4 = input.value;
    if(completar_i4 == 60){
        ponto_i7 = 2
    }
    else{
        erro_i8 = 1
    }
}
var ponto_i9 = 0;
var erro_i10 = 0;
function completar_i5(input){
    var input = document.querySelector('#completar_i5');
    var completar_i5 = input.value;
    if(completar_i5 == 72){
        ponto_i9 = 2
    }
    else{
        erro_i10 = 1
    }
}
function button09(){
    var pontosi01 = parseInt(ponto_i1)+parseInt(ponto_i3)+parseInt(ponto_i5)+parseInt(ponto_i7)+parseInt(ponto_i9);
    document.getElementById('pontos9').innerHTML = pontosi01;
    var errosi02 = parseInt(erro_i2)+parseInt(erro_i4)+parseInt(erro_i6)+parseInt(erro_i8)+parseInt(erro_i10);
    sessionStorage.setItem('erroI2',errosi02);
    sessionStorage.setItem('pontosI1',pontosi01);
}
function botaofinal(){
    var p1 =  sessionStorage.getItem("pontosA1");
    var p2 =  sessionStorage.getItem("pontosB1");
    var p3 =  sessionStorage.getItem("pontosC1");
    var p4 =  sessionStorage.getItem("pontosD1");
    var p5 =  sessionStorage.getItem("pontosE1");
    var p6 =  sessionStorage.getItem("pontosF1");
    var p7 =  sessionStorage.getItem("pontosG1");
    var p8 =  sessionStorage.getItem("pontosH1");
    var p9 =  sessionStorage.getItem("pontosI1");
    var pontos = parseInt(p1)+parseInt(p2)+parseInt(p3)+parseInt(p4)+parseInt(p5)+parseInt(p6)+parseInt(p7)+parseInt(p8)+parseInt(p9);
    document.getElementById('mostra_pontos').innerHTML=pontos;
    var e1 = sessionStorage.getItem('erroA2');
    var e2 = sessionStorage.getItem('erroB2');
    var e3 = sessionStorage.getItem('erroC2');
    var e4 = sessionStorage.getItem('erroD2');
    var e5 = sessionStorage.getItem('erroE2');
    var e6 = sessionStorage.getItem('erroF2');
    var e7 = sessionStorage.getItem('erroG2');
    var e8 = sessionStorage.getItem('erroH2');
    var e9 = sessionStorage.getItem('erroI2');
    var erro = parseInt(e1)+parseInt(e2)+parseInt(e3)+parseInt(e4)+parseInt(e5)+parseInt(e6)+parseInt(e7)+parseInt(e8)+parseInt(e9);
    document.getElementById('mostra_erros').innerHTML=erro;
}