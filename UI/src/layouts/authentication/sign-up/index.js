/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert'
import { useState, forwardRef } from "react";
import { ApiService } from "../../../service/ApiSerivce";


function Cover() {


  const initialValues = { userName: "", firstName: "", lastName: "", email: "", password: "", contactNum: "" };
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [confirmPassword,setConfirmPassword] = useState("");
  const [toastData, setToastData] = useState({
    'open': false,
    'type': 'success',
    'message': ''
  });



  const navigate = useNavigate();
  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // setFormErrors(validate(formValues))
    
    
  }


  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passLowerCase = /^(?=.*[a-z].*)/;
    const passUpperCase = /^(?=.*[A-Z].*)/;
    const passDigit = /^(?=.*\d.*)/;
    const passSymbol = /^(?=.*[@$!%*?&])/;
    // const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    const contactNum = /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    if (!values.userName) {
      errors.userName = "Username is required";

    }

    if (!values.firstName) {
      errors.firstName = "First Name is required";

    }

    if (!values.lastName) {
      errors.lastName = "Last Name is required";

    }
     if(confirmPassword===""){
       errors.confirmPassword = "confirm password required";
     }  else if (values.password !== confirmPassword){
      errors.confirmPassword = "password do not match";
    } 
    if (!values.email) {
      errors.email = "Email is required";

    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format"
    }

    if (!values.password) {
      errors.password = " password is required";

    } else   if (values.password.length > 7) {
      if (!passUpperCase.test(values.password)) {
        errors.password = "1 upper capital letter required"
      } else if (!passLowerCase.test(values.password)) {
        errors.password = "1 lower letter required"
      } else if (!passDigit.test(values.password)) {
        errors.password = "1 number required"
      } else if (!passSymbol.test(values.password)) {
        errors.password = "1 Symbol required"
      }
    }
    else {
      errors.password = "Atleast 8 characters required"
    }

    if (!values.contactNum) {
      errors.contactNum = "contact number  is required";

    } else if(!contactNum.test(values.contactNum)){
      errors.contactNum = "Invalid phone number"
    }
    return errors;
  }
      

  const data={
    userName: formValues.userName,
    firstName: formValues.firstName,
    lastName: formValues.lastName,
    email: formValues.email,
    password:formValues.password,
    contactNum: formValues.contactNum,
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true);
    
  };
  const registerc = async () => {
   
    // console.log(data);
    try {
      const response = await new ApiService().register(data);
      if (response.statusCode === 200){
       
        navigate("/sign-in");
      } else if (response.statusCode === 422){
        setToastData({
          open: 'true',
          type: 'error',
          message: response.msg
        });
      }

      else{
        setToastData({
          open: 'true',
          type: 'error',
          message: response.msg
        });
        
      }
    } catch(error) {
      console.log("Error While Login ===>", error);
    }
  };

  const Alert = forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);
  return (
    <BasicLayout image={bgImage}>
      <Snackbar open={toastData.open} autoHideDuration={6000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}>
        <Alert severity={toastData.type} sx={{ height: '100%' }}>
          {toastData.message}
        </Alert>
      </Snackbar>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-2}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign Up
          </MDTypography>
        </MDBox>
        <MDBox pt={1} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
           
              <MDBox mb={2}>
                <MDInput type="text" name="userName" onChange={handleChange} value={formValues.userName} label="username" variant="outlined" fullWidth />
                <p style={{ fontSize: "13px", color: "red" }}>{formErrors.userName}</p>
              </MDBox>
               
              <MDBox mb={2} >
                <MDInput type="text" name="firstName" onChange={handleChange} value={formValues.firstName} label="First Name" variant="outlined" fullWidth />
              <p style={{ fontSize: "13px", color: "red" }}>{formErrors.firstName}</p>
              </MDBox>
              
              <MDBox mb={2}>
                <MDInput type="text" name="lastName" onChange={handleChange} value={formValues.lastName} label="Last Name" variant="outlined" fullWidth />
              <p style={{ fontSize: "13px", color: "red" }}>{formErrors.lastName}</p>
              </MDBox>
              
            

            <MDBox mb={2}>
              <MDInput type="text" name="email" onChange={handleChange} value={formValues.email} label="Email" variant="outlined" fullWidth />
              <p style={{ fontSize: "13px", color: "red" }}>{formErrors.email}</p>
            </MDBox>
            
            <MDBox mb={2}>
              <MDInput type="password" name="password" onChange={handleChange} value={formValues.password} label="Password" variant="outlined" fullWidth />
              <p style={{ fontSize: "13px", color: "red" }}>{formErrors.password}</p>
            </MDBox>
            
            <MDBox mb={2}>
              <MDInput type="password" label="Confirm Password" onChange={(event)=>setConfirmPassword(event.target.value)} variant="outlined" fullWidth />
              <p style={{ fontSize: "13px", color: "red" }}>{formErrors.confirmPassword}</p>
            </MDBox>
            
            <MDBox mb={2}>
              <MDInput type="text" name="contactNum" onChange={handleChange} value={formValues.contactNum} label="Contact Number" variant="outlined" fullWidth />
              <p style={{ fontSize: "13px", color: "red" }}>{formErrors.contactNum}</p>
            </MDBox>
            
            <MDBox display="flex" alignItems="center" ml={-1} />
            <MDBox mt={2} mb={1}>
              <MDButton variant="gradient" type="submit" color="info" onClick={registerc} fullWidth>
                Create Account
              </MDButton>
            </MDBox>
            <MDBox mt={2} mb={1} textAlign="center">
              <MDTypography variant="button" color="text" display="block">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
              <MDTypography variant="button" color="text" display="block">
                <MDTypography
                  component={Link}
                  to="/dashboard"
                  variant="button"
                  color="info"
                  textAlign="right"
                  fontWeight="medium"
                  textGradient
                >
                  skip for now
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Cover;
