console.log(document.getElementById('b').value);
    //esto imprime A en la consola

    const PANTALLA = document.getElementById('pantalla');

    function escribeLetra(letra) { // parametro es como una vasija
      PANTALLA.value += letra;
    }

    function borrarLetra() {
      let texto = PANTALLA.value;
      texto = texto.substring(0, texto.length-1)
      console.log('texto',texto)
      PANTALLA.value = texto
    }
