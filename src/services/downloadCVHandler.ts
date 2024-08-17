function download (){
    fetch('https://drive.google.com/file/d/1JTTXL4lw-eKqo47q2MxCB-cXASLOAiPU/view?usp=sharing', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/pdf',
        }
    })
    .then(response => response.blob())
    .then(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', 'Andrés Román CV.pdf');
        link.click();
        link.remove();
    })
    .catch(error =>console.error('Error al descargar el archivo:', error));
}

export default download;