import classNames from "classnames";
import style from "./Footer.module.css";

function Footer({className}){
    return(
        <footer className="w-100" className={className}>
            <nav className={classNames("container my-4", style.footerNavigation)}>
                <a>
                    <h3>Main</h3>
                </a>
                <a>
                    <h3>About</h3>
                </a>
                <a>
                    <h3>Game Features</h3>
                </a>
                <a>
                    <h3>System Requirements</h3>
                </a>
                <a>
                    <h3>Quotes</h3>
                </a>
            </nav>
            <div className={style.footerDivider}></div>
            <div className={classNames(style.footerCopyRight, "py-4")}>
                <p className="lead text-gray m-0">
                © 2018 Your Games, Inc. All Rights Reserved
                </p>
                <p className="text-light text-uppercase fw-bold m-0">
                Privacy Policy | Terms of Services | Code of Conduct
                </p>
            </div>
        </footer>
    )
}

export default Footer;