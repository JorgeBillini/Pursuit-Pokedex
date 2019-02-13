import React, { Component } from 'react';
import LoadMore from './components/loadMore'
import Axios from 'axios';
class App extends Component {
  constructor(props){
   super(props)
   this.state = {
     pokemons : [],
     isActiveSearch : false
   }
 }
 getPokemon = pokemons => {
   const newPokemonArr = this.state.pokemons.concat(pokemons);
   this.setState({pokemons:newPokemonArr});
  console.log(this.state);
 }
 componentDidMount(){
   if(this.state.pokemons.length < 20 && this.state.isActiveSearch === false){
    Axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${this.state.pokemons.length}&limit=20`)
   .then((pokemon)=>{
     const newPokemonArr =this.state.pokemons.concat(pokemon.data.results);
     this.setState({pokemons:newPokemonArr})
     console.log(this.state)
   },(err)=>{
    console.log(err)
   })
   }
   return;
   
 }
  render() {
    return (
      <>
      
      <div className="App">
      <br></br>
      <div className='row'>
      <div className=' col-4' >
      <img className='pokeball' src='https://files.slack.com/files-pri/TD416AWAE-FG4T6BAHH/pokeball.png' alt='lol' />

      </div>
      <div className='col-8'>
      <img className='pokeball' src='https://files.slack.com/files-pri/TD416AWAE-FG4T6BAHH/pokeball.png' alt='lol' />

 </div>
      <h1>Pursuit Pokedex</h1>

      </div>
      <img></img>
        <LoadMore getPokemon={this.getPokemon} pokemons={this.state.pokemons} />
      </div>
      </>
   
    );
   
  }
}

export default App;
