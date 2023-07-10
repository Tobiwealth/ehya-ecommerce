//import { object, string } from 'yup';
import * as Yup from "yup";

export const Schema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Please enter a valid email").required("Required"),
  address1: Yup.string().required("Required"),
  address2: Yup.string(),
  city: Yup.string().required("Required"),
  zip: Yup.string().required("Required").matches(/^[0-9]+$/, "Must be only digits").min(5, "Must be exactly 5 digits").max(5, "Must be exactly 5 digits"), 
  country: Yup.string().required("Required"),
  zipcode: Yup.string().required("Required").matches(/^[0-9]+$/, "Must be only digits").min(5, "Must be exactly 5 digits").max(5, "Must be exactly 5 digits")
});