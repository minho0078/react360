import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Pano,
  Text,
  View,
  Image,
  Video,
  VideoControl,
  MediaPlayerState,
  asset,
} from 'react-360';
import test from './test';

// Create a player
//VideoModule.createPlayer('myplayer');
// Play a specific video
/*
VideoModule.play('myplayer', {
  source: {url: staticAssetURL('avengers_preview.mp4')}, // provide the path to the video
  stereo: '3DTB', // optionally, supply the format of the video
});
*/
// Display the video on the Environment
//Environment.setBackgroundVideo('myplayer');

export default class react360 extends React.Component {
  /*
  render() {
    return (
      <Image source={require('./static_assets/background.jpg')}  >
        <BasicVideoPlayer source={require('./static_assets/avengers_preview.mp4')} />
        <View style={styles.panel}>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              HELLO I AM MINHO
            </Text>
          </View>
        </View>
      </Image>
    );
  }
  */
  constructor(props) {
      super(props);
      this.state = {
        playerState: new MediaPlayerState({autoPlay: true, muted: true}), // init with muted, autoPlay
      };
  }

  render() {
    return (
      <View style={styles.panel}>
        <View
          style={{
            alignItems: 'center',
            layoutOrigin: [0, 0, 0],
            transform: [{translate: [0, 0, -4]}],
          }}>
          <Video
            style={{height: 600, width: 1000}}
            source={[
              asset('avengers_preview.mp4', {format: 'mp4'}),
            ]}
            playerState={this.state.playerState}
          />
          <VideoControl style={{height: 1, width: 1}} playerState={this.state.playerState} />
        </View>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
    color:'white'
  },
});

AppRegistry.registerComponent('react360', () => react360);
AppRegistry.registerComponent('test', () => test);