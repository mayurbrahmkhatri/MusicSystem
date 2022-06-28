import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDAvatar from "components/MDAvatar";
// import cardMedia from "assets/theme/components/card/cardMedia";
// import profilePic from "assets/images/ivana-square.jpg";
// import { CardMedia } from "@mui/material";
import { useState, useEffect } from "react";
import { getLoggedInUser } from "../../service/localstorage_service";
import { ApiService } from "../../service/ApiSerivce"


function UserInfo() {
  const [ setDataAry] = useState([]);
  const fetchData = async () => {
    try {
      const response = await new ApiService().getRecentlyPlayed(getLoggedInUser());
      const resData = response.data;
      setDataAry(resData);
      console.log("user history DATA", resData);
      
    } catch (error) {
      console.log("Error --->", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <DashboardLayout>
      <div style={{display: "inline-flex", marginLeft: "20px"}}>
        <MDAvatar size="xl" pt={2} src="https://a10.gaanacdn.com/gn_img/albums/d41WjznWPL/1Wjz8wynWP/size_m.jpg" />
        <MDTypography color="info" variant="h3" pl={2} textGradient>Hello,<br />User</MDTypography>
      </div>
      <div style={{display: "flex", marginTop:"50"}}>
      <Card
        borderRadius="lg"
        sx={{ marginRight: 8, marginLeft: 2, mb: 3, width: 500, align: "center" }}
        style={{ backgroundColor: "offwhite" }}
        disply="inline-block"
      >
      <MDBox
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="success"
        mx={2}
        mt={-2}
        p={1}
        mb={1}
        textAlign="center"
      >
      <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
        Personal Information
      </MDTypography>
      </MDBox>
        <MDBox pt={1} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox>
              <MDBox mb={2} pr={2} display="inline-block">
                <MDInput type="text" label="First Name" variant="outlined" halfWidth />
              </MDBox>
              <MDBox mb={2} pl={2} display="inline-block">
                <MDInput type="text" label="Last Name" variant="outlined" halfWidth />
              </MDBox>
            </MDBox>
            <MDBox mb={2} pr={2} display="inline-block">
              <MDInput type="text" label="Username" variant="outlined" halfWidth />
            </MDBox>
            <MDBox mb={2} pl={2} display="inline-block">
              <MDInput type="email" label="Email" variant="outlined" halfWidth />
            </MDBox>
            <MDBox mb={2} pr={2} display="inline-block">
              <MDInput type="text" label="Contact Number" variant="outlined" halfWidth />
            </MDBox>
            <MDBox mb={2} pl={2} style={{position:"absolute"}} display="inline-block">
              <MDButton>Profile Pic</MDButton>
            </MDBox>
          </MDBox>
          <MDButton variant="gradient" color="info" ml={5}>
            Save
          </MDButton>
        </MDBox>
      </Card>
      <Card
        borderRadius="lg"
        sx={{ marginRight: 8, marginLeft: 2, mb: 3, width: 500 }}
        style={{ backgroundColor: "offwhite", disply: "inline-block" }}
      >
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-2}
          p={1}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Change Password
          </MDTypography>
        </MDBox>
        <MDBox pt={1} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox>
              <MDBox mb={2}>
                <MDInput type="password" label="Current Password" variant="outlined" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="password" label="New Password" variant="outlined" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="password"
                  label="Confirm New Password"
                  variant="outlined"
                  fullWidth
                />
              </MDBox>
            </MDBox>
            <MDButton variant="gradient" color="info">
              Save
            </MDButton>
          </MDBox>
        </MDBox>
      </Card>

        </div>
           
    </DashboardLayout>
  );
}

export default UserInfo;
