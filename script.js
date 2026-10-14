// Contenidos pedagógicos extendidos y detallados derivados de las bases de CSS
const lessons = {
  1: {
    title: "Módulo 1: Separación de Estructura y Diseño (HTML vs CSS)",
    content: `
      <p><strong>Fundamento teórico:</strong> En el desarrollo web moderno, HTML5 se encarga de la <em>semántica</em> (el contenido y su significado), mientras que CSS3 controla la <em>presentación gráfica</em>.</p>
      <p>Esta separación permite cambiar completamente la apariencia gráfica de un sitio web modificando únicamente el archivo CSS, sin alterar una sola línea de HTML.</p>
      <div class="highlight-box">
        <strong>Ventajas clave:</strong>
        <ul>
          <li><strong>Mantenimiento ágil:</strong> Cambias el diseño global en un solo lugar.</li>
          <li><strong>División de trabajo:</strong> El equipo de backend/estructura trabaja independientemente del área visual.</li>
          <li><strong>Reusabilidad:</strong> Mismos contenidos pueden adaptarse a estilos totalmente diferentes (ejemplo: <em>CSS Zen Garden</em>).</li>
        </ul>
      </div>
      <div class="challenge-box">
        <h4><i class="fa-solid fa-flag"></i> Reto de la Lección:</h4>
        <p>En el editor CSS de la derecha, cambia el valor de <code>background-color</code> a <code>#0056b3</code> y la propiedad <code>color</code> del texto a <code>#ffffff</code> para actualizar la imagen corporativa del menú.</p>
      </div>
    `,
    html: `<nav class="menu-principal">\n  <a href="#">INICIO</a>\n  <a href="#">PRODUCTOS</a>\n  <a href="#">¿QUIÉNES SOMOS?</a>\n  <a href="#">CONTACTAR</a>\n</nav>\n\n<section class="contenido">\n  <h2>Bienvenido al sitio</h2>\n  <p>Este contenido HTML no cambiará, pero su apariencia sí.</p>\n</section>`,
    css: `/* Estilos para el Menú Principal */\n.menu-principal {\n  background-color: #ffcc00;\n  padding: 15px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.menu-principal a {\n  color: #333333;\n  text-decoration: none;\n  font-weight: bold;\n  margin: 0 10px;\n  font-family: Arial, sans-serif;\n}\n\n.contenido {\n  font-family: sans-serif;\n  padding: 20px;\n}`
  },

  2: {
    title: "Módulo 2: Formas de Inclusión de CSS",
    content: `
      <p>Existen 3 formas de vincular código CSS a un documento HTML:</p>
      <ul>
        <li><strong>1. En línea (Inline):</strong> Mediante el atributo <code>style=""</code> directamente en la etiqueta HTML. Útil solo para pruebas rápidas.</li>
        <li><strong>2. Internos (Embedded):</strong> Mediante la etiqueta <code>&lt;style&gt;</code> alojada en el <code>&lt;head&gt;</code> de la página.</li>
        <li><strong>3. Externos (Linked):</strong> En un archivo <code>.css</code> independiente vinculado con <code>&lt;link rel="stylesheet" href="ruta.css"&gt;</code>. Es el método profesional recomendado.</li>
      </ul>
      <div class="highlight-box">
        <strong>Estilos por defecto del Navegador:</strong> Todos los navegadores aplican una hoja de estilos propia (User Agent Stylesheet). Nuestro CSS personalizado se encarga de sobrescribir estos valores iniciales.
      </div>
      <div class="challenge-box">
        <h4><i class="fa-solid fa-flag"></i> Reto de la Lección:</h4>
        <p>Aplica un estilo en línea cambiando el primer párrafo agregándole el atributo: <code>style="color: purple; font-size: 20px;"</code> directamente en el HTML y observa cómo sobrescribe al CSS general.</p>
      </div>
    `,
    html: `<!-- Estilo asignado mediante CSS general -->\n<p>Párrafo 1: Estilizado con reglas CSS globales.</p>\n\n<!-- Intenta añadir style="" en esta etiqueta -->\n<p>Párrafo 2: Diseñado para recibir un estilo en línea.</p>`,
    css: `/* Regla global aplicada a todas las etiquetas <p> */\np {\n  color: #2e7d32;\n  font-family: 'Segoe UI', sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n}`
  },

  3: {
    title: "Módulo 3: Modelo de Cajas, Cascada y Herencia",
    content: `
      <p><strong>1. El Modelo de Cajas (Box Model):</strong> El navegador interpreta cada elemento HTML como una caja rectangular compuesta por:</p>
      <ul>
        <li><strong>Content:</strong> El contenido real (texto, imagen).</li>
        <li><strong>Padding:</strong> Espacio transparente alrededor del contenido.</li>
        <li><strong>Border:</strong> Borde que rodea el padding y el contenido.</li>
        <li><strong>Margin:</strong> Espacio exterior transparente que separa la caja de otros elementos.</li>
      </ul>
      <p><strong>2. Elementos de Bloque vs. En Línea:</strong> Los elementos <code>block</code> (como <code>&lt;div&gt;, &lt;p&gt;</code>) ocupan todo el ancho y saltan de línea. Los <code>inline</code> (como <code>&lt;span&gt;, &lt;a&gt;</code>) solo ocupan el ancho de su contenido.</p>
      <p><strong>3. Herencia:</strong> Las etiquetas hijas heredan ciertas propiedades visuales de sus contenedores padres (ej. tipo de letra y color de texto).</p>
      <div class="challenge-box">
        <h4><i class="fa-solid fa-flag"></i> Reto de la Lección:</h4>
        <p>Agrega <code>padding: 20px;</code> y <code>border: 3px solid #007acc;</code> al <code>.contenedor-padre</code> para visualizar claramente los límites del Modelo de Cajas.</p>
      </div>
    `,
    html: `<article class="contenedor-padre">\n  <h2>Título de la Caja Padre</h2>\n  <p>Párrafo Hijo 1: Hereda la tipografía de su elemento padre.</p>\n  <div class="caja-hija">\n    <p>Párrafo Nieto: Dentro de una sub-caja con sus propios márgenes.</p>\n  </div>\n</article>`,
    css: `.contenedor-padre {\n  color: #1a237e;\n  font-family: Georgia, serif;\n  background-color: #e8eaf6;\n  margin: 15px;\n}\n\n.caja-hija {\n  background-color: #ffffff;\n  margin-top: 10px;\n  padding: 10px;\n  border-left: 5px solid #ff4081;\n}`
  },

  4: {
    title: "Módulo 4: Selectores y Jerarquía de Especificidad",
    content: `
      <p>Cuando múltiples reglas de estilo compiten por dar estilo a un mismo elemento, el navegador decide cuál aplicar basándose en la <strong>Especificidad</strong>:</p>
      <ul>
        <li><strong>1º Mayor Prioridad - Selector de ID (<code>#mi-id</code>):</strong> Apunta a un elemento único en la página.</li>
        <li><strong>2º Prioridad Media - Selector de Clase (<code>.mi-clase</code>):</strong> Se puede reutilizar en múltiples elementos.</li>
        <li><strong>3º Prioridad Básica - Selector de Elemento (<code>p, h1, div</code>):</strong> Afecta a todas las etiquetas del mismo tipo.</li>
      </ul>
      <div class="highlight-box">
        <strong>Orden de Prioridad Resumido:</strong><br>
        <code>Estilo en línea > Selector ID > Selector de Clase > Selector de Elemento</code>
      </div>
      <p><em>Nota especial:</em> La directiva <code>!important</code> sobrescribe la cascada habitual, pero debe usarse con precaución.</p>
      <div class="challenge-box">
        <h4><i class="fa-solid fa-flag"></i> Reto de la Lección:</h4>
        <p>Analiza por qué el primer párrafo se muestra en azul. Luego edita el CSS asignando una regla a la clase <code>.texto-destacado</code> para cambiar el color del segundo párrafo.</p>
      </div>
    `,
    html: `<p id="encabezado-unico" class="texto-destacado">\n  Párrafo 1: Posee ID = azul, Clase = rojo y Elemento = verde. (Gana el ID)\n</p>\n\n<p class="texto-destacado">\n  Párrafo 2: No tiene ID, pero posee Clase = rojo y Elemento = verde. (Gana la Clase)\n</p>\n\n<p>\n  Párrafo 3: No tiene ID ni Clase. (Aplica regla de Elemento)\n</p>`,
    css: `/* 1. Selector de ID (Prioridad Alta) */\n#encabezado-unico {\n  color: #1976d2;\n  font-weight: bold;\n}\n\n/* 2. Selector de Clase (Prioridad Media) */\n.texto-destacado {\n  color: #d32f2f;\n}\n\n/* 3. Selector de Elemento (Prioridad Básica) */\np {\n  color: #388e3c;\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  margin-bottom: 12px;\n}`
  }
};

