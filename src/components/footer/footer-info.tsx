
import { useStyles } from './footer-styles'

function FooterInfo() {
    const styles = useStyles();
  return (
    <div className={styles.funcionamento}>
        <h4 className={styles.titulo}>Funcionamento</h4>
        <p>Segunda a sexta-feira: 16h às 00h</p>
        <p>Sábado e domingo: 10h às 21h</p>
        <p>0800 541 320</p>
    </div>
  )
}

export default FooterInfo