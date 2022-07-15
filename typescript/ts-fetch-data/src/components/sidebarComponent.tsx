import React,{ReactNode} from "react";
import './sidebar.css'

interface Props{
    isVisible:boolean,
    // children: ReactNode
    children:React.ReactNode,
}


const SidebarComponent: React.FC<Props> = (props) => {
    const divStyle = (props:Props):React.CSSProperties => ({
        width: props.isVisible ? "23rem" : "0rem",

    })
    return (
        <div id="mySidenav" className="sidenav" style={divStyle(props)}>
            {props.children}
        </div>
    )
}

export default SidebarComponent