import React from 'react';
import PokemonList from './PokemonList'
import './SearchBar.css'


class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search : PokemonList,
            display : '',
        }
    }


    PokeSearch = (e) => {
        if(this.state.search.includes(e.target.value) && typeof this.state.search === 'object'){
             this.state.search.map((e)=>{
                console.log(e)
                this.setState({search:e});
            }) 
          }    
        }

          
    ProfileClick = (e) => {
        this.props.handleProfileClick(e.target.value)
    }    
          
    PokeClick = (e) => {
        if(this.state.search === 'string'){
            this.setState({display: this.search, search:PokemonList})
        }
        // console.log('this is never shown', this.state)
        // this.setState({display: e.target.value})
    }


    Searchimage = (props) => {
        return (
            <div>
        <img src={`https://img.pokemondb.net/artwork/${props.pokemon}.jpg`} alt = '#'/>
        </div>
        )
}


    render(){
        return ( 
            <>                
            <div className='row'>
            <div className='col search-container'>
            <div className="Search-box">
                <input type="text" className="searchText" placeholder ='PokeBallers...' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" list = 'pokemonList' onChange = {this.PokeSearch} />
                    <a className ='searchButton' href ='ok'>
                    <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/0c3bbade-58ef-4c64-9a3e-26cf3c477338/d7ea28n-430864db-4a85-4973-84ff-3b494a72beec.png/v1/fill/w_898,h_890,strp/master_ball__01__by_adfpf1_d7ea28n-pre.png
                        ' alt ='' height ='60px' className="img"/>  
                    </a>
                    <datalist id ='pokemonList' >

                    {
                        
                    typeof this.state.search === 'string' ? <option onClick={(e)=>{this.PokeClick(e)}}/> : 
                    this.state.search.map((e,i)=>{ return <option value = {`${e}`} key ={i} />

                   
//                     {
//                     this.state.search.map((e,i)=>{
//                         return <option value = {`${e}`} key ={i} onClick={this.ProfileClick} />
// >>>>>>> master
                    })
                }
                    </datalist>

                   
            </div>
            </div>
            </div>

              </>)
    }



   
}
    

export default SearchBar