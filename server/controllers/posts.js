import { v4 as uuidv4 } from "uuid";
export const getPosts = (req, res) => {
  try {
    res.status(200).json({ message: "User Called Successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createPosts = (req, res) => {
  const body = req.body;
  const postBody = { id: uuidv4(), ...body };

  res.send({
    message: "Post Created Successfully",
    users: postBody,
  });
};

export const getPostsById = (req, res) => {
  const id = req.params;

  res.send(id);
};

export const deletePosts = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send({ message: `User with ID: ${id} deleted from the database` });
};
export const updatePosts = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send({ message: `User with ID: ${id} update from the database` });
};
