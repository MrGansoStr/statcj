import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../redux/states/user';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from './../../models/routes';
import { ClearLocalStorageValue } from '../../utilities/ManageLocalStorage';
import { LSKeys } from '../../models/LocalStorageKeys';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CommentIcon from '@mui/icons-material/Comment';

function UserLogged() {

  const [OpenMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const userState = useSelector(store => store.user);
  const OpenUserMenu = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const CloseUserMenu = (e) => {
    e.preventDefault();
    setOpenMenu(null);
  };

  const GoToProfile = (e) => {
    e.preventDefault();
    navigate(`${PrivateRoutes.PRIVATE}`);
    setOpenMenu(false);
  }
  const LogOut = (e) => {
    e.preventDefault();
    dispatcher(deleteUser());
    ClearLocalStorageValue(LSKeys.TOKEN);
    navigate(PublicRoutes.LOGIN);
    window.location.reload();
  }
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={OpenUserMenu} sx={{ p: 0 }}>
          <AccountCircleOutlinedIcon sx={{ color: "white", fontSize: "2rem" }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={OpenMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(OpenMenu)}
        onClose={CloseUserMenu}
      >
        <Typography variant="body1" className="text-center p-3">
          Ha iniciado sesión como: <b>{userState?.username}</b>
        </Typography>
        <MenuItem onClick={GoToProfile}>
          <Typography textAlign="center"><AccountCircleIcon color="primary"/> Perfil</Typography>
        </MenuItem>
        <MenuItem onClick={CloseUserMenu}>
          <Typography textAlign="center"><CommentIcon color="info"/> Mis Comentarios</Typography>
        </MenuItem>
        <MenuItem onClick={LogOut}>
          <Typography textAlign="center"><LogoutIcon color="error"/> Salir</Typography>
        </MenuItem>

      </Menu>
    </Box>
  );
}
export default UserLogged;