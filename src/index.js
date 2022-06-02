import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Square } from './square.js'
import { Entry } from './entry.js'
import { Erase } from './erase.js'
import { Delete } from './delete.js'
import { Enter } from './enter.js'
import { Score } from './score.js'
import { Alert } from './alert.js'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     guess: [],
     wordBank: ["BANDORE",
     "BEGROAN",
     "BLANDER",
     "BLONDER",
     "BOGLAND",
     "BONDAGE",
     "BROADEN",
     "DOGBANE",
     "GARBLED",
     "LABORED",
     "BANDEROL",
     "ALBEDO",
     "BADGER",
     "BALDER",
     "BANDER",
     "BANDOG",
     "BANGED",
     "BANGER",
     "BANGLE",
     "BARGED",
     "BARNED",
     "BARONG",
     "BEGLAD",
     "BELONG",
     "BLADER",
     "BLARED",
     "BLONDE",
     "BODEGA",
     "BOLDER",
     "BONDER",
     "BONGED",
     "BORAGE",
     "BORANE",
     "BORDEL",
     "BOREAL",
     "BROGAN",
     "BROLGA",
     "DOABLE",
     "GABLED",
     "GARBED",
     "GARBLE",
     "GLOBED",
     "GRABEN",
     "NOBLER",
     "ROBAND",
     "ABLED",
     "ABLER",
     "ABODE",
     "ADOBE",
     "ARDEB",
     "BADGE",
     "BAGEL",
     "BALED",
     "BALER",
     "BANED",
     "BARDE",
     "BARED",
     "BARGE",
     "BARON",
     "BEANO",
     "BEARD",
     "BEGAD",
     "BEGAN",
     "BELGA",
     "BELON",
     "BLADE",
     "BLAND",
     "BLARE",
     "BLEAR",
     "BLEND",
     "BLOND",
     "BOARD",
     "BOGLE",
     "BOLAR",
     "BONED",
     "BONER",
     "BORAL",
     "BORED",
     "BORNE",
     "BRAND",
     "BREAD",
     "BROAD",
     "DEBAG",
     "DEBAR",
     "DOBLA",
     "DOBRA",
     "GABLE",
     "GLEBA",
     "GLOBE",
     "GOBAN",
     "LABOR",
     "LOBAR",
     "LOBED",
     "NOBLE",
     "ORBED",
     "ROBED",
     "ROBLE",
     "ABED",
     "ABLE",
     "BADE",
     "BALD",
     "BALE",
     "BAND",
     "BANE",
     "BANG",
     "BARD",
     "BARE",
     "BARN",
     "BEAD",
     "BEAL",
     "BEAN",
     "BEAR",
     "BEND",
     "BERG",
     "BLAE",
     "BLAG",
     "BLED",
     "BLOG",
     "BOAR",
     "BODE",
     "BOLA",
     "BOLD",
     "BOLE",
     "BOND",
     "BONE",
     "BONG",
     "BORA",
     "BORE",
     "BORN",
     "BRAD",
     "BRAE",
     "BRAG",
     "BRAN",
     "BRED",
     "BREN",
     "DARB",
     "DOBE",
     "DRAB",
     "EBON",
     "GARB",
     "GLOB",
     "GRAB",
     "LOBE",
     "NABE",
     "ROBE"],
     alreadyGuessed: [],
     alreadyGuessedList: [],
     message: 'well guess something',
     score: 0,
    }  
    this.handleClick = this.handleClick.bind(this);
    this.clearGuess = this.clearGuess.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleGuess = this.handleGuess.bind(this)
    }
    handleClick(value){
      let guess = this.state.guess.slice()
      guess.push(value)
      this.setState({
        guess: guess,
        
      })
    }
    clearGuess(){
      this.setState({
        guess: []
      })
    }
    handleDelete(){
      let guess = this.state.guess.slice();
      let remove = guess.pop()

      this.setState({
        guess: guess,
      })
    }

    messageCreate(message) {
      document.getElementById('alert').innerHTML = `${message}`
      document.getElementById('alertCont').style.animation = '3s appear'
      setTimeout(() => {
        document.getElementById('alertCont').style.animation = 'none'
      }, 3000)
    }
    wait() {
      return new Promise(resolve => {
        console.log('wait')
        setTimeout(resolve, 50)
      }
    )}
    async adjustScore(number) {
      for(let g = 0; g <= number; g++){
        let score = this.state.score + 1
        this.setState({
          score: score,
        })
        await this.wait()
      }
    }
    handleBuild(guess){
      return <Word value={guess} />
    }
    handleList(guess){
      this.state.alreadyGuessedList.push(this.handleBuild(guess))
    }
    handleGuess() {
      
      if(this.state.guess.length < 4){
        console.log('work')

        this.messageCreate()
        
      }else if (this.state.guess.indexOf('B') > -1){
        
      let guess = this.state.guess.join('');
      let wordBank = this.state.wordBank.slice();
      let alreadyGuessed = this.state.alreadyGuessed.slice();
      
      console.log(wordBank.indexOf(guess))
      let score = this.state.score
      if(wordBank.indexOf(guess) > -1){
        
        let newScore
        newScore = (this.state.guess.length - 3)*(this.state.guess.length - 3)
        this.adjustScore(newScore)
          this.handleList(guess)
        this.messageCreate(`fuck yeah +${newScore}`)
        console.log(guess.length)
       
        wordBank.splice(wordBank.indexOf(guess), 1, null)
        console.log(alreadyGuessed)
        console.log(wordBank)
        
        this.setState({
          wordBank: wordBank,
          alreadyGuessed: alreadyGuessed,
        
          score: score,
          guess: [],
        })
        
      } else if (alreadyGuessed.indexOf(guess) > -1 ){
        this.messageCreate('you already guessed this')
        
      }else {
        this.messageCreate('sorry, guess again')
        
      }
    
  } else {
    alert('no usage of main letter')
  }
  this.setState({
    guess: [],
  })
}
  render() {
    return (
      <div id="main">
      <div>
        <Alert value={this.state.message}/>
        <Score value={this.state.score}/>
        <Entry guess={this.state.guess}/>
        <Square onClick={this.handleClick} />
        <div id="enterErase">
        
        <Delete onClick={this.handleDelete}/><Enter onClick={this.handleGuess}/>
        </div>
        <Erase onClick={this.clearGuess}/>
        
      </div>
      <div id="list">{this.state.alreadyGuessedList}</div>
      </div>
    )
  }
}

class Word extends React.Component {
  render() {
    return (
      <h4>{this.props.value}</h4>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))