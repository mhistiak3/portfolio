import config from "@/config/config.json";
const Footer = () => {
  return (
    <footer className="section bg-body/50 text-center">
      {config.site.copyright}
    </footer>
  );
};

export default Footer;
