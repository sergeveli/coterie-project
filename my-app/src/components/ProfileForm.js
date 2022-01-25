import { Grid, TextField, withStyles, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
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

  const {
    values, 
    setValues,
    handleInputChange
  } = useForm(initialFieldValues)

  // const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(()=>{
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, [])

  return (
      <form autoComplete='off' noValidate className = {classes.root}>
        <Grid container>
          <Grid item xs={6}>
            <TextField
            name='businessName'
            variant='outlined'
            label='Business Name'
            value={values.businessName}
            onChange={handleInputChange}
            />
            <TextField
            name='industry'
            variant='outlined'
            label='Industry'
            value={values.industry}
            onChange={handleInputChange}
            />
            <TextField
            name='email'
            variant='outlined'
            label='Email'
            value={values.email}
            onChange={handleInputChange}
            />
            <FormControl variant='outlined' 
            className={classes.formControl}>
              <InputLabel>Annual Sales</InputLabel>
              <Select
              name='annualSales'
              value={values.annualSales}
              onChange={handleInputChange}>
                <MenuItem value=''>Select Number</MenuItem>
                <MenuItem value='$50k'>$50k</MenuItem>
                <MenuItem value='$75k'>$75k</MenuItem>
                <MenuItem value='$100k'>$100k</MenuItem>
                <MenuItem value='$150k'>$150k</MenuItem>
                <MenuItem value='$200k'>$200k</MenuItem>
              </Select>
            </FormControl>
            <TextField
            name='annualPayroll'
            variant='outlined'
            label='Annual Payroll'
            value={values.annualPayroll}
            onChange={handleInputChange}
            />
            <TextField
            name='numberOfEmployees'
            variant='outlined'
            label='Number of Employees'
            value={values.numberOfEmployees}
            onChange={handleInputChange}
            />
            <TextField
            name='zipCode'
            variant='outlined'
            label='Zip Code'
            value={values.zipCode}
            onChange={handleInputChange}
            />            
          </Grid>
        </Grid>
      </form>
  );
};

export default ProfileForm;
