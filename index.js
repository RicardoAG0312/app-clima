let diferenciaGradosKelvin = 273.15;
let apiKey = '14520fc536c390562235c9c494ab41a6';

document.getElementById("buscarBoton").addEventListener("click", () => {
    const paisBuscar = document.getElementById("paisBuscar").value
    if (paisBuscar) {
        fetchDatosClimas(paisBuscar);
    }
});

const fetchDatosClimas = (paisBuscar) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${paisBuscar}&appid=${apiKey}`)
    .then(informacion => informacion.json())
    .then(informacion => mostrarDatosClimas(informacion))
}

const mostrarDatosInicial = () => {
    fetchDatosClimas('Perú');
}

const mostrarDatosClimas = (informacion) => {
    const nombrePais = informacion.name;
    const abreviaturaPais = informacion.sys.country;
    const temperaturaPais = informacion.main.temp;
    const humedadPais = informacion.main.humidity;
    const descripcionPais = informacion.weather[0].description;
    const iconoPais = informacion.weather[0].icon;
    document.getElementById("nombre-pais").innerHTML = `${nombrePais}, ${abreviaturaPais}`;
    document.getElementById("temperatura-pais").innerHTML = `La temperatura es ${Math.floor((temperaturaPais - diferenciaGradosKelvin))} °C`;
    document.getElementById("humedad-pais").innerHTML = `La humedad es ${humedadPais}%`;
    document.getElementById("descripcion-pais").innerHTML = descripcionPais;
    document.getElementById("img").src = `https://openweathermap.org/img/wn/${iconoPais}@2x.png`;
}