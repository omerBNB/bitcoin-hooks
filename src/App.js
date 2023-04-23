import logo from './logo.svg';
import './assets/App.scss';
import { ContactIndex } from './views/ContactIndex';
import { AppHeader } from './cmps/AppHeader';
import { Route, HashRouter as Router, Routes, Switch } from 'react-router-dom';
import { ContactDetails } from './views/ContactDetails';
import { ContactEdit } from './views/ContactEdit';
import { SignUp } from './views/SignUp';
import { Login } from './views/Login';
import { UserStats } from './views/UserStats';
import { HomePage } from './views/HomePage';
import { AppFooter } from './views/AppFooter';

function App() {
    return (
      <Router>
      <div className="App">
        <AppHeader />
        <hr className='main-hr'/>
        <main className='main-app'>
            <Routes>
              <Route path="/contact/edit/:id?" element={<ContactEdit />} />
              <Route path="/contact/:id" element={<ContactDetails />} />
              <Route path="/contact" element={<ContactIndex />}/>
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/statistics" element={<UserStats />}/>
              <Route path="/" element={<HomePage />}/>
            </Routes>
        </main>
          <AppFooter/>
      </div>
      </Router>

    );
  }

export default App;
