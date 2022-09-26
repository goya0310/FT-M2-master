import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Avatar from './components/Avatar';


function App() {
  return (
    <div>
      <Header>
          <div style={{ display:"hidden" }} />
          <SearchBar />
          {/* para sacar imagenes de personas buscar google this person does not exist */}
          <Avatar src="https://thispersondoesnotexist.com/image" />
      </Header>
    </div>
  );
}

export default App;
