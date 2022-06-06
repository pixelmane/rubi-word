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
     wordBank: ["MALAROMAS",
     "ALASTORS",
     "ALLSORTS",
     "AMOROSOS",
     "LATOSOLS",
     "MARSALAS",
     "MATTRASS",
     "RATATATS",
     "ROTATORS",
     "SAMSARAS",
     "SMARTASS",
     "STOMATAL",
     "STROMATA",
     "TAMARAOS",
     "ALASTOR",
     "AMATOLS",
     "AMOROSO",
     "ASRAMAS",
     "ASSORTS",
     "ASTRALS",
     "ATLATLS",
     "LATOSOL",
     "MALTOLS",
     "MAMMALS",
     "MARMOTS",
     "MARRAMS",
     "MARSALA",
     "MASALAS",
     "MATRASS",
     "MORTALS",
     "MORTARS",
     "MOTMOTS",
     "ORATORS",
     "OSMOLAL",
     "OSMOLAR",
     "ROSTRAL",
     "SALAAMS",
     "SAMARAS",
     "SAMOSAS",
     "SAMSARA",
     "SARSARS",
     "SARTORS",
     "SATARAS",
     "SLALOMS",
     "SMALTOS",
     "SORORAL",
     "SORTALS",
     "STATORS",
     "STOMATA",
     "STRATAL",
     "STRATAS",
     "STROLLS",
     "STROMAL",
     "TALLOLS",
     "TARAMAS",
     "TARSALS",
     "TARTARS",
     "TATTOOS",
     "ALAMOS",
     "ALARMS",
     "ALLOTS",
     "ALMOST",
     "ALTARS",
     "AORTAS",
     "ARMORS",
     "AROMAS",
     "ASRAMA",
     "ASSORT",
     "ASTRAL",
     "ATOLLS",
     "ATTARS",
     "LASSOS",
     "LLAMAS",
     "LOTTOS",
     "MALARS",
     "MAMMAS",
     "MASALA",
     "MASSAS",
     "MOLARS",
     "MOMMAS",
     "MOOLAS",
     "MORALS",
     "MORASS",
     "MORROS",
     "MOTORS",
     "MOTTOS",
     "OSMOLS",
     "OTTARS",
     "RATALS",
     "ROASTS",
     "ROOSTS",
     "ROSTRA",
     "ROTORS",
     "SALAAM",
     "SALALS",
     "SALATS",
     "SALOLS",
     "SALSAS",
     "SAMARA",
     "SAMOSA",
     "SARSAR",
     "SARTOR",
     "SATARA",
     "SLALOM",
     "SLOMOS",
     "SMALLS",
     "SMALTO",
     "SMALTS",
     "SMARMS",
     "SMARTS",
     "SMOLTS",
     "SOLARS",
     "SOMATA",
     "SORTAL",
     "SOTOLS",
     "STALLS",
     "STARTS",
     "STATAL",
     "STATOR",
     "STOATS",
     "STOMAL",
     "STOMAS",
     "STOOLS",
     "STORMS",
     "STOTTS",
     "STRASS",
     "STRATA",
     "STROLL",
     "STROMA",
     "TALARS",
     "TAMALS",
     "TAROTS",
     "TARSAL",
     "TASSOS",
     "TATARS",
     "TOASTS",
     "TOLARS",
     "TORSOS",
     "TORTAS",
     "TOTALS",
     "TROLLS",
     "ALMAS",
     "ALTOS",
     "AMASS",
     "AMMOS",
     "ARRAS",
     "ATLAS",
     "ATMAS",
     "ATOMS",
     "LALLS",
     "LAMAS",
     "LASSO",
     "LASTS",
     "LOAMS",
     "LOLLS",
     "LOOMS",
     "LOOTS",
     "LOTAS",
     "LOTOS",
     "MAARS",
     "MALLS",
     "MALMS",
     "MALTS",
     "MAMAS",
     "MARAS",
     "MARLS",
     "MARTS",
     "MASAS",
     "MASSA",
     "MASTS",
     "MATTS",
     "MOATS",
     "MOLAS",
     "MOLLS",
     "MOLTS",
     "MOOLS",
     "MOORS",
     "MOOTS",
     "MORAS",
     "MORTS",
     "MOSSO",
     "MOSTS",
     "MOTTS",
     "OASTS",
     "OLLAS",
     "OMASA",
     "ORALS",
     "OSMOL",
     "OTTOS",
     "RATOS",
     "ROAMS",
     "ROARS",
     "ROAST",
     "ROLLS",
     "ROOMS",
     "ROOST",
     "ROOTS",
     "ROTAS",
     "ROTLS",
     "ROTOS",
     "SALAL",
     "SALAT",
     "SALOL",
     "SALSA",
     "SALTS",
     "SAROS",
     "SLAMS",
     "SLATS",
     "SLOMO",
     "SLOTS",
     "SMALL",
     "SMALT",
     "SMARM",
     "SMART",
     "SMOLT",
     "SOARS",
     "SOLAR",
     "SOLAS",
     "SOLOS",
     "SOMAS",
     "SOOTS",
     "SORAS",
     "SORTS",
     "SOTOL",
     "STALL",
     "STARS",
     "START",
     "STATS",
     "STOAS",
     "STOAT",
     "STOMA",
     "STOOL",
     "STORM",
     "STOSS",
     "STOTS",
     "STOTT",
     "TALAS",
     "TALLS",
     "TAROS",
     "TARTS",
     "TASSO",
     "TOAST",
     "TOLAS",
     "TOLLS",
     "TOLTS",
     "TOOLS",
     "TOOTS",
     "TORAS",
     "TOROS",
     "TORRS",
     "TORSO",
     "TORTS",
     "TOSAS",
     "TRAMS",
     "TRASS",
     "TROTS",
     "TSARS",
     "AALS",
     "ALAS",
     "ALLS",
     "ALMS",
     "ALSO",
     "ALTS",
     "AMAS",
     "ARMS",
     "ARTS",
     "LAMS",
     "LARS",
     "LASS",
     "LAST",
     "LATS",
     "LOOS",
     "LOSS",
     "LOST",
     "LOTS",
     "MAMS",
     "MARS",
     "MASA",
     "MASS",
     "MAST",
     "MATS",
     "MOAS",
     "MOLS",
     "MOMS",
     "MOOS",
     "MORS",
     "MOSS",
     "MOST",
     "MOTS",
     "OARS",
     "OAST",
     "OATS",
     "OMAS",
     "OOTS",
     "ORTS",
     "OSAR",
     "OSSA",
     "RAMS",
     "RATS",
     "ROMS",
     "ROOS",
     "ROTS",
     "SALL",
     "SALS",
     "SALT",
     "SASS",
     "SLAM",
     "SLAT",
     "SLOT",
     "SOAR",
     "SOLA",
     "SOLO",
     "SOLS",
     "SOMA",
     "SOMS",
     "SOOT",
     "SORA",
     "SORT",
     "SOTS",
     "STAR",
     "STAT",
     "STOA",
     "STOT",
     "TAMS",
     "TAOS",
     "TARS",
     "TASS",
     "TATS",
     "TOMS",
     "TORS",
     "TOSA",
     "TOSS",
     "TOST",
     "TOTS",
     "TSAR"],
     alreadyGuessed: [],
     alreadyGuessedList: [],
     message: 'well guess something',
     score: 0,
     percentComplete: 'Noob',
    } 
    this.percentCalc = this.percentCalc.bind(this); 
    this.handleClick = this.handleClick.bind(this);
    this.clearGuess = this.clearGuess.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleGuess = this.handleGuess.bind(this)
    }
    percentCalc() {
      let one = this.state.wordBank
      let two = this.state.alreadyGuessed
      let total = 0;
      for(let i = 0; i < one.length; i++){
        total += one[i].length * one[i].length
      }
      for(let l = 0; l < two.length; l++){
        total += two[l].length * two[l].length 
      }
      let percComp = this.state.score/total
      percComp = percComp*100;
      percComp = percComp.toFixed(2)
      let myStatus = 'Noob'
      if (percComp < 1){
        myStatus = 'Noob'
      } else if (percComp < 2){
        myStatus = 'Semi-Noob'
      } else if (percComp < 3){
        myStatus = 'Average'
      } else if (percComp < 4){
        myStatus = 'B-'
      } else if (percComp < 5){
        myStatus = 'semi-pro'
      } else if (percComp < 6){
        myStatus = 'Super'
      } else if (percComp < 7){
        myStatus = 'Baller' 
      } else if (percComp < 8){
        myStatus = 'Elite'
      } else if (percComp < 9){
        myStatus = 'Goddess'
      }
      this.setState({
        percentComplete: myStatus
      })
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
      document.getElementById('alertCont').style.animation = '1s appear'
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

        this.messageCreate('Word Too Tiny')
        
      }else if (this.state.guess.indexOf('S') > -1){
        
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
       alreadyGuessed.push(guess)
        wordBank.splice(wordBank.indexOf(guess), 1, '')
        console.log(alreadyGuessed)
        console.log(wordBank)
        this.percentCalc()
        this.setState({
          wordBank: wordBank,
          alreadyGuessed: alreadyGuessed,
        
          score: score,
          guess: [],
        })
        
      } else if (alreadyGuessed.indexOf(guess) > -1 ){
        this.messageCreate('already guessed')
        
      }else {
        this.messageCreate('sorry, guess again')
        
      }
    
  } else {
    this.messageCreate('missing main letter')
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
        <Score percComp={this.state.percentComplete} value={this.state.score}/>
        <Entry guess={this.state.guess}/>
        <Square onClick={this.handleClick} />
        <div id="enterErase">
        
        <Delete onClick={this.handleDelete}/><Enter onClick={this.handleGuess}/>
        </div>
        {/*<Erase onClick={this.clearGuess}/>*/}
        <div id="list">{this.state.alreadyGuessedList}</div>
      </div>
      
      </div>
    )
  }
  componentDidMount() {
    alert('Rules: Use the gameboard to make as many words as possible.  Center letter must be in each word.  Letters may be used up to three times per guess.')
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