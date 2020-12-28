import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";
import "./SearchPage.css";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRISZBdH0D1ltoQdfTMNbJpdErnj7k9DzfsDA&usqp=CAU"
        channel="Anton Francis Jeejo"
        verified
        subs="789K"
        noOfVideos={432}
        description="You can find awesome live tutorials of realtime application builds."
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="789K"
        description="React Js Demo session in AR Projects Ltd"
        channel="Anton Francis Jeejo"
        title="What is JWT token?"
        image="https://i.ytimg.com/vi/Xjncjdmz87Y/maxresdefault.jpg"
        timestamp="59 seconds ago"
      />
      <VideoRow
        views="1.4M"
        subs="789K"
        description="React Js Demo session in AR Projects Ltd"
        channel="Anton Francis Jeejo"
        title="What is JWT token?"
        image="https://i.ytimg.com/vi/Xjncjdmz87Y/maxresdefault.jpg"
        timestamp="59 seconds ago"
      />
      <VideoRow
        views="1.4M"
        subs="789K"
        description="React Js Demo session in AR Projects Ltd"
        channel="Anton Francis Jeejo"
        title="What is JWT token?"
        image="https://i.ytimg.com/vi/Xjncjdmz87Y/maxresdefault.jpg"
        timestamp="59 seconds ago"
      />
      <VideoRow
        views="1.4M"
        subs="789K"
        description="React Js Demo session in AR Projects Ltd"
        channel="Anton Francis Jeejo"
        title="What is JWT token?"
        image="https://i.ytimg.com/vi/Xjncjdmz87Y/maxresdefault.jpg"
        timestamp="59 seconds ago"
      />
    </div>
  );
};

export default SearchPage;
