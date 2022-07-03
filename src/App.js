import HeaderApp from './components/HeaderApp';
import URLSearchForm from './components/URLSearchForm'; 
import './App.css';

function App() {
  return (
    <div className="App">
       <HeaderApp className="mb-3" 
          title="Pillar Social Post Reports" 
          message="Get your social media stats" />

          <URLSearchForm />
    </div>
  );
}

export default App;
