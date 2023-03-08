import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/states/user';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from './../../models/routes';

function UserLogged() {

  const [OpenMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const OpenUserMenu = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const CloseUserMenu = () => {
    setOpenMenu(null);
  };
  const LogOut = (e) => {
    e.preventDefault();
    dispatcher(deleteUser());
    navigate(PublicRoutes.LOGIN);
    window.location.reload();
  }
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={OpenUserMenu} sx={{ p: 0 }}>
          <AccountCircleOutlinedIcon sx={{color: "white", fontSize: "2rem"}}/>
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
        <MenuItem onClick={CloseUserMenu}>
          <Typography textAlign="center">Perfil</Typography>
        </MenuItem>
        <MenuItem onClick={CloseUserMenu}>
          <Typography textAlign="center">Mis Comentarios</Typography>
        </MenuItem>
        <MenuItem onClick={LogOut}>
          <Typography textAlign="center">Salir</Typography>
        </MenuItem>

      </Menu>
    </Box>
  );
}
export default UserLogged;