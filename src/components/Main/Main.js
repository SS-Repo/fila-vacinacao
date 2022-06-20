import { Navbar, Container, Nav } from 'react-bootstrap'; 
import Gov from '../../_assets/img/gov.svg';

function Main (){
    return(
        <>
            <Nav className="justify-content-center nav-logo">
                <img 
                src={ Gov }
                width="100px"
                />
            </Nav>
            <Navbar className="nav-main" expand="sm">
                <Container >
                    <Navbar.Brand href="#home" className="main">
                        Ministério da Saúde
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end">
                        <Nav.Link href="#link">Òrgãos do Governo</Nav.Link>
                        <Nav.Link href="#link">Acesso à Informação</Nav.Link>
                        <Nav.Link href="#link">Legislação</Nav.Link>
                        <Nav.Link href="#link">Acessibilidade</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </>
    );
}

export default Main;