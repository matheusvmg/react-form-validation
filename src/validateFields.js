const validateFields = (values) => {
  let erros = {};
  const emailTest = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.name.trim()) {
    erros.name = "Username is required";
  } else if (values.name.lenght < 5) {
    erros.name = "The Username needs to be 5 charaters at least";
  }

  if (!values.email.trim()) {
    erros.email = "Email is required";
  } else if (emailTest.test(values.email)) {
    erros.email = "Email address is invalid";
  }

  if (!values.password) {
    erros.password = "password is required";
  } else if (values.password.lenght < 8) {
    erros.password = "Passoword needs to be 8 characters at least";
  }

  if (!values.password2) {
    erros.password2 = "password is required";
  } else if (values.password2 !== values.password) {
    erros.password2 = "Password does not match";
  }

  return erros;
};

export default validateFields;
