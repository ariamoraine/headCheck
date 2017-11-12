import React, { Component } from 'react'
import SubCat from './subCat'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Add extends Component {

  constructor (props) {
    super(props)

    this.state = {
      'General Info': {
        Date: '',
        'Patient ID': '',
        Team: '',
        Number: '',
        Position: '',
        HPI: '',
        'Assessment/Plan': '',
        'Physician Name': '',
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
    this.submit = this.submit.bind(this)
    this.makeExamObject = this.makeExamObject.bind(this)
  }

  sanitize (name) {
    name = name.toLowerCase().split(' ').join('_').split('/').join('_').split(',').join('')
    return name
  }

  makeExamObject () {
    let examObject = {}
    for (let category in this.state) {
      for (let subCategory in this.state[category]) {
        // console.log('subCategory', subCategory)
        let name = subCategory
        if (subCategory === 'notes') {
          name = `${category} notes`
        }
        name = this.sanitize(name)
        examObject[name] = this.state[category][subCategory]
      }
    }
    console.log('exam Object', examObject)
    return examObject
  }

  submit () {
    const examObject = this.makeExamObject()
    axios.post('/api/exam/', examObject)
    .then(results => {
      console.log('results', results)
      if (results.status === 200) {
        alert('the exam has been saved')
        this.props.history.push('/view')
      } else {
        alert('There was an error while saving your exam. Please make sure you have all the needed fields')
      }

    })
    .catch(e => {
      console.log('error?', e)
    })
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
      <input className="button" type="submit" onClick={this.submit} />
      </div>
    )
  }
}
