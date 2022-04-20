import React,{useCallback} from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.styles.scss";

export default function MenuItem({title,imageUrl,size,linkUrl}) {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(`${linkUrl}`, {replace: true}), [navigate]);

    return (<div className={`${size} menu-item`} onClick={handleOnClick}>
        <div className="background-image" style={{
            backgroundImage : `url(${imageUrl})`
        }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>);
}