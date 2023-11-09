import { Timeline } from "flowbite-react";

import { useLoaderData } from "react-router-dom";
const Reviews = () => {
  const review = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto lg:px-36 px-20">
      <Timeline>
        {review.map((review) => (
          <Timeline.Item key={review?._id}>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>{review?.email}</Timeline.Time>
              <Timeline.Title>
                <p className="mt-2">{review?.title}</p>
              </Timeline.Title>
              <Timeline.Body>
                <p className="w-fit">{review?.description}</p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default Reviews;
