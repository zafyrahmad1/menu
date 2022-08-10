import { Outlet, Link } from "react-router-dom";

import { Grid } from "@mui/material";
const Layout = () => {
    
    const ulStyle={
        listStyleType: "none",
        
    }
    const liS={
        display: "inline",
        margin:"30px"
    }
  return (
    <>
    <Grid align="center">
      <nav>
        <ul style={ulStyle}>
          <li variant="h4" style={liS}>
            <Link onClick="window.location.reload();" to="/">All</Link>
          </li>
            <li style={liS}>
                <Link onClick="window.location.reload();" to ="/Desserts">Desserts</Link>
            </li>
          <li style={liS}>
            <Link onClick="window.location.reload();" to="/Drinks">Drinks</Link>
          </li>
          <li style={liS}>
            <Link onClick="window.location.reload();" to="/Sandwiches">Sandwiches</Link>
          </li>
        </ul>
      </nav>
      </Grid>

      <Outlet />
    </>
  )
};

export default Layout;
