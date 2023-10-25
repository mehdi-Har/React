import { Info } from "../coponenents/info"
import { Diplome } from "../coponenents/DiplomeFormation"
import { Image } from "../coponenents/image"
import { Titre } from "../coponenents/titre"
import { Comp } from "../coponenents/competence"
import { Langue } from "../coponenents/langues"
import ME from './me.module.css'
import { MOI } from "../coponenents/little"
import { DIF } from "../coponenents/diff"
export const Home = () => {
    return (
        <div>
            <header>
                <div className={ME.container1}>
                        <Image/>{/* mon image */}
                        <MOI></MOI>{/* petite introduction */}
                </div>
            </header>


            <div className={ME.container2}>
               
                <main>
                    <div className={ME.main}>
                        <div className={ME.column}>
                            <Titre></Titre> {/* Titre de mon cv */}
                            <Info></Info> {/* information personnel */}
                            <Diplome></Diplome>{/*diplome et fprmation*/ }
                        </div>
                        <div className={ME.column}>
                            
                            <Comp/>{/* compétences */}
                            <Langue/>{/* langue métrisées */}
                        </div>
                    </div>
                </main>

            </div>
            <footer>
                <div className={ME.container3}>
                    <DIF/>{/* le copyright et la date */}
                </div>
            </footer>
        </div>
    )
}