import styles from './Container.module.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function Container(props) {

    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
    )
}

export default Container