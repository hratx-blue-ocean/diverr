import { React, useState } from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
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

const useStyles = makeStyles((theme) => ({
  col: {
    width: '100%',
    marginLeft: 50,
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

      //determines privacy
      if (values.privacy === 'public') {
        values.public = true;
      }

      //thermal insulation
      if (values.suitUp === 'wetsuit') {
        values.wet_suit = true;
      }

      //environment
      if (values.environment === 'controlled') {
        values.controlled_env = true;
      } else {
        if (values.environment === 'boat') {
          values.boat = true;
        }
      }

      //fresh v salt
      if (values.water === 'salt') {
        values.salt_water = true;
      }

      //checkboxes
      for (let item of values.checked) {
        values[item] = true;
      }

      console.log({values})
      alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Header />
      <form>
        <Grid container spacing={3} direction="row">
          <Column1 formik={formik} />
          <Column2 formik={formik} />
          <Column3 formik={formik} />
          <Column4 formik={formik} />
          <div className={classes.col}>
            <FormTags tags={tags} setTags={setTags}/>
            <FormMedia images={images} setImages={setImages} />
            <Button onClick={formik.handleSubmit} color="primary" variant="contained" fullWidth>
              Submit
            </Button>
          </div>
        </Grid>
      </form>
    </>
  );
}
