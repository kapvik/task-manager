import React from 'react'

// Material ui styles component
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'

const CustomInput = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <FormControl fullWidth>
      <InputLabel error={(touched && error) ? true : false} >{(touched && error) ? 'Error' : label }</InputLabel>
      <Input
        {...input}
        type={type}
        error={(touched && error) ? true : false}
        multiline
      />
      { (touched && error) && <FormHelperText error>{error}</FormHelperText> }
    </FormControl>)
}

export default CustomInput
