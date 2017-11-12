import React from 'react'

export default function ViewDetail (props) {
  console.log('props inside detail', props)
  const { date, patient_id, team, number, position, hpi, assessment_plan, physician_name, full_rom, tenderness_of_paraspinal_muscles, midline_cervical_tenderness, neck_notes, awake_alert_oriented, normal_language_responsiveness, normal_memory_and_concentratio, normal_memory_and_concentration, ms_notes, face_symmetric, palate_symmetric, tongue_movement_symmetric, shoulder_shrug_normal, cranial_nerves_notes, pupils_equal_round_reactive_to_light, visual_fields_full, smooth_pursuit_normal, succades_normal, convergence, vor_normal, vor_suppression_normal, eye_notes, normal_proximal_distance_strength, finger_to_nose, moter_notes, normal_sensation_to_light_touch, sensory_notes, romberg_normal, fakuda_normal, proprioception_notes, normal_single_leg_eyes_closed_squat, normal_tandem_forward_backward, balance_notes, other_notes } = props.location.state

  return (
    <div>
    <span className='cat'>General Information</span>
    <div className="wrapper">
      <div>Date of Exam</div>
      <div>{new Date(date).toDateString()}</div>
    </div>
    <div className="wrapper">
      <div>Patient</div>
      <div>{patient_id}</div>
    </div>
    <div className="wrapper">
      <div>Team</div>
      <div>{team}</div>
    </div>
    <div className="wrapper">
      <div>Team Number</div>
      <div>{number}</div>
    </div>
    <div className="wrapper">
      <div>Position</div>
      <div>{position}</div>
    </div>
    <div className="wrapper">
      <div>HPI</div>
      <div>{hpi}</div>
    </div>
    <div className="wrapper">
      <div>Assessment / Plan</div>
      <div>{assessment_plan}</div>
    </div>
    <div className="wrapper">
      <div>Physician</div>
      <div>{physician_name}</div>
    </div>
    <span className='cat'>Neck</span>
    <div className="wrapper">
      <div>Full ROM</div>
      <div className="switch">
      <div className={`${full_rom}`}>{full_rom ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div>Tenderness of paraspinal muscles</div>
      <div className="switch">
      <div className={`${tenderness_of_paraspinal_muscles}`}>{tenderness_of_paraspinal_muscles ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div>Midline cervical tenderness</div>
      <div className="switch">
      <div className={`${midline_cervical_tenderness}`}>{midline_cervical_tenderness ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    {
      neck_notes ?
        <div className="wrapper">
          <div>Neck Notes</div>
          <div className="switch">
          <div className={`${neck_notes}`}>{neck_notes ? 'Yes' : 'No'}
              </div>
          </div>
        </div>
      :
        null
    }
    <span className='cat'>MS</span>
    <div className="wrapper">
      <div>Awake, alert, oriented</div>
      <div className="switch">
      <div className={`${awake_alert_oriented}`}>{awake_alert_oriented ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div>Normal language/responsiveness</div>
      <div className="switch">
      <div className={`${normal_language_responsiveness}`}>{normal_language_responsiveness ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div>Normal memory and concentration</div>
      <div className="switch">
      <div className={`${normal_memory_and_concentration}`}>{normal_memory_and_concentration ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    {
      ms_notes ?
        <div className="wrapper">
          <div>Neck Notes</div>
          <div className="switch">
          <div className={`${ms_notes}`}>{ms_notes ? 'Yes' : 'No'}
              </div>
          </div>
        </div>
      :
        null
    }
    <span className='cat'>Cranial Nerves</span>
    <div className="wrapper">
      <div>Face symmetric</div>
      <div className="switch">
      <div className={`${face_symmetric}`}>{face_symmetric ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div>Palate symmetric</div>
      <div className="switch">
      <div className={`${palate_symmetric}`}>{palate_symmetric ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div>Tongue movement symmetric</div>
      <div className="switch">
      <div className={`${tongue_movement_symmetric}`}>{tongue_movement_symmetric ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div>Shoulder shrug normal</div>
      <div className="switch">
      <div className={`${shoulder_shrug_normal}`}>{shoulder_shrug_normal ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    {
      cranial_nerves_notes ?
        <div className="wrapper">
          <div>Cranial Nerves Notes</div>
          <div className="switch">
          <div className={`${sensory_notes}`}>{sensory_notes ? 'Yes' : 'No'}
              </div>
          </div>
        </div>
      :
        null
    }
    <span className='cat'>Eyes</span>
    <div className="wrapper">
      <div>Pupils equal, round, reactive to light</div>
      <div className="switch">
      <div className={`${pupils_equal_round_reactive_to_light}`}>{pupils_equal_round_reactive_to_light ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div>Visual fields full</div>
      <div className="switch">
      <div className={`${visual_fields_full}`}>{visual_fields_full ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div>Smooth Pursuit normal</div>
      <div className="switch">
      <div className={`${smooth_pursuit_normal}`}>{smooth_pursuit_normal ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div>Succades normal</div>
      <div className="switch">
      <div className={`${succades_normal}`}>{succades_normal ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div>Convergence</div>
      <div className="switch">
      <div className={`${convergence}`}>{convergence}
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div>VOR normal</div>
      <div className="switch">
      <div className={`${vor_normal}`}>{vor_normal ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div>VOR suppression normal</div>
      <div className="switch">
      <div className={`${vor_suppression_normal}`}>{vor_suppression_normal ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    {
      eye_notes ?
        <div className="wrapper">
          <div>Cranial Nerves Notes</div>
          <div className="switch">
          <div className={`${eye_notes}`}>{eye_notes ? 'Yes' : 'No'}
              </div>
          </div>
        </div>
      :
        null
    }
    <span className='cat'>Moter</span>
    <div className="wrapper">
      <div>Normal proximal/distance strength</div>
      <div className="switch">
      <div className={`${normal_proximal_distance_strength}`}>{normal_proximal_distance_strength ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div>Finger to nose</div>
      <div className="switch">
      <div className={`${finger_to_nose}`}>{finger_to_nose ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    {
      moter_notes ?
        <div className="wrapper">
          <div>Cranial Nerves Notes</div>
          <div className="switch">
          <div className={`${moter_notes}`}>{moter_notes ? 'Yes' : 'No'}
              </div>
          </div>
        </div>
      :
        null
    }
    <span className='cat'>Sensory</span>
    <div className="wrapper">
      <div>Normal sensation to light touch</div>
      <div className="switch">
      <div className={`${normal_sensation_to_light_touch}`}>{normal_sensation_to_light_touch ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    {
      sensory_notes ?
        <div className="wrapper">
          <div>Cranial Nerves Notes</div>
          <div className="switch">
          <div className={`${proprioception_notes}`}>{proprioception_notes ? 'Yes' : 'No'}
              </div>
          </div>
        </div>
      :
        null
    }
    <span className='cat'>Proprioception</span>
    <div className="wrapper">
      <div>Romberg normal</div>
      <div className="switch">
      <div className={`${romberg_normal}`}>{romberg_normal ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div>Fakuda normal</div>
      <div className="switch">
      <div className={`${fakuda_normal}`}>{fakuda_normal ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    {
      proprioception_notes ?
        <div className="wrapper">
          <div>Cranial Nerves Notes</div>
          <div className="switch">
          <div className={`${proprioception_notes}`}>{proprioception_notes ? 'Yes' : 'No'}
              </div>
          </div>
        </div>
      :
        null
    }
    <span className='cat'>Balance</span>
    <div className="wrapper">
      <div>Normal single leg, eyes closed, squat</div>
      <div className="switch">
      <div className={`${normal_single_leg_eyes_closed_squat}`}>{normal_single_leg_eyes_closed_squat ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div>Normal tandem forward/backward</div>
      <div className="switch">
      <div className={`${normal_tandem_forward_backward}`}>{normal_tandem_forward_backward ? 'Yes' : 'No'}
          </div>
      </div>
    </div>
    {
      balance_notes ?
        <div className="wrapper">
          <div>Balance Notes</div>
          <div className="switch">
          <div className={`${balance_notes}`}>{balance_notes ? 'Yes' : 'No'}
              </div>
          </div>
        </div>
      :
        null
    }
    {
      other_notes ?
        <div className="wrapper">
          <div>Other Notes</div>
          <div className="switch">
          <div className={`${other_notes}`}>{other_notes ? 'Yes' : 'No'}
              </div>
          </div>
        </div>
      :
        null
    }
{
  /*
  Balance: {
   'Normal single leg, eyes closed, squat': false,
   'Normal tandem forward/backward': false,
   'notes': ""
  },
  Other: {
    'notes': ""
  }
  */
}
    </div>
  )
}
