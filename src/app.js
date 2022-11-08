import Header from './components/header'

import initialEmails from './data/emails'

import { useState } from 'react';

import './styles/app.css'

function App() {
  const [emails, setEmails] = useState(initialEmails)
  // Use initialEmails for state
  console.log(emails)

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{
       emails.map(function(email) {
        return <li className="email" key={email.id}>
        <div className="select" key={email.id}>
        <input
          className="select-checkbox"
          type="checkbox"
          key={email.id}/>
        </div>
        <div className="star" key={email.id}>
        <input
          className="star-checkbox"
          type="checkbox"
          key={email.id}
        />
        </div>
        <div className="sender">{email.sender}</div>
        <div className="title">{email.title}</div>
      </li>
       })
      }</main>
    </div>
  )
}

export default App
