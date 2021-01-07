console.log("Extensão rodando com sucesso")

window.addEventListener('load', () => {
  getDocumentBody();
  getImageInital()
});


const getDocumentBody = () => {
  const getBody = setInterval(() => {
    const body = document.querySelector('body');
    if (body != null) {
      body.classList.add('dark');
      console.log("Thema dark setado com sucesso!")
      clearInterval(getBody)
    }
  }, 1000)
}


const audioAceleration = () => {
  var getAudios = setInterval(() => {
    var audios = document.querySelectorAll(".MS3ex");
    if (audios.length) {
      clearInterval(getAudios);
      console.log(audios)
    }
  }, 1000)
}

const getImageInital = () => {
  var getImage = setInterval(() => {
    const teste = document.querySelector('._3tBOo')

    if (teste != null) {
      clearInterval(getImage);
      // teste.innerHTML = '<img src="./src/assets/icons/Icon128.png">'
      console.log(teste)
    }
  }, 1000)
}



audioAceleration()