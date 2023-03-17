import { useSnackbar } from "notistack"
let useSnackBarRef;


export const SnackbarManager = () =>  {
  useSnackBarRef = useSnackbar();
  return null;
}

export const SnackbarUtilities = {
  toast(message, variant="default") {
    useSnackBarRef.enqueueSnackbar(message, { variant});
  },
  success(message) {
    this.toast(message, "Success");
  },
  error(message) {
    this.toast(message, "Error");
  },
  info(message) {
    this.toast(message, "Info");
  },
  warning(message) {
    this.toast(message, "Warning Message");
  }
}

