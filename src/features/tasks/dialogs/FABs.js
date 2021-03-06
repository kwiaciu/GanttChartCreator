import { Backdrop, Box, Fab, makeStyles, Tooltip, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirstRender } from '../common/useFirstRender';
import { selectLastMessage, selectTasks } from '../tasksSlice';
import { AddTaskDialog } from './AddTaskDialog';
import { DraggableDialog } from './DraggableDialog';
import { OptionsDialog } from './OptionsDialog';
import { SnackbarStatus } from './SnackbarStatus';
import { now } from '../common/dateHelper';


const useStyles = makeStyles((theme) => ({
  margin2: {
    position: 'fixed',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
  },
  margin1: {
    position: 'fixed',
    bottom: theme.spacing(7),
    right: theme.spacing(17),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  centralContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  central: {
    width: '5rem',
    height: '5rem',
    margin: theme.spacing(3)
  }

}));

const FABs = () => {
  const classes = useStyles();
  const tasks = useSelector(selectTasks)
  const message = useSelector(selectLastMessage)
  const isFirstRender = useFirstRender()

  const [openOptions, setOpenOptions] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [options, add, backdrop, snackbar] = ['options', 'add', 'backdrop', 'snackbar']

  useEffect(() => {
    if (tasks.length === 0) {
      handleOpen(backdrop)
    } else {
      handleClose(backdrop)
    }
  },
    [tasks.length, backdrop])

  useEffect(() => {
    if (isFirstRender) {
      // intentional empty block
    } else {
      handleOpen(snackbar)
    }
  }, [message, snackbar])


  const handleOpen = (type) => {
    switch (type) {
      case 'options':
        setOpenOptions(true)
        break;
      case 'add':
        setOpenAdd(true)
        break;
      case 'backdrop':
        setOpenBackdrop(true)
        break;
      case 'snackbar':
        setOpenSnackbar(true)
        break;
      default:
        console.warn('Broken dialog opening')
        break;
    }
  };

  const handleClose = (type) => {
    switch (type) {
      case 'options':
        setOpenOptions(false)
        break;
      case 'add':
        setOpenAdd(false)
        break;
      case 'backdrop':
        setOpenBackdrop(false)
        break;
      case 'snackbar':
        setOpenSnackbar(false)
        break;
      default:
        console.warn('Broken dialog closing')
        break;
    }
  };

  return (
    <Box>
      <Tooltip title={'Options'}>
        <Fab
          className={classes.margin1}
          size="small"
          color="secondary"
          aria-label="options"
          onClick={() => handleOpen(options)}
        >
          <SettingsIcon />
        </Fab>
      </Tooltip>
      <Tooltip title={'Add task'}>
        <Fab
          className={classes.margin2}
          color="primary"
          aria-label="add"
          onClick={() => handleOpen(add)}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <DraggableDialog
        open={openOptions}
        name={options}
        handleClose={() => handleClose(options)}
      >
        <OptionsDialog
          name={options}
          handleClose={() => handleClose(options)}
        />
      </DraggableDialog>
      <DraggableDialog
        open={openAdd}
        name={add}
      // handleClose={() => handleClose(add)}    i dont want to accidently close during adding
      >
        <AddTaskDialog
          name={add}
          handleClose={() => handleClose(add)}
        />
      </DraggableDialog>
      <Backdrop
        className={classes.backdrop}
        open={openBackdrop}
      >
        <Box
          className={classes.centralContainer}
        >
          <Typography
            variant="h3"
          >
            Add first task
            </Typography>
          <Fab
            className={classes.central}
            color="primary"
            aria-label="add"
            onClick={() => handleOpen(add)}
          >
            <AddIcon
              style={{ width: '2.5rem', height: '2.5rem' }}
            />
          </Fab>
        </Box>
      </Backdrop >
      <SnackbarStatus
        message={message}
        open={openSnackbar}
        close={() => handleClose(snackbar)}
        id={`${now()}-snackbar`}
      />
    </Box >
  )
}
export { FABs };

