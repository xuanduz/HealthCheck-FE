import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

const PatientLayout = (props: any) => {
  return (
    <>
      <HeaderComponent />
      {props.children}
      <FooterComponent />
    </>
  );
};

export default PatientLayout;
