import { Grid, TableContainer, Paper, TableBody, TableRow, TableCell, TableHead, withStyles, Table } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/Profile';
import ProfileForm from './ProfileForm';

const styles = theme =>({
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  }
})

const Profiles = ({classes, ...props}) => {
  // const [profile, setProfile] = useState(0)

  useEffect(()=>{
    props.fetchAllProfiles()
  }, [props])

  return (
    <Paper className={classes.paper} elevation={3}>
    <Grid container>
      <Grid item xs={6}>
        <ProfileForm />
      </Grid>
      <Grid item xs={6}>
        <TableContainer>
          <Table>
          <TableHead>
            <TableRow>
              <TableCell>Business Name:</TableCell>
              <TableCell>Industry:</TableCell>
              <TableCell>Email:</TableCell>
              <TableCell>Annual Sales:</TableCell>
              <TableCell>Annual Payroll:</TableCell>
              <TableCell>Number of Employees:</TableCell>
              <TableCell>Zip Code:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              props.profilesList.map((record, index)=>{
                return (<TableRow>
                  <TableCell>{record.businessName}</TableCell>
                  <TableCell>{record.industry}</TableCell>
                  <TableCell>{record.email}</TableCell>
                  <TableCell>{record.annualSales}</TableCell>
                  <TableCell>{record.annualPayroll}</TableCell>
                  <TableCell>{record.numberOfEmployees}</TableCell>
                  <TableCell>{record.zipCode}</TableCell>
                </TableRow>)
              })
            }
          </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
    </Paper>
  );
};

const mapStateToProps = state =>({
    profilesList: state.Profile.list
})

const mapActionToProps = {
  fetchAllProfiles: actions.fetchAll
}


export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Profiles));
