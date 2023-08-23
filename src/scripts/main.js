const dataDoevento = new Date("Nov 17, 2023 22:00:00");
const timeStampDoEvento = dataDoevento.getTime();

const contaAsHoras = setInterval(function() {
    const hoje = new Date();
    const timeStampAtual = hoje.getTime();

    const distanciaAteOevento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    
    const diasAteOEvento = Math.floor(distanciaAteOevento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOevento % diasEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOevento % horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOevento % minutosEmMs)/ 1000);

    const contador = document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`
}, 1000)
