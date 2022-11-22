/* eslint-disable array-callback-return */
import './App.css';
import EmployeeList from './components/employee-list/employee-list';
import Information from './components/information/information';

let App = () => {
  const greeting = "Good Morning"
  let isLoggedIn = true
  let emojis = [
    { unicode: 0X1F600, face: 'grinning face', selected: false },
    { unicode: 0X1F601, face: 'beaming face with smiling eyes', selected: false },
    { unicode: 0X1F602, face: 'face with tears of joy', selected: false },
    { unicode: 0X1F603, face: 'grinning face with big eyes', selected: false },
    { unicode: 0X1F604, face: 'grinning face with smiling eyes', selected: false },
    { unicode: 0X1F605, face: 'grinning face with sweat', selected: false },
    { unicode: 0X1F606, face: 'grinning squinting face', selected: false }
  ]
  let toggleButton = () => {
    isLoggedIn = !isLoggedIn
    document.getElementById('btnLog').innerHTML = isLoggedIn ? "Logout" : "Login"
    isLoggedIn ?
      document.getElementById('display').style = "display:block" :
      document.getElementById('display').style = "display:none"
  }
  let emojiClicked = (emojiName) => {
    document.getElementById("emojiName").innerHTML = emojiName
    emojis.map(emoji => {
      emoji.selected = emoji.face === emojiName
      document.getElementsByClassName('select')[emojis.indexOf(emoji)]
        .style["background-color"] = emoji.selected ? 'grey' : 'white'
    })
  }
  return (<>
    <div className='container'>
      <h1 className='App-header'>Hello, Component</h1>
      <p>{greeting}</p>
      <div id='display'>
        <Information />
        <ul>
          {emojis.map(emoji =>
            <li key={emoji.unicode}>
              <button className='select' onClick={() => emojiClicked(emoji.face)}>
                <span
                  id={emoji.unicode}>
                  {String.fromCodePoint(emoji.unicode)}
                </span>
              </button>
            </li>
          )}
        </ul>
        <p id="emojiName"></p>
        <Information />
      </div>
      <button id='btnLog' onClick={toggleButton}>Logout</button>
    </div>
    <hr />
    <div>
      <EmployeeList />
    </div>
  </>)
}

export default App