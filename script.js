// script.js
const baseDatos = [
  // ==========================================
  // CIENCIAS JURÍDICAS
  // ==========================================
  { conQue: "Hechos", enQue: "Defender", donde: "Juzgados", campo: "Ciencias Jurídicas" },
  { conQue: "Hechos", enQue: "Defender", donde: "Cortes", campo: "Ciencias Jurídicas" },
  { conQue: "Hechos", enQue: "Defender", donde: "Estudios", campo: "Ciencias Jurídicas" },
  { conQue: "Hechos", enQue: "Representar", donde: "Cortes", campo: "Ciencias Jurídicas" },
  { conQue: "Hechos", enQue: "Representar", donde: "Juzgados", campo: "Ciencias Jurídicas" },
  { conQue: "Hechos", enQue: "Representar", donde: "Estudios", campo: "Ciencias Jurídicas" },
  { conQue: "Personas", enQue: "Defender", donde: "Juzgados", campo: "Ciencias Jurídicas" },
  { conQue: "Personas", enQue: "Defender", donde: "Cortes", campo: "Ciencias Jurídicas" },
  { conQue: "Personas", enQue: "Representar", donde: "Cortes", campo: "Ciencias Jurídicas" },
  { conQue: "Personas", enQue: "Representar", donde: "Juzgados", campo: "Ciencias Jurídicas" },
  { conQue: "Personas", enQue: "Exponer", donde: "Estudios", campo: "Ciencias Jurídicas" },
  { conQue: "Personas", enQue: "Exponer", donde: "Cortes", campo: "Ciencias Jurídicas" },
  { conQue: "Personas", enQue: "Exponer", donde: "Juzgados", campo: "Ciencias Jurídicas" },

  // ==========================================
  // CIENCIAS SOCIALES
  // ==========================================
  { conQue: "Personas", enQue: "Asesorar", donde: "Equipos de orientación escolar", campo: "Ciencias Sociales" },
  { conQue: "Personas", enQue: "Asesorar", donde: "Consultorios", campo: "Ciencias Sociales" },
  { conQue: "Personas", enQue: "Asesorar", donde: "Escuelas", campo: "Ciencias Sociales" },
  { conQue: "Personas", enQue: "Diagnosticar", donde: "Consultorios", campo: "Ciencias Sociales" },
  { conQue: "Personas", enQue: "Diagnosticar", donde: "Equipos de orientación escolar", campo: "Ciencias Sociales" },
  { conQue: "Comunidades", enQue: "Intervenir", donde: "Lugares rurales", campo: "Ciencias Sociales" },
  { conQue: "Comunidades", enQue: "Intervenir", donde: "Consultorios", campo: "Ciencias Sociales" },
  { conQue: "Comunidades", enQue: "Intervenir", donde: "Escuelas", campo: "Ciencias Sociales" },
  { conQue: "Fenómenos", enQue: "Investigar", donde: "Centros de investigación", campo: "Ciencias Sociales" },
  { conQue: "Fenómenos", enQue: "Investigar", donde: "Escuelas", campo: "Ciencias Sociales" },
  { conQue: "Fenómenos", enQue: "Investigar", donde: "Lugares rurales", campo: "Ciencias Sociales" },

  // ==========================================
  // HUMANIDADES
  // ==========================================
  { conQue: "Hechos", enQue: "Comunicar", donde: "Radios", campo: "Humanidades" },
  { conQue: "Hechos", enQue: "Comunicar", donde: "Periódicos", campo: "Humanidades" },
  { conQue: "Hechos", enQue: "Informar", donde: "Periódicos", campo: "Humanidades" },
  { conQue: "Hechos", enQue: "Informar", donde: "Radios", campo: "Humanidades" },
  { conQue: "Personas", enQue: "Viajar", donde: "Aeropuertos", campo: "Humanidades" },
  { conQue: "Personas", enQue: "Viajar", donde: "Centros de idiomas", campo: "Humanidades" },
  { conQue: "Personas", enQue: "Reflexionar", donde: "Centros de investigación", campo: "Humanidades" },
  { conQue: "Personas", enQue: "Reflexionar", donde: "Centros de idiomas", campo: "Humanidades" },
  { conQue: "Personas", enQue: "Escribir", donde: "Centros de idiomas", campo: "Humanidades" },
  { conQue: "Personas", enQue: "Escribir", donde: "Periódicos", campo: "Humanidades" },
  { conQue: "Personas", enQue: "Escribir", donde: "Centros de investigación", campo: "Humanidades" },

  // ==========================================
  // SALUD Y BIENESTAR
  // ==========================================
  { conQue: "Personas", enQue: "Curar", donde: "Hospitales", campo: "Salud y Bienestar" },
  { conQue: "Personas", enQue: "Curar", donde: "Clínicas", campo: "Salud y Bienestar" },
  { conQue: "Personas", enQue: "Curar", donde: "Consultorios", campo: "Salud y Bienestar" },
  { conQue: "Personas", enQue: "Cuidar", donde: "Hospitales", campo: "Salud y Bienestar" },
  { conQue: "Personas", enQue: "Cuidar", donde: "Clínicas", campo: "Salud y Bienestar" },
  { conQue: "Personas", enQue: "Cuidar", donde: "Consultorios", campo: "Salud y Bienestar" },
  { conQue: "Personas", enQue: "Prevenir", donde: "Centros de investigación", campo: "Salud y Bienestar" },
  { conQue: "Personas", enQue: "Prevenir", donde: "Hospitales", campo: "Salud y Bienestar" },
  { conQue: "Personas", enQue: "Prevenir", donde: "Consultorios", campo: "Salud y Bienestar" },
  { conQue: "Datos", enQue: "Diagnosticar", donde: "Clínicas", campo: "Salud y Bienestar" },
  { conQue: "Datos", enQue: "Diagnosticar", donde: "Hospitales", campo: "Salud y Bienestar" },
  { conQue: "Datos", enQue: "Intervenir", donde: "Consultorios", campo: "Salud y Bienestar" },
  { conQue: "Datos", enQue: "Intervenir", donde: "Hospitales", campo: "Salud y Bienestar" },
  { conQue: "Datos", enQue: "Intervenir", donde: "Clínicas", campo: "Salud y Bienestar" },

  // ==========================================
  // CIENCIAS EXACTAS
  // ==========================================
  { conQue: "Datos", enQue: "Observar", donde: "Laboratorios", campo: "Ciencias Exactas" },
  { conQue: "Datos", enQue: "Observar", donde: "Centros de investigación", campo: "Ciencias Exactas" },
  { conQue: "Datos", enQue: "Analizar", donde: "Centros de investigación", campo: "Ciencias Exactas" },
  { conQue: "Datos", enQue: "Analizar", donde: "Laboratorios", campo: "Ciencias Exactas" },
  { conQue: "Fenómenos", enQue: "Observar", donde: "Laboratorios", campo: "Ciencias Exactas" },
  { conQue: "Fenómenos", enQue: "Observar", donde: "Centros de investigación", campo: "Ciencias Exactas" },
  { conQue: "Fenómenos", enQue: "Analizar", donde: "Centros de investigación", campo: "Ciencias Exactas" },
  { conQue: "Fenómenos", enQue: "Analizar", donde: "Laboratorios", campo: "Ciencias Exactas" },

  // ==========================================
  // CIENCIAS BIOLÓGICAS Y QUÍMICA
  // ==========================================
  { conQue: "Datos", enQue: "Sintetizar", donde: "Investigación", campo: "Ciencias Biológicas y Química" },
  { conQue: "Datos", enQue: "Sintetizar", donde: "Laboratorios", campo: "Ciencias Biológicas y Química" },
  { conQue: "Datos", enQue: "Calcular", donde: "Investigación", campo: "Ciencias Biológicas y Química" },
  { conQue: "Datos", enQue: "Calcular", donde: "Laboratorios", campo: "Ciencias Biológicas y Química" },
  { conQue: "Fenómenos", enQue: "Teorizar", donde: "Servicio Meteorológico", campo: "Ciencias Biológicas y Química" },
  { conQue: "Fenómenos", enQue: "Teorizar", donde: "Investigación", campo: "Ciencias Biológicas y Química" },
  { conQue: "Fenómenos", enQue: "Deducir", donde: "Investigación", campo: "Ciencias Biológicas y Química" },
  { conQue: "Fenómenos", enQue: "Deducir", donde: "Laboratorios", campo: "Ciencias Biológicas y Química" },

  // ==========================================
  // CIENCIAS DE LA TIERRA Y AGROPECUARIAS
  // ==========================================
  { conQue: "Fenómenos", enQue: "Cultivar", donde: "Campo", campo: "Ciencias de la Tierra y Agropecuarias" },
  { conQue: "Fenómenos", enQue: "Cultivar", donde: "Granja", campo: "Ciencias de la Tierra y Agropecuarias" },
  { conQue: "Fenómenos", enQue: "Cosechar", donde: "Granja", campo: "Ciencias de la Tierra y Agropecuarias" },
  { conQue: "Fenómenos", enQue: "Cosechar", donde: "Campo", campo: "Ciencias de la Tierra y Agropecuarias" },
  { conQue: "Objetos", enQue: "Cultivar", donde: "Campo", campo: "Ciencias de la Tierra y Agropecuarias" },
  { conQue: "Objetos", enQue: "Cultivar", donde: "Granja", campo: "Ciencias de la Tierra y Agropecuarias" },
  { conQue: "Objetos", enQue: "Cosechar", donde: "Granja", campo: "Ciencias de la Tierra y Agropecuarias" },
  { conQue: "Objetos", enQue: "Cosechar", donde: "Campo", campo: "Ciencias de la Tierra y Agropecuarias" },

  // ==========================================
  // CIENCIAS ECONÓMICAS Y ADMINISTRATIVAS
  // ==========================================
  { conQue: "Datos", enQue: "Calcular", donde: "Oficinas", campo: "Ciencias Económicas y Administrativas" },
  { conQue: "Datos", enQue: "Calcular", donde: "Empresas", campo: "Ciencias Económicas y Administrativas" },
  { conQue: "Datos", enQue: "Administrar", donde: "Empresas", campo: "Ciencias Económicas y Administrativas" },
  { conQue: "Datos", enQue: "Administrar", donde: "Oficinas", campo: "Ciencias Económicas y Administrativas" },
  { conQue: "Datos", enQue: "Organizar", donde: "Estudios", campo: "Ciencias Económicas y Administrativas" },
  { conQue: "Datos", enQue: "Organizar", donde: "Empresas", campo: "Ciencias Económicas y Administrativas" },
  { conQue: "Datos", enQue: "Dirigir", donde: "Empresas", campo: "Ciencias Económicas y Administrativas" },
  { conQue: "Datos", enQue: "Dirigir", donde: "Oficinas", campo: "Ciencias Económicas y Administrativas" },
  { conQue: "Datos", enQue: "Planificar", donde: "Oficinas", campo: "Ciencias Económicas y Administrativas" },
  { conQue: "Datos", enQue: "Planificar", donde: "Empresas", campo: "Ciencias Económicas y Administrativas" },

  // ==========================================
  // ARTES
  // ==========================================
  { conQue: "Objetos", enQue: "Actuar", donde: "Teatro", campo: "Artes" },
  { conQue: "Objetos", enQue: "Actuar", donde: "Cine", campo: "Artes" },
  { conQue: "Objetos", enQue: "Actuar", donde: "Televisión", campo: "Artes" },
  { conQue: "Objetos", enQue: "Diseñar", donde: "Ateliers", campo: "Artes" },
  { conQue: "Objetos", enQue: "Diseñar", donde: "Teatro", campo: "Artes" },
  { conQue: "Objetos", enQue: "Diseñar", donde: "Agencias publicitarias", campo: "Artes" },
  { conQue: "Objetos", enQue: "Crear", donde: "Televisión", campo: "Artes" },
  { conQue: "Objetos", enQue: "Crear", donde: "Ateliers", campo: "Artes" },
  { conQue: "Objetos", enQue: "Crear", donde: "Teatro", campo: "Artes" },
  { conQue: "Objetos", enQue: "Proyectar", donde: "Agencias publicitarias", campo: "Artes" },
  { conQue: "Objetos", enQue: "Proyectar", donde: "Cine", campo: "Artes" },
  { conQue: "Objetos", enQue: "Proyectar", donde: "Televisión", campo: "Artes" },
  { conQue: "Objetos", enQue: "Componer", donde: "Conservatorios", campo: "Artes" },
  { conQue: "Objetos", enQue: "Componer", donde: "Teatro", campo: "Artes" },
  { conQue: "Hechos", enQue: "Diseñar", donde: "Cine", campo: "Artes" },
  { conQue: "Hechos", enQue: "Diseñar", donde: "Teatro", campo: "Artes" },
  { conQue: "Hechos", enQue: "Representar", donde: "Teatro", campo: "Artes" },
  { conQue: "Hechos", enQue: "Representar", donde: "Cine", campo: "Artes" },
  { conQue: "Hechos", enQue: "Representar", donde: "Ateliers", campo: "Artes" },

  // ==========================================
  // CIENCIAS TECNOLÓGICAS
  // ==========================================
  { conQue: "Objetos", enQue: "Construir", donde: "Fábricas", campo: "Ciencias Tecnológicas" },
  { conQue: "Objetos", enQue: "Construir", donde: "Empresas", campo: "Ciencias Tecnológicas" },
  { conQue: "Objetos", enQue: "Diseñar", donde: "Empresas", campo: "Ciencias Tecnológicas" },
  { conQue: "Objetos", enQue: "Diseñar", donde: "Servicios", campo: "Ciencias Tecnológicas" },
  { conQue: "Objetos", enQue: "Calcular", donde: "Servicios", campo: "Ciencias Tecnológicas" },
  { conQue: "Objetos", enQue: "Calcular", donde: "Empresas", campo: "Ciencias Tecnológicas" },
  { conQue: "Objetos", enQue: "Arreglar", donde: "Fábricas", campo: "Ciencias Tecnológicas" },
  { conQue: "Objetos", enQue: "Arreglar", donde: "Servicios", campo: "Ciencias Tecnológicas" },
  { conQue: "Tecnología", enQue: "Innovar", donde: "Empresas", campo: "Ciencias Tecnológicas" },
  { conQue: "Tecnología", enQue: "Innovar", donde: "Servicios", campo: "Ciencias Tecnológicas" },

  // ==========================================
  // CIENCIAS DE LA EDUCACIÓN
  // ==========================================
  { conQue: "Personas", enQue: "Enseñar", donde: "Escuelas", campo: "Ciencias de la Educación" },
  { conQue: "Personas", enQue: "Enseñar", donde: "Equipos de orientación escolar", campo: "Ciencias de la Educación" },
  { conQue: "Datos", enQue: "Investigar", donde: "Equipos de orientación escolar", campo: "Ciencias de la Educación" },
  { conQue: "Datos", enQue: "Investigar", donde: "Escuelas", campo: "Ciencias de la Educación" },
  { conQue: "Hechos", enQue: "Planificar", donde: "Escuelas", campo: "Ciencias de la Educación" },
  { conQue: "Hechos", enQue: "Planificar", donde: "Equipos de orientación escolar", campo: "Ciencias de la Educación" },
  { conQue: "Comunidades", enQue: "Enseñar", donde: "Escuelas", campo: "Ciencias de la Educación" },
  { conQue: "Comunidades", enQue: "Enseñar", donde: "Equipos de orientación escolar", campo: "Ciencias de la Educación" },

  // ==========================================
  // ESTUDIOS MEDIALES
  // ==========================================
  { conQue: "Personas", enQue: "Comunicar", donde: "Espacios de media digital", campo: "Estudios Mediales" },
  { conQue: "Personas", enQue: "Comunicar", donde: "Cine", campo: "Estudios Mediales" },
  { conQue: "Personas", enQue: "Comunicar", donde: "Televisión", campo: "Estudios Mediales" },
  { conQue: "Datos", enQue: "Analizar", donde: "Agencias publicitarias", campo: "Estudios Mediales" },
  { conQue: "Datos", enQue: "Analizar", donde: "Empresas", campo: "Estudios Mediales" },
  { conQue: "Datos", enQue: "Analizar", donde: "Espacios de media digital", campo: "Estudios Mediales" },
  { conQue: "Tecnología", enQue: "Innovar", donde: "Espacios de media digital", campo: "Estudios Mediales" },
  { conQue: "Tecnología", enQue: "Innovar", donde: "Empresas", campo: "Estudios Mediales" },
  { conQue: "Tecnología", enQue: "Comunicar", donde: "Televisión", campo: "Estudios Mediales" },
  { conQue: "Tecnología", enQue: "Comunicar", donde: "Espacios de media digital", campo: "Estudios Mediales" },

  // ==========================================
  // AGRONOMÍA Y SISTEMAS NATURALES
  // ==========================================
  { conQue: "Fenómenos", enQue: "Cuidar", donde: "Lugares rurales", campo: "Agronomía y Sistemas Naturales" },
  { conQue: "Fenómenos", enQue: "Cuidar", donde: "Campo", campo: "Agronomía y Sistemas Naturales" },
  { conQue: "Fenómenos", enQue: "Cuidar", donde: "Granja", campo: "Agronomía y Sistemas Naturales" },
  { conQue: "Fenómenos", enQue: "Analizar", donde: "Campo", campo: "Agronomía y Sistemas Naturales" },
  { conQue: "Fenómenos", enQue: "Analizar", donde: "Laboratorio", campo: "Agronomía y Sistemas Naturales" },
  { conQue: "Comunidades", enQue: "Cultivar", donde: "Lugares rurales", campo: "Agronomía y Sistemas Naturales" },
  { conQue: "Comunidades", enQue: "Cultivar", donde: "Campo", campo: "Agronomía y Sistemas Naturales" },
  { conQue: "Comunidades", enQue: "Cosechar", donde: "Granja", campo: "Agronomía y Sistemas Naturales" },
  { conQue: "Comunidades", enQue: "Cosechar", donde: "Lugares rurales", campo: "Agronomía y Sistemas Naturales" }
];

