function mostrarTest() {
    const testElement = document.getElementById("testVAK");
    testElement.classList.remove("oculto");
    testElement.style.animation = "fadeIn 0.5s ease-in";
}

function mostrarResultado(tipo) {
    let mensaje = `Tu canal perceptual dominante es: ${tipo}.`;
    let descripcion = "";
    let emoji = "";

    switch (tipo) {
        case 'Visual':
            descripcion = "Aprendes mejor a través de imágenes, diagramas, mapas mentales y organizadores gráficos.";
            emoji = "👁️";
            break;
        case 'Auditivo':
            descripcion = "Aprendes mejor escuchando explicaciones, discusiones, música y grabaciones.";
            emoji = "👂";
            break;
        case 'Kinestésico':
            descripcion = "Aprendes mejor a través de la práctica, experimentos y actividades físicas.";
            emoji = "✋";
            break;
    }

    const resultElement = document.getElementById("resultadoVAK");
    resultElement.innerHTML = `
                <div class="result">
                    <h4>${emoji} ${mensaje}</h4>
                    <p>${descripcion}</p>
                </div>
            `;
}

function abrirTextoCompleto() {
    // Crear ventana modal
    const modal = document.createElement('div');
    modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                animation: fadeIn 0.3s ease-out;
            `;

    // Crear contenido del modal
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
                background: white;
                width: 90%;
                max-width: 800px;
                max-height: 90vh;
                border-radius: 15px;
                overflow: hidden;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                position: relative;
                animation: slideIn 0.3s ease-out;
            `;

    modalContent.innerHTML = `
                <div style="
                    position: sticky;
                    top: 0;
                    background: linear-gradient(135deg, #007acc, #005b99);
                    color: white;
                    padding: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    z-index: 1001;
                ">
                    <h2 style="margin: 0; font-size: 1.5rem;">📚 Texto Completo</h2>
                    <button onclick="cerrarModal()" style="
                        background: rgba(255, 255, 255, 0.2);
                        border: none;
                        color: white;
                        width: 35px;
                        height: 35px;
                        border-radius: 50%;
                        cursor: pointer;
                        font-size: 18px;
                        font-weight: bold;
                        transition: background 0.3s ease;
                    " onmouseover="this.style.background='rgba(255, 255, 255, 0.3)'" onmouseout="this.style.background='rgba(255, 255, 255, 0.2)'">
                        ×
                    </button>
                </div>
                <div style="
                    padding: 30px;
                    overflow-y: auto;
                    max-height: calc(90vh - 80px);
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.8;
                    color: #333;
                ">
                    <h1 style="color: #007acc; font-size: 2.2rem; margin-bottom: 30px; text-align: center; border-bottom: 3px solid #e0f0ff; padding-bottom: 15px;">
                        Los Hábitos para el Éxito Académico
                    </h1>
                    
                    <div style="background: linear-gradient(135deg, #f0f8ff, #e8f4ff); padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 5px solid #007acc;">
                        <h2 style="color: #005b99; margin-top: 0; font-size: 1.6rem; display: flex; align-items: center; gap: 10px;">
                            <span style="background: #007acc; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem;">1</span>
                            ¿Qué son los hábitos de estudio?
                        </h2>
                        <p style="margin: 15px 0; font-size: 1.1rem;">
                            Según Velázquez (1961), los hábitos de estudio son conductas adquiridas mediante
                            <mark style="background: linear-gradient(135deg, #ffeb3b, #ffc107); padding: 3px 6px; border-radius: 4px; font-weight: 600;">un aprendizaje repetitivo que involucra dos fases: formación y estabilidad</mark>. 
                            Estos hábitos permiten estructurar la forma en que una persona aborda su proceso de aprendizaje.
                        </p>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 5px solid #28a745;">
                        <h2 style="color: #005b99; margin-top: 0; font-size: 1.6rem; display: flex; align-items: center; gap: 10px;">
                            <span style="background: #28a745; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem;">2</span>
                            Importancia de los hábitos de estudio
                        </h2>
                        <p style="margin: 15px 0; font-size: 1.1rem;">
                            <mark style="background: linear-gradient(135deg, #ffeb3b, #ffc107); padding: 3px 6px; border-radius: 4px; font-weight: 600;">Los hábitos de estudio generan mayores posibilidades de eficacia y rendimiento académico</mark>, 
                            además del desarrollo cognitivo, autonomía, autodisciplina y constancia.
                        </p>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, #fff3e0, #ffe0b2); padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 5px solid #ff9800;">
                        <h2 style="color: #005b99; margin-top: 0; font-size: 1.6rem; display: flex; align-items: center; gap: 10px;">
                            <span style="background: #ff9800; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem;">3</span>
                            Factores que fortalecen los hábitos
                        </h2>
                        <p style="margin: 15px 0; font-size: 1.1rem;">
                            Algunos factores que fortalecen los hábitos son: 
                            <mark style="background: linear-gradient(135deg, #ffeb3b, #ffc107); padding: 3px 6px; border-radius: 4px; font-weight: 600;">ambiente de estudio adecuado, pausas activas, descanso adecuado, establecimiento de rutinas, motivación intrínseca y planificación realista del tiempo</mark>.
                        </p>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, #f3e5f5, #e1bee7); padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 5px solid #9c27b0;">
                        <h2 style="color: #005b99; margin-top: 0; font-size: 1.6rem; display: flex; align-items: center; gap: 10px;">
                            <span style="background: #9c27b0; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem;">4</span>
                            Planificación del tiempo
                        </h2>
                        <p style="margin: 15px 0; font-size: 1.1rem;">
                            Una <mark style="background: linear-gradient(135deg, #ffeb3b, #ffc107); padding: 3px 6px; border-radius: 4px; font-weight: 600;">planificación eficiente del tiempo</mark> 
                            permite distribuir adecuadamente las actividades académicas y personales. También facilita el uso de herramientas digitales, promueve la autonomía y reduce la procrastinación.
                        </p>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, #e8f5e8, #c8e6c8); padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 5px solid #4caf50;">
                        <h2 style="color: #005b99; margin-top: 0; font-size: 1.6rem; display: flex; align-items: center; gap: 10px;">
                            <span style="background: #4caf50; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem;">5</span>
                            Estrategias recomendadas
                        </h2>
                        <p style="margin: 15px 0; font-size: 1.1rem;">
                            Entre las estrategias prácticas se encuentran: 
                            <mark style="background: linear-gradient(135deg, #ffeb3b, #ffc107); padding: 3px 6px; border-radius: 4px; font-weight: 600;">establecer un horario semanal, evitar distracciones, realizar resúmenes, usar técnicas como mapas mentales, hacer repasos frecuentes y mantener un seguimiento del avance</mark>.
                        </p>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 5px solid #2196f3;">
                        <h2 style="color: #005b99; margin-top: 0; font-size: 1.6rem; display: flex; align-items: center; gap: 10px;">
                            <span style="background: #2196f3; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem;">6</span>
                            Conclusión
                        </h2>
                        <p style="margin: 15px 0; font-size: 1.1rem;">
                            <mark style="background: linear-gradient(135deg, #ffeb3b, #ffc107); padding: 3px 6px; border-radius: 4px; font-weight: 600;">Adoptar buenos hábitos de estudio no solo mejora el desempeño académico</mark>, 
                            sino que fortalece habilidades personales como la organización, la responsabilidad y la toma de decisiones. La clave está en la constancia y la reflexión sobre el propio proceso de aprendizaje.
                        </p>
                    </div>
                    
                    <div style="
                        margin-top: 40px;
                        padding: 25px;
                        background: linear-gradient(135deg, #f5f5f5, #e8e8e8);
                        border-radius: 12px;
                        border-top: 3px solid #007acc;
                    ">
                        <h3 style="color: #005b99; margin-top: 0; font-size: 1.3rem; display: flex; align-items: center; gap: 10px;">
                            📚 Referencia Bibliográfica
                        </h3>
                        <p style="margin: 10px 0; font-size: 1rem; color: #555; line-height: 1.6;">
                            <strong>Fonseca, J. E.</strong> (s.f.). <em>Los hábitos para el éxito académico</em>. 
                            Universidad Nacional Abierta y a Distancia (UNAD). 
                            <br><br>
                            <strong>Disponible en:</strong> 
                            <a href="https://es.scribd.com/document/733584142/Los-Habitos-Para-El-Exito-Academico-en-La-UNAD" 
                               target="_blank" 
                               style="color: #007acc; text-decoration: none; font-weight: 600; border-bottom: 1px solid #007acc;"
                               onmouseover="this.style.color='#005b99'" 
                               onmouseout="this.style.color='#007acc'">
                                https://es.scribd.com/document/733584142/Los-Habitos-Para-El-Exito-Academico-en-La-UNAD
                            </a>
                        </p>
                    </div>
                </div>
            `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Función para cerrar modal
    window.cerrarModal = function () {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(modal);
            delete window.cerrarModal;
        }, 300);
    };

    // Cerrar al hacer clic fuera del contenido
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            window.cerrarModal();
        }
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            window.cerrarModal();
        }
    });
}

// Agregar efecto de fade-in
const style = document.createElement('style');
style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes slideIn {
                from { opacity: 0; transform: scale(0.9) translateY(-20px); }
                to { opacity: 1; transform: scale(1) translateY(0); }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
document.head.appendChild(style);