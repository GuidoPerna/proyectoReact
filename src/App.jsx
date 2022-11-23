import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBarReact from './components/Nav';
import { Layout } from './components/Layaout';

function App() {
  return (
      <Layout>
        <ItemListContainer/>
        <ItemDetailContainer/>
      </Layout>
  );
}

export default App;
