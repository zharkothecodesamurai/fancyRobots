import React,{Fragment, Component} from 'react'
import CardList from '../Components/cardList.js'
import SearchBox from '../Components/searchBox.js'
import Scroll from '../Components/Scroll.js'
import { robots } from '../Components/robots'
import './app.css'



class App extends Component {
    constructor(){
        super()
        this.state={
            robots: robots,
            searchField: ''
        }
    }

    // componentDidMount () {
    //         fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response=>response.json())
    //         .then(user=>this.setState({robots:user}));
    // }

    onSearchChanged = (event) => { 
        console.log(event.target.value);
        this.setState({searchField: event.target.value }) //go setuvash propertito od state
        
        // console.log(filteredRobots);
    }

    render(){
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot=> {
        return robot.name.toLocaleLowerCase().includes(searchField)
            })
        return (
                <div className="tc" >
                    
                    <h1 className='f1'>  Robots madafakas </h1>
                    <SearchBox searchChange={this.onSearchChanged}/>
                    <Scroll><CardList robots={filteredRobots}/></Scroll>
                    
                   
                </div>
                
    
                 
        );
    }
}

export default App;
