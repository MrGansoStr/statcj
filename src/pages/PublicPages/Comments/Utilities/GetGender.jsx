import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const GetGender = (idGender) => {
  if(idGender === 1) {
    return (<MaleIcon/>);
  }
  if(idGender === 2) {
    return (<FemaleIcon/>);
  }
  if(idGender === 3) {
    return (<HelpOutlineIcon/>);
  }
  return (<HelpOutlineIcon/>);
}
export default GetGender;