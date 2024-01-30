import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import AllTasksPage from './pages/AllTasksPage';
import AddTaskPage from './pages/AddTaskPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}>
          <Route path="all-tasks" element={<AllTasksPage />} />
          <Route path="add-task" element={<AddTaskPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
