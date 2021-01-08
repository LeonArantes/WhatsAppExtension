console.log("Extensão rodando com sucesso")

window.addEventListener('load', () => {
  getDocumentBody();
  getInitialImageWelcome();
});




const getDocumentBody = () => {
  const intervalGetBody = setInterval(() => {
    const body = document.querySelector('body');
    if (body != null) {
      clearInterval(intervalGetBody)
      body.classList.add('dark');
      console.log("Thema dark setado com sucesso!")
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

const getInitialImageWelcome = () => {
  var intervalGetInitialMessageImage = setInterval(() => {
    const wrapperCircleImage = document.querySelector('._1eQ6b')
    const titleMessageWelcome = document.querySelector('h1._3BDr5')
    const descMessageWelcome = document.querySelector('div._2cf_o')

    if (wrapperCircleImage != null && titleMessageWelcome != null && descMessageWelcome != null) {
      clearInterval(intervalGetInitialMessageImage);
      wrapperCircleImage.innerHTML = `<img src="https://i.ibb.co/6Ny2bZ6/logomaker-Whats.png">`
      wrapperCircleImage.style.borderRadius = '60px';
      titleMessageWelcome.innerHTML = 'Privacy WhatsApp'
      descMessageWelcome.innerHTML = 'O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.'

      const logomakerExtensionAdded = document.querySelector('._1eQ6b > img')
      var intervalGetCircleImage = setInterval(() => {
        if (logomakerExtensionAdded != null) {
          clearInterval(intervalGetCircleImage);
          logomakerExtensionAdded.style.width = "100%"
          logomakerExtensionAdded.style.height = "100%"
        }
      }, 1000)

    }
  }, 1000)
}






audioAceleration()