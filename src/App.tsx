import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import CoverPage from './pages/CoverPage'
import InvitationPage from './pages/InvitationPage'
import CeremoniesPage from './pages/CeremoniesPage'
import InfoPage from './pages/InfoPage'
import './style.css'

export default function App() {
  return (
    <BrowserRouter basename="/mariage-seb-stef">
      <Navigation />
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/invitation" element={<InvitationPage />} />
        <Route path="/ceremonies" element={<CeremoniesPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
