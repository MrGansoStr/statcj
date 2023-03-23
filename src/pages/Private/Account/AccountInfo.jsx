import { Avatar, Box, Paper, TextField, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import GetGender from '../../PublicPages/Comments/Utilities/GetGender';
function AccountInfo() {
  const userState = useSelector(store => store.user);
  const theme = useTheme();
  return (
    <Box component="div" className="container-lg mt-5 mb-5 px-3">
      <Typography className="text-center mt-3 py-3" variant="h4">Perfil</Typography>
      <Typography component="div" variant="body1">
        <Avatar
          className="m-0 m-auto"
          alt={userState?.name}
          sx={{ width: 65, height: 65, bgcolor: theme.palette.primary.main }}
        >{GetGender(userState?.gender)}
        </Avatar>
        <Typography className="text-center mt-2 p-2">{`${userState?.name} ${userState?.lastName}`}</Typography>
      </Typography>
      <Box component={Paper} className="p-2">
        <Typography component="div" variant="body1">
          <Typography component="div" variant="body1">
            Usuario:
          </Typography>
          <Box component="div">
            <TextField
              variant="outlined"
              type="text"
              color="primary"
              size="small"
              InputProps={{ inputProps: { value: userState?.username } }}
            />
          </Box>
        </Typography>
        <br />
        <Typography component="div" variant="body1" >
          <Typography>
            Nombres:
          </Typography>
          <TextField
            variant="outlined"
            type="text"
            color="primary"
            size="small"
            InputProps={{ inputProps: { value: `${userState?.name.toUpperCase()} ${userState?.lastName.toUpperCase()}` } }}
          />
        </Typography>
        <br />
        <Typography component="div" variant="body1">
          <Typography >
            Email:
          </Typography>
          <TextField
            variant="outlined"
            type="text"
            color="primary"
            size="small"
            InputProps={{ inputProps: { value: userState?.email } }}
          />
        </Typography>
      </Box>
    </Box>
  );
}
export default AccountInfo;