import talentBuyerDash from "../images/talentBuyerDash.jpg"
import beakSeekerImg from "../images/beakSeekerImg.jpg"
import swapiBoxImg from "../images/swapiBoxImg.jpg"
import tronGame from "../images/tronGame.jpg"
import weatherlyImage from "../images/weatherlyImage.jpg"

const projects = [
  {
    title: "TalentBuyer",
    description:
      "A full service organizational tool for music talent buyers to browse artists at all the major agencies, keep track of their venue's calendar and create and edit offers to send out to agents.",
    tech: [
      "React",
      "Router",
      "Redux",
      "Redux-thunk",
      "JWT",
      "Ruby on Rails",
      "Node",
      "Postgres",
    ],
    image: talentBuyerDash,
    github: "https://github.com/GraySmith00/talent-buyer-client",
    live: "https://talent-buyer.netlify.com",
  },
  {
    title: "BeakSeeker",
    description:
      "BeakSeeker is the most fun way to go birding! Find the best local hotspots. See which birds have been recently seen in your area. Earn badges for spotting birds and compete against your fellow birders to see who is the ultimate beak seeker!",
    tech: [
      "React",
      "Router",
      "Redux",
      "Redux-thunk",
      "Node",
      "Express",
      "MongoDB",
    ],
    image: beakSeekerImg,
    github: "https://github.com/GraySmith00/beak-seeker-client",
    live: "https://beakseeker.netlify.com",
  },
  {
    title: "StarWarsAwakens",
    description:
      "StarWarsAwakens is dynamic single page application that lets users interact with data from the Star Wars API in order to brush up on their favorite characters, planets, and vehicles. Users can save their favorite items for later viewing, as well as read random intro movie quotes at the bottom of the screen. Over 95% test coverage.",
    tech: ["React", "Router", "Enzyme", "Jest"],
    image: swapiBoxImg,
    github: "https://github.com/GraySmith00/gs-ml-swapibox",
    live: "https://gs-swapibox.herokuapp.com/",
  },
  {
    title: "Tron Arcade Game",
    description:
      "Classic 2 Player Tron arcade game built in Vanilla JS using OOP.",
    tech: ["Vanilla JS", "OOP"],
    image: tronGame,
    github: "https://github.com/GraySmith00/gs-bp-game-time",
    live: "https://graysmith00.github.io/gs-bp-game-time",
  },
  {
    title: "Weatherly",
    description:
      "Weatherly is a dynamic real-time weather app built in React. Data for this app is pulled from the WeatherUnderground API and the background photo matches the weather. Search autocomplete is implemented with a custom Binary Search Trie and user preferences are saved to local storage. The design for this app was made in Figma.",
    tech: ["React", "VanillaJS", "Figma"],
    image: weatherlyImage,
    github: "https://github.com/GraySmith00/gs-jm-weatherly",
    live: "https://gs-jm-weatherly.herokuapp.com/",
  },
]

export default projects
