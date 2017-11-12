const examRouter = require('express').Router()
const Exam = require('../database/models/exam')

examRouter.post('/', (req, res, next) => {
  Exam.create(req.body)
  .then(exam => {
    res.json(exam)
  })
  .catch(error => {
    res.json(error)
  })
})

examRouter.get('/', (req, res, next) => {
  Exam.findAll()
  .then(allExams => {
    console.log("all exams")
    res.send(allExams)
  })
  .catch(next)
})

module.exports = examRouter
