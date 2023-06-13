import styles from './App.module.scss';
import { Navbar1 } from './components/navbar-1/navbar-1';
import { Profile } from './components/profile/profile';

function App() {
    return (
        <div className={styles.App}>
            <Profile />
        </div>
    );
}

export default App;
