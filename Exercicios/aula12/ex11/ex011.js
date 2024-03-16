var idade = 17;
var estado = "São paulo";
console.log(`Voce mora em ${estado}`);
console.log(`E tem ${idade} anos`);
if (idade >= 18) {
  console.log("Voce tem idade suficiente para fazer tatuagem!");
} else {
  if (idade >= 17 && idade < 18 && estado == "São paulo") {
    console.log(
      "Com a devida autorização dos seus pais, voce poderá ter uma tatuagem!"
    );
  } else {
    console.log("Voce não pode ter uma tatuagem pois não mora em São paulo");
  }
}
