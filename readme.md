# Repo: REACT-Section-24 to 31
# Repo Description: Colt Steele's Modern React Bootcamp, Section 24 to 31
# The Massive Color Project

# 172: The New Stuff We Cover In This Project
   material-ui
   chroma.js
   emoji-mart
   react-sortable-hoc
   react-copy-to-clipboard
   React.pureComponent
   react-form-validator-core
   react-transition-group
   JSS

# 174: Creatiing the Palette Component
   npx create-react-app colors-app
   copied seedColors.js from github to src
   new file Palette.js

# 175: Color Box Basics
   new file ColorBox.js, ColorBox.css, Palette.css

# 176: Styling Color Box

# 177: Copying to Clipboard
   npm i --save react-copy-to-clipboard
   import {CopyToClipboard} from "react-copy-to-clipboard"

# 178: Copy Overlay Animation

# 179: Generating Shades of Colors
   npm i --save chroma-js
   import chroma from "chroma-js"

# 180: Adding Color Slider
   npm i --save rc-slider
   in Palette.js (will eventually move to navbar)
      import Slider from "rc-slider"
      import "rc-slider/assets/index.css"
      <Slider />
      Added a constructor to use state to keep track of values for the slider

# 181: Styling the Color Slider

# 182: Adding Navbar Component