import React, { useState } from "react";
import sample from "./database.json";
import TaskItem from "../taskItem/taskItem";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    height: "70vh",
    overflow: "hidden",
    overflowY: "auto",
  },
});

const TaskList: React.FC = () => {
  const classes = useStyles();
  const [data, setData] = useState(sample);
  return (
    <div className={classes.root}>
      {data.length > 0 &&
        data.map((task) => <TaskItem task={task} key={task.id} />)}
    </div>
  );
};

export default TaskList;
