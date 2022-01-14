import classNames from "classnames";
import Container from "react-bootstrap/Container";
import Navbar from "../components/Navbar/Navbar";
import style from "./DefaultLayout.module.css";

function DefaultLayout({children}){
    return(
        <>
            <Navbar/>
            <Container fluid className={classNames(style.container, "pt-5")}>
                <Container className="pt-5">
                    {children}
                </Container>
            </Container>
        </>
    )
}

export default DefaultLayout;