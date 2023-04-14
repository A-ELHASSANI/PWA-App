
import './App.css';
import Login from './pages/Login';

function App() {
  const navigate = useNavigate();
  return (
      <div>
        <button onClick={() => navigate(-1)}>go back</button>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/upcoming/:user" element={<Upcoming/>}/>
          <Route exact path="/record/:user" element={<Record/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
  );
}

export default App;
