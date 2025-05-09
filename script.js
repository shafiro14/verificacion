let generatedCode = "";

function showSection(section) {
  document.getElementById("login-section").style.display = "none";
  document.getElementById("register-section").style.display = "none";
  document.getElementById("verify-section").style.display = "none";

  document.getElementById(section + "-section").style.display = "block";
}

// Login
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  alert(`Bienvenido, ${username}!`);
});

// Registro
document.getElementById("register-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("register-email").value;
  const username = document.getElementById("register-username").value;

  // Simula envío de código
  generatedCode = Math.floor(100000 + Math.random() * 900000).toString(); // Código de 6 dígitos
  console.log(`Código enviado a ${email}: ${generatedCode}`); // Simulamos que se "envía" el código

  showSection("verify");
});

// Verificación
document.getElementById("verify-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const inputCode = document.getElementById("verification-code").value;

  if (inputCode === generatedCode) {
    alert("¡Registro exitoso!");
    showSection("login");
  } else {
    alert("Código incorrecto, intenta de nuevo.");
  }
emailjs.send("service_3rlzr6t", "template_woa47bv", {
  username: username,
  code: generatedCode,
  to_email: email,
let generatedCode = "";

function showSection(section) {
  document.getElementById("login-section").style.display = "none";
  document.getElementById("register-section").style.display = "none";
  document.getElementById("verify-section").style.display = "none";

  document.getElementById(section + "-section").style.display = "block";
}

// LOGIN
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  alert(`Bienvenido, ${username}!`);
});

// REGISTRO
document.getElementById("register-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("register-username").value;
  const email = document.getElementById("register-email").value;

  generatedCode = Math.floor(100000 + Math.random() * 900000).toString();

  // ENVÍA EL CORREO
  emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", {
    username: username,
    code: generatedCode,
    to_email: email
  }).then(function(response) {
    console.log("Correo enviado:", response.status);
    showSection("verify");
  }, function(error) {
    console.error("Error al enviar el correo:", error);
    alert("Ocurrió un error al enviar el código. Intenta de nuevo.");
  });
});

// VERIFICACIÓN
document.getElementById("verify-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const inputCode = document.getElementById("verification-code").value;

  if (inputCode === generatedCode) {
    alert("¡Registro exitoso!");
    showSection("login");
  } else {
    alert("Código incorrecto. Intenta de nuevo.");
  }
});
