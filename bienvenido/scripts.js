// Cpnversión de Mpa a kgf/cm²
document.getElementById("mpaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue
    const mpa = parseFloat(document.getElementById("mpaInput").value);
    if (!isNaN(mpa)) {  // Verifica que el valor ingresado sea un número válido
        const kgf_cm2 = mpa * 10.1972; // Realiza la conversión de MPa a kgf/cm²
        document.getElementById("mpaResult").textContent = `${mpa} MPa son ${kgf_cm2.toFixed(2)} kgf/cm²`;
    } else {
        document.getElementById("mpaResult").textContent = "Por favor, ingrese un valor válido.";
    }
});

// Conversión de Pascales a kgf
document.getElementById("pascalForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const pascal = parseFloat(document.getElementById("pascalInput").value);
    if (!isNaN(pascal)) {
        const kgf = pascal * 1.01972e-5;
        document.getElementById("pascalResult").textContent = `${pascal} Pascales son ${kgf.toFixed(6)} kgf`;
    } else {
        document.getElementById("pascalResult").textContent = "Por favor, ingrese un valor válido.";
    }
});

// Conversión de PSI a otras unidades
document.getElementById("psiForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const psi = parseFloat(document.getElementById("psiInput").value);
    if (!isNaN(psi)) {
        const kgf_cm2 = psi * 0.07031;
        const pascal = psi * 6894.76;
        document.getElementById("psiResult").textContent = `${psi} PSI son ${kgf_cm2.toFixed(2)} kgf/cm² o ${pascal.toFixed(2)} Pa`;
    } else {
        document.getElementById("psiResult").textContent = "Por favor, ingrese un valor válido.";
    }

});

// Conversión de ton-m a kgf-cm
document.getElementById("tonFrom").addEventListener("submit", function(event){
    event.preventDefault();
    const ton = parseFloat(document.getElementById("tonInput").value);
    if (!isNaN(ton)){
        const kgf_cm2 = ton * 100000;
        document.getElementById("tonResult").textContent = `${ton} Tonelada - metro  son ${kgf_cm2.toFixed(2)} kgf`;

    }else{
        document.getElementById("tonResult").textContent = "Por favor, ingrese un valor válido.";
    }
}
)
/*programa barras **/
/* ultimo */
// Definimos las barras y sus propiedades
