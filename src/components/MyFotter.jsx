import { Container } from "react-bootstrap"


const MyFooter = () => {
    return (
        <Container fluid className=" bg-dark">
            <ul className=" d-flex justify-content-center list-unstyled   ">
                <li> <a className="text-decoration-none text-white me-2" href="#">Dicono di noi</a></li>
                <li> <a className="text-decoration-none text-white me-2" href="#">Chi siamo</a></li>
                <li> <a className="text-decoration-none text-white me-2" href="#">Contatti</a></li>
            </ul>
        </Container>
    )
}

export default MyFooter