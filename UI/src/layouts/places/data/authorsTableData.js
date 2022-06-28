import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

import { PlaceService } from "../../../service/PlaceService";

async function data() {
  const countryService = new PlaceService();
  const countries = await countryService.getPlces();

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography display="block" variant="caption">
        {description}
      </MDTypography>
    </MDBox>
  );

  const rows = [];

  countries[0].items.map(({ image, placeName, punchuationLine, shortDescription, country }) => {
    const obj = {
      placeName: <Author image={image} name={placeName} email={punchuationLine} />,
      shortDescription: <Job title={shortDescription} description={country} />,
      action: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </MDTypography>
      ),
    };
    rows.push(obj);
  });

  const obj = {
    columns: [
      { Header: "Place Name", accessor: "placeName", width: "45%", align: "left" },
      { Header: "Description", accessor: "shortDescription", align: "left" },
      { Header: "action", accessor: "action", align: "center" },
    ],
    rows,
  };
  return obj;
}

export default data;
