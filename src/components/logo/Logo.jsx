
const Logo = ({ type = "default" }) => {
    let logoSrc;
  
    if (type === "muted") {
      logoSrc = "/images/logo-muted.svg";
    } else {
      logoSrc = "/images/logo.svg";
    }
  
    return <img src={logoSrc} alt="Logo" />;
  };
  
  export default Logo;