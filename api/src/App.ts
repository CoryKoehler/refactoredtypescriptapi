import * as express from 'express'
import * as loki  from 'lokijs'
const bodyParser = require('body-parser')
const moment = require('moment')

class App {
  public express
  public users 
  public events
  constructor () {
    //In-memory database(data clears once server is restarted)
    const db = new loki('loki.json')
    this.users = db.addCollection('users')
    this.events = db.addCollection('events')
    this.express = express()
    this.express.use(bodyParser.json());
    this.buildEndpoints()
  }

   public buildEndpoints (): void {
   const router = express.Router()

   router.get('/events/all', (req, res) => {
    const eventsAll = this.events.find({})
    const events  = [];
    eventsAll.forEach(event => 
      events.push({type: event.type,  created: event.meta.created, user: event.user } )
      )
    res.json(events)
  })

  router.get('/events/user/', (req, res) => {
    const {email} = req.query
    
    if(!email){
      res.status(500).json({
        message: 'Provide an email to search for events of user'
      })
      return
    }
    
    const events = []
    this.events.find({user: email}).forEach(event => events.push({type: event.type,  created: event.meta.created, user: event.user } ))
    res.json(events)
  })

  router.get('/events/lastday', (req, res) => {
    const timeLastDay = moment().utc().valueOf() - 86400000
    const eventsAll = this.events.find({})
    const events  = []
    // this could be solve also with a query directly on the created on the
    // designated db without the need to filter the results
    eventsAll.forEach(event => {
      if(event.meta.created < timeLastDay) return
      events.push({type: event.type,  created: event.meta.created, user: event.user })
    })
    res.json(events)
  })

  router.post('/signup', (req, res) => {

    const {email, phone, password} = req.body

    if(!email || !password){
      res.status(500).json({
        message: 'Provide required fields, Email or Passoword missing'
      })
      return
    }
    
    const user =  this.users.findOne( {'email': email} )

    if(user){
      res.status(500).json({
        message: 'User already exists'
      })
      return
    }
    
    this.users.insert({email, phone, password})

    res.json({
      message: `Created user with email ${email}`
    })

  })

  router.post('/login', (req, res) => {
    
    const {email, password} = req.body;
    
    if(!email || !password){
      res.status(500).json({
        message: 'Provide required fields, Email or Password missing'
      })
      return
    }
    
    const user =  this.users.findOne( {'email': email, password} )
    
    if(!user){
      res.status(500).json({
        message: 'User does not exist'
      })
      return
    }

    this.events.insert({type:'LOGIN', user: email})
    
    res.json({
      message: `Login ${user.email}`
    })

  })

  this.express.use('/', router)
 }

}

export default new App().express