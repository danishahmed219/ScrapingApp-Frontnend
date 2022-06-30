import React from "react";

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
        <header className="mt-5">
            <h1 style={{textAlign: 'center'}}>{this.props.title}</h1>
            <h2>{this.props.message}</h2>
        </header>);
    }
}

export default Header;