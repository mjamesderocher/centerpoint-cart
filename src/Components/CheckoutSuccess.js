import React from 'react'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import OrderSummary from './OrderSummary'
import PrintIcon from '@material-ui/icons/Print'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  invoice: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'lightgrey',
    gridColumn: 'span 2',
    padding: '1rem',
    alignItems: 'center',
    '& h1': {
      fontSize: '2rem'
    }
  },
  info: {
    border: '1px solid',
    padding: '1rem',
    '& p': {
      fontSize: '0.875rem'
    }
  },
  bold: {
    fontWeight: 'bold'
  },
  summary: {
    gridColumn: 'span 2'
  },
  footer: {
    '& button': {
      marginLeft: '1rem'
    },
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1rem 0'
  }
})

function ContactInfo(props) {
  const classes = useStyles()
  return (
    <>
      <article className={classes.invoice}>
        <header className={classes.header}>
          <Typography variant="h1">Center Point</Typography>
          <Typography>Order: {props.title}</Typography>
        </header>
        <div className={classes.info}>
          <Typography className={classes.bold}>Invoice to:</Typography>
          <Typography>{props.contact.companyName}</Typography>
          {props.contact.contactName &&
            <Typography>{props.contact.contactName}</Typography>
          }
          {props.contact.addressOne &&
            <Typography>{props.contact.addressOne}</Typography>
          }
          {props.contact.addressTwo &&
            <Typography>{props.contact.addressTwo}</Typography>
          }
          {props.contact.memo &&
            <Typography>Memo: {props.contact.memo}</Typography>
          }
        </div>
        <div className={classes.info}>
          <Typography className={classes.bold}>Remit Payment to:</Typography>
          <Typography>Centerpoint</Typography>
          <Typography>1000 Street St</Typography>
          <Typography>City, ME 04000</Typography>
        </div>
        <OrderSummary items={props.items} className={classes.summary} />
      </article>
      <Divider />
      <div className={classes.footer}>
        <Button>
            Go to Dashboad
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PrintIcon />}
          >
            Print
          </Button>
      </div>
    </>
  )
}

export default ContactInfo