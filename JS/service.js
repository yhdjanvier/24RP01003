function check () {
    const form = document.getElementById('myForm');
    const message = document.getElementById('submitMessage');

    form.addEventListener('submit', function (event) {
      event.preventDefault(); 

      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
      }
          form.classList.add('was-validated');
      message.classList.remove('d-none');
          form.reset();
      form.classList.remove('was-validated');
    });
  }
  check();