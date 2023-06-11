import profilePageReducer, { InitialStateType } from "redux/profile/reducer"
import { AddPostActionType, deletePostActionType, ProfileTypeForUpdate } from "redux/profile/types"

it("new post should be added", () => {
  const initialState: InitialStateType = {
    postsData: [
      {
        id: "1",
        text: "Hello World",
        like: 10,
      },
      {
        id: "2",
        text: "Lorem Ipsum",
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
        id: "4",
        text: "New Post",
        like: 777,
      },
      {
        id: "1",
        text: "Hello World",
        like: 10,
      },
      {
        id: "2",
        text: "Lorem Ipsum",
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
        id: "1",
        text: "Hello World",
        like: 10,
      },
      {
        id: "2",
        text: "Lorem Ipsum",
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
        id: "2",
        text: "Lorem Ipsum",
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
