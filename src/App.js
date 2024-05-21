import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home'
import { StudentRegistrationForm } from './components/StudentRegistrationForm'
import { StudentsList } from './components/StudentsList'
import { BASE_ROUTE, REGISTRATION_ROUTE, STUDENTS_LIST_ROUTE, STUDENT_HOME_ROUTE } from './constants/AppRoutes';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path={STUDENT_HOME_ROUTE} element={<Home/>} />
      <Route path={REGISTRATION_ROUTE} element={<StudentRegistrationForm/>} />
      <Route path={STUDENTS_LIST_ROUTE} element={<StudentsList/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
