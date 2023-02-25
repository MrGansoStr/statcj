import { CircularProgress } from "@mui/material";

function SpinnerFallback() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <CircularProgress color="primary" />
    </div>
  )
}
export default SpinnerFallback;