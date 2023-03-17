import axios from "axios";

const getUser = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + post_id
    );

    resolve(data);
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + post_id
    );

    resolve(data);
  });
};

(async () => {
  try {
    const post = await getPost(1);
    const user = await getUser(1);

    console.log(post);
    console.log(user);
  } catch (e) {
    console.log(e);
  }
})();
