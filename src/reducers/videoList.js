import Redux from 'redux';

const sampleData = [];

var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  console.log(action)
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
        return action.videos;
    default:
        return state;
  }
};

export default videoListReducer;
