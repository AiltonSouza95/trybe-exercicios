const custo = 20;
const venda = 40;

const vendaSemImposto = (venda - custo) * 1000;
const impostoTotal = vendaSemImposto * (20 / 100);
const lucro = vendaSemImposto - impostoTotal;

if (custo >= 0 && venda >= 0){
    console.log(lucro);
}
else {
    console.log("valores invalidos");
}