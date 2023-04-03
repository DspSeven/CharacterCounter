import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  CombineContainer,
  BossContainer,
  CharacterContainer,
} from './styledComponents'
import DisplayEntireList from '../DisplayEntireList/list'

class CharacterCounter extends Component {
  state = {
    character: '',
    characterBox: [],
  }

  // saving ch
  saveCharacters = event => {
    this.setState({character: event.target.value})
  }

  // saving ch & length in list
  saveInList = event => {
    event.preventDefault()
    const {character} = this.state
    const characterDetails = {
      id: uuidv4(),
      character,
      length: character.length,
    }
    this.setState(prevState => ({
      characterBox: [...prevState.characterBox, characterDetails],
      character: '',
    }))
  }

  // displaying saved characters
  renderChList = () => {
    const {characterBox} = this.state
    return (
      <ul>
        {characterBox.map(ch => (
          <DisplayEntireList keys={ch.id} chDetails={ch} />
        ))}
      </ul>
    )
  }

  render() {
    const {characterBox, character} = this.state
    return (
      <CombineContainer>
        <BossContainer>
          <h1>Count the characters like a Boss</h1>
          {characterBox.length !== 0 ? (
            this.renderChList()
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          )}
        </BossContainer>
        <CharacterContainer onSubmit={this.saveInList}>
          <h1>Character Counter</h1>
          <div>
            <input
              type="text"
              value={character}
              placeholder="Enter the Characters here"
              onChange={this.saveCharacters}
            />
            <button type="submit">Add</button>
          </div>
        </CharacterContainer>
      </CombineContainer>
    )
  }
}
export default CharacterCounter
