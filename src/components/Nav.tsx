import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    widh: "20vw",
    height: "20vh",
  },
  title: {},
});

const Nav: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {" "}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Todo List
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
