import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import StarRating from './components/StarRating';
import Carousel from './components/Carousel';
import Accordian from './components/Accordian';
import AutoComplete from './components/AutoComplete';
import TicTacToe from './components/ticTacToe';
import PollWidget from './components/PollWidget';
import SelectableGrid from './components/SelectableGrid';
import DragAndDrop from './components/DragAndDrop';
import NestedCheckbox from './components/NestedCheckbox';
import InfiniteScroll from './components/InfiniteScroll';
import VirtualScroll from './components/VirtualScroll';
import FileExplorer from './components/FileExplorer';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/star" Component={StarRating}/>
        <Route exact path='/carousel' Component={Carousel}/>
        <Route exact path='/accordian' Component={Accordian}/>
        <Route exact path='/autocomplete' Component={AutoComplete}/>
        <Route exact path='/tictactoe' Component={TicTacToe}/>
        <Route exact path='/pollwidget' Component={PollWidget}/>
        <Route exact path='/selectablegrid' Component={SelectableGrid}/>
        <Route exact path='/draganddrop' Component={DragAndDrop}/>
        <Route exact path='/nestedcheckbox' Component={NestedCheckbox}/>
        <Route exact path='/infinitescroll' Component={InfiniteScroll}/>
        <Route exact path='/virtualscroll' Component={VirtualScroll}/>
        <Route exact path='/fileExplorer' Component={FileExplorer}/>
      </Routes>
    </Router>
  )
}

export default App;


// Star Rating - DONE
// Carousel - DONE
// Accordian - DONE
// AutoComplete - DONE
// Tic Tac Toe - DONE
// File-folder - 
// NestedCheckbox
// Pagination
// Infinite scroll with virtulization
// Breadcrumbs
// Tabs
// TypeAhead
// Google-calendar
// tic tac toe
// Form Validation
// File Upload
// Image Gallery
// Progress Bar
// Search Bar
// Sidebar Navigation
// Tabs
// Notification System
// Responsive Navbar
// Lightbox
// Date Picker
// Time Picker
// Multi-select Dropdown
// Range Slider
// Color Picker
// Context Menu
// Skeleton Loader
// Toast Notifications
// Rating Component
// Image Slider
// Video Player
// Audio Player
// Code Editor
// Markdown Editor
// JSON Viewer
// Syntax Highlighter
// Chat Interface
// File Explorer
// Kanban Board
// Gantt Chart
// Heatmap
// Tree View
// Data Table
// Pivot Table
// Dashboard Layout
// Analytics Dashboard
// E-commerce Product Page
// User Profile Page
// Login Form
// Registration Form
// Contact Form
// Feedback Form
// Survey Form
// Newsletter Signup Form
// Password Strength Meter
// Image Cropper
// Image Resizer
// QR Code Generator
// Barcode Scanner
// Signature Pad
// File Manager
// Task Manager
// Event Calendar
// Timeline Component
// Chat Bubble Component
// Progress Circle
// Circular Menu
// Floating Action Button
// Stepper Component
// Wizard Form
// Accordion Menu
// Vertical Tabs
// Horizontal Tabs
// Collapsible Sidebar
// Mega Menu
// Responsive Grid System
// Masonry Layout
// Infinite Scroll
// Virtual Scrolling
// Drag and Drop List
// Contextual Menu
// Image Zoom
// Image Lightbox
// Video Gallery
// Audio Playlist
// Code Snippet Viewer
// JSON Formatter
// XML Viewer
// CSV Viewer
// Markdown Previewer
// Syntax Error Highlighter
// Code Diff Viewer
// File Tree View
// Folder Structure Viewer
// Kanban Board with Drag and Drop
// Gantt Chart with Task Dependencies
// Heatmap Calendar
// Tree Structure Viewer
// Data Table with Sorting and Filtering
// Pivot Table with Aggregation
// Dashboard with Widgets
// Analytics Dashboard with Charts
// E-commerce Product Listing Page
// User Profile with Activity Feed
// Login Form with Social Media Login Options
// Registration Form with Captcha Verification
// Contact Form with Google Maps Integration
// Feedback Form with Rating System
// Survey Form with Multiple Question Types
// Newsletter Signup Form with Email Validation
// Password Strength Meter with Visual Feedback
// Image Cropper with Aspect Ratio Control
// Image Resizer with Drag Handles
// QR Code Generator with Customizable Options
// Barcode Scanner with Camera Access
// Signature Pad with Clear Button
// File Manager with Drag and Drop Upload
// Task Manager with Due Dates and Priorities
// Event Calendar with Recurring Events
// Timeline Component with Milestones
// Chat Bubble Component with Emojis
// Progress Circle with Percentage Display
// Circular Menu with Icon Options
// Floating Action Button with Speed Dial
// Stepper Component with Validation
// Wizard Form with Multi-step Navigation
// Accordion Menu with Nested Items
// Vertical Tabs with Icon Support
// Horizontal Tabs with Scrollable Content
// Collapsible Sidebar with Toggle Button
// Mega Menu with Multi-column Layout
// Responsive Grid System with Breakpoints
// Masonry Layout with Dynamic Item Heights
// Infinite Scroll with Load More Button
// Virtual Scrolling with Large Data Sets
// Drag and Drop List with Reorderable Items
// Contextual Menu with Right-click Support
// Image Zoom with Magnifier Effect
// Image Lightbox with Slideshow Feature
// Video Gallery with Thumbnails
// Audio Playlist with Track Controls
// Code Snippet Viewer with Line Numbers

