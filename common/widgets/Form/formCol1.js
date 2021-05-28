import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useFormik } from "formik";
import {
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  col: {
    flexDirection: "column",
    margin: 50,
    marginLeft: 200,
    marginRight: 0,
  },
  textfield: {
    margin: 5,
    '& input + fieldset': {
      borderColor: '#2196f3',
      borderWidth: 1,
    }
  },
  title: {
    marginBottom: 10,
    color: '#2196f3'
  },
  input: {
    color: '#2196f3'
  },
  values: {
    color: '#2196f3'
  }
}));

export default function ColumnOne({ formik }) {
  const classes = useStyles();

  return (
    <div className={classes.col}>
      <FormControl>
        <FormLabel className={classes.title} component="legend">Privacy</FormLabel>
        <RadioGroup onChange={formik.handleChange} name="privacy">
          <FormControlLabel
            value="private"
            control={<Radio />}
            label="Private"
          />
          <FormControlLabel
            value="public"
            control={<Radio />}
            label="Public"
          />
        </RadioGroup>
      </FormControl>
      <TextField
        className={classes.textfield}
        required
        type="date"
        label="Date"
        name="date"
        value={formik.values.date}
        onChange={formik.handleChange}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
          className: classes.input
        }}
        InputProps={{
          className: classes.values
        }}
        style={{ color: '#2196f3' }}
      />
      <TextField
        className={classes.textfield}
        required
        label="City"
        name="city"
        value={formik.values.city}
        onChange={formik.handleChange}
        variant="outlined"
        InputLabelProps={{
          className: classes.input
        }}
        InputProps={{
          className: classes.values
        }}
      />
      <TextField
        className={classes.textfield}
        required
        label="Country"
        name="country"
        value={formik.values.country}
        onChange={formik.handleChange}
        variant="outlined"
        style={{
          color: '#2196f3 !important'
        }}
        InputLabelProps={{
          className: classes.input
        }}
        InputProps={{
          className: classes.values
        }}
      />
      <TextField
        className={classes.textfield}
        required
        label="Dive Site"
        name="site"
        value={formik.values.site}
        onChange={formik.handleChange}
        variant="outlined"
        InputLabelProps={{
          className: classes.input
        }}
        InputProps={{
          className: classes.values
        }}
      />
      <TextField
        className={classes.textfield}
        required
        label="Dive Center"
        name="center"
        value={formik.values.center}
        onChange={formik.handleChange}
        variant="outlined"
        InputLabelProps={{
          className: classes.input
        }}
        InputProps={{
          className: classes.values
        }}
      />
      <TextField
        className={classes.textfield}
        label="Dive Instructor/Guide"
        name="instructor"
        value={formik.values.instructor}
        onChange={formik.handleChange}
        variant="outlined"
        InputLabelProps={{
          className: classes.input
        }}
        InputProps={{
          className: classes.values
        }}
        InputProps={{
          className: classes.values
        }}
      />
      <TextField
        className={classes.textfield}
        label="Instructor/Guide Cert No."
        name="instructorCert"
        value={formik.values.instructorCert}
        onChange={formik.handleChange}
        variant="outlined"
        InputLabelProps={{
          className: classes.input
        }}
        InputProps={{
          className: classes.values
        }}
      />
    </div>
  );
}
