import { React, useState } from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Box, Typography, Grow } from "@material-ui/core";
import Header from "common/widgets/Header";
import { useSession } from "next-auth/client";
import AddButton from "common/components/buttons/AddButton.js";
import Column1 from "common/widgets/Form/formCol1.js";
import Column2 from "common/widgets/Form/formCol2.js";
import Column3 from "common/widgets/Form/formCol3.js";
import Column4 from "common/widgets/Form/formCol4.js";
import FormTags from "common/widgets/Form/tags.js";
import FormMedia from "common/widgets/Form/photos.js";
import { useFormik } from "formik";
import blue from "@material-ui/core/colors/blue";

const useStyles = makeStyles((theme) => ({
  col: {
    width: "100%",
  },
  spacer: {
    height: "15px",
  },
  title: {
    color: theme.palette.lightBlue.main,
    textAlign: "center",
  },
  main: {
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 20, 0.1), rgba(0, 0, 20, 1))",
    color: theme.palette.lightBlue.main,
    width: "100vw",
  },
}));

export default function AddNewLogForm() {
  const classes = useStyles();
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);

  const formik = useFormik({
    initialValues: {
      date: "",
      city: "",
      country: "",
      site: "",
      center: "",
      instructor: "",
      instructorCert: "",
      timeIn: "",
      timeOut: "",
      startPressure: "",
      endPressure: "",
      depth: "",
      abt: "",
      rnt: "",
      tbt: "",
      visibility: "",
      airTemp: "",
      waterTemp: "",
      weight: "",
      notes: "",
    },
    onSubmit: (values) => {
      values.tags = tags;
      values.images = images;
      alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Header />
      <Grow timeout={1400} in={true}>
        <Typography variant="h1" className={classes.title}>
          Store a Log
        </Typography>
      </Grow>
      <form style={{ width: "100vw" }}>
        <Grid container spacing={1} className={classes.main}>
          <Column1 formik={formik} container direction="column" />
          <Column2 formik={formik} />
          <Column3 formik={formik} container direction="column" />
          <Column4 formik={formik} container direction="column" />
        </Grid>
        <Box className={classes.spacer} />
        <Grid container className={classes.col}>
          <Grid item xs={6} container direction="column">
            <FormTags tags={tags} setTags={setTags} />
          </Grid>
          <Grid item xs={6} container direction="column">
            <FormMedia images={images} setImages={setImages} />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.submit}
              onClick={formik.handleSubmit}
              color="primary"
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
