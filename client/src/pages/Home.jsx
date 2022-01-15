import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DefaultLayout from "../layouts/DefaultLayout";
import Level from "../components/Level/Level";
import levels from "../data/levels.json"
import opponents from "../data/opponents.json";
import Opponent from "../components/Opponents/Opponent";

function Home(){
    return(
        <DefaultLayout>
            <h1 className="text-light my-5">CHOOSE YOUR OPPONENT</h1>

            <Row>
                {levels.map(({id,name},index)=>(
                    <Col key={id}>
                        <Level
                        id={id}
                        name={name}
                        active={index === 0}
                        className="w-100 h-100"/>
                    </Col>
                ))}
            </Row>
            <Row className="gy-4 mt-4">
                {opponents.map((i)=>
                    <Col lg={3} key={i.id}>
                        <Opponent {...i} className="h-100" />
                    </Col>
                )}
            </Row>
        </DefaultLayout>
    )
}

export default Home;