const chai = require('chai');
const Triangulo = require('../triangulo');

const assert = chai.assert;


describe('Verificando se é escaleno', () => {

  it('\n\tTeste: Os três lados são diferentes', () => {
    let triangulo = new Triangulo(7, 5, 10);
    if(triangulo.valido()) assert.equal(triangulo.tipo(), "Escaleno");
  });

});


describe('Verificando se é equilatero', () => {

  it('\n\tTeste: Os três lados são iguais', () => {
    let triangulo = new Triangulo(5, 5, 5);
    if(triangulo.valido()) assert.equal(triangulo.tipo(), "Equilatero");
  });

});


describe('Verificando se é isósceles', () => {

  it('\n\tTeste: Lados a e b iguais', () => {
    let triangulo = new Triangulo(7, 7, 10);
    if(triangulo.valido()) assert.equal(triangulo.tipo(), "Isosceles");
  });

  it('\n\tTeste: Lados b e c iguais', () => {
    let triangulo = new Triangulo(10, 7, 7);
    if(triangulo.valido()) assert.equal(triangulo.tipo(), "Isosceles");
  });

  it('\n\tTeste: Lados a e c iguais', () => {
    let triangulo = new Triangulo(7, 10, 7);
    if(triangulo.valido()) assert.equal(triangulo.tipo(), "Isosceles");
  });

});


describe('Verificando se os tamanhos lados são válidos', () => {

  it('\n\tTeste: Lado com valor que viola validade do triângulo', () => {
    let triangulo = new Triangulo(100, 10, 10);
    assert.equal(triangulo.valido(), false);
  });
  
  it('\n\tTeste: Lado com valor negativo', () => {
    let triangulo = new Triangulo(-6, 8, 10);
    assert.equal(triangulo.valido(), false);
  });

  it('\n\tTeste: Lado com valor nulo', () => {
    let triangulo = new Triangulo(0, 8, 10);
    assert.equal(triangulo.valido(), false);
  });
  
  it('\n\tTeste: Lados com valores válidos', () => {
    let triangulo = new Triangulo(25, 24, 7);
    assert.equal(triangulo.valido(), true);
  });
  
  // o programa deve converter string para números quando possível
  it('\n\tTeste: Parâmetros como string de números', () => {
    let triangulo = new Triangulo('3','4', 5);
    assert.equal(triangulo.valido(), true);
  });

  it('\n\tTeste: Parâmetros como string de carcteres não-numéricos', () => {
    let triangulo = new Triangulo(3, 4, 'c');
    assert.equal(triangulo.valido(), false);
  });

});


describe('Verificando se a área calculada é coerente', () => {
  
  it('\n\tTeste: Área incorreta', () => {
    let triangulo = new Triangulo(6, 8, 10);
    if(triangulo.valido()) assert.equal(triangulo.area(), 24);
  });

});


describe('Verificando se é retângulo', () => {
  
  it('\n\tTeste: Existe um ângulo reto', () => {
    let triangulo = new Triangulo(3, 4, 5);
    if(triangulo.valido()) assert.equal(triangulo.tipoAngulo(), 'Retangulo');
  });

});


describe('Verificando se é acutângulo', () => {
  
  it('\n\tTeste: Os três ângulos são agudos', () => {
    let triangulo = new Triangulo(2, 4, 5);
    if(triangulo.valido()) assert.equal(triangulo.tipoAngulo(), 'Obtusangulo');
  });

});


describe('Verificando se é obtusângulo', () => {
  
  it('\n\tTeste: Existe um ângulo obtuso', () => {
    let triangulo = new Triangulo(4, 4, 5);
    if(triangulo.valido()) assert.equal(triangulo.tipoAngulo(), 'Acutangulo');
  });

});
