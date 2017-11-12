const Sequelize = require('sequelize')
const db = require('./db')

module.exports = db.define('exam', {
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  patient_id: {
    type: Sequelize.STRING,
    allowNull: false
  },
  team: {
    type: Sequelize.STRING,
    allowNull: false
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hpi: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  assessment_plan: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  physician_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  full_rom: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  tenderness_of_paraspinal_muscles: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  midline_cervical_tenderness: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  neck_notes: {
    type: Sequelize.TEXT
  },
  awake_alert_oriented: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  normal_language_responsiveness: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  normal_memory_and_concentration: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  ms_notes: {
    type: Sequelize.TEXT
  },
  face_symmetric: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  palate_symmetric: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  tongue_movement_symmetric: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  shoulder_shrug_normal: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  cranial_nerves_notes: {
    type: Sequelize.TEXT
  },
  pupils_equal_round_reactive_to_light: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  visual_fields_full: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  smooth_pursuit_normal: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  succades_normal: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  convergence: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  vor_normal: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  vor_suppression_normal: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  eye_notes: {
    type: Sequelize.TEXT
  },
  normal_proximal_distance_strength: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  finger_to_nose: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  moter_notes: {
    type: Sequelize.TEXT
  },
  normal_sensation_to_light_touch: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  sensory_notes: {
    type: Sequelize.TEXT
  },
  romberg_normal: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  fakuda_normal: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  proprioception_notes: {
    type: Sequelize.TEXT
  },
  normal_single_leg_eyes_closed_squat: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  normal_tandem_forward_backward: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  balance_notes: {
    type: Sequelize.TEXT
  },
  other_notes: {
    type: Sequelize.TEXT
  }
})
