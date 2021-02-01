import React from 'react';
import './style.menu-item.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
    return (
        <div className="menu-item" onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="content">
                <h1 className="title">{title}</h1>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
