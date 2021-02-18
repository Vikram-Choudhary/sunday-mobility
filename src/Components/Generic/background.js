import React from "react";

export default function Background(props) {
    return (<div className={props.className}>
        <img
            className="responsive"
            alt='Background'
            src={require(`../../assets/images/beach1.JPG`)}
        />
    </div>
    );
}
