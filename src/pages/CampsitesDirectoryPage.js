import { Container, Row, Col, Button} from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/counter/campsites/CampsitesList';
import { selectRandomCampsite } from '../features/counter/campsites/campsitesSlice';

Const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList />
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectRandomCampsite}/>
                </Col>
            </Row>
        </Container>
    )
}

export default CampsitesDirectoryPage;