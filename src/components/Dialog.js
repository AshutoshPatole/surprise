import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import styles from "./Dialog.module.css";

function HintDialog({ id, onHintUsed }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hint, setHint] = useState("");

  function handleButtonClick() {
    setDialogOpen(true);
    setShowHint(false);
  }

  async function getHint() {
    setShowHint(true);
    const response = await fetch(`http://localhost:8000/u/hint?id=${id}`);
    const responseData = await response.json();
    setHint(responseData);
  }

  return (
    <div>
      <Button
        variant="contained"
        className={styles.button}
        onClick={handleButtonClick}
      >
        Hint
      </Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Hint!</DialogTitle>
        {showHint ? (
          <DialogContent>{hint.hint}</DialogContent>
        ) : (
          <DialogContent>
            <h5>
              Make sure that this hint will cost you 500 bucks. You sure want to
              get the hint ?
            </h5>
          </DialogContent>
        )}
        <DialogActions>
          <Button
            className={styles.button}
            onClick={() => setDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button className={styles.button} onClick={() => getHint()}>
            Get Hint
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default HintDialog;
