// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const leftPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-0.6, 0);
  const rightPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.6, 0);

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('react360', { /* initial props */ }),
    rightPanel,
  );

  r360.renderToSurface(
    r360.createRoot('test', { /* initial props */ }),
    leftPanel,
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('background_avengers.jpg'));

  // Creating a Video Player
  const player = r360.compositor.createVideoPlayer('myplayer');
  // Set the video to be played, and its format
  //player.setSource('./static_assets/avengers_preview.mp4', '2D');
  //r360.compositor.setBackgroundVideo('myplayer');
  //player.play();
}

window.React360 = {init};
