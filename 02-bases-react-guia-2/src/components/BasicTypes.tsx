import { useState } from "react";

export const BasicTypes = () => {
    const name: string = "Víctor";
    const age: number = 28;
    // const isActive: boolean = true;
    const [isActive, setIsActive] = useState(true)

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

        </>
    )
}
