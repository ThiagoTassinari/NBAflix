import React from 'react';

function BtnLink(props) {
    // props => { }

    return (
    <a href={props.href} className={props.className}>
        {props.children}
    </a>
    );
}

export default BtnLink;