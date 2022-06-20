import ImgGov from '../../_assets/img/gov.jpg';
import { Container } from 'react-bootstrap';

function Footer(){
    return(
        <div className="footer">
            <Container>
                <img src={ImgGov} className="img-footer"/>
                <br />
                <p><b>REDES SOCIAIS</b></p>    
                <div className="icon">
                    <i className="fa-brands fa-twitter"></i>
                    &nbsp;<i className="fa-brands fa-youtube"></i>
                    &nbsp;<i className="fa-brands fa-facebook-f"></i>
                    &nbsp;<i className="fa-brands fa-instagram"></i>
                    &nbsp;<i className="fa-brands fa-soundcloud"></i>
                    &nbsp;<i className="fa-brands fa-flickr"></i>
                </div>
            </Container>
        </div>
    )
}

export default Footer;