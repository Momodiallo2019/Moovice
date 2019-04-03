import React from 'react';
import Card from '../components/movie/Card';

// je créé une class popular qui herite du composant app
// A L'interieur du constructeur j'ai mon state avec mes 3 clé 

 class Popular extends React.Component {
     constructor(props) {
         super(props);
            this.state = {
            movies: [],
            currentPage: 1,
            moviePerPage: 2
        };
    
// je remonte l'information du click a l'aide d'une methode

        this.handleClick = this.handleClick.bind(this)
     }

     handleClick() {
        this.setState({
          currentPage: this.state.currentPage +1
        });
      }

// je recupere les info de tous les films a l'aide de cette methode où se trouve l'api    
    
    componentDidMount() {
        const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=42a2691ed589287d08fcac0d97199cf7';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({
                movies: data.results
            });
        });
    }

    // 

    renderCard() {
        const { movies, currentPage, moviePerPage } = this.state;

        const lastMovie = currentPage + 1;
        const firstMovie = lastMovie - moviePerPage;
        const currentMovie = movies.slice(firstMovie, lastMovie);

        const renderMovies =  currentMovie.map((movie, index) => {
            return (
                <Card key= {index} name={movie.original_title} description={movie.overview} img={movie.poster_path} /> 
            );  
    });

    return (
        <span onClick={this.handleClick}>{renderMovies}</span>
    );
}

     render() {
         return (
             <div>
                 {/* <p>{JSON.stringify(this.state.movies)}</p> */}
                {this.renderCard()}
             </div>
         );
     }
 }
 export default Popular;
