import React from 'react';

class Card extends React.Component {
    render() {
        const source = `https://image.tmdb.org/t/p/w300/${this.props.img}`;
        return (
            <div>
            <button class="card m-3" style={{width: '18rem'}}>
                <img src={source} class="card-img-top" alt={this.props.name} />
                <div class="card-body">
                    <h5 class="card-title">{this.props.name}</h5>
                    <p class="card-text">{this.props.description}</p>
                </div>
                </button>
            </div>
        );
    }
}
export default Card;
