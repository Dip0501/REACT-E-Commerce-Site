import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from "./components/Nav"
import Landing from "./components/Landing"
import Highlights from "./components/Highlights"
import Featured from './components/Featured';
import Discounted from './components/Discounted';
import Explore from './components/Explore'
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured/>
      <Discounted/>
      <Explore/>
      <Footer/>
    </div>
    // <Router>
    //   <div className="App">
    //     <Nav />
    //     <Routes>
    //       <Route path="/" element={<Home/>} />
    //       <Route path="/books" element={<Books books={books} />} />

    //       <Route path="/books/:id" element={<BookInfo books={books}
    //       addToCart={addToCart} cart={cart} />} />
    //       <Route path="/cart" element={<Cart books={books} cart={cart}
    //       changeQuantity={changeQuantity} />} />
    //     </Routes> 
    //   </div>
    // </Router>
  );
}

export default App;
