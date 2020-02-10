import React, {useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Checkout from './Components/Checkout'
import CheckoutSuccess from './Components/CheckoutSuccess'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import './App.css'

function App() {
  const contact = {
    companyName: "My Company, Inc.",
    contactName: "John Doe",
    addressOne: "300 Red Robin Rd",
    addressTwo: "Portland, ME 04102",
    memo: "Just a note"
  }
  const myCarts =  [{
    title: 'Cart 1',
    items: [{
      title: 'Whose Body?',
      author: 'Dorothy L. Sayers',
      itemUrl: '/',
      price: 3.99,
      quantity: 1,
      isbn: 9780061043574
    },
    {
      title: 'The Nine Tailors',
      author: 'Dorothy L. Sayers',
      itemUrl: '/',
      price: 3.95,
      quantity: 2,
      isbn: 9780151658978
    }]
  },
  {
    title: 'Cart 2',
    items: [{
      title: 'Whose Body?',
      author: 'Dorothy L. Sayers',
      itemUrl: '/',
      price: 3.99,
      quantity: 1,
      isbn: 9780061043574
    },
    {
      title: 'The Nine Tailors',
      author: 'Dorothy L. Sayers',
      itemUrl: '/',
      price: 3.95,
      quantity: 1,
      isbn: 9780151658978
    }]
  },
  {
    title: 'Cart 3',
    items: []
  }]
  
  const [carts] = useState(myCarts)
  const [isCompleted, setIsCompleted] = useState(false)
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Centerpoint
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        {!isCompleted &&
          <Checkout title={carts[0].title} items={carts[0].items} setIsCompleted={setIsCompleted} />
        }
        {isCompleted &&
          <CheckoutSuccess items={carts[0].items} contact={contact} title={carts[0].title} />
        }
      </Container>
    </div>
  )
}

export default App;
