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

# Section 25: The Massive Color Project Part 2
# 183: Intro to Material UI and Adding Select
   npm i --save @material-ui/core

# 184: Adding Snackbar
   Comes from material-ui
   npm i --save @material-ui/icons
   import Snackbar from '@material-ui/core/Snackbar';
   import CloseIcon from '@material-ui/icons/Close';

# 185: Add Palette Footer
   Added key to each Colorbox being rendered in Palette

# 186: Integrating React Router
   npm i --save react-router-dom

# 187: Finding Palettes
   Added findPalette() to App.js

# 188: PaletteList and Links
   Working on the homepage
   Added PaletteList.js and .css

# Section 26: JSS & withStyles (Color App)
# 189: Introducting withStyles HOC
   npm i --save @material-ui/styles
   Added MiniPalette.js, import { withStyles } from '@material-ui/core/styles'

# 190: Styling MiniPalette with JSS

# 191: Styling PaletteList with JSS

# 192: Finishing Up MiniPalette

# Section 27: The Massive Color Project Part 3
# 193: Linking To Palettes

# 194: Brainstorming Single Color Palette

# 195: Adding More Links

# 196: Creating Single Color Palette

# 197: Displaying Shades in Single Color Palette

# 198: Adding Navbar and Footer

# 199: Add Go Back Box

# 200: Dynamic Text Color w/Luminosity
   chroma.js, used luminance()

# 201: Refactoring More Styles

# 202: Finish Refactoring Color Box

# Section 28: The Massive Color Project Part 4
# 203: Refactor Palette Styles

# 204: Move Styles Into New Folder

# 205: Refactor Navbar CSS

# 206: Overview of PaletteForm

# 207: Adding NewPalette Form

# 208: Adding Slide-Out Drawer
   from Material-ui

# 209: Adding Color Picker Component
   npm i --save react-color

# 210: Connecting Color Picker to Button

# 211: Creating Draggable Color Box

# 212: Introducing Form Validator
   npm i --save react-material-ui-form-validator

# Section 29: The Massive Color Project Part 5
# 213: Saving New Palettes

# 214: Add Palette Name Form

# 215: Styling Draggable Color Box

# 216: Adding Color Box Delete

# 217: It's Drag and Drop Time!
   npm i --save react-sortable-hoc

# Daily Work
# 218: Clear Palette and Random Color Buttons

# 219: Extract New Palette Nav

# 220: Extract Color Picker Component

# 221: Styling Palette Form Nav

# Section 30: The Massive Color Project Part 6
# 223: Adding Modals/Dialogs

# 224: Styling Dialog

# 225: Closiing Form & Adding Emoji
   npm i --save emoji-mart

# 226: Finish Emoji Picker Form

# 227: Moving JSS Styles Out

# 228: Tweak Form Styles

# 229: Saving to LocalStorage

# 230: Adding MiniPalette Delete Button

# 231; Finish MiniPalette Delete

# 232: Create Responsive Sizes Helper

# 233: Make Color box Responsive

# 234: Make Form & Navbar Responsive

# Section 30: The Massive Color Project Part 7
# 235: Make Palette List Responsive

