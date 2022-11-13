import type {GetStaticPropsContext, NextPage} from 'next'
import Image from 'next/future/image'
import {useTranslations} from "use-intl";
import headerStyle from '../styles/header.module.scss'
import bodyStyle from '../styles/body.module.scss'

import programmerSvg from '../public/undraw_programming.svg'
import HeaderFooter from '../public/header_footer.svg'
import sciencePicture from '../public/hobbies/spacex-OHOU-5UVIYQ-unsplash.jpg'
import musicPicture from '../public/hobbies/perfectmirror-RLV8znkJf2M-unsplash.jpg'
import workPicture from '../public/hobbies/konstantin-evdokimov-rhP8U-86GZA-unsplash.jpg'
import Formation from "../core/Formation";
import FormationComponent from "../components/FormationComponent";

const Home: NextPage = () => {
    const t = useTranslations('Home');

    const formations: Formation[] = [
        {
            school: 'Université du Littoral Côte d\'Opale',
            title: 'Master 2 Web et Science des données (WeDSci)',
            honors: '',
            dateBegin: new Date(2022, 9, 1),
            dateEnd: new Date(2023, 9, 1),
            subject: ['Modélisation de systèmes', 'Développement Android', 'Apprentissage automatique', 'Sécurité réseaux & applicatif', 'Framework frontend', 'Développement Multi-Tiers', 'DevOps', 'Exploration et Entrepôt de données']
        },
        {
            school: 'Université du Littoral Côte d\'Opale',
            title: 'Master 1 Web et Science des données (WeDSci)',
            honors: 'Mention très bien',
            dateBegin: new Date(2021, 9, 1),
            dateEnd: new Date(2022, 9, 1),
            subject: ['POO Avancée (Java)', 'Algorithmique avancée', 'Apprentissage automatique','Agilité','Programmation fonctionnelle (Haskell)', 'Initiation à la recherche', 'Service Web', 'Compilation', 'Résolution de problème d\'optimisation', 'Calcul haute performance']
        }
    ]

    return (
        <>
            <section className={headerStyle.header}>
                <div className={"content"}>
                    <div className={"title"}>
                        <h1>Simon HEBAN</h1>
                        <h2>{t('fullstack_dev')}</h2>
                    </div>
                    <Image src={programmerSvg} alt={"Image that shows a person which develop on a laptop"}/>
                </div>

                <Image src={HeaderFooter} alt={""} className={headerStyle.bottom_header} width={'3000'}/>
            </section>

            <section id={bodyStyle.whoIAm} className={bodyStyle.section}>
                <h2 className={bodyStyle.title}>{t('who_i_am')}</h2>

                <p>{t('presentation', {age: ((new Date()).getFullYear() - 2000)})}</p>

            </section>

            <section id={bodyStyle.myHobbies} className={bodyStyle.section}>
                <h2 className={bodyStyle.title}>{t('my_hobbies')}</h2>

                <div>
                    <div>
                        <Image src={sciencePicture} alt={"Image fusée SpaceX qui décolle"} fill={true}/>
                        <h3>SCIENCES</h3>
                    </div>

                    <div>
                        <Image src={musicPicture} alt={"Image fusée SpaceX qui décolle"} fill={true}/>
                        <h3>SCIENCES</h3>
                    </div>

                    <div>
                        <Image src={workPicture} alt={"Image fusée SpaceX qui décolle"} fill={true}/>
                        <h3>SCIENCES</h3>
                    </div>
                </div>
            </section>

            <section className={bodyStyle.section}>
                <h2 className={bodyStyle.title}>Mes formations</h2>

                <div className={bodyStyle.formations}>
                {
                    formations.map((elt, index) => {
                        return <FormationComponent data={elt} key={index}/>
                    })
                }
                </div>

            </section>

            <section className={[bodyStyle.section, bodyStyle.language_section].join(" ")}>
                <h2>Compétences linguistiques</h2>
                <div className={bodyStyle.languages}>
                    <div className={bodyStyle.language}>
                        <img src={"https://flagcdn.com/fr.svg"} alt={"France flag"}/>
                        <h3>Français</h3>
                        <div className={bodyStyle.level}>
                            <span>NATIF</span>
                        </div>
                    </div>
                    <div className={bodyStyle.language}>
                        <img src={"https://flagcdn.com/gb.svg"} alt={"France flag"}/>
                        <h3>Anglais</h3>
                        <div className={bodyStyle.level}>
                            <span>B2</span>
                        </div>
                    </div>
                    <div className={bodyStyle.language}>
                        <img src={"https://flagcdn.com/de.svg"} alt={"France flag"}/>
                        <h3>Allemand</h3>
                        <div className={bodyStyle.level}>
                            <span>A2</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home

export async function getStaticProps({locale}: GetStaticPropsContext) {
    return {
        props: {
            // You can get the messages from anywhere you like. The recommended
            // pattern is to put them in JSON files separated by language and read
            // the desired one based on the `locale` received from Next.js.
            messages: (await import(`../locales/${locale}.json`)).default
        }
    };
}
