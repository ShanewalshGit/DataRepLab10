import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap css import
import Header from './components/header'; // Header component import
import Content from './components/content'; // content component import
import Footer from './components/footer'; // footer component import
import Read from './components/read';
import Create from './components/create';

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// React router imported
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* Navbar component imported from Bootstrap*/}
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="read">Read</Nav.Link>
            <Nav.Link href="create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* Routes for each component*/}
      <Routes>
        {/* Routes to the content component, displaying it only*/}
        <Route path='/' element={<Content></Content>}></Route>
        {/* Routes to the header component, displaying it only*/}
        <Route path='read' element={<Read></Read>}></Route>
        {/* Routes to the footer component, displayng it only*/}
        <Route path='create' element={<Create></Create>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
