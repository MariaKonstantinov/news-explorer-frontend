import dogImage from "../images/dog_image.png";
import lagoDiBraiesImage from "../images/lagodibraies_image.png";
import yellowstoneImage from "../images/yellowstone_image.png";
import grandTetonImage from "../images/grand-teton_image.png";
import nightPolarisImage from "../images/night-polaris_image.png";

const savedArticles = [
  {
    _id: "card 1",
    keyword: "Nature",
    title: 'Everyone Needs a Special "Sit Spot" in Nature',
    description:
      'Ever since I read Richard Louvs influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
    date: "November 4, 2020",
    source: "treehugger",
    image: dogImage,
    alt: "dog image",
  },
  {
    _id: "card 2",
    keyword: "Nature",
    title: "Nature makes you better",
    description:
      "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
    date: "February 19, 2019",
    source: "national geographic",
    image: lagoDiBraiesImage,
    alt: "lago di braies image",
  },
  {
    _id: "card 3",
    keyword: "Parks",
    title: "Grand Teton Renews Historic Crest Trail",
    description:
      "The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...",
    date: "November 4, 2020",
    source: "national parks traveler",
    image: grandTetonImage,
    alt: "grand teton image",
  },
  {
    _id: "card 4",
    keyword: "Yellowstone",
    title: "Nostalgic Photos of Tourists in U.S. National Parks",
    description:
      "Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...",
    date: "October 19, 2020",
    source: "national geographic",
    image: yellowstoneImage,
    alt: "yellowstone image",
  },
  {
    _id: "card 5",
    keyword: "Photography",
    title: "Scientists Don't Know Why Polaris Is So Weird",
    description:
      "Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them.",
    date: "March 16, 2020",
    source: "treehugger",
    image: nightPolarisImage,
    alt: "night polaris image",
  },
];

export default savedArticles;
