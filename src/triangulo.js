function Triangulo(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}




Triangulo.prototype.toString = function () {
  return `Lado A ${this.a}, Lado B ${this.b}, Lado C ${this.c}`;
};


Triangulo.prototype.valido = function(){

  if(typeof(this.a) !== 'number'){
    // converte 'a' para número se 'a' for uma string com números
    this.a = Number(this.a);
    if(isNaN(this.a)) return false;
  }

  if(typeof(this.b) !== 'number'){
    this.b = Number(this.b);
    if(isNaN(this.b)) return false;
  }

  if(typeof(this.c) !== 'number'){
    this.c = Number(this.c);
    if(isNaN(this.c)) return false;
  }



  if((this.a <= 0) || (this.b <= 0) || (this.c <= 0)){
    return false;
  
  }else if( (this.a < (this.b + this.c)) && (this.b < (this.a + this.c)) && (this.c < (this.b + this.a))) {
    return true;
  
  }else{
    return false;
  }
}


Triangulo.prototype.tipo = function(){

  if(this.a === this.b && this.b === this.c){
    return 'Equilatero';

  }else if(this.a === this.b || this.b === this.c || this.a === this.c){
    return 'Isosceles';
  
  }else{
    return 'Escaleno';
  }
}

Triangulo.prototype.area = function(){

  let P = (this.a + this.b + this.c)/2;
  return Math.sqrt(P * (P-this.a) * (P-this.b) * (P-this.c));

}

Triangulo.prototype.tipoAngulo = function(){

  let A = this.a * this.a;
  let B = this.b * this.b;
  let C = this.c * this.c;
  
  if((A === B + C) || (B === A + C) || (C === B + A)){
    return 'Retangulo';

  }else if((A > B + C) || (B > A + C) || (C > B + A)){
    return 'Obtusangulo';
  
  }else{
    return 'Acutangulo';
  }  

}



module.exports = Triangulo;
