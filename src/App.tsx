import styles from './App.module.scss';
import { Confessionhall } from './components/confessionhall/confessionhall';
import { Profile } from './components/profile/profile';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

function App() {
    return (
        <div className={styles.App}>
        <BrowserRouter>
            <Routes>
            <Route path='/' Component={Profile}/>
            </Routes>
            <Routes>
            <Route path='/confession' Component={Confessionhall}/>
            </Routes>
       </BrowserRouter> 
            
        </div>
    );
}

export default App;
