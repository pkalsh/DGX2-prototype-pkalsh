import React from 'react';
import { Fade } from 'react-slideshow-image';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const fadeImages = [
  'Images/test1.png',
  'images/test1.png',
  'images/test1.png'
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const useStyles = makeStyles(theme => ({

}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <a href="/PTtmp/tmp.html">Link to local tmp html</a> */}

          <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
        </div>
      </Fade>
    </div>
    </React.Fragment>
  )
}
