import "./styles/index.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>Сменить тему</button>
            <AppRouter/>
        </div>
    )
}

export default App;