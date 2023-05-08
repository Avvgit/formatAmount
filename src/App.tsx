import './App.css';
import DataTable from './components/DataTable';
import { mockData } from './MockData';

function App() {
  return (
    <div className="App">
      <DataTable data={mockData} />
    </div>
  );
}

export default App;
