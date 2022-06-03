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
     wordBank: ["DAGGERBOARD",
     "LABRADOODLE",
     "LEADERBOARD",
     "LONGBOARDER",
     "NONDEGRADABLE",
     "BARGEBOARD",
     "BEDRAGGLED",
     "BREADBOARD",
     "DEGRADABLE",
     "BANDLEADER",
     "BORDERLAND",
     "BELLADONNA",
     "BEBLOODED",
     "BROADBAND",
     "BEDRAGGLE",
     "BELABORED",
     "DODGEBALL",
     "ABANDONED",
     "BEGROANED",
     "BROADENED",
     "GARDEROBE",
     "LONGBOARD",
     "ONBOARDED",
     "REBOARDED",
     "REBRANDED",
     "BALLADEER",
     "BALLOONED",
     "BANDEROLE",
     "BARRELAGE",
     "BARRELLED",
     "LEARNABLE",
     "NONARABLE",
     "BEDDABLE",
     "DEBAGGED",
     "DRABBLED",
     "GRABBLED",
     "BADGERED",
     "BANDAGED",
     "BARBERED",
     "BEGGARED",
     "BENDABLE",
     "BONDABLE",
     "GRABBLER",
     "BANDAGER",
     "BANNABLE",
     "BARRABLE",
     "BARRAGED",
     "BEANBALL",
     "BEARABLE",
     "BEGALLED",
     "BELONGED",
     "BLOODRED",
     "BORDERED",
     "BRANDADE",
     "DEBARRED",
     "GABELLED",
     "GAGEABLE",
     "GARBOARD",
     "GRADABLE",
     "ADORABLE",
     "BANDEROL",
     "BANNERED",
     "BARGELLO",
     "BARONAGE",
     "BARRELED",
     "BEADROLL",
     "BORDELLO",
     "DOORBELL",
     "ENNOBLED",
     "ERODABLE",
     "LABRADOR",
     "LARBOARD",
     "LEADABLE",
     "LEEBOARD",
     "LENDABLE",
     "LOADABLE",
     "READABLE",
     "ANAEROBE",
     "ARBOREAL",
     "BALLONNE",
     "BANNEROL",
     "ENNOBLER",
     "LOANABLE",
     "NONLABOR",
     "DABBLED",
     "DRABBED",
     "GABBARD",
     "GABBLED",
     "GOBBLED",
     "GRABBED",
     "BEANBAG",
     "BEBLOOD",
     "BEROBED",
     "BLAGGED",
     "BLOGGED",
     "BOGBEAN",
     "BOGGLED",
     "BONEBED",
     "BRAGGED",
     "DABBLER",
     "DRABBER",
     "DRABBLE",
     "GABBLER",
     "GOBBLER",
     "GRABBER",
     "GRABBLE",
     "NOBBLED",
     "RABBLED",
     "ABRADED",
     "ADDABLE",
     "BADLAND",
     "BANDAGE",
     "BARBELL",
     "BEAGLED",
     "BEARDED",
     "BELABOR",
     "BLADDER",
     "BLAGGER",
     "BLENDED",
     "BLOGGER",
     "BLOODED",
     "BOARDED",
     "BOGGLER",
     "BOGLAND",
     "BONDAGE",
     "BOODLED",
     "BRAGGER",
     "BRANDED",
     "BREADED",
     "BROODED",
     "DEBEARD",
     "DEBONED",
     "DOGBANE",
     "GARBAGE",
     "GARBLED",
     "NOBBLER",
     "ODDBALL",
     "RABBLER",
     "ROADBED",
     "ABANDON",
     "ABRADER",
     "ALGEBRA",
     "ARBORED",
     "BALLADE",
     "BANDORA",
     "BANDORE",
     "BARGOON",
     "BARRAGE",
     "BEAGLER",
     "BEDROLL",
     "BEGORRA",
     "BEGROAN",
     "BLANDER",
     "BLEARED",
     "BLENDER",
     "BLONDER",
     "BOARDER",
     "BOLLARD",
     "BOLOGNA",
     "BOODLER",
     "BRADOON",
     "BRANDER",
     "BRANNED",
     "BROADEN",
     "BROADER",
     "BROODER",
     "DEBONER",
     "ENABLED",
     "ENROBED",
     "GABELLE",
     "GARBLER",
     "GELABLE",
     "GERBERA",
     "GOBONEE",
     "LABELED",
     "LABORED",
     "ONBOARD",
     "REBEGAN",
     "REBLEND",
     "REBOARD",
     "REBORED",
     "REBRAND",
     "REDBONE",
     "ABALONE",
     "ABOLLAE",
     "ALLOBAR",
     "BALLOON",
     "BALNEAL",
     "BARONNE",
     "BLEARER",
     "BORNEOL",
     "BRANNER",
     "EARLOBE",
     "ENABLER",
     "ENNOBLE",
     "ENROBER",
     "ERRABLE",
     "LABELER",
     "LABORER",
     "RELABEL",
     "DABBED",
     "GABBED",
     "GOBBED",
     "BADGED",
     "BAGGED",
     "BARBED",
     "BEGGED",
     "BOGGED",
     "BOOBED",
     "DABBER",
     "DABBLE",
     "DOBBER",
     "GABBER",
     "GABBLE",
     "GABBRO",
     "GOBBLE",
     "LOBBED",
     "NABBED",
     "ROBBED",
     "ABODED",
     "BABOOL",
     "BABOON",
     "BADDER",
     "BADGER",
     "BAGGER",
     "BALBOA",
     "BALDED",
     "BANDED",
     "BANDOG",
     "BANGED",
     "BARBAL",
     "BARBEL",
     "BARBER",
     "BARDED",
     "BARGED",
     "BEADED",
     "BEDDER",
     "BEGGAR",
     "BEGLAD",
     "BENDED",
     "BERBER",
     "BLADED",
     "BODEGA",
     "BOGGLE",
     "BOLDED",
     "BONBON",
     "BONDED",
     "BONGED",
     "DAGOBA",
     "GABLED",
     "GARBED",
     "GLOBED",
     "GOBANG",
     "LOBBER",
     "NABBER",
     "NOBBLE",
     "RABBLE",
     "RAGBAG",
     "ROBBER",
     "ABOARD",
     "ABRADE",
     "ABROAD",
     "ALBEDO",
     "BALDER",
     "BALLAD",
     "BALLED",
     "BANDER",
     "BANGER",
     "BANGLE",
     "BANNED",
     "BAREGE",
     "BARGEE",
     "BARNED",
     "BARONG",
     "BARRED",
     "BEADER",
     "BEADLE",
     "BEAGLE",
     "BEANED",
     "BEDELL",
     "BEGALL",
     "BEGONE",
     "BELLED",
     "BELONG",
     "BENDER",
     "BLADER",
     "BLARED",
     "BLENDE",
     "BLONDE",
     "BOLDER",
     "BOLLED",
     "BONDER",
     "BOODLE",
     "BOOGER",
     "BORAGE",
     "BORDEL",
     "BORDER",
     "BROGAN",
     "BROLGA",
     "DARBAR",
     "DEBONE",
     "DOABLE",
     "DOBLON",
     "GABOON",
     "GARBLE",
     "GLEBAE",
     "GLEBAL",
     "GLOBAL",
     "GOOBER",
     "GRABEN",
     "OBLONG",
     "REBRED",
     "ROBAND",
     "ABOLLA",
     "ABORAL",
     "AEROBE",
     "ARABLE",
     "ARROBA",
     "BALEEN",
     "BALLER",
     "BALLON",
     "BANNER",
     "BARREL",
     "BARREN",
     "BEARER",
     "BOLERO",
     "BORANE",
     "BOREAL",
     "BOREEN",
     "ENABLE",
     "ENROBE",
     "LABRAL",
     "NOBLER",
     "REBORE",
     "REBORN",
     "ROBALO",
     "EBBED",
     "GABBA",
     "BABEL",
     "BABOO",
     "BADGE",
     "BARBE",
     "BEDAD",
     "BEGAD",
     "BODED",
     "DEBAG",
     "NABOB",
     "REBBE",
     "ABLED",
     "ABODE",
     "ADOBE",
     "ADOBO",
     "BAAED",
     "BAGEL",
     "BALED",
     "BANDA",
     "BANED",
     "BARDE",
     "BARED",
     "BARGE",
     "BEARD",
     "BEDEL",
     "BEGAN",
     "BELGA",
     "BLADE",
     "BLAND",
     "BLEED",
     "BLEND",
     "BLOND",
     "BLOOD",
     "BOARD",
     "BOGAN",
     "BOGLE",
     "BONED",
     "BONGO",
     "BOOED",
     "BORED",
     "BRAND",
     "BREAD",
     "BREDE",
     "BREED",
     "BROAD",
     "BROOD",
     "DEBAR",
     "DOBLA",
     "DOBRA",
     "GABLE",
     "GLEBA",
     "GLEBE",
     "GLOBE",
     "GOBAN",
     "GREBE",
     "LOBED",
     "ORBED",
     "ROBED",
     "ABELE",
     "ABLER",
     "ABOON",
     "ARBOR",
     "BALER",
     "BANAL",
     "BARER",
     "BARON",
     "BARRE",
     "BEANO",
     "BELLE",
     "BELON",
     "BENNE",
     "BLARE",
     "BLEAR",
     "BOLAR",
     "BONER",
     "BONNE",
     "BORAL",
     "BORER",
     "BORNE",
     "BORON",
     "LABEL",
     "LABOR",
     "LABRA",
     "LEBEN",
     "LOBAR",
     "NOBLE",
     "OBOLE",
     "REBAR",
     "REBEL",
     "ROBLE",
     "ABBA",
     "ABBE",
     "BABA",
     "BABE",
     "BARB",
     "BLAB",
     "BLEB",
     "BLOB",
     "BOBO",
     "BOOB",
     "ABED",
     "BADE",
     "BAED",
     "BALD",
     "BAND",
     "BANG",
     "BARD",
     "BEAD",
     "BEND",
     "BERG",
     "BLAG",
     "BLED",
     "BLOG",
     "BODE",
     "BOLD",
     "BOND",
     "BONG",
     "BRAD",
     "BRAG",
     "BRED",
     "DOBE",
     "GOBO",
     "ABLE",
     "ALBA",
     "BAAL",
     "BALE",
     "BALL",
     "BANE",
     "BARE",
     "BARN",
     "BEAL",
     "BEAN",
     "BEAR",
     "BEEN",
     "BEER",
     "BELL",
     "BENE",
     "BLAE",
     "BOAR",
     "BOLA",
     "BOLE",
     "BOLL",
     "BOLO",
     "BONE",
     "BOON",
     "BOOR",
     "BORA",
     "BORE",
     "BORN",
     "BRAE",
     "BRAN",
     "BREE",
     "BREN",
     "BROO",
     "EBON",
     "LOBE",
     "LOBO",
     "NABE",
     "OBOE",
     "OBOL",
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
       alreadyGuessed.push(guess)
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
        <Score value={this.state.score}/>
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
}

class Word extends React.Component {
  render() {
    return (
      <h4>{this.props.value}</h4>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))