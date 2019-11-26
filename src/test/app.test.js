const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);




describe("Server!", () => {
  it("welcomes user to the api", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.message).to.equals("Conversor de Temperatura Celsius e Fahrenheit");
        done();
      });
  });

  let a = 5;
  let b = 5;

  it("adds 2 numbers", done => {
    chai
      .request(app)
      .get("/add?a=" + a + "&b=" + b)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.result).to.equals(10);
        done();
      });
  });
});



describe('Conversor de temperatura: Testes sobre parâmetros', () => {
  
  let valor = '30';

  it('Valor como string de números', done => {
    chai
      .request(app)
      .get('/converterTemperatura?valor=' + valor + '&de=C&para=F')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        expect(res.body.result).to.equals(86);
        done();
      });
  });

});



describe('Conversor de temperatura: Testes sobre parâmetros', () => {

  let valor = 'c';

  it('Valor como string de letras', done => {
    chai
      .request(app)
      .get('/converterTemperatura?valor=' + valor + '&de=C&para=F')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('error');
        done();
      });
  });

});




describe('Conversor de temperatura: Testes sobre valores inferiores', () => {
  
  let valor = -300;

  it('Celsius menor que -273.15', done => {
    chai
      .request(app)
      .get('/converterTemperatura?valor=' + valor + '&de=C&para=F')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('error');
        done();
      });
  });
});


describe('Conversor de temperatura: Testes sobre valores inferiores', () => {

  let valor = -500;

  it('Fahrenheit menor que -459.67', done => {
    chai
      .request(app)
      .get('/converterTemperatura?valor=' + valor + '&de=F&para=K')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('error');
        done();
      });
  });
});


describe('Conversor de temperatura: Testes sobre valores inferiores', () => {

  let valor = -30;

  it('Kelvin menor que 0', done => {
    chai
      .request(app)
      .get('/converterTemperatura?valor=' + valor + '&de=K&para=F')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('error');
        done();
      });
  });
  
});





describe('Conversor de temperatura: Conversão para a mesma escala', () => {
  

  let valor = 50;

  it('Celsius para Celsius', done => {
    chai
      .request(app)
      .get('/converterTemperatura?valor=' + valor + '&de=C&para=C')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        expect(res.body.result).to.equals(50);
        done();
      });
  });
});


describe('Conversor de temperatura: Conversão para a mesma escala', () => {

  let valor = 70;

  it('Fahrenheit para Fahrenheit', done => {
    chai
      .request(app)
      .get('/converterTemperatura?valor=' + valor + '&de=F&para=F')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        expect(res.body.result).to.equals(70);
        done();
      });
  });
});


describe('Conversor de temperatura: Conversão para a mesma escala', () => {

  let valor = 90;

  it('Kelvin para Kelvin', done => {
    chai
      .request(app)
      .get('/converterTemperatura?valor=' + valor + '&de=K&para=K')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        expect(res.body.result).to.equals(90);
        done();
      });
  });

});





describe('Conversor de temperatura: Testes positivos simples', () => {
  

  let valor = 50;

  it('Celsius para Fahrenheit', done => {
    chai
      .request(app)
      .get('/converterTemperatura?valor=' + valor + '&de=C&para=F')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        expect(res.body.result).to.equals(122);
        done();
      });
  });
});



describe('Conversor de temperatura: Testes positivos simples', () => {


  let valor = 70;

  it('Fahrenheit para Kelvin', done => {
    chai
      .request(app)
      .get('/converterTemperatura?valor=' + valor + '&de=F&para=K')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        expect(res.body.result).to.equals(294.26);
        done();
      });
  });
});



describe('Conversor de temperatura: Testes positivos simples', () => {

  let valor = 90;

  it('Kelvin para Celsius', done => {
    chai
      .request(app)
      .get('/converterTemperatura?valor=' + valor + '&de=K&para=C')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        expect(res.body.result).to.equals(-183.15);
        done();
      });
  });

});