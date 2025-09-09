import { useState } from "react";

export const BasicTypes = () => {
    const name: string = "Víctor";
    const age: number = 28;
    // const isActive: boolean = true;
    const [isActive, setIsActive] = useState(true)

    const names = [
        "CARVAJAL MOLANO JUAN CAMILO",
        "COLLAZOS ROZO NICOLAS",
        "DIAZ TROYANO JAIME ANDRES",
        "GAITAN ZUÑIGA IMANOL DAVID",
        "GUERRERO VOLVERAS ANDRES FELIPE",
    ];

    return (
        <>
            <div>BasicTypes</div>
            <h2>Constantes</h2>
            {/* ul>((li>(b+span))*3) */}
            <ul>
                <li><b>name: </b><span>{name}</span></li>
                <li><b>age: </b><span>{age}</span></li>
                <li>
                    <b>isActive: </b>
                    <span>{isActive ?
                        "Usuario Activo" :
                        "Usuario Inactivo"}</span>
                </li>
            </ul>
            <button onClick={() => setIsActive(!isActive)}>
                {isActive ? "Desactivar" : "Activar"}
            </button>

            {names[0]}
            <ul>
                {names.map(
                    (name, index) => <li key={index}>
                        {name}
                    </li>
                )}
            </ul>



        </>
    )
}
