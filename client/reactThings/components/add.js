import React, { Component } from 'react'

export default class Add extends Component {

  constructor (props) {
    super(props)

    this.state = {
      formInfo: {
        Neck: {
           fullROM: {
             title: 'Full ROM',
             value: null
           },
           tenderParaspinalMuscles: {
             title: 'Tenderness of paraspinal muscles',
             value: null
           },
           tenderCervical: {
             title: 'Midline cervucak tenderness',
             vlaue: null
           },
           notes: {
             title: 'Neck notes',
             value: ''
           }
          },
          MS: {
           aao: {
             title: 'Awake, alert, oriented',
             value: null
           },
           language: {
             title: 'Normal language/responsiveness',
             value: null
           },
           memory: {
             title: 'Normal memory and concentration',
             value: null
           },
           notes: {
             title: 'MS notes',
             value: ''
           }
          },
          'Cranial Nerves': {
           face: {
             title: 'Face symmetric',
             value: null
           },
           palate: {
             title: 'Palate symmetric',
             value: null
           },
           tongue: {
             title: 'Tongue movement symmetric',
             value: null
           },
           shoulder: {
             title: 'Shoulder shrug normal',
             value: null
           },
           notes: {
             title: 'Cranial notes',
             value: ''
           }
          },
          Eyes: {
           pupils: {
             title: 'Pupils equal, round, reactive to light',
             value: null
           },
           visualField: {
             title: 'Visual fields full',
             value: null
           },
           smoothPursuit: {
             title: 'Smooth Pursuit normal',
             value: null
           },
           succades: {
             title: 'Succades normal',
             value: null
           },
           convergence: {
             title: 'Convergence',
             value: null
           },
           vor: {
             title: 'VOR normal',
             value: null
           },
           vorSuppression: {
             title: 'VOR suppression normal',
             value: null
           },
           notes: {
             title: 'Eye Notes',
             value: ''
           }
          },
          Motor: {
           strength: {
             title: 'Normal proximal/distance strength',
             value: null
           },
           fingerNose: {
             title: 'Finger to nose',
             value: null
           },
           notes: {
             title: 'Motor Notes',
             value: ''
           }
          },
          sensory: {
           touch: {
             title: 'Normal sensation to light touch',
             value: null
           },
           notes: {
             title: 'Sensory notes',
             value: ''
           }
          },
          Proprioception: {
           romberg: {
             title: 'Romberg normal',
             value: null
           },
           fakuda: {
             title: 'Fakuda normal',
             value: null
           },
           notes: {
             title: 'Proprioception notes',
             value: ''
           }
          },
          Balance: {
           testOne: {
             title: 'Normal single leg, eyes closed, squat',
             value: null
           },
           testTwo: {
             title: 'Normal tandem forward/backward',
             value: null
           }
          }
       }
    }
  }

  render () {
    return (
      <div>
      <div className='title'>Add page</div>
      {Object.keys(this.state.formInfo).map(element => {
        console.log(element)
        return (
          <div>
          <div className='cat'>{element}</div>
          {Object.keys(this.state.formInfo[element]).map(subCat => {
            console.log(subCat)
            return(
              <div>
                <div>{this.state.formInfo[element][subCat].title}</div>
                <input
                  style={{display: 'inline'}}
                  type="checkbox"
                  name={this.state.formInfo[element][subCat]}
                  value={this.state.formInfo[element][subCat].value || false} />
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
