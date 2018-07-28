import React from 'react'

// Material ui styles component
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'

const CustomInput = ({ input, label, type }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Input
        {...input} type={type}
        multiline
      />
    </FormControl>)
}

export default CustomInput
