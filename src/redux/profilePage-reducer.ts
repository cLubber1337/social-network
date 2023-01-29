import {AddPostActionType, PostsType, ProfilePageType, UpdateNewPostTextType} from "./store";

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
    ],

}

const profilePageReducer = (state: ProfilePageType = initialState, action: AddPostActionType | UpdateNewPostTextType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: 4,
                text: state.newPostText,
                photo: "https://img.freepik.com/free-vector/korean-drawing-style-character-design_52683-92286.jpg?w=826&t=st=1671760295~exp=1671760895~hmac=a9c8ddfc28e01fc5e416f6f10e1e3db6b696cbf23900fd1c9fb313b6a4612ac8",
                like: 777
            }
            state.postsData.unshift(newPost)
            state.newPostText = ""
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator: () => AddPostActionType = () => {
    return {type: "ADD-POST"}
}
export const updateNewPostTextActionCreator: (text: string) => UpdateNewPostTextType = (text: string) => {
    return {type: "UPDATE-NEW-POST-TEXT", newText: text}
}

export default profilePageReducer