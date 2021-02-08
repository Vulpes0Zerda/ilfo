import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Settings from './components/Settings';

function App() {
  return (
    <div className="App">
      <Menu />
      <Settings />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
