import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import AllTasksPage from './pages/AllTasksPage';
import AddTaskPage from './pages/AddTaskPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WelcomePage />}>
          <Route path="/" element={<AllTasksPage />} />
          <Route path="add-task" element={<AddTaskPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
