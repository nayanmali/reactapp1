import React, { Component } from 'react';
import { getMovies } from '../services/fakemovieservices';
import Counters from './counters'

class Movies extends Component {
    state = { 
        movies: getMovies()
     };
     handleDelete= movie=>{
      //  const movies = this.state.movies.filter(m=>m._id!==movie._id);
        this.setState({movies:movie});
     };
    render() { 
        return <div className="container">
           <Counters/>
            <h2>Movie Data</h2>
            <div className="table-responsive">
            <table className="table table-bordered">
            <thead>
                <tr >
                    <th>Title</th>
                    <th>US Gross</th>
                    <th>Worldwide Gross</th>
                    <th>US DVD Sales</th>
                    <th>Production Budget</th>
                    <th>Release Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie=> <tr key={movie._id}>
                <td>{movie.Title}</td>
                    <td>{movie.["US Gross"]}</td>
                    <td>{movie.["Worldwide Gross"]}</td>
                    <td>{movie.["US DVD Sales"]}</td>
                    <td>{movie.["Production Budget"]}</td>
                    <td>{movie.["Release Date"]}</td>
                   <td><button onClick={()=>{this.handleDelete(movie)}} className="btn btn-danger btn-sm">Delete</button></td>
                </tr>)}
                
            </tbody>
        </table></div></div>;
    }
}
 
export default Movies;