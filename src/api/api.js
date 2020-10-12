import axios from 'axios';

const API = {


    getUsers() {
        return axios
            .get(
                'https://jsonplaceholder.typicode.com/users'
            ).then((response) => {
                return response
            });

    },
    getPosts() {
        return axios
            .get(
                'https://jsonplaceholder.typicode.com/posts'
            ).then((response) => {

                return response
            });

    },
    getComments() {
        return axios
            .get(
                'http://jsonplaceholder.typicode.com/posts/1/comments'
            ).then((response) => {
                // console.log(response)
                return response
            });

    }

}


export default API;