import React from "react";
import "../styles/ThingsToDoGallery.css";

const activities = [
  {
    title: "Beach Relaxation",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    title: "Mountain Hiking",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8845mDHUECEw_SJ547WSb_jtTwjOPdLWmQ&s",
  },
  {
    title: "City Exploration",
    image: "https://cdn.mos.cms.futurecdn.net/gVVPzYXJz3WoDeC8xAVmZ8.jpg",
  },
  {
    title: "Cultural Experience",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*c5KVKzXZieArcTfnfsKYpA.jpeg",
  },
  {
    title: "Water Sports",
    image: "https://tourscanner.com/blog/wp-content/uploads/2017/10/Featured-image.jpg",
  },
  {
    title: "Food Tour",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHLFhYWeu7WrRXBGdodoKqo3AX61lEYoWlg&s",
  },
];

const ThingsToDoGallery = () => {
  return (
    <div className="things-to-do-container">
      <h2 className="gallery-title">Popular Things to Do</h2>
      <div className="gallery-grid">
        {activities.map((activity, index) => (
          <div className="gallery-item" key={index}>
            <img src={activity.image} alt={activity.title} />
            <p className="caption">{activity.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThingsToDoGallery;
