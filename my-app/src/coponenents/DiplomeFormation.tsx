import DPM from './diplome.module.css'
export const Diplome = () => {
    return(
        <div>
            <h3>Formation et diplomes </h3>
            <ul>
                <li className={DPM.year}>2021-2023</li>
                <li>2 année en classes préparatoires </li>
                <li className={DPM.year}>2023-2026</li>
                <li>diplome d'école mohamamdia d'ingénieur</li>
                
            </ul>
        </div>
    )
}