import type {GetStaticPropsContext, NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {useTranslations} from "use-intl";
import styles from '../styles/header.module.scss'
import bodyStyle from '../styles/body.module.scss'

import programmerSvg from '../public/undraw_programming.svg'
import HeaderFooter from '../public/header_footer.svg'
import sciencePicture from '../public/hobbies/spacex-OHOU-5UVIYQ-unsplash.jpg'


const Home: NextPage = () => {
    const t = useTranslations('Home');
    return (
        <>
            <section className={styles.header}>
                <div className={"content"}>
                    <div className={"title"}>
                        <h1>Simon HEBAN</h1>
                        <h2>{t('fullstack_dev')}</h2>
                    </div>
                    <Image src={programmerSvg} alt={"Image that shows a person which develop on a laptop"}/>
                </div>

                <Image src={HeaderFooter} alt={""} className={styles.bottom_header} layout={'responsive'}/>
            </section>

            <section id={bodyStyle.whoIAm} className={bodyStyle.section}>
                <h2 className={bodyStyle.title}>{t('who_i_am')}</h2>

                <p>Je m'appelle Simon j'ai {(new Date()).getFullYear() - 2000} ans. Je développe depuis très jeune, en
                    effet j'ai commencé le développement à l'âge de 14 ans grâce au jeu-vidéo Minecraft. J'ai pu
                    expérimenté pas mal de langage de programmation. Je n'arrête pas de découvrir de nouvelles choses
                    chaque jours !</p>

            </section>

            <section id={bodyStyle.myHobbies} className={bodyStyle.section}>
                <h2 className={bodyStyle.title}>{t('my_hobbies')}</h2>

                <div>
                    <div>
                        <Image src={sciencePicture} alt={"Image fusée SpaceX qui décolle"} objectFit={'cover'} />
                        <h3>SCIENCES</h3>
                    </div>

                    <div>
                        <Image src={sciencePicture} alt={"Image fusée SpaceX qui décolle"}/>
                        <h3>SCIENCES</h3>
                    </div>

                    <div>
                        <Image src={sciencePicture} alt={"Image fusée SpaceX qui décolle"}/>
                        <h3>SCIENCES</h3>
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
