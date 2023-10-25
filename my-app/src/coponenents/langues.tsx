import LAN from './languge.module.css'
export const Langue = () =>{
    return(
        <div>
            <h3>Compétences linguistique</h3>
            <div className={LAN.language}>
                <ul>
                    <li className={LAN.lst}>
                        <span className={LAN.text}>Anglais</span>
                        <span className={LAN.percent}>{/* creation de la barre du pourcntage */}
                            <div className={LAN.style1}></div>{/* porcentage à étre remplis aprés */}
                        </span>
                    </li>
                    <li className={LAN.lst}>
                        <span className={LAN.text}>Français</span>
                        <span className={LAN.percent}>
                            <div className={LAN.style2}></div>
                        </span>
                    </li>
                    <li className={LAN.lst}>
                        <span className={LAN.text}>Arabe</span>
                        <span className={LAN.percent}>
                            <div className={LAN.style3}></div>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}