import React from "react";
import styled from "styled-components";
import Tweet from "./Tweet";
import Projectify from "../../images/projectify.png";
import DailyDose from "../../images/dailydose.png";

const Container = styled.div`
  width: 100%;
`;

export default function TweetContainer({ mode }) {
  const tweets = [
    {
      type: "tweet",
      message:
        "Just launched this new twitter-inspired portfolio. Hope you guys enjoy it!",
      date: "June 11",
    },
    {
      type: "project",
      message:
        "Just deployed another project: Daily Dose! It's a content aggregation site with a React and Styled-Components front end, and a nodeJS server. It also uses a python script on the backend to aggregate data from various news sources.",
      date: "June 5",
      image: DailyDose,
      projectLink: 'https://dailydose.wl.r.appspot.com/',
      gitLink: 'https://github.com/namnguyen21/daily-dose'
    },
    {
      type: "project",
      message:
        "And just like that, bootcamp is done. Here's my final project: Projectify. It's a live task manager that allows for real-time collaboration and communication utilizing web sockets. Front end is built using React and Material UI, with a Node, Express, Mongo, and Socket.IO backend.",
      date: "May 1",
      projectLink: "https://projectify-test.herokuapp.com/project/view/eb0c9481-f6fe-4102-83c5-96c5e83c3653",
      gitLink: "https://github.com/namnguyen21/projectify-updated",
      previewLink: "https://youtube.com",
      image: Projectify,
    },
  ];

  const projects = tweets.filter((tweet) => tweet.type === "project");

  const render = (list) => {
    return list.map((el) => (
      <Tweet
        message={el.message}
        date={el.date}
        image={el.image ? el.image : null}
        projectLink={el.projectLink ? el.projectLink : null}
        gitLink={el.gitLink ? el.gitLink : null}
        previewLink={el.previewLink ? el.previewLink : null}
      />
    ));
  };
  return (
    <Container>
      {mode === "Tweets" ? render(tweets) : render(projects)}
      {/* <Tweet
        image={DailyDose}
        message="Just deployed another project: Daily Dose! It's a content aggregation site that uses a python script to scrape many news sources."
        date="June 5"
      />
      <Tweet
        image={Projectify}
        message="And just like that, bootcamp is done. Here's my final project: Projectify. It's a task manager that utilizes web sockets for real time changes and chat rooms."
        date="May 1"
        link="https://google.com"
      /> */}
    </Container>
  );
}
