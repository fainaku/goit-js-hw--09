const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

populateFormFields();
formEl.addEventListener('input', handleFormInput);
formEl.addEventListener('submit', handleFormSubmit);

function handleFormInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleFormSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  formData.email = '';
  formData.message = '';
}

function populateFormFields() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) {
    return;
  }
  const data = JSON.parse(savedData);

  formData.email = data.email || '';
  formData.message = data.message || '';

  if (formData.email) {
    formEl.elements.email.value = formData.email;
  }
  if (formData.message) {
    formEl.elements.message.value = formData.message;
  }
}
