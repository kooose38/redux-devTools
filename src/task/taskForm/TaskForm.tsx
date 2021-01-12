import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form"; //form作成Tools

const useStyles = makeStyles({
  root: {
    background: "#fff",
    marginBottom: "20px",
    padding: 0,
  },
  field: {
    width: "100%",
  },
});

type Inupts = {
  taskTitle: string;
};

const TaskForm: React.FC = () => {
  const classes = useStyles();
  const { register, handleSubmit, reset } = useForm();

  const handleCreate = (data: Inupts) => {
    // data === { taskTitl:e.target.value }
    console.log(data);
    reset();
  };
  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(handleCreate)}>
        <TextField
          className={classes.field}
          inputRef={register} //handleCreate関数に渡すvalue
          id="outlined-basic"
          name="taskTitle" //handleCreate関数の引数に渡すKey
          label="Outlined"
          variant="outlined"
        />
      </form>
    </div>
  );
};

export default TaskForm;
