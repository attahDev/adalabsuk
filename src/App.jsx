import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import WhoWeAre from './pages/WhoWeAre.jsx';
import Impact from './pages/Impact.jsx';
import MarketsPartners from './pages/MarketsPartners.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<WhoWeAre />} />
        <Route path="impact" element={<Impact />} />
        <Route path="markets" element={<MarketsPartners />} />
        <Route path="*" element={<WhoWeAre />} />
      </Route>
    </Routes>
  );
}