// Elementos DOM
const htmlInput = document.getElementById('html-code');
const cssInput = document.getElementById('css-code');
const previewFrame = document.getElementById('preview-frame');
const lessonButtons = document.querySelectorAll('.lesson-btn');
const lessonTitle = document.getElementById('lesson-title');
const lessonContent = document.getElementById('lesson-content');
const resetHtmlBtn = document.getElementById('reset-html');
const resetCssBtn = document.getElementById('reset-css');

let currentStep = 1;

// Función de actualización en tiempo real
function updatePreview() {
  const html = htmlInput.value;
  const css = cssInput.value;
  
  const frameDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
  frameDoc.open();
  frameDoc.write(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <style>
          body { margin: 15px; }
          ${css}
        </style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `);
  frameDoc.close();
}

// Cargar Módulo Académico
function loadLesson(step) {
  currentStep = step;
  const data = lessons[step];
  lessonTitle.textContent = data.title;
  lessonContent.innerHTML = data.content;
  htmlInput.value = data.html;
  cssInput.value = data.css;
  updatePreview();
}

// Navegación entre módulos
lessonButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    lessonButtons.forEach(b => b.classList.remove('active'));
    const targetBtn = e.currentTarget;
    targetBtn.classList.add('active');
    loadLesson(targetBtn.dataset.step);
  });
});

// Eventos de restablecimiento de código
resetHtmlBtn.addEventListener('click', () => {
  htmlInput.value = lessons[currentStep].html;
  updatePreview();
});

resetCssBtn.addEventListener('click', () => {
  cssInput.value = lessons[currentStep].css;
  updatePreview();
});

// Escuchadores de eventos para renderizado en directo
htmlInput.addEventListener('input', updatePreview);
cssInput.addEventListener('input', updatePreview);

// Inicializar la primera lección
loadLesson(1);