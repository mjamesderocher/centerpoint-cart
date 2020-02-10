import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  form: {
    width: '100%'
  }
})


function ContactInfo(props) {
  const classes = useStyles()
  return (
    <FormControl className={classes.form}>
      <TextField
        id="standard-full-width"
        label="Company Name"
        fullWidth
        margin="normal"
      />
      <TextField
        id="standard-full-width"
        label="Contact Name"
        fullWidth
        margin="normal"
      />
      <TextField
        id="standard-full-width"
        label="Street Address"
        fullWidth
        margin="normal"
      />
      <TextField
        id="standard-full-width"
        label="City, State, and Zip Code"
        fullWidth
        margin="normal"
      />
      <TextField
        id="standard-full-width"
        label="Memo"
        fullWidth
        margin="normal"
      />
    </FormControl>
  )
}

export default ContactInfo