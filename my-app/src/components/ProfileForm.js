import { Grid, TextField } from '@material-ui/core';
import React, {useState} from 'react';

const initialFieldValues = {
  businessName: '',
  industry: '',
  email: '',
  annualSales: '',
  annualPayroll: '',
  numberOfEmployees: '',
  zipCode: ''

}

const ProfileForm = (props) => {

  const {values, setValues} = useState(initialFieldValues)

  const handleInputChange = e =>{
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value

    })
  }

  return (
      <form autoComplete='off' noValidate>
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
            <TextField
            name='annualSales'
            variant='outlined'
            label='Annual Sales'
            value={values.annualSales}
            onChange={handleInputChange}
            />
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
