export default function Logo({type}){
    let logoSrc;
  
    if (type === "muted") {
      logoSrc = "/images/logo-muted.svg";
    } else {
      logoSrc = "/images/logo.svg";
    }
  
    return <img src={logoSrc} alt="Logo" />;
  };
  
