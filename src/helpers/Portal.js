import ReactDom from "react-dom";

const Portal = ({ children }) => {
  const el = document.getElementById("portal-target");
  return ReactDom.createPortal(children, el);
};

export default Portal;
