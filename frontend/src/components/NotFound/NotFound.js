import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const NotFound = () => {
    return (
        <Grid 
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: "40vh", justifyContent: "center" }}>
          <Grid item >
            <h3>Error 404: Page not found!</h3>
            <Link to="/">Go back to home page</Link>
          </Grid>
        </Grid>
    )
}

export default NotFound
