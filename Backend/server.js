// // A small local backend for the StyleNest project.
// // No cloud account, no sign-up - the "database" is a file called db.json
// // that lowdb reads and writes for us, sitting right here in this folder.

// const express = require('express')
// const cors = require('cors')
// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')
// const { v4: uuidv4 } = require('uuid')
// const seedProducts = require('./seedData')

// const adapter = new FileSync('db.json')
// const db = low(adapter)

// // db.defaults() only fills these in if db.json doesn't have them yet,
// // so this is safe to run every time the server starts.
// db.defaults({ products: [], orders: [],users: [] }).write()

// // Seed the products table once, the first time the server runs.
// if (db.get('products').size().value() === 0) {
//   db.set('products', seedProducts).write()
//   console.log(`Seeded ${seedProducts.length} products into db.json`)
// }

// const app = express()
// app.use(cors())
// app.use(express.json())

// // GET /api/products - returns the full product catalog
// app.get('/api/products', (req, res) => {
//   const products = db.get('products').value()
//   res.json(products)
// })

// // POST /api/orders - saves a new order
// app.post('/api/orders', (req, res) => {
//   const { items, amount, address, paymentMethod } = req.body

//   if (!items || items.length === 0) {
//     return res.status(400).json({ error: 'Order must have at least one item' })
//   }

//   const order = {
//     id: uuidv4(),
//     items,
//     amount,
//     address,
//     paymentMethod,
//     status: 'Order Placed',
//     createdAt: new Date().toISOString()
//   }

//   db.get('orders').push(order).write()
//   res.status(201).json(order)
// })

// // GET /api/orders - returns every order, most recent first
// // (there's no login system yet, so this isn't filtered per-user)
// app.get('/api/orders', (req, res) => {
//   const orders = db.get('orders').sortBy('createdAt').reverse().value()
//   res.json(orders)
// })
// // POST /api/signup - creates a new user
// app.post('/api/signup', (req, res) => {
//   const { name, email, password } = req.body

//   if (!name || !email || !password) {
//     return res.status(400).json({
//       message: 'Please fill all fields'
//     })
//   }

//   const existingUser = db.get('users')
//     .find({ email: email })
//     .value()

//   if (existingUser) {
//     return res.status(409).json({
//       message: 'An account with this email already exists'
//     })
//   }

//   const newUser = {
//     id: uuidv4(),
//     name,
//     email,
//     password
//   }

//   db.get('users').push(newUser).write()

//   res.status(201).json({
//     success: true,
//     message: 'Account created successfully'
//   })
// })

// // POST /api/login - checks user credentials
// app.post('/api/login', (req, res) => {
//   const { email, password } = req.body

//   const user = db.get('users')
//     .find({ email: email })
//     .value()

//   if (!user || user.password !== password) {
//     return res.status(401).json({
//       success: false,
//       message: 'Invalid email or password'
//     })
//   }

//   res.json({
//     success: true,
//     message: 'Login successful',
//     user: {
//       id: user.id,
//       name: user.name,
//       email: user.email
//     }
//   })
// })

// const PORT = 4000
// app.listen(PORT, () => {
//   console.log(`Backend running at http://localhost:${PORT}`)
// })


const express = require('express')
const cors = require('cors')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const { v4: uuidv4 } = require('uuid')
const seedProducts = require('./seedData')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({
  products: [],
  orders: [],
  users: []
}).write()

// Seed products
if (db.get('products').size().value() === 0) {
  db.set('products', seedProducts).write()
  console.log(`Seeded ${seedProducts.length} products into db.json`)
}

const app = express()

app.use(cors())
app.use(express.json())

// ==================== PRODUCTS ====================

app.get('/api/products', (req, res) => {
  const products = db.get('products').value()
  res.json(products)
})

// // ==================== SIGN UP ====================
// app.post('/api/signup', (req, res) => {
//   console.log('SIGNUP REQUEST:', req.body)

//   const { name, email, password } = req.body

//   if (!name || !email || !password) {
//     return res.status(400).json({
//       message: 'Please fill all fields'
//     })
//   }

//   const users = db.get('users').value() || []
//   const existingUser = users.find(user => user.email === email)

//   if (existingUser) {
//     return res.status(409).json({
//       message: 'An account with this email already exists'
//     })
//   }

//   const newUser = {
//     id: uuidv4(),
//     name,
//     email,
//     password
//   }

//   db.get('users').push(newUser).write()

//   res.status(201).json({
//     success: true,
//     message: 'Account created successfully'
//   })
// })
// ==================== SIGN UP ====================

app.post('/api/signup', (req, res) => {
  try {
    console.log('SIGNUP REQUEST:', req.body)

    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Please fill all fields'
      })
    }

    const existingUser = db.get('users')
      .find({ email: email })
      .value()

    if (existingUser) {
      return res.status(409).json({
        message: 'An account with this email already exists'
      })
    }

    const newUser = {
      id: uuidv4(),
      name: name,
      email: email,
      password: password
    }

    db.get('users').push(newUser).write()

    return res.status(201).json({
      success: true,
      message: 'Account created successfully'
    })
  } catch (err) {
    console.error('CRITICAL SIGNUP ERROR:', err)
    return res.status(500).json({
      success: false,
      message: 'Server error during signup',
      error: err.message
    })
  }
})

// app.post('/api/signup', (req, res) => {
//   console.log('SIGNUP REQUEST:', req.body)

//   const { name, email, password } = req.body

//   if (!name || !email || !password) {
//     return res.status(400).json({
//       message: 'Please fill all fields'
//     })
//   }

//   const existingUser = db.get('users')
//     .find({ email: email })
//     .value()

//   if (existingUser) {
//     return res.status(409).json({
//       message: 'An account with this email already exists'
//     })
//   }

//   const newUser = {
//     id: uuidv4(),
//     name: name,
//     email: email,
//     password: password
//   }

//   db.get('users').push(newUser).write()

//   res.status(201).json({
//     success: true,
//     message: 'Account created successfully'
//   })
// })

// ==================== LOGIN ====================

app.post('/api/login', (req, res) => {
  console.log('LOGIN REQUEST:', req.body)

  const { email, password } = req.body

  const user = db.get('users')
    .find({ email: email })
    .value()

  if (!user || user.password !== password) {
    return res.status(401).json({
      success: false,
      message: 'Invalid email or password'
    })
  }

  res.json({
    success: true,
    message: 'Login successful',
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  })
})

// ==================== ORDERS ====================

app.post('/api/orders', (req, res) => {
  const { items, amount, address, paymentMethod } = req.body

  if (!items || items.length === 0) {
    return res.status(400).json({
      error: 'Order must have at least one item'
    })
  }

  const order = {
    id: uuidv4(),
    items,
    amount,
    address,
    paymentMethod,
    status: 'Order Placed',
    createdAt: new Date().toISOString()
  }

  db.get('orders').push(order).write()

  res.status(201).json(order)
})

app.get('/api/orders', (req, res) => {
  const orders = db.get('orders')
    .sortBy('createdAt')
    .reverse()
    .value()

  res.json(orders)
})

// ==================== START SERVER ====================

const PORT = 4000

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`)
})




