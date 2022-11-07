import Formation from "../core/Formation";
import formationStyle from "../styles/FormationComponent.module.scss";



const FormationComponent = ({data}:{data:Formation}) => {
    return (
        <>
            <div role={'presentation'} className={formationStyle.formation}>
                <h2>{data.title}</h2>
            </div>
        </>
    )
}

export default FormationComponent;
