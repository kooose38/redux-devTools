import React from "react";
import { makeStyles } from "@material-ui/styles";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    padding: "10px 20px",
    marginBottom: "10px",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: "20px",
    color: "#282828",
  },
});

export interface TaskProps {
  task: {
    title: string;
    id: number;
    completed: boolean;
  };
}

const TaskItem: React.FC<TaskProps> = ({ task }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <CheckIcon />
        <div className={classes.text}>{task.title}</div>
      </div>
      <div className={classes.right}>
        <Checkbox
          checked={task.completed}
          onChange={() => {
            console.log("Hello");
          }}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <button
          onClick={() => {
            console.log("Hello");
          }}
        >
          <EditIcon className={classes.icon} />
        </button>
        <button
          onClick={() => {
            console.log("Hello");
          }}
        >
          <DeleteOutlineIcon className={classes.icon} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
