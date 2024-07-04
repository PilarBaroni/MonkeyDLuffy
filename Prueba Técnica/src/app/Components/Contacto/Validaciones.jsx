export const Validaciones = (name, email, message) => {
  const errors = {};

  if (!name) {
    errors.name = "El nombre es obligatorio";
  }

  if (!email) {
    errors.email = "El email es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "El email no es válido";
  }

  if (!message) {
    errors.message = "El mensaje es obligatorio";
  }

  return errors;
};
