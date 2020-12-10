import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        {id:1, message: 'Yo', likesCount: 12},
        {id:2, message: 'Privet', likesCount: 5},
        {id:3, message: 'How are you?', likesCount: 19},
        {id:4, message: 'It\'s my first post', likesCount: 27}
      ],
      newPostText: 'ha-ha-ha'
      
    },
    
    dialogsPage: {
      dialogs: [
        {id:1, name: 'Sveta'},
        {id:2, name: 'Sasha'},
        {id:3, name: 'Anna'},
        {id:4, name: 'Tomy'}
      ],
      messages: [
        {id:1, message: 'Hi'},
        {id:2, message: 'How are you?'},
        {id:3, message: 'Yo'},
        {id:4, message: 'Yo'}
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  getState() {
    return this._state;
  },
  _rerenderEntireTree() {
    console.log('test');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;