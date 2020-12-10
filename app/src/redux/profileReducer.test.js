import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "Yo", likesCount: 12 },
    { id: 2, message: "Privet", likesCount: 5 },
    { id: 3, message: "How are you?", likesCount: 19 },
    { id: 4, message: "It's my first post", likesCount: 27 },
  ],
};

it("length of posts should be incremented", () => {
  let action = addPostActionCreator("test tatushka");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(5);
});

it("message of new post should be correct", () => {
  let action = addPostActionCreator("test tatushka");

  let newState = profileReducer(state, action);

  expect(newState.posts[4].message).toBe("test tatushka");
});

it("after deleting length of messages should be decrement", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

it("after deleting length shouldn't be decrement if id is incorrect", () => {
    let action = deletePost(1000);
  
    let newState = profileReducer(state, action);
  
    expect(newState.posts.length).toBe(4);
  });
