import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddIncome from './pages/AddIncome';
import IncomeList from './pages/IncomeList';
import TotalIncome from './pages/TotalIncome';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/income" element={<ProtectedRoute><IncomeList /></ProtectedRoute>} />
          <Route path="/income/add" element={<ProtectedRoute><AddIncome /></ProtectedRoute>} />
          <Route path="/income/total" element={<ProtectedRoute><TotalIncome /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
