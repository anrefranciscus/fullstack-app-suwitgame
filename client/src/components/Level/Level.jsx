import Button from "react-bootstrap/Button";
import classNames from "classnames";
import style from "./Level.module.css";

function Level({id, name, active, onClick, className}){
    const variant = active ? "primary" : "secondary";
    
    return(
        <Button
        variant={variant}
        onClick={() => onClick(id)}
        className={classNames(style.levelButton, "rounded", className)}>
            <h3 className="text-uppercase p-4 m-0">{name}</h3>
        </Button>
    )
}

export default Level;