import React, { Component } from 'react'
import SubCat from './subCat'

export default class Add extends Component {

  constructor (props) {
    super(props)

    this.state = {
      'General Info': {
        Date: '',
        ID: '',
        Team: '',
        Number: '',
        Position: '',
        HPI: '',
        'Assessment/Plan': '',
      },
      Neck: {
       'Full ROM': false,
       'Tenderness of paraspinal muscles': false,
       'Midline cervical tenderness': false,
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
        'Convergence': '',
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
      },
      Other: {
        'notes': ""
      }
    }

    this.handleNote = this.handleNote.bind(this)
    this.click = this.click.bind(this)
    this.handleInfo = this.handleInfo.bind(this)
  }

  handleInfo (event, category, subCategory) {
    console.log("handleInfo", event.target.value, category, subCategory)
  }

  handleNote (event, category, subCategory) {
    const newCategory = Object.assign(this.state[category], {[subCategory]: event.target.value})

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
                <SubCat
                  state={this.state}
                  handleNote={this.handleNote}
                  handleInfo={this.handleInfo}
                  click={this.click}
                  category={category}
                  subCat={subCat}
                />
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
