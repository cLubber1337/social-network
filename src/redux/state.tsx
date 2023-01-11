export type PostsType = {
    id: number,
    text: string,
    photo: string,
    like: number
}
export type DialogsDataType = {
    id: number,
    name: string
}
export type MessagesDataType = {
    id: number,
    message: string
}
export type ProfilePageType = {
    postsData: PostsType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    getState: () => void
    _callSubscriber: () => void
    addPost:() => void
    updateNewPostText:(newText: string) => void
    subscribe: (observer:() => void) => void
}


let store: StoreType = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Zina"},
                {id: 3, name: "Kali"},
                {id: 4, name: "Igor"},
                {id: 5, name: "Henry"},
                {id: 6, name: "Nina"},
            ],
            messagesData: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How do you do?"},
                {id: 3, message: "I go to school!"},
                {id: 4, message: "I like play basketball"},
                {id: 5, message: "My name is AbubaBaba"},
                {id: 6, message: "What!?????"},
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("Was changed")
    },
    addPost() {
        let newPost: PostsType = {
            id: 4,
            text: this._state.profilePage.newPostText,
            photo: "https://img.freepik.com/free-vector/korean-drawing-style-character-design_52683-92286.jpg?w=826&t=st=1671760295~exp=1671760895~hmac=a9c8ddfc28e01fc5e416f6f10e1e3db6b696cbf23900fd1c9fb313b6a4612ac8",
            like: 777
        }
        this._state.profilePage.postsData.unshift(newPost)
        // this._state.profilePage.newPostText = ""
        this._callSubscriber()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    }
}
export default store













