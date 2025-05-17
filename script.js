document.addEventListener('DOMContentLoaded', function () {
  // If this is the signup page, attach the submit handler
  const signupForm = document.getElementById('signupForm');
  if (signupForm) { 
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();

      ['firstName', 'lastName', 'sex', 'email', 'password', 'supportReason'].forEach(id => {
        const errorElem = document.getElementById(id + 'Error');
        if (errorElem) errorElem.textContent = '';
      });

      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const contact = document.getElementById('contact')?.value.trim();
      const supportReason = document.getElementById('supportReason').value.trim();
      const sexInput = document.querySelector('input[name="sex"]:checked');

      let valid = true;

      if (!firstName) {
        document.getElementById('firstNameError').textContent = 'Required';
        valid = false;
      }
      if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Required';
        valid = false;
      }
      if (!sexInput) {
        document.getElementById('sexError').textContent = 'Required';
        valid = false;
      }
      if (!email) {
        document.getElementById('emailError').textContent = 'Required';
        valid = false;
      }
      if (!password) {
        document.getElementById('passwordError').textContent = 'Required';
        valid = false;
      }
      if (!supportReason) {
        document.getElementById('supportReasonError').textContent = 'Required';
        valid = false;
      }

      if (valid) {
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('sex', sexInput.value);
        localStorage.setItem('supportReason', supportReason);
        window.location.href = 'proj_malvas_profile.html';
      }
    });
  }

  if (document.getElementById('firstName') && localStorage.getItem('firstName')) {
    document.getElementById('firstName').textContent = localStorage.getItem('firstName');
    document.getElementById('lastName').textContent = localStorage.getItem('lastName');
    document.getElementById('email').textContent = localStorage.getItem('email');
    document.getElementById('sex').textContent = localStorage.getItem('sex');
    document.getElementById('supportReason').textContent = localStorage.getItem('supportReason');
  }
});