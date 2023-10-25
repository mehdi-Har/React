import CMPT from './competence.module.css'

export const Comp = () => {
    return(
        <div className={CMPT.container}>
            <h3>Compétence techniques</h3> {/* mes compétences en langues de programmation */}
            <ul>
                <li>C : Maîtrise avancée de la programmation en C</li>
                <li>JavaScript : Expérience approfondie dans le développement d'applications web en utilisant JavaScript</li>
                <li>HTML : Expertise en création de pages web structurées et sémantiques en utilisant HTML5.</li>
                <li>CSS : Connaissance sur la conception et de la mise en page</li>
            </ul>
        </div>
    )
}