import API from "../api/api";

const ADD = 'ADD';
const SELECT = 'SELECT';
const ADDNEWUSER = 'ADDNEWUSER';
const ADDPOST = 'ADDPOST';
const UPDMSG = 'UPDMSG';
const ADDPOSTS = 'ADDPOSTS';
const ADDCOMMENTS = 'ADDCOMMENTS';
const THEM = 'THEM'

let init = {
    them: true,
    registered: 0,
    loginned: '',
    clients: [],
    posts: [],
    selectedUser: null,
    user: null,
    comments: null,
    userMsg: []
};

const ClientsReducer = (state = init, action) => {


    switch (action.type) {



        case ADD:

            return {
                ...state,
                clients: action.data
            }

            case ADDPOSTS:
                return {
                    ...state,
                    posts: action.posts
                }

                case SELECT:

                    return {
                        ...state,
                        selectedUser: action.data
                    }
                    case ADDNEWUSER:

                        return {
                            ...state,
                            user: action.user
                        }

                        case ADDPOST:

                            return {
                                ...state,
                                userMsg: [...state.userMsg, action.post],
                            }
                            case UPDMSG:


                                return {
                                    ...state,
                                    userMsg: action.post
                                }
                                case ADDCOMMENTS:
                                    return {
                                        ...state,
                                        comments: action.comments
                                    }
                                    case THEM:
                                        console.log(state.them);
                                        return {
                                            ...state,
                                            them: !state.them
                                        }
                                        default:
                                            return state;
    }
};

export default ClientsReducer;

export const setState = (data) => ({

    type: ADD,
    data
});
export const setNewUser = (user) => ({

    type: ADDNEWUSER,
    user
});


export const selectUser = (data) => ({

    type: SELECT,
    data
});

export const createPost = (post) => ({

    type: ADDPOST,
    post
});
export const updStatusPost = (post) => ({
    type: UPDMSG,
    post
})
export const setPost = (posts) => ({
    type: ADDPOSTS,
    posts
})
export const setComments = (comments) => ({
    type: ADDCOMMENTS,
    comments
})
export const changeThem = () => ({
    type: THEM,

})

export const setNewUserAC = (newUser) => {

    return async (dispatch) => {


        dispatch(setNewUser(newUser));

    }
};

export const createPostAC = (post) => {

    console.log(post)
    return async (dispatch) => {

        dispatch(createPost(post));

    }


};
export const updStatusPostAC = (post) => {

    console.log(post)
    return async (dispatch) => {

        dispatch(updStatusPost(post));

    }


};
export const selectUserAC = (users, clients) => {


    return async (dispatch) => {

        var item = clients.find(item => item.id == users);
        dispatch(selectUser(item));

    }


};
export const getUser = () => {

    return async (dispatch) => {

        let response = await API.getUsers();
        dispatch(setState(response.data))

        //dispatch(setState(response));

    };
};

export const getPost = () => {

    return async (dispatch) => {


        let response = await API.getPosts();

        dispatch(setPost(response.data))


    };
};

export const getComments = () => {

    return async (dispatch) => {

        let response = await API.getComments();

        dispatch(setComments(response.data))

    };
};

export const changeThemAC = () => {

    return async (dispatch) => {

        dispatch(changeThem())

    };
};