import Formation from "../core/Formation";
import formationStyle from "../styles/FormationComponent.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSchool} from "@fortawesome/free-solid-svg-icons";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {faHourglass2} from "@fortawesome/free-solid-svg-icons";
import {faHandsClapping} from "@fortawesome/free-solid-svg-icons";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {faBolt} from "@fortawesome/free-solid-svg-icons";


const FormationComponent = ({data}: { data: Formation }) => {
    return (
        <>
            <div role={'presentation'} className={formationStyle.formation}>
                <div className={formationStyle.header}>
                    <div>
                        <FontAwesomeIcon icon={faSchool} color={"#61A6FF"}/>
                        <h2>{data.school}</h2>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faGraduationCap} color={"#9747FF"}/>
                        <p>{data.title}</p>
                    </div>
                    <div>
                        {
                            data.dateEnd > new Date() ? <><FontAwesomeIcon icon={faHourglass2} color={"#FFC016"}/><p>En
                                    cours</p></> :
                                <><FontAwesomeIcon icon={faHandsClapping} color={"#FFC016"}/><p>{data.honors}</p></>
                        }
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendar} color={"#555555"}/>
                        <p>{data.dateBegin.getFullYear() + '-' + data.dateEnd.getFullYear()}</p>
                    </div>
                </div>

                <hr/>

                <div className={formationStyle.subjects}>
                    {
                        data.subject.map((elt, index) => {
                            return (<div key={index}>
                                <FontAwesomeIcon icon={faBolt} color={"#61A6FF"}/>
                                <p>{elt}</p>
                            </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FormationComponent;