const selConQue = document.getElementById('objectType');
const selEnQue = document.getElementById('taskType');
const selDonde = document.getElementById('fieldType');
const cajaResultado = document.getElementById('result');
const botonReset = document.getElementById('resetButton');

// Función segura: arrayOpciones tiene valor por defecto [] si no se le pasa nada
function llenar(select, arrayOpciones = [], textoInicial = "") {
  if (!select) return;
  select.innerHTML = '';

  const opcionDefecto = document.createElement('option');
  opcionDefecto.value = '';
  opcionDefecto.textContent = textoInicial;
  select.appendChild(opcionDefecto);

  if (Array.isArray(arrayOpciones)) {
    arrayOpciones.forEach(item => {
      const opt = document.createElement('option');
      opt.value = item;
      opt.textContent = item;
      select.appendChild(opt);
    });
  }
}

// 1. Al cambiar ¿Con qué?
if (selConQue) {
  selConQue.addEventListener('change', () => {
    const v1 = selConQue.value.trim().toLowerCase();
    
    llenar(selDonde, [], "-- Primero responde la pregunta anterior --");
    selDonde.disabled = true;
    if (cajaResultado) cajaResultado.style.display = 'none';

    if (!v1) {
      llenar(selEnQue, [], "-- Primero responde la pregunta anterior --");
      selEnQue.disabled = true;
      return;
    }

    const verbos = [...new Set(
      baseDatos
        .filter(item => item.conQue.toLowerCase() === v1)
        .map(item => item.enQue)
    )].sort();

    llenar(selEnQue, verbos, "-- Selecciona una opción --");
    selEnQue.disabled = false;
  });
}

