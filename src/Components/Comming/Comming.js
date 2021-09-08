import React from 'react'
import {FormattedMessage} from 'react-intl'
import './Cooming.css'
function Comming() {
    return (
        <div>
          <div className="main">
        <p className="title"><FormattedMessage id="comming.soon"/></p>
        <div className="separator"></div>
        <p className="message"><FormattedMessage id="comming.message"/></p>
        <p className="message"><FormattedMessage id="comming.message.rest"/></p>
        
    </div>
            
        </div>
    )
}

export default Comming
