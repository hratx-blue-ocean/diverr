import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import { useFormik } from 'formik';

const useStyles = makeStyles((theme) => ({
  col: {
    display: "inline-flex",
    flexDirection: "column",
    margin: 50,
  },
  textfield: {
    margin: 5,
  },
}));

export default function ColumnTwo({formik}) {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <div className={classes.col}>
        <TextField
          className={classes.textfield}
          required
          type="time"
          label="Time In"
          name="timeIn"
          value={formik.values.timeIn}
          onChange={formik.handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          type="time"
          label="Time Out"
          name="timeOut"
          value={formik.values.timeOut}
          onChange={formik.handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          label="Start air pressure"
          name="startPressure"
          value={formik.values.startPressure}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          label="End air pressure"
          name="endPressure"
          value={formik.values.endPressure}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          label="Maximum Depth"
          name="depth"
          value={formik.values.depth}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          label="Actual Bottom Time"
          name="abt"
          value={formik.values.abt}
          onChange={formik.handleChange}
          variant="outlined"
          helperText="In minutes"
        />
        <TextField
          className={classes.textfield}
          label="Residual Nitrogen Time"
          name="rnt"
          value={formik.values.rnt}
          onChange={formik.handleChange}
          variant="outlined"
          helperText="In minutes"
        />
        <TextField
          className={classes.textfield}
          label="Total Bottom Time"
          name="tbt"
          value={formik.values.tbt}
          onChange={formik.handleChange}
          variant="outlined"
          helperText="In minutes"
        />
      </div>
    </Grid>
  );
}
