import React from 'react';
import Question from './data';
import MyAccordian from './MyAccordian';

const Accordian = () => {    
  return (
    <>
        <div style={{maxWidth: '800px',margin: '0 auto'}}>
            <h1>React Accordian</h1>
            {
                Question.map((elem)=>{
                    return(
                        <div class={'accordian-' + elem.id} key={elem.id}>                            
                            <MyAccordian {...elem} />                          
                        </div>                
                    )
                })
            }
        </div>
    </>
  )
}

export default Accordian