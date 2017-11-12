import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ViewAll extends Component {

  constructor (props) {
    super(props)
    this.state = {
      exams: []
    }
  }

  componentDidMount () {
    axios.get('/api/exam')
    .then(res => res.data)
    .then(exams => {
      this.setState({
        exams
      })
    })
    .catch(e => {
      console.log('e', e)
    })
  }

  render () {
    console.log('state', this.state)
    return (
      <div>
        <div>View All</div>
        <div>
        <table>
        <tbody>
        <tr>
          <th>Patient ID</th>
          <th>Physician</th>
          <th>Date</th>
        </tr>
        {
          this.state.exams.map(exam => {
            return (
              <tr key={exam.id}>
                <td><Link to={{ pathname: `/view/${exam.id}`, state: exam}}>{exam.patient_id}</Link></td>
                <td>{exam.physician_name}</td>
                <td>{exam.date}</td>
              </tr>
              )
          })
        }
        </tbody>
        </table>
        </div>
      </div>
    )
  }
}
