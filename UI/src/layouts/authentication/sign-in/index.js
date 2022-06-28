import { Link, useNavigate } from "react-router-dom";
import { useState, forwardRef } from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import logo from "assets/images/favicon.jpg";
import MDAvatar from "components/MDAvatar";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert'
import { setItem } from "../../../service/localstorage_service";
import { ApiService } from "../../../service/ApiSerivce";


function Basic() {
  const nagivate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [toastData, setToastData] = useState({
    'open': false,
    'type': 'success',
    'message': ''
  });
  const login = async () => {
    const data = {
      'username': username,
      'password': password
    };
    try {
      const response = await new ApiService().userLogin(data);
      if (response.statusCode === 200) {
        setItem('username', username);
        const path = `/dashboard`;
        nagivate(path);
        window.location.reload();
      } else {
        setToastData({
          open: 'true',
          type: 'error',
          message: response.msg
        });
      }
    } catch (error) {
      console.log("Error While Login ===>", error);
    }
  };

  const skipLogin = () => {
    setItem('username', 'guest');
    const path = `/dashboard`;
        nagivate(path);
        window.location.reload();
    // window.location.reload();
  }
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
      <div style={{marginBottom: "80", paddingLeft: "20", display:"flex"}}>
        <MDAvatar size="xl" pt={2} src={logo} />
        <div >
          <MDTypography color="info" variant="h2" pl={3} mt={1} textGradient>SPOTIFY 0.5</MDTypography>  
        </div>
      </div>
      <Card mt={10}>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="username" name="username" onInput={e => setUserName(e.target.value)} fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" name="password" onInput={e => setPassword(e.target.value)} fullWidth />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" onClick={login} fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
              <MDTypography variant="button" color="text" display="block">
                <MDTypography
                  // component={Link}
                  // to="/dashboard"
                  variant="button"
                  color="info"
                  textAlign="right"
                  fontWeight="medium"
                  textGradient
                  onClick={skipLogin}
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

export default Basic;
