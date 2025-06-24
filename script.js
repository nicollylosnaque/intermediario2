      const botao = document.getElementById("enviar");
      const lista = document.getElementById("calendar");
      const resultado = document.getElementById("resultado");
      const linha = document.createElement("p");

      
      

      function soma() {
        let data1 = document.getElementById("data1");
        let data2 = document.getElementById("data2");
        const itens = document.querySelectorAll("td");

        data1 = parseInt(data1.value);
        data2 = parseInt(data2.value);
        let diaMes = data2 - data1;
        linha.textContent =""
        linha.textContent = `entre as datas mencionadas têm ${
          data2 - data1
        } dias`;
        resultado.appendChild(linha);

        //para limpar o calendario
        for (let i = 0; i < itens.length; i++) {
          itens[i].style.backgroundColor = "transparent";
          itens[i].style.color = "black";
        }
         
        for (let i = 0; i < itens.length; i++) {
          if (itens[i].textContent == data1) {
            itens[i].style.backgroundColor = "pink";
          }
        }
        for (let i = 0; i < itens.length; i++) {
          if (itens[i].textContent == data2) {
            itens[i].style.backgroundColor = "purple";
          }
        }
        for (let i = data1; i <= data2; i++) {
          if (itens[i].textContent > data1) {
            itens[i].style.backgroundColor = "green";
            itens[i].style.color = "gray";
          }
        }
      }