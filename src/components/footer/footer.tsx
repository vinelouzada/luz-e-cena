import FooterInfo from "./footer-info"
import FooterLogo from "./footer-logo"
import { useStyles } from "./footer-styles"
const Footer = () => {
    const styles = useStyles();
    return (
      <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
            <FooterLogo />
            <FooterInfo />
        </div>
      </footer>
    )
  }
  
  export default Footer