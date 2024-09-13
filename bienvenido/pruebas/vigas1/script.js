document.getElementById('calculateBtn').addEventListener('click', function() {
    const f_c = parseFloat(document.getElementById('fc').value);
    const fy = parseFloat(document.getElementById('fy').value);
    const wv = parseFloat(document.getElementById('wv').value);
    const b = parseFloat(document.getElementById('b').value);
    const h = parseFloat(document.getElementById('h').value);
    const l = parseFloat(document.getElementById('l').value);
    const n = parseFloat(document.getElementById('n').value);
    let j = 2;
    const wconcreto = 2400;

    let d = h - (1.91 / 2) - 4 - 0.95;
    d = Math.floor(d);

    let wpp = (b / 100) * (h / 100) * wconcreto;
    let wt = wv + wpp;

    let Mu = (wt * l ** 2) / 8;

    let r = (fy * 0.5) / (f_c * 0.5);
    let k = n / (n + r);
    let jcalculado = 1 - (k / 3);
    let robal = k / (2 * r);
    let romax = 0.75 * robal;
    const precision = 0.001;

    let As, ro;
    while (Math.abs(jcalculado - j) > precision) {
        j = jcalculado;
        As = (Mu * 100) / (fy * 0.5 * j * d);
        ro = As / (b * d);
        k = -n * ro + Math.sqrt(n * (ro ** 2) + 2 * n * ro);
        jcalculado = 1 - k / 3;
    }

    document.getElementById('muResult').textContent = `El valor del momento máximo Mu es: ${Mu.toFixed(2)} kgf·cm`;
    document.getElementById('jResult').textContent = `El valor de j es: ${j.toFixed(4)}`;
    document.getElementById('roResult').textContent = `El valor de ro requerido es: ${ro.toFixed(4)}, y su área de acero es: ${As.toFixed(2)} cm²`;
    document.getElementById('roBalResult').textContent = `El valor de ro balanceado es: ${robal.toFixed(4)}, y su área de acero es: ${(robal * b * d).toFixed(2)} cm²`;
    document.getElementById('roMaxResult').textContent = `El valor de ro máximo es: ${romax.toFixed(4)}, y su área de acero es: ${(romax * b * d).toFixed(2)} cm²`;
    document.getElementById('kResult').textContent = `El valor de k es: ${k.toFixed(4)}`;

    if (romax >= ro) {
        document.getElementById('finalRecommendation').textContent = `El área de acero requerida está dentro de los parámetros. Puedes chequear la base requerida para el área de acero.`;
    } else {
        document.getElementById('finalRecommendation').innerHTML = `Debes de:<br> 1. Cambiar la sección (b o h)<br> 2. Aumentar la resistencia del concreto<br> 3. Cambiar la viga a doblemente reforzada`;

    }
});
