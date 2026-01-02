import Fieldset from '../fieldset/fieldset'
import InputText from '../input-text/input-text'
import Button from '../button/button'
import { useStyles } from './newsletter-styles'

function Newsletter() {
  const styles = useStyles();
  return (
    <section className={styles.newsletter}>
        <h2 className={styles.titulo}>Inscreva-se para ganhar descontos!</h2>
        <form className={styles.form}>
            <Fieldset variant='secondary'>
                <InputText placeholder='Digite seu melhor e-mail'/>
            </Fieldset>
            <Button variant='default'>
                Inscrever-se
            </Button>
        </form>
    </section>
  )
}

export default Newsletter