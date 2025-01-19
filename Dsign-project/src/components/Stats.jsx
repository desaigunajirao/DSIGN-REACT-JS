import React from "react";
import StatCard from "./StatCard";
import shoppingBag from "../../public/Images/shopping-bag.svg"
import settingImg from "../../public/Images/settings.svg"
import cartImg from "../../public/Images/shopping-cart.svg"
import userImg from "../../public/Images/users.svg"


const statsArray = [
  {
    imgUrl: shoppingBag,
    num: "80K",
    title: " Our buyers",
    desc: " Follow a hashtag growth total  posts, videos and images.",
  },
  {
    imgUrl: settingImg,
    num: "90K",
    title: "Project completed",
    desc: " Follow a hashtag growth total posts, videos and images.",
  },
  {
    imgUrl: cartImg,
    num: "80%",
    title: " Happy buyers",
    desc: " Follow a hashtag growth total posts, videos and images.",
  },
  {
    imgUrl: userImg,
    num: "50+",
    title: "Team members",
    desc: " Follow a hashtag growth total posts, videos and images.",
  },
];

const Stats = () => {
  return (
    <div className="flex justify-between px-36">
      {statsArray.map((item) => {
        return (
          <StatCard
            imgUrl={item.imgUrl}
            num={item.num}
            title={item.title}
            desc={item.desc}
          />
        );
      })}
    </div>
  );
};

export default Stats;