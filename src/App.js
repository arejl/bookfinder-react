import './App.css';
import BookList from './components/BookList';
import Books from './books'

function App() {
  
  return (
    <div className="App">
      <BookList {...Books}/>
    </div>
  );
}

export default App;
