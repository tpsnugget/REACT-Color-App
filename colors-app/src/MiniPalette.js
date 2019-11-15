import React from "react"
import { withStyles } from '@material-ui/core/styles';

const styles = {
   main: {
      backgroundColor: "purple",
      border: "3px solid teal",
      "& h1": {
         color: "white"
      }
   },
   secondary: {
      backgroundColor: "pink"
   }
}

function MiniPalette(props){
   const {classes} = props
   return(
      <div className={classes.main}>
         <h1>MiniPalette</h1>
         <section className={classes.secondary}>dsflfsd</section>
      </div>
   )
}

export default withStyles(styles)(MiniPalette)