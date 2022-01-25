import { Grid, TextField, withStyles, FormControl, Select, MenuItem, InputLabel, Button, FormHelperText } from '@material-ui/core';
import React, {useState} from 'react';
import useForm from './useForm';

const styles = theme =>({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },  
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    }, 
    smMargin: {
      margin: theme.spacing(1)
    }
})
const initialFieldValues = {
  businessName: '',
  industry: '',
  email: '',
  annualSales: '',
  annualPayroll: '',
  numberOfEmployees: '',
  zipCode: ''

}

const ProfileForm = (classes, ...props) => {

  const validate = (fieldValues = values) =>{
    let temp={...errors}
    if('businessName' in fieldValues)
    temp.businessName = fieldValues.businessName ? "" :"This field is required"
    if('email' in fieldValues)
    temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if('industry' in fieldValues)
    temp.industry = fieldValues.industry ? "" :"This field is required"
    if('numberOfEmployees' in fieldValues)
    temp.numberOfEmployees = fieldValues.numberOfEmployees ? "" :"This field is required"
    if('zipCode' in fieldValues)
    temp.zipCode = fieldValues.zipCode ? "" :"This field is required"
    if('annualSales' in fieldValues)
    temp.annualSales = fieldValues.annualSales ? "" :"This field is required"
    if('annualPayroll' in fieldValues)
    temp.annualPayroll = fieldValues.annualPayroll ? "" :"This field is required"

    setErrors({
      ...temp
    })

    if (fieldValues == values)
    return Object.values(temp).every(x => x =='')
  }

  const {
    values, 
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFieldValues, validate)

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(()=>{
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleSubmit = e =>{
    e.preventDefault()
      if (validate()) {
          const onSuccess = () => {
            resetForm()
          }
        }
  }

  return (
      <form autoComplete='off' noValidate className = {classes.root} onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <TextField
            name='businessName'
            variant='outlined'
            label='Business Name'
            value={values.businessName}
            onChange={handleInputChange}
            error={true}
            helperText = {errors.businessName}
            {...(errors.businessName && { error: true, helperText: errors.businessName })}
            />
            <TextField
            name='industry'
            variant='outlined'
            label='Industry'
            value={values.industry}
            onChange={handleInputChange}
            {...(errors.industry && { error: true, helperText: errors.industry })}
            />
            <TextField
            name='email'
            variant='outlined'
            label='Email'
            value={values.email}
            onChange={handleInputChange}
            {...(errors.email && { error: true, helperText: errors.email })}
            />
            <FormControl variant='outlined' 
            className={classes.formControl}>
              <InputLabel ref={inputLabel}>Annual Sales</InputLabel>
              <Select
              name='annualSales'
              value={values.annualSales}
              onChange={handleInputChange}
              labelWidth={labelWidth}>
                <MenuItem value=''>Select Number</MenuItem>
                <MenuItem value='$50k'>$50k</MenuItem>
                <MenuItem value='$75k'>$75k</MenuItem>
                <MenuItem value='$100k'>$100k</MenuItem>
                <MenuItem value='$150k'>$150k</MenuItem>
                <MenuItem value='$200k'>$200k</MenuItem>
              </Select>
              {errors.annualSales && <FormHelperText>{errors.annualSales}</FormHelperText>}
            </FormControl>
            <FormControl variant='outlined' 
            className={classes.formControl}>
              <InputLabel ref={inputLabel}>Annual Payroll</InputLabel>
              <Select
              name='annualPayroll'
              value={values.annualPayroll}
              onChange={handleInputChange}
              labelWidth={labelWidth}>
                <MenuItem value=''>Select Number</MenuItem>
                <MenuItem value='$50k'>$50k</MenuItem>
                <MenuItem value='$75k'>$75k</MenuItem>
                <MenuItem value='$100k'>$100k</MenuItem>
                <MenuItem value='$150k'>$150k</MenuItem>
                <MenuItem value='$200k'>$200k</MenuItem>
              </Select>
              {errors.annualPayroll && <FormHelperText>{errors.annualPayroll}</FormHelperText>}
            </FormControl>

            <TextField
            name='numberOfEmployees'
            variant='outlined'
            label='Number of Employees'
            value={values.numberOfEmployees}
            onChange={handleInputChange}
            {...(errors.numberOfEmployees && { error: true, helperText: errors.numberOfEmployees })}
            />
            <TextField
            name='zipCode'
            variant='outlined'
            label='Zip Code'
            value={values.zipCode}
            onChange={handleInputChange}
            {...(errors.zipCode && { error: true, helperText: errors.zipCode })}
            />
            <div>
              <Button
              variant="contained"
              color="primary">
                Submit
              </Button>
            </div>            
          </Grid>
        </Grid>
      </form>
  );
};

export default ProfileForm;
