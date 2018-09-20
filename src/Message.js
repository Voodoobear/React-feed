import React from 'react';
import PropTypes from 'prop-types';

class Message extends React.Component { // every components heirs from React.Component
    constructor(props) { // working with the states
        super(props);
        this.state = { // setting the state. Must be an object!
            likes: 0,
        };
    }

        likeMessage() { // setState must be used to modify a state
            this.setState({likes : this.state.likes + 1});
        }
    
    render() {
        // this.props.nomPropriete .text
        /* we could also do like this : 
        
        const { text } = this.props;
or
        const text = this.props.text; */
        return (//this.props.text is the props I passed into the Message Component
            <div>
                <p>
                    <strong>Message</strong> : Premier composant avec React woo!<br /> {this.props.text}
                </p>
                <div>{this.state.likes} j'aime 
                    <button onClick={(e) => this.likeMessage()}>J'aime</button>
                </div>
            </div>
        );
    }
}

Message.propTypes = { // PropTypes are their to set rules about the kind of properties we want to use!
    text: PropTypes.string,

    /*There are many other kind of them : 
    
    booleen: PropTypes.bool,
    number: PropTypes.number,
    function: PropTypes.function,
    objet: PropTypes.object
    plusieursTypes : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),*/
};

Message.defaultProps = { // allow the component to have a default props : Message will have a text prop, with a default value of "Méssage par défaut"
    text: 'Message par défaut',
};

export default Message;