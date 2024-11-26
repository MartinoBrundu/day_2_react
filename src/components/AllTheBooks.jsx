import {Button, Card} from 'react-bootstrap';
import Books from '../Data/horror.json'

function AllTheBooks() {
  return (
    <>
    {Books.map((libri) => (
    <Card style={{ width: '18rem' }} key={libri.asin}>
      <Card.Img variant="top" src={libri.img} />
      <Card.Body>
        <Card.Title>{libri.title}</Card.Title>
        <Card.Text> <p> {libri.category} </p> </Card.Text>
        <Card.Text> <p>$ {libri.price} </p>
        </Card.Text>
        <Button variant="primary">Shop Now</Button>
      </Card.Body>
    </Card>
  ))}
  
</>

)
}

export default AllTheBooks;

