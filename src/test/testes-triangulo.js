const chai = require('chai');
const Triangulo = require('../triangulo');

const assert = chai.assert;


describe('Verificando se é escaleno', () => {
  it('Teste: Os três lados são diferentes', () => {
    let triangulo = new Triangulo(7, 5, 10);
    assert.equal(triangulo.tipo(), "Escaleno");
  });

});

describe('Verificando se é equilatero', () => {
  it('Teste: Os três lados são iguais', () => {
    let triangulo = new Triangulo(5, 5, 5);
    assert.equal(triangulo.tipo(), "Equilatero");
  });
});

describe('Verificando se é isósceles', () => {
  it('Teste: Lados a e b iguais', () => {
    let triangulo = new Triangulo(7, 7, 10);
    assert.equal(triangulo.tipo(), "Isosceles");
  });
  it('Teste: Lados b e c iguais', () => {
    let triangulo = new Triangulo(10, 7, 7);
    assert.equal(triangulo.tipo(), "Isosceles");
  });
  it('Teste: Lados a e c iguais', () => {
    let triangulo = new Triangulo(7, 10, 7);
    assert.equal(triangulo.tipo(), "Isosceles");
  });
});

describe('Verificando se os tamanhos lados são válidos', () => {
  it('Teste: Lado com valor que viola validade do triângulo', () => {
    let triangulo = new Triangulo(100, 10, 10);
    assert.equal(triangulo.valido(), false);
  });
  it('Teste: Lado com valor negativo', () =>{
    let triangulo = new Triangulo(-6, 8, 10);
    assert.equal(triangulo.valido(), false);
  });
  it('Teste: Lados com valores válidos', () =>{
    let triangulo = new Triangulo(25, 24, 7);
    assert.equal(triangulo.valido(), true);
  });
  it('Teste: Parâmetros como string', () => {
    let triangulo = new Triangulo('10','c', 8);
    assert.equal(triangulo.valido(), false);
  });
});


describe('Verificando se a área calculada é coerente', () => {
  it('Teste: Área incorreta', () => {
    let triangulo = new Triangulo(6, 8, 10);
    assert.equal(triangulo.area(), 24);
  });
});



describe('Verificando se é retângulo', () => {
  it('Teste: Existe um ângulo reto', () => {
    let triangulo = new Triangulo(3, 4, 5);
    assert.equal(triangulo.tipoAngulo(), 'Retangulo');
  });
});

describe('Verificando se é acutângulo', () => {
  it('Teste: Os três ângulos são agudos', () => {
    let triangulo = new Triangulo(2, 4, 5);
    if(triangulo.valido()){
      assert.equal(triangulo.tipoAngulo(), 'Obtusangulo');
    }
  });
});

describe('Verificando se é obtusângulo', () => {
  it('Teste: Existe um ângulo obtuso', () => {
    let triangulo = new Triangulo(4, 4, 5);
    if(triangulo.valido()){
      assert.equal(triangulo.tipoAngulo(), 'Acutangulo');
    }
  });
});