// 2. Al cambiar ¿En qué?
if (selEnQue) {
  selEnQue.addEventListener('change', () => {
    const v1 = selConQue.value.trim().toLowerCase();
    const v2 = selEnQue.value.trim().toLowerCase();

    if (cajaResultado) cajaResultado.style.display = 'none';

    if (!v2) {
      llenar(selDonde, [], "-- Primero responde la pregunta anterior --");
      selDonde.disabled = true;
      return;
    }

    const lugares = [...new Set(
      baseDatos
        .filter(item => 
          item.conQue.toLowerCase() === v1 &&
          item.enQue.toLowerCase() === v2
        )
        .map(item => item.donde)
    )].sort();

    llenar(selDonde, lugares, "-- Selecciona una opción --");
    selDonde.disabled = false;
  });
}

// 3. Al cambiar ¿Dónde? -> Muestra resultado
if (selDonde) {
  selDonde.addEventListener('change', () => {
    const v1 = selConQue.value.trim().toLowerCase();
    const v2 = selEnQue.value.trim().toLowerCase();
    const v3 = selDonde.value.trim().toLowerCase();

    if (!v3) {
      if (cajaResultado) cajaResultado.style.display = 'none';
      return;
    }

    const match = baseDatos.find(item => 
      item.conQue.toLowerCase() === v1 &&
      item.enQue.toLowerCase() === v2 &&
      item.donde.toLowerCase() === v3
    );

    if (match && cajaResultado) {
      cajaResultado.innerHTML = `<strong>Tu campo de estudio recomendado es:</strong> ${match.campo}`;
      cajaResultado.style.display = 'block';
    }
  });
}

// Botón Reiniciar
if (botonReset) {
  botonReset.addEventListener('click', () => {
    selConQue.value = '';
    llenar(selEnQue, [], "-- Primero responde la pregunta anterior --");
    selEnQue.disabled = true;
    llenar(selDonde, [], "-- Primero responde la pregunta anterior --");
    selDonde.disabled = true;
    if (cajaResultado) cajaResultado.style.display = 'none';
  });
}