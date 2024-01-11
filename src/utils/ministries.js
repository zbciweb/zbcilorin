import prison from "../assets/images/jail-prison.jpg";
import music from "../assets/images/music.webp";
import ministry2 from "../assets/images/ministry-2@1.5x.jpg";
import ministry3 from "../assets/images/ministry-3@1.5x.jpg";
import men from "../assets/images/men.webp";
import ministry5 from "../assets/images/ministry-5@1.5x.jpg";
import ministry6 from "../assets/images/ministry-6@1.5x.jpg";
let id =0;
export const __ministries = [
  {
    id: id+=1,
    name: "Music-Ministry",
    image: music,
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum."
  },
  {
    id: id+=1,
    name: "Drama-Ministry",
    image: ministry2,
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum."

  },
  {
    id: id+=1,
    name: "Youth-Ministry",
    image: ministry3,
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum."

  },
  {
    id: id+=1,
    name: "MMU",
    image: men,
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum."

  },
  {
    id: id+=1,
    name: "WMU",
    image: ministry5,
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum."

  },
  {
    id: id+=1,
    name: "Hotel-Ministry",
    image: ministry6,
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum."

  },
  {
    id: id+=1,
    name: "Prison-Ministry",
    image: prison,
  } 
  
];
