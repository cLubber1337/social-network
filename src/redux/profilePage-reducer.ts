export type PostsType = {
    id: number,
    text: string,
    photo: string,
    like: number
}
export type PostType = {
    id: number,
    text: string,
    photo: string,
    like: number
}
export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: null | string,
        website: null | string,
        vk: null | string,
        twitter: null | string,
        instagram: null | string,
        youtube: null | string,
        github: null | string,
        mainLink: null | string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: string,
    userId: number,
    photos: {
        "small": null | string,
        "large": null | string
    }
}

export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateNewPostTextType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type SetUserProfileType = {
    type: "SET-USER-PROFILE"
    profile: ProfileType[]
}

type ActionTypes = AddPostActionType | UpdateNewPostTextType | SetUserProfileType

export type InitialStateType = typeof initialState

let initialState = {
    newPostText: "",
    postsData: [
        {
            id: 1,
            text: "Haven't heard from you for a long time",
            photo: "https://img.freepik.com/premium-vector/man-dashiki-fashion-model_726184-234.jpg?w=826",
            like: 2
        },
        {
            id: 2,
            text: "Baby, I love you! Come back, please!",
            photo: "https://img.freepik.com/free-vector/korean-drawing-style-character-design_52683-92286.jpg?w=826&t=st=1671760295~exp=1671760895~hmac=a9c8ddfc28e01fc5e416f6f10e1e3db6b696cbf23900fd1c9fb313b6a4612ac8",
            like: 15
        },
        {
            id: 3,
            text: "I drank like a pig yesterday!",
            photo: "https://img.freepik.com/premium-vector/cartoon-style-illustration-man-smile-confidently-with-crossed-hand-chest_7443-231.jpg?w=826",
            like: 10
        },
    ] as PostType[],
    profile: [] as ProfileType[],
}

const profilePageReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: 4,
                text: state.newPostText,
                photo: "https://img.freepik.com/free-vector/korean-drawing-style-character-design_52683-92286.jpg?w=826&t=st=1671760295~exp=1671760895~hmac=a9c8ddfc28e01fc5e416f6f10e1e3db6b696cbf23900fd1c9fb313b6a4612ac8",
                like: 777
            }
            return {...state, postsData: [newPost, ...state.postsData], newPostText: ""}
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPost: () => AddPostActionType = () => {
    return {type: "ADD-POST"}
}
export const updateNewPostText: (text: string) => UpdateNewPostTextType = (text: string) => {
    return {type: "UPDATE-NEW-POST-TEXT", newText: text}
}
export const setUserProfile = (profile: ProfileType[]): SetUserProfileType => {
    return {type: "SET-USER-PROFILE", profile}
}

export default profilePageReducer