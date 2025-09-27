import React, { useState, createContext, useMemo } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FindDonorsPage from './pages/FindDonorsPage';
import RequestBloodPage from './pages/RequestBloodPage';
import BloodBanksPage from './pages/BloodBanksPage';
import ProfilePage from './pages/ProfilePage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import EmergencyPage from './pages/EmergencyPage';
import WellnessPage from './pages/WellnessPage';
import { User } from './types';
import { MOCK_USERS } from './constants';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import DonateBloodPage from './pages/DonateBloodPage';

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null); // Default to logged out

  const authContextValue = useMemo(() => ({
    user: currentUser,
    login: (user: User) => setCurrentUser(user),
    logout: () => setCurrentUser(null),
  }), [currentUser]);

  return (
    <AuthContext.Provider value={authContextValue}>
      <HashRouter>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/find-donors" element={<FindDonorsPage />} />
              <Route path="/request-blood" element={<RequestBloodPage />} />
              <Route path="/donate-blood" element={<DonateBloodPage />} />
              <Route path="/blood-banks" element={<BloodBanksPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/emergency-numbers" element={<EmergencyPage />} />
              <Route path="/wellness" element={<WellnessPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </AuthContext.Provider>
  );
};

export default App;