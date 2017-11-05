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

    this.handleNote = this.handleNote.bind(this)
  }

  handleNote (event, category) {
    const newCategory = Object.assign(this.state[category], {notes: event.target.value})

    this.setState({
      [category]: newCategory
    })
  }

  click (category, subCategory) {
    let newCategory = {
      [subCategory]: !this.state[category][subCategory]
    }

    let newMasterCategory = Object.assign(this.state[category], newCategory)
    this.setState({
      [category]: newMasterCategory
    })
  }

  render () {
    console.log('state', this.state)
    return (
      <div>

      <div className='title'>Add page</div>
      {Object.keys(this.state).map((category, idx) => {
        return (
          <div key={idx}>
          <span className='cat'>{category}</span>
          {Object.keys(this.state[category]).map((subCat, idx) => {
            return (
              <div className="wrapper" key={idx}>
                <div>{subCat}</div>
                {
                  subCat === 'notes' ?
                    <div>
                      <textarea onChange={(e) => this.handleNote(e, category)} className="textarea" type="textarea" placeholder={`${category} notes`} />
                    </div>
                  :
                    <div className="switch">
                    <div onClick={() => this.click(category, subCat)} className={`${this.state[category][subCat]}`}>{this.state[category][subCat] ? 'Yes' : 'No'}</div>
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
