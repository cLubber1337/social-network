import profilePageReducer, { InitialStateType } from "redux/profile/reducer"
import { AddPostActionType, deletePostActionType, ProfileTypeForUpdate } from "redux/profile/types"

it("new post should be added", () => {
  const initialState: InitialStateType = {
    postsData: [
      {
        id: 1,
        text: "Hello World",
        photo: "https://via.placeholder.com/150",
        like: 10,
      },
      {
        id: 2,
        text: "Lorem Ipsum",
        photo: "https://via.placeholder.com/150",
        like: 20,
      },
    ],
    profile: null,
    userStatus: "",
    updateProfile: {} as ProfileTypeForUpdate,
  }

  const action: AddPostActionType = {
    type: "ADD-POST",
    post: "New Post",
  }

  const expectedState: InitialStateType = {
    postsData: [
      {
        id: 4,
        text: "New Post",
        photo:
          "https://img.freepik.com/free-vector/korean-drawing-style-character-design_52683-92286.jpg?w=826&t=st=1671760295~exp=1671760895~hmac=a9c8ddfc28e01fc5e416f6f10e1e3db6b696cbf23900fd1c9fb313b6a4612ac8",
        like: 777,
      },
      {
        id: 1,
        text: "Hello World",
        photo: "https://via.placeholder.com/150",
        like: 10,
      },
      {
        id: 2,
        text: "Lorem Ipsum",
        photo: "https://via.placeholder.com/150",
        like: 20,
      },
    ],
    profile: null,
    userStatus: "",
    updateProfile: {} as ProfileTypeForUpdate,
  }
  const resultState = profilePageReducer(initialState, action)
  expect(resultState).toEqual(expectedState)
  expect(expectedState.postsData.length).toBe(3)
})

it("after deleting post should be deleted", () => {
  const initialState: InitialStateType = {
    postsData: [
      {
        id: 1,
        text: "Hello World",
        photo: "https://via.placeholder.com/150",
        like: 10,
      },
      {
        id: 2,
        text: "Lorem Ipsum",
        photo: "https://via.placeholder.com/150",
        like: 20,
      },
    ],
    profile: null,
    updateProfile: {} as ProfileTypeForUpdate,
    userStatus: "",
  }
  const action: deletePostActionType = {
    type: "DELETE-POST",
    id: 1,
  }
  const expectedState: InitialStateType = {
    postsData: [
      {
        id: 2,
        text: "Lorem Ipsum",
        photo: "https://via.placeholder.com/150",
        like: 20,
      },
    ],
    profile: null,
    userStatus: "",
    updateProfile: {} as ProfileTypeForUpdate,
  }
  const resultState = profilePageReducer(initialState, action)
  expect(resultState).toEqual(expectedState)
  expect(expectedState.postsData.length).toBe(1)
})
