import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import TobetoTextInput from "../utilities/customFormControls/TobetoTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adi zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyati zorunlu"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
        <TobetoTextInput name="productName" placeholder="Ürün adi" />
        <TobetoTextInput name="unitPrice" placeholder="Ürün fiyati" />
        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>
    </Formik>
  );
}
