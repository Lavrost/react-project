import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={'/'}>Главаная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;