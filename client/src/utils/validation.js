export function registerValidation(values) {
  let errors = {}
  if (!values.username) {
    errors.username = 'This field is required'
  } else if (values.username.length < 4) {
    errors.username = 'Must be at least 4 characters length'
  }
  if (!values.email) {
    errors.email = 'This field is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email is invalid'
  }
  if (!values.password) {
    errors.password = 'This field is required'
  } else if (values.password.length < 4) {
    errors.password = 'Password must be at least 4 characters length'
  }
  return errors
}

export function loginValidation(values) {
  let errors = {}
  if (!values.email) {
    errors.email = 'This field is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email is invalid'
  }
  if (!values.password) {
    errors.password = 'This field is required'
  } else if (values.password.length < 4) {
    errors.password = 'Password must be at least 4 characters length'
  }
  return errors
}

export function userEditValidation(values) {
  let errors = {}
  if (!values.email) {
    errors.email = 'This field is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email is invalid'
  }
  return errors
}

export function taskEditOrAddValidation(values) {
  let errors = {}
  if (!values.title) {
    errors.title = 'This field is required'
  }
  if (!values.short_description) {
    errors.short_description = 'This field is required'
  }
  return errors
}

export function messageValidation(values) {
  let errors = {}
  if (!values.msg) {
    errors.msg = 'Please, write a message before sending'
  } else if (/\s/.test(values.msg)) {
    errors.msg = 'Please, write a message before sending'
  }
  return errors
}
