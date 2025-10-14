import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { StyleButton } from "./StyleButton";
import { useLanguageContext } from "../context/LanguageContext";

export const LoginPage = () => {
    const { isChecking, isAuthenticated, user, signIn } = useAuthContext();
    const { la, t, changeLanguage } = useLanguageContext();

    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")

    if (isChecking) {
        return (
            <div className='flex flex-col  items-center  h-dvh w-dvw gap-y-10'>
                <h1>Verificando usuario</h1>
            </div>
        )
    }
    return (
        <>
            <div className="absolute">
                <StyleButton label={ la } color={"red"} handleClick={changeLanguage} />
            </div>
            <div className='flex flex-col  items-center  h-dvh w-dvw gap-y-10'>
                {
                    isAuthenticated ?
                        <>
                            <h1>{t("welcome")} {user?.name}</h1>
                            <div>Su correo es: {user?.email}</div>
                            {/* TODO: Implementar el cerrar sesión */}
                        </> :
                        <>
                            <h1 >LoginPage </h1>
                            <div className='flex gap-4'>
                                <input
                                    value={inputEmail}
                                    className='border-gray-400 border-dashed border-2'
                                    type="text"
                                    placeholder='email'
                                    onChange={(e) => setInputEmail(e.target.value)}
                                />
                                <input
                                    value={inputPassword}
                                    className='border-gray-400 border-dashed border-2'
                                    type="password"
                                    placeholder='password'
                                    onChange={(e) => setInputPassword(e.target.value)}
                                />
                                <button className='bg-blue-400 p-2 rounded-2xl' onClick={() => {
                                    signIn(inputEmail, inputPassword)
                                }}>
                                    Iniciar sesión
                                </button>



                            </div>
                        </>
                }
            </div>
        </>
    )

}
