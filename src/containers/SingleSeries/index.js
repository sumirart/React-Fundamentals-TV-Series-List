import React, { Component } from 'react';
import Loader from '../../components/Loader'

class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount(){
        const { id } = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then(response => response.json())
            .then(json => this.setState({ show: json}))
            .then(console.log(this.state));
    }
    
    render(){
        const { show } = this.state;

        return(
            <div>
                { show === null && <Loader /> }
                {
                    show !== null
                    &&
                    <div>
                        <p><strong>{show.name}</strong></p>
                        <p>Premiered - {show.premiered}</p>
                        <p>Rating - {show.rating.average}</p>
                        <p>Episodes - {show._embedded.episodes.length}</p>
                        <p>
                            <img alt={show.name} src={show.image.medium} />
                        </p>
                    </div>
                }
                <p><a href="../">Back to Homepage</a></p>
            </div>
        )
    }
}

export default SingleSeries;