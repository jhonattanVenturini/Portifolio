
const form = document.getElementById('contatoForm');
const msgSucesso = document.getElementById('msgSucesso');
const msgErro = document.getElementById('msgErro');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xzzaopkd", { // substitua pelo seu endpoint real
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      msgSucesso.style.display = "block";
      msgErro.style.display = "none";
      form.reset();
    } else {
      msgErro.style.display = "block";
      msgSucesso.style.display = "none";
    }

  } catch (error) {
    msgErro.style.display = "block";
    msgSucesso.style.display = "none";
  }
});

