import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  return (
    <>
      <Form method="POST" className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your userId here
          </label>
          <input
            name="userId"
            type="number"
            placeholder="Your user id"
            className="form-control"
            id="userId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            name="title"
            type="text"
            placeholder="How are you feeling today"
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            name="body"
            rows="4"
            placeholder="Tell us more about it"
            className="form-control"
            id="body"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rections" className="form-label">
            Rections
          </label>
          <input
            type="number"
            placeholder="How many people reacted to this post"
            className="form-control"
            id="rections"
            name="reactions"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            name="tags"
            type="text"
            placeholder="Enter your hashtags using space"
            className="form-control"
            id="tags"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};

export async function CreatePostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
