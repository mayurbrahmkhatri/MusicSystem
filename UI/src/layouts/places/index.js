import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import authorsTableData from "layouts/places/data/authorsTableData";

function Places() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await authorsTableData();
    setRows(response.rows);
  };

  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Places;
