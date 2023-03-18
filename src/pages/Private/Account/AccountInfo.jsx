
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
function AccountInfo() {
  const userState = useSelector(store => store.user)
  console.log(userState);
  return (
    <Box component="div" className="container-lg mt-5 mb-5">
      <Typography variant="body1">{userState?.username}</Typography>
      <Typography variant="body1">{userState?.name}</Typography>
      <Typography variant="body1">{userState?.lastName}</Typography>
      <Typography variant="body1">{userState?.email}</Typography>
      <Typography variant="body1">{userState?.gender}</Typography>
    </Box>
  );
}
export default AccountInfo;