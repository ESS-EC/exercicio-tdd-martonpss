const express = require("express");
const app = express();

app.use(express.json());



app.get("/", (req, res) => {
  res.json({ status: "success", message: "Conversor de Temperatura Celsius e Fahrenheit" });
});



app.get("/add", (req, res) => {
  
  let data = req.query;

  if (!data.a || !data.b)
    res.json({ status: "error" });
  
  data.a = Number(data.a);
  data.b = Number(data.b);

  const add = (num1, num2) => {
    return num1 + num2;
  };

  res.json({
    status: "success",
    result: add(data.a, data.b)
  });

});




app.get("/converterTemperatura", (req, res) => {
  
  let data = req.query;

  if (!data.valor || !data.de || !data.para)
    res.json({ status: "error" });
  
  data.valor = Number(data.valor);



  
  if( isNaN(data.valor) || (data.de == 'C' && data.valor < -273.15) || (data.de == 'F' && data.valor < -459.67) || (data.de == 'K' && data.valor < 20) ){

    res.json({
      status: "error"
    });
  
  }else{




    const converter = (valor, escala1, escala2) => {

      if(escala1 === escala2){
        return valor;
      }


      if(escala1 === 'C'){

        if(escala2 === 'F'){
          return ((9/5)*valor + 32);

        }else if(escala2 === 'K'){
          return (valor + 273.15);
        }
    
      

      }else if(escala1 === 'F'){

        if(escala2 === 'C'){
          return ((valor - 32)/9 * 5);
      
        }else if(escala2 === 'K'){
          return (273.15 + (5/9)*(valor-32));
        }


      }else if(escala1 === 'K'){

        if(escala2 === 'C'){
          return (valor - 273.15);

        }else if(escala2 === 'F'){
          return (32 + (9/5) * (valor-273.15));
    
        }
      }
    };






    res.json({
      status: "success",
      result: Number(converter(data.valor, data.de, data.para).toFixed(2))
    });
  
  }


});








const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;

