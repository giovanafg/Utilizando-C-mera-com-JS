//variavel da tag video
var video = document.querySelector('video');

//acesso a webcam do navegador
navigator.mediaDevices.getUserMedia({video:true})

//permissão para acessar câmera
.then(stream => {
    video.srcObject = stream;
    video.play();
})

//acesso negado, para permissão de câmera
.catch(error => {
    console.log(error);
})


//função para tirar a foto, clicando no botão
document.querySelector('button').addEventListener('click', () => {

    //função onde seleciona a tag canvas
    var canvas = document.querySelector('canvas');

    //altura e largura da foto
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;

    //adicionando a foto no canvas
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0);

    //dowload da foto
    var link = document.createElement('a');
    link.download = 'foto.png';
    link.href = canvas.toDataURL();

    //texto para baixar a foto
    link.textContent = 'Clique para baixar a imagem';
    document.body.appendChild(link);
});