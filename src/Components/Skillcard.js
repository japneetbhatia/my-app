import React from 'react'
import "./Skillcard.css"

const Skillcard = ({title,bgcolor,progress,height}) => {
     
      const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: '#D48E49',
        borderRadius: 20,
        marginTop: 10
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'white',
        fontWeight: 900
      }
        
    return (
        <div className='skill-box'>
            <div className='skill-title'>{`${title}`}</div>
            <div style={Parentdiv}>
                <div style={Childdiv}>
                    <span style={progresstext}>{`${progress}%`}</span>
                </div>
            </div>
        </div>
    )
}

export default Skillcard;
