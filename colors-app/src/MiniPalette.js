import React from "react"
import { withStyles } from '@material-ui/core/styles';

const styles = {
   root: {
      backgroundColor: "white",
      border: "1px solid black",
      borderRadius: "5px",
      padding: "0.5rem",
      position: "relative",
      overflow: "hidden",
      "&:hover": {
         cursor: "pointer"
      }
   },
   colors: {
      backgroundColor: "gray",

   },
   title: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "0",
      color: "black",
      paddingTop: "0.5rem",
      fontSize: "rem",
      position: "relative"
   },
   emoji: {
      marginLeft: "0.5rem",
      fontSize: "1.5rem"
   }
}

function MiniPalette(props){
   const { classes, paletteName, emoji } = props
   return(
      <div className={classes.root}>
         <di className={classes.colors}>

         </di>
         <div className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span> </div>
      </div>
   )
}

export default withStyles(styles)(MiniPalette)