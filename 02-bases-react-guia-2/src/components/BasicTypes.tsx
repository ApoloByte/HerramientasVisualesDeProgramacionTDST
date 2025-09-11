import { useEffect, useState } from "react";

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

    const user = {
        name: "Juanito",
        email: "juan@gmail.com",
        age: 19,
        role: "administrador",
        maritalStatus: "casado",
        isActive: true
    }

    const users = [
        {
            name: "Pepito 1",
            email: "juan@gmail.com",
            age: 19,
            role: "administrador",
            maritalStatus: "casado",
            isActive: true
        },
        {
            name: "Pepito 2",
            email: "juan@gmail.com",
            age: 19,
            role: "administrador",
            maritalStatus: "casado",
            isActive: true
        },
        {
            name: "Pepito 3",
            email: "juan@gmail.com",
            age: 19,
            role: "administrador",
            maritalStatus: "casado",
            isActive: true
        }
    ]


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

            {names.join(", ")}

            <h2>Objetos literales</h2>
            {user.name}

            <h2>Lista de objetos literales</h2>
            <hr />
            {users.map(
                (value, index) => <div key={index}>
                    <div>{value.name}</div>
                    <div>{value.email}</div>
                    <div>{value.age}</div>
                    <div>{value.role}</div>
                    <hr />
                </div>
            )}
            {/* 
            <ul>
                {users.map(
                    (value, index) => {
                        console.log(value)
                        return <div>
                            
                        </div>
                    }
                )}
            </ul> */}





        </>
    )
}
