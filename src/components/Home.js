import Card from 'react-bootstrap/Card';
import mbs from '../assets/mbs.gif';

const Home = () => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/8/80/Normal_barium_swallow_animation.gif" alt="modified barium swallow study gif" />
      <Card.ImgOverlay>
        <Card.Title>Normal MBS</Card.Title>
        {/* <Card.Text>
          Image Attribution:
          Normaler_Schluck-00.jpg (and others): Hellerhoffderivative work: Anka Friedrich, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons
        </Card.Text> */}
        <Card.Text>Image Attribution:
          Normaler_Schluck-00.jpg (and others): Hellerhoffderivative work: Anka Friedrich, CC BY 4.0 https://creativecommons.org/licenses/by/4.0, via Wikimedia Commons</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Home;

