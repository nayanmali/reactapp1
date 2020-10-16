import React, { Component } from 'react';
import { getMovies } from '../services/fakemovieservices';

class Movies extends Component {
    state = { 
        movies: getMovies()
     };
    render() { 
        return <div>
            <h2>Movie Data</h2>
            <div class="table-responsive">
            <table className="table table-bordered">
            <thead>
                <tr>
                    <td>Title</td>
                    <td>US Gross</td>
                    <td>Worldwide Gross</td>
                    <td>US DVD Sales</td>
                    <td>Production Budget</td>
                    <td>Release Date</td>
                    <td>MPAA Rating</td>
                    <td>Running Time min</td>
                    <td>Distributor</td>
                    <td>Source</td>
                    <td>Major Genre</td>
                    <td>Creative Type</td>
                    <td>Director</td>
                    <td>Rotten Tomatoes Rating</td>
                    <td>IMDB Rating</td>
                    <td>IMDB Votes</td>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movies=> <tr>
                <td>{movies.Title}</td>
                    <td>{movies.["US Gross"]}</td>
                    <td>{movies.["Worldwide Gross"]}</td>
                    <td>{movies.["US DVD Sales"]}</td>
                    <td>{movies.["Production Budget"]}</td>
                    <td>{movies.["Release Date"]}</td>
                    <td>{movies.["Running Time min"]}</td>
                    <td>{movies.["MPAA Rating"]}</td>
                    <td>{movies.Distributor}</td>
                    <td>{movies.Source}</td>
                    <td>{movies.["Major Genre"]}</td>
                    <td>{movies.["Creative Type"]}</td>                    
                    <td>{movies.Director}</td>
                    <td>{movies.["Rotten Tomatoes Rating"]}</td>
                    <td>{movies.["IMDB Rating"]}</td>
                    <td>{movies.["IMDB Votes"]}</td>
                </tr>)}
                
            </tbody>
        </table></div></div>;
    }
}
 
export default Movies;