
import Logo from '../logo/logo'
import { useStyles } from './footer-styles'

function FooterLogo() {
    const styles = useStyles();
  return (
    <div className={styles.logo}>
        <Logo src='/logo_branco.png' alt='Logo branca' />
        <p>Onde a realidade encontra a fantasia!</p>
    </div>
  )
}

export default FooterLogo