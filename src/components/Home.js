import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/8/80/Normal_barium_swallow_animation.gif" alt="modified barium swallow study gif" />
      <Card.ImgOverlay>
        <Card.Title>Normal Modified Barium Swallow Study (MBS)</Card.Title>
      </Card.ImgOverlay>
      <Card.Footer className="text-muted">Image Attribution:
        Normaler_Schluck-00.jpg (and others): Hellerhoffderivative work: Anka Friedrich, CC BY 4.0 https://creativecommons.org/licenses/by/4.0, via Wikimedia Commons</Card.Footer>
    </Card>
  )
}

export default Home;
