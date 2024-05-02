import React from 'react'
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

const SnackBar = () => {
  return (
    <>
    <SnackbarProvider />
      <button onClick={() => enqueueSnackbar('That was easy!')}>Show snackbar</button>
    </>
  )
}

export default SnackBar
