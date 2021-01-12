import React from "react";
import { makeStyles } from "@material-ui/styles";
import Nav from "./components/Nav";
import TaskForm from "./task/taskForm/TaskForm";
import TaskList from "./task/taskList/taskList";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    background: "skyblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  warpper: {
    height: "70vh",
    width: "70vw",
    borderRadius: 10,
    background: "#444",
    padding: "10px 40px",
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.warpper}>
        <Nav />
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
