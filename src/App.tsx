import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import RefreshIcon from '@mui/icons-material/Refresh';
import { TabLayout } from './components/TabLayout';
import './scss/App.scss';
import categoryData from "./data/categories.json";
import bulletinData from "./data/bulletins.json";


function App() {
  const [editMode, setEditMode] = useState(false);
  const [bulletins, setBulletins] = useState(bulletinData);
  const [categories, setCategories] = useState(categoryData);

  //State var here for mode  edit/view
  //Pass it to tab layout.

  //Tab layout should display either the viewable documents, or the editable documents

  //See if react has an HTML friendly live editor & viewer 

  //Try to move the carousel buttons off to the side and make them permanent.

  return (
    <div className="app">
      <div className="site-main-body-wrapper">
      </div>

      <div className="bulletin-wrapper">
        <div className="bulletin-inner-wrapper">
          <div className="top-bar">
            <div className="btn-bar">
              <IconButton className="btn" size="small" onClick={() => { setEditMode(!editMode) }} ><EditIcon /> </IconButton>
              <IconButton className="btn" size="small"><RefreshIcon /> </IconButton>
              <IconButton className="btn" size="small"><CloseIcon /> </IconButton>
            </div>
          </div>
          <TabLayout editMode={editMode} bulletins={bulletins} categories={categories}></TabLayout>
        </div>
      </div>




    </div>
  );
}

export default App;
