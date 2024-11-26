import { Button, Card, Col, Row } from 'react-bootstrap';
import Books from '../Data/horror.json'



function AllTheBooks() {

    return (
        <Row>

            {Books.slice(0, 20).map((libri) => (
                <Col xs={12} md={6} xl={3} >

                    <Card style={{ height: "550px" }} className='backG p-2 mb-3 text-white   ' key={libri.asin}>
                        <div className="d-flex justify-content-center">
                            <Card.Img variant="top" src={libri.img} />
                        </div>
                        <Card.Body className="d-flex flex-column justify-content-around">
                            <Card.Title ><h5>{libri.title.length >= 50
                                ? libri.title.slice(0, 82) + '...'
                                : libri.title}</h5></Card.Title>
                            <Card.Text > <p className="m-0 p-0  " > {libri.category} </p> </Card.Text>
                            <Card.Text> <p className="m-0 p-0 "> $ {libri.price} </p>
                            </Card.Text>
                            <div className='d-flex flex-grow-1 align-items-end justify-content-center'>
                                <Button variant="primary">Shop Now</Button>
                            </div>
                        </Card.Body>
                    </Card>

                </Col>
            ))}

        </Row>

    )
}

export default AllTheBooks;

