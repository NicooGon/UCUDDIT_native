import axios from "axios";

const ipAdress = "192.168.100.105";

export async function getPostsByTitle(title) {
    try {
        const response = await axios.get(`http://${ipAdress}:8080/postByTitle`, { params: { title } });
        return response.data;
    }
    catch (error) {
        console.error("Error fetching posts by title:", error);
        throw error;
    }
}

export async function createPost(postData) {
    try {
        const response = await axios.post(`http://${ipAdress}:8080/save/posts`, postData);
        return response.data;
    }
    catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
}

export async function getPosts() {
    try {
        const response = await axios.get(`http://${ipAdress}:8080/posts`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
}
