import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

const PatientUIComponent = (props: any) => {
  return (
    <>
      <HeaderComponent />
      {props.children}
      <FooterComponent />
    </>
  );
};

export default PatientUIComponent;
