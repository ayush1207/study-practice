import React from 'react'

const AutoComplete = () => {
  return (
    <div>
        <div>
            <input type="text" placeholder="Search..." />
            <div className="suggestions">
                <ul>
                    <li>Suggestion 1</li>
                    <li>Suggestion 2</li>
                    <li>Suggestion 3</li>
                </ul>
            </div>       
        </div>
    </div>
  )
}

export default AutoComplete