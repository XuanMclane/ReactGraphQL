import React,  {useState} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";

const Error = ({ classes, error }) => {
  const [open, setOpen] = useState(true)

  return (
    <Snackbar 
      open={open}
      className={classes.snackbar}
      message={error.message}
      action={
        <Button
          onClick={() => setOpen(false)} color="secondary" size="small"
        >
          Close
        </Button>
      }
    />
  )
};

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit
  }
});

export default withStyles(styles)(Error);
