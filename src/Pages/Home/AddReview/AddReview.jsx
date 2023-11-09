import axios from "axios";
import Swal from "sweetalert2";
import reviewImg from "../../../assets/images/review.png";

const AddReview = () => {
  const handleAddReview = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const title = form.title.value;
    const ratings = form.ratings.value;
    const description = form.description.value;

    const review = {
      email,
      name,
      title,
      ratings,
      description,
    };
    console.log(review);

    // add the review to backend
    axios
      .post("https://assignment-11-ride-share-server.vercel.app/review", review)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire("WoooW!!", "Review Added!", "success");
        }
        form.reset();
      });
  };
  return (
    <div className="md:flex items-center max-w-7xl mx-auto">
      <div className="w-full">
        <img src={reviewImg} alt="" />
      </div>
      <div className="w-full">
        <form onSubmit={handleAddReview}>
          <div className="w-full">
            <div className="grid px-10 py-10  gap-4 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Email "
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                  Ratings
                </label>
                <input
                  type="text"
                  name="ratings"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ratings"
                  required
                />
              </div>
            </div>
            <div className="-mt-10 mb-5 px-10">
              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Review
              </label>
              <textarea name="description" required className="w-full h-40" />
            </div>
            <div className=" mb-20 flex justify-center">
              <button className="bg-[#ee3e58] px-20 py-3 rounded-lg font-bold text-white">
                Add Review
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
