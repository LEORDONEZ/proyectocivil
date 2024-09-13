// CALCULO DE BARRAS
const barras = {
    2: { diametro_pulg: '1/4', diametro_cm: 0.64, area_cm2: 0.32 },
    3: { diametro_pulg: '3/8', diametro_cm: 0.95, area_cm2: 0.71 },
    4: { diametro_pulg: '1/2', diametro_cm: 1.27, area_cm2: 1.29 },
    5: { diametro_pulg: '5/8', diametro_cm: 1.59, area_cm2: 1.99 },
    6: { diametro_pulg: '3/4', diametro_cm: 1.91, area_cm2: 2.84 },
    7: { diametro_pulg: '7/8', diametro_cm: 2.22, area_cm2: 3.87 },
    8: { diametro_pulg: '1', diametro_cm: 2.54, area_cm2: 5.10 },
    9: { diametro_pulg: '1-1/8', diametro_cm: 2.87, area_cm2: 6.45 },
    10: { diametro_pulg: '1-1/4', diametro_cm: 3.23, area_cm2: 8.19 },
    12: { diametro_pulg: '1-3/8', diametro_cm: 3.58, area_cm2: 10.06 },
    14: { diametro_pulg: '1-3/4', diametro_cm: 4.30, area_cm2: 14.52 },
    18: { diametro_pulg: '2-1/4', diametro_cm: 5.73, area_cm2: 25.81 }
};

function buscarBarrasPorArea(areaRequerida) {
    const resultados = [];

    for (const [designacion, propiedades] of Object.entries(barras)) {
        const area_cm2 = propiedades.area_cm2;
        const resultado = areaRequerida / area_cm2;
        const cant = Math.ceil(resultado);
        const producto = cant * area_cm2;
        const diferencia = producto - areaRequerida;
        
        if (diferencia >= 0) {
            resultados.push({
                diferencia,
                designacion,
                diametro_pulg: propiedades.diametro_pulg,
                diametro_cm: propiedades.diametro_cm,
                cantidad: cant,
                producto
            });
        }
    }

    return resultados.sort((a, b) => a.diferencia - b.diferencia).slice(0, 12);
}

function calcular() {
    const areaInput = document.getElementById('areaInput');
    const areaRequerida = parseFloat(areaInput.value);
    
    if (isNaN(areaRequerida) || areaRequerida <= 0) {
        alert("Por favor, ingrese un valor válido para el área.");
        return;
    }

    const resultadosOrdenados = buscarBarrasPorArea(areaRequerida);
    mostrarOpciones(resultadosOrdenados);
}

function mostrarOpciones(resultadosOrdenados) {
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    if (resultadosOrdenados.length === 0) {
        optionsDiv.innerHTML = 'No se encontraron opciones.';
        return;
    }

    let optionsHTML = '<h2>Opciones disponibles:</h2><ul>';
    resultadosOrdenados.forEach((resultado, index) => {
        optionsHTML += `<li>
            <button onclick="mostrarResultado(${index})">
                Barra ${resultado.designacion}: Diámetro ${resultado.diametro_cm} cm (${resultado.diametro_pulg} pulgadas), Cantidad: ${resultado.cantidad}
            </button>
        </li>`;
    });
    optionsHTML += '</ul>';

    optionsDiv.innerHTML = optionsHTML;
}

function mostrarResultado(index) {
    const areaInput = document.getElementById('areaInput');
    const areaRequerida = parseFloat(areaInput.value);

    const resultadosOrdenados = buscarBarrasPorArea(areaRequerida);
    const seleccionada = resultadosOrdenados[index];
    const brequerida = seleccionada.diametro_cm * seleccionada.cantidad + 2.6 * (seleccionada.cantidad - 1) + 0.95 * 2 + 4 * 2;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Detalles de la Barra Seleccionada:</h2>
        <p>Diámetro: ${seleccionada.diametro_cm} cm</p>
        <p>Cantidad: ${seleccionada.cantidad}</p>
        <p>Brequerida: ${brequerida.toFixed(2)}</p>
    `;
}
