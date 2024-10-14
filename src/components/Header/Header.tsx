import styles from "./Header.module.css"
import { useContext } from "react"

interface HeaderProps{
    title: string
    userName: string
}

export const Header = ({ title, userName }: HeaderProps) => {
    //const navigate = useNavigate()
    //const { setUserName } = useContext(UserContext)
    
    const handleLogin = () => {
    //    navigate('/login')
    }

    const handleLogout = () => {
        sessionStorage.removeItem("userToken")
    //    setUserName(null)
    //    navigate('/login')
    }
    
    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>{title}</h1>
            <div className={styles.div}>
                {userName
                    ? (<>
                        <span>{userName}</span>
                        <button onClick={handleLogout}>Sair</button>
                    </>)
                    : (
                        <button onClick={handleLogin}>Login</button>
                    )
                }
            </div>
        </header>
    )
}