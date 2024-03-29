import {FC} from 'react'
import './Imprint.scss'
import { useTranslation } from 'react-i18next'

export const Imprint:FC = () => {
    const {t} = useTranslation()

    return (
        <main className='imprint'>
            <h1>Impressum</h1>

        <h2>Kontakt</h2>
        <p>Gmunden Space Agency (GSA)</p>
        <p>
        <a href="mailto:gmundenspaceangency@gmail.com">gmundenspaceangency@gmail.com</a> </p>

        <h2>Redaktionell verantwortlich</h2>
        <p>Ennio Binder<br /></p>
        

        <h2>Grafiken dankend mit der Gestattung der Ersteller/innen verwendet</h2>
        <a href="https://www.flaticon.com/free-icons/person" title="person icons">Person icons created by Freepik - Flaticon</a> <br />
        <a href="https://www.flaticon.com/free-icons/person" title="person icons">Person icons created by Freepik - Flaticon</a>
        <br />
        <br />
        <br />
        </main>
    )
}
