import React, { Component } from 'react'

export default class Add extends Component {

  constructor (props) {
    super(props)

    this.state = {
      Neck: {
       'Full ROM': false,
       'Tenderness of paraspinal muscles': false,
       'Midline cervucak tenderness': false,
       'notes': ''
      },
      MS: {
        'Awake, alert, oriented': false,
        'Normal language/responsiveness': false,
        'Normal memory and concentration': false,
        'notes': ''
      },
      'Cranial Nerves': {
       'Face symmetric': false,
       'Palate symmetric': false,
       'Tongue movement symmetric': false,
       'Shoulder shrug normal': false,
       'notes': ''
      },
      Eyes: {
        'Pupils equal, round, reactive to light': false,
        'Visual fields full': false,
        'Smooth Pursuit normal': false,
        'Succades normal': false,
        'Convergence': false,
        'VOR normal': false,
        'VOR suppression normal': false,
        'notes': ''
      },
      Motor: {
       'Normal proximal/distance strength': false,
       'Finger to nose': false,
       'notes': ''
      },
      Sensory: {
       'Normal sensation to light touch': false,
       'notes': ''
      },
      Proprioception: {
       'Romberg normal': false,
       'Fakuda normal': false,
       'notes': ""
      },
      Balance: {
       'Normal single leg, eyes closed, squat': false,
       'Normal tandem forward/backward': false,
       'notes': ""
      }
    }
  }

  click (event, thing) {
    // console.log('inside click', event, thing)
    // console.log(this.state.formInfo)
    // console.log("test", this.state[event])
    let test = {
      [thing]: !this.state[event][thing]
    }

    let nextTest = Object.assign(this.state[event], test)
    this.setState({
      [event]: nextTest
    })
  }

  render () {
    console.log('state', this.state)
    return (
      <div>

      <div className='title'>Add page</div>
      {Object.keys(this.state).map((element, idx) => {
        // console.log(element)
        return (
          <div key={idx}>
          <span className='cat'>{element}</span>
          {Object.keys(this.state[element]).map((subCat, idx) => {
            return(
              <div className="wrapper" key={idx}>
                <div>{subCat}</div>
                {
                  subCat === 'notes' ?
                    // <div>NOTE SECTION</div>
                    <div>
                    <textarea className="textarea" type="textarea" placeholder={`${element} notes`}></textarea>
                    </div>
                  :
                    <div className="switch">
                    <div onClick={() => this.click(element, subCat)} className={`${this.state[element][subCat]}`}>{this.state[element][subCat] ? 'Yes' : 'No'}</div>
                    </div>
                }
              </div>
            )
          })
          }
        </div>
        )
      })
      }
      </div>
    )
  }
}
