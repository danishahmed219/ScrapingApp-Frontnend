import React from "react";

class HeaderApp extends React.Component {
    
  // eslint-disable-next-line no-useless-constructor
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

export default HeaderApp;