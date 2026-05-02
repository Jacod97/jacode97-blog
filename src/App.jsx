import { Routes, Route } from 'react-router-dom';
import NeuralNetworkBackground from './components/AI/NeuralNetworkBackground';
import AIDashboard from './components/AI/AIDashboard';
import AboutDetail from './pages/AboutDetail';
import TimelineDetail from './pages/TimelineDetail';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <NeuralNetworkBackground />
            <AIDashboard />
          </div>
        }
      />
      <Route path="/about" element={<AboutDetail />} />
      <Route path="/timeline" element={<TimelineDetail />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
