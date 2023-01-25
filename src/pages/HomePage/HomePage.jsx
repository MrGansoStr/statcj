import RedirectBox from '../../StyledComponents/RedirectBox/RedirectBox';
import Footer from './../../StyledComponents/Footer/Footer';


function HomePage() {
  return (
    <>
      HOME PAGE
      <RedirectBox _height={"100px"} _title={"Titulo"} _info={"Informacion sobre la redirección "} />
      <RedirectBox _height={"200px"} _title={"Titulo"} _info={"Informacion sobre la redirección "} />
      <RedirectBox _height={"300px"} _title={"Titulo"} _info={"Informacion sobre la redirección "} />
      <Footer/>
    </>
  );
}
export default HomePage;
