
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
function AccountInfo() {
  const userState = useSelector(store => store.user)
  return (
    <Box component="div" className="container-lg mt-5 mb-5">
      <Typography variant="body1">{JSON.stringify(userState)}</Typography>
    </Box>
  );
}
export default AccountInfo;