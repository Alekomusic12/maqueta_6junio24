// Datos de ejemplo para las listas de profesores y directivos
const profesores = ['Profesor 1', 'Profesor 2', 'Profesor 3', 'Profesor 4', 'Profesor 5', 'Profesor 6', 'Profesor 7', 'Profesor 8', 'Profesor 9', 'Profesor 10'];
const directivos = ['Directivo 1', 'Directivo 2', 'Directivo 3', 'Directivo 4', 'Directivo 5', 'Directivo 6', 'Directivo 7', 'Directivo 8', 'Directivo 9', 'Directivo 10'];

// Variables para almacenar los profesor y directivo seleccionados
let profesorSeleccionado = '';
let directivoSeleccionado = '';

// Función para cambiar de tab
function cambiarTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
}

// Función para iniciar sesión
function login() {
  const usuario = document.getElementById('username').value;
  const contraseña = document.getElementById('password').value;
  if (usuario === 'admin' && contraseña === 'admin') {
    cambiarTab('tab-listas');
    mostrarListas();
  } else {
    alert('Usuario o contraseña incorrectos');
  }
}

// Función para mostrar las listas de profesores y directivos
function mostrarListas() {
  const selectProfesores = document.getElementById('select-profesores');
  const selectDirectivos = document.getElementById('select-directivos');

  profesores.forEach(profesor => {
    const option = document.createElement('option');
    option.textContent = profesor;
    selectProfesores.appendChild(option);
  });

  directivos.forEach(directivo => {
    const option = document.createElement('option');
    option.textContent = directivo;
    selectDirectivos.appendChild(option);
  });
}

// Función para mostrar los detalles seleccionados
function mostrarDetalles() {
  cambiarTab('tab-detalles');
  const selectProfesores = document.getElementById('select-profesores');
  const selectDirectivos = document.getElementById('select-directivos');
  profesorSeleccionado = selectProfesores.value;
  directivoSeleccionado = selectDirectivos.value;
  document.getElementById('profesor-seleccionado').textContent = `Profesor Seleccionado: ${profesorSeleccionado}`;
  document.getElementById('directivo-seleccionado').textContent = `Directivo Seleccionado: ${directivoSeleccionado}`;
}

// Función para guardar la información
function guardarInformacion() {
  const valorSeleccionado = document.getElementById('valor').value;
  const informacion = document.getElementById('informacion').value;
  // Aquí podrías hacer lo que necesites con el valor seleccionado, la información ingresada y los profesor y directivo seleccionados
  alert('Información guardada correctamente');
}
