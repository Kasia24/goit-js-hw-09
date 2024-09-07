const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

// Funkcja zapisywania do localStorage
const saveFormData = () => {
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
};

// Funkcja ładowania z localStorage
const loadFormData = () => {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.email.value = email;
    form.message.value = message;
  }
};

// Funkcja czyszczenia localStorage po submit
const handleSubmit = event => {
  event.preventDefault();
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };
  console.log('Submitted data:', formData);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
};

// Nasłuchiwanie na input i submit
form.addEventListener('input', saveFormData);
form.addEventListener('submit', handleSubmit);

// Ładowanie danych z localStorage przy załadowaniu strony
document.addEventListener('DOMContentLoaded', loadFormData);
