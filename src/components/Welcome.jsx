import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <Alert variant="success">
      <Alert.Heading> Benvenuto nel mio iBooks </Alert.Heading>
      <p>
       Scegli il tuo libro e acquistalo nella piattaforma!
      </p>
    
    </Alert>
  );
}

export default Welcome;