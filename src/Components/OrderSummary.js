import React from 'react'
import Divider from '@material-ui/core/Divider'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

const colorAccent = grey[600]
const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  author: {
    fontSize: '.7rem',
    color: colorAccent
  },
  title: {
    fontSize: '.8rem',
    fontWeight: 'bold'
  },
  info: {
    display: 'grid',
    gridTemplateColumns: 'max-content max-content',
    gridColumnGap: '.5rem',
    gridRowGap: '.25rem',
    textAlign: 'right',
    margin: '16px 16px 16px auto',
    '& p': {
      fontSize: '0.875rem'
    }
  },
  bold: {
    fontWeight: 'bold'
  },
  divider: {
    gridColumn: 'span 2'
  }
})

//@TODO: I used this function also in CartSingle, so it should be moved to a helper utility
const getTotals = (array) => {
  let index = 0
  let totals = {
    price: 0,
    quantity: 0
  }
  array.forEach((item, index) => { 
    totals.price = totals.price + (item.price * item.quantity)
    totals.quantity = totals.quantity + item.quantity
  })
  return totals
}

function OrderSummary(props) {
  const classes = useStyles()
  const totals = getTotals(props.items)
  //TODO calculate shipping
  const shipping = 0
  return (
    <div className={classes.container + " " + props.className}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>ISBN</TableCell>
            <TableCell>Qty.</TableCell>
            <TableCell >Price</TableCell>
            <TableCell >Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        	{props.items.map((item, index) => (
            <TableRow key={ index }>
              <TableCell component="th" scope="row">
                <Typography className={classes.title}>{item.title}</Typography>
                <Typography className={classes.author}>By {item.author}</Typography>
              </TableCell>
              <TableCell>{item.isbn}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell align="right">${item.price}</TableCell>
              <TableCell align="right">${(item.quantity * item.price).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.info}>
        <Typography>Sub-Total: </Typography>
        <Typography>${totals.price}</Typography>
        <Typography>Shipping: </Typography>
        <Typography>${shipping.toFixed(2)}</Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.bold}>Total: </Typography>
        <Typography className={classes.bold}>${totals.price + shipping}</Typography>
      </div>
    </div>
  )
}

export default OrderSummary