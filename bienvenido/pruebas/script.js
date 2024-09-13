function calcular() {
    const f_c = parseFloat(document.getElementById("f_c").value);
    const fs = parseFloat(document.getElementById("fs").value);
    const Luz = parseFloat(document.getElementById("Luz").value);
    const As = parseFloat(document.getElementById("As").value);
    const diametro = parseFloat(document.getElementById("diametro").value);
    const b = parseFloat(document.getElementById("b").value);
    const h = parseFloat(document.getElementById("h").value);

    const Fc = f_c * 0.5;
    let Ec = 4700 * Math.sqrt(f_c / 10);
    Ec = Ec * 10;
    const n = 2000000 / Ec;

    let d = h - 4 - (diametro / 2) - 0.95;
    d = Math.floor(d);

    const ro = As / (b * d);
    const k = -n * ro + Math.sqrt(n * (ro ** 2) + 2 * n * ro);
    const r = fs / Fc;
    const kb = n / (n + r);
    const rob = kb / (2 * r);
    const j = 1 - k / 3;

    const Ms = j * d * As * fs;
    const Mc = (Fc / 2) * k * d * d * b;
    const Mmn = Math.min(Ms, Mc);
    const Wmax = (8 * Mmn) / ((Luz * 100) ** 2);

    // Mostrar resultados en el div
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
        <p>El valor de d es ${d}</p>
        <p>El valor de ro es ${ro}</p>
        <p>El valor de k es ${k}</p>
        <p>El valor de ro balanceado es ${rob}</p>
        <p>El valor de k balanceado es ${kb}</p>
        <p>El valor de j es ${j}</p>
        <p>El valor de Ms es ${Ms} Kgf/cm²</p>
        <p>El valor de Mc es ${Mc} Kgf/cm²</p>
        <p>La viga soporta ${Wmax} kgf/cm</p>
        <p>La viga soporta ${Wmax * 100} kgf/m</p>
    `;
}
