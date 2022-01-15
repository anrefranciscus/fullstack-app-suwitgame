import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames";
import style from "./Opponent.module.css";
import dayjs from "dayjs";

function Opponent({id, name, bio, avatar, level, createdAt, className}) {
    return(
        <Card
        bg="secondary"
        text="light"
        className={classNames(className, "py-4", style.opponent)}
        >
            <Container className="mb-4">
                <Row
                className={classNames(style.heading, "align-items-start", "h-100")}
                >
                    <Col lg={4}>
                        <div className={style.avatar}>
                            <div className={style.avatarBackground}>
                                <img src={avatar} alt={name} />
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className={style.identity}>
                            <h2 className={style.name}>{name}</h2>
                            <h3 className={style.level}>{level}</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className={classNames(style.body, "h-100")}>
                <p className="lead">{bio}</p>
                <p className="text-gray">
                    Since {dayjs(createdAt).format("MMMM DD, YYYY")}
                </p>
            </Container>
            <Container>
                <a className="btn btn-primary text-uppercase">
                    <b>Fight</b>
                </a>
            </Container>
        </Card>
    )
}

export default Opponent;