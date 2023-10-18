<<<<<<< HEAD
import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./index.scss";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
=======
import { Counter } from "./components/Counter/Counter";
import "./index.scss";

>>>>>>> f90c1c1c0b2d61c41ce92ec4e94c2add509cb783

const App = () => {
    return (
        <div className="app">
<<<<<<< HEAD
            <Link to={'/'}>Главаная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
=======
            Hello, world!
            <Counter />
>>>>>>> f90c1c1c0b2d61c41ce92ec4e94c2add509cb783
        </div>
    )
}

export default App;