import PropTypes, { string } from "prop-types";
import styles from "./Button.module.css"

function Button({text}){
    return ( 
        <button
            className={styles.btn}
            // style={{
            //     backgroundColor:"tomato",
            //     color:"white"
            // }}
        >
            {text}
        </button>
    )
}

/* propTypes  */
Button.propTypes ={
    text: PropTypes.string.isRequired,
}

export default Button;

