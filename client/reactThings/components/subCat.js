import React from 'react'

export default function subCat (props) {
  if (props.category === 'General Info') {
    if (props.subCat === 'HPI' || props.subCat === 'Assessment/Plan') {
      return (
        <div>
          <textarea onChange={(e) => props.handleNote(e, props.category, props.subCat)} className="textarea" type="textarea" placeholder={`${props.subCat}`} />
        </div>
      )
    } else {
      return (
        <div>
          <input onChange={(e) => props.handleInfo(e, props.category, props.subCat)} type="text" className="text" />
        </div>
      )
    }
  } else {
    return (
      <div>
      {props.subCat === 'notes' ?
        <div>
          <textarea onChange={(e) => props.handleNote(e, props.category, props.subCat)} className="textarea" type="textarea" placeholder={`${props.category} notes`} />
        </div>
      :
        <div className="switch">
        {
          props.subCat === 'Convergence' ?
          <div>
            <input onChange={(e) => props.handleInfo(e, props.category, props.subCat)} type="text" className="text" />
            <span style={{fontSize: '2em'}}>cm</span>
          </div>
          :
          <div onClick={() => props.click(props.category, props.subCat)} className={`${props.state[props.category][props.subCat]}`}>{props.state[props.category][props.subCat] ? 'Yes' : 'No'}
          </div>
        }
        </div>
        }
        </div>
    )
  }
}
