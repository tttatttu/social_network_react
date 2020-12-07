const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POSY_TEX = 'UPDATE-NEW-POSY-TEX';

let initialState = {
  posts: [
    {id:1, message: 'Yo', likesCount: 12},
    {id:2, message: 'Privet', likesCount: 5},
    {id:3, message: 'How are you?', likesCount: 19},
    {id:4, message: 'It\'s my first post', likesCount: 27}
  ],
  newPostText: 'ha-ha-ha'
};

const profileReducer = (state = initialState, action)  => {
  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id:5,
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POSY_TEX:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostActionCreator = (text) => 
  ({type: UPDATE_NEW_POSY_TEX, newText: text})

export default profileReducer;