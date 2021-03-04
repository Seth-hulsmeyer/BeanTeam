let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bean_feeder", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// HTML - EJ Media
const htmlVideoArray = [
  {
    category: "HTML",
    title: "Creating the first webpage",
    videoUrl:
      "https://www.youtube.com/watch?v=-USAeFpVf_A&list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB&index=2",
  },
  {
    category: "HTML",
    title: "Line Breaks, Spacing and Comments",
    videoUrl:
      "https://www.youtube.com/watch?v=i3GE-toQg-o&list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB&index=3",
  },
  {
    category: "HTML",
    title: "Ordered and Unordered lists",
    videoUrl:
      "https://www.youtube.com/watch?v=09oErCBjVns&list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB&index=4",
  },
  {
    category: "HTML",
    title: "Creating a table",
    videoUrl:
      "https://www.youtube.com/watch?v=wvR40su_XBM&list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB&index=5",
  },
];

//CSS Video Array
const cssVideoArray = [
  {
    category: "CSS",
    title: "Changing font type, color and size",
    link:
      "https://www.youtube.com/watch?v=UO0ZPL8yMpU&list=PLr6-GrHUlVf8JIgLcu3sHigvQjTw_aC9C&index=2",
  },
  {
    category: "CSS",
    title: "Multiple Selectors and writing rule for more than one element",
    link:
      "https://www.youtube.com/watch?v=JT0gyzbpD2U&list=PLr6-GrHUlVf8JIgLcu3sHigvQjTw_aC9C&index=3",
  },

  {
    category: "CSS",
    title: "Add a line to header and border property",
    link:
      "https://www.youtube.com/watch?v=hCoMjvtsyPA&list=PLr6-GrHUlVf8JIgLcu3sHigvQjTw_aC9C&index=4",
  },
  {
    category: "CSS",
    title: "Inheritance and overriding",
    link:
      "https://www.youtube.com/watch?v=Bj2ZCfDPP2A&list=PLr6-GrHUlVf8JIgLcu3sHigvQjTw_aC9C&index=5",
  },
  {
    category: "CSS",
    title: "Using Classes in CSS",
    link:
      "https://www.youtube.com/watch?v=u4dLB9NP3IA&list=PLr6-GrHUlVf8JIgLcu3sHigvQjTw_aC9C&index=6",
  },
];

// JS - EJ Media
const JsVideoArray = [
  {
    category: "JS",
    title: "Statements",
    link:
      "https://www.youtube.com/watch?v=tkw8QXIcmU4&list=PLr6-GrHUlVf96NLj3PQq-tmEB6woZjwEl&index=2",
  },

  {
    category: "JS",
    title: "Variables",
    link:
      "https://www.youtube.com/watch?v=IhKWfiNCoSY&list=PLr6-GrHUlVf96NLj3PQq-tmEB6woZjwEl&index=3",
  },

  {
    category: "JS",
    title: "Variables 2",
    link:
      "https://www.youtube.com/watch?v=UR71iavwMkE&list=PLr6-GrHUlVf96NLj3PQq-tmEB6woZjwEl&index=4",
  },

  {
    category: "JS",
    title: "Using an external File",
    link:
      "https://www.youtube.com/watch?v=r--dRuIiV7A&list=PLr6-GrHUlVf96NLj3PQq-tmEB6woZjwEl&index=5",
  },
];

// React - Acade-mind Media
const ReactVideoArray = [
  {
    category: "React",
    title: "What is React?",
    link: "https://www.youtube.com/watch?v=JPT3bFIwJYA",
  },

  {
    category: "React",
    title: "Set up Workspace with Webpack",
    link:
      "https://www.youtube.com/watch?v=uextYhQGP6k&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=2",
  },

  {
    category: "React",
    title: "Set up Git",
    link:
      "https://www.youtube.com/watch?v=LEu7FxUUr90&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=3",
  },

  {
    category: "React",
    title: "First Component",
    link:
      "https://www.youtube.com/watch?v=G40iHC-h0c0&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=4",
  },

  {
    category: "React",
    title: "Multiple Components",
    link:
      "https://www.youtube.com/watch?v=9wK4gHoOh1g&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=5",
  },
];

const userArray = [
  {
    first_name: "Seth",
    last_name: "Hulsmeyer",
    email: "seth.hulsmeyer@hotmail.com",
    password: "Bean123!",
    videos: [],
  },
  {
    first_name: "Seth",
    last_name: "Klusmire",
    email: "sethklusmire@gmail.com",
    password: "Bean123!",
    videos: [],
  },
  {
    first_name: "Sam",
    last_name: "Fan",
    email: "samisfan@msn.com",
    password: "Bean123!",
    videos: [],
  },
  {
    first_name: "Sam",
    last_name: "Peloquin",
    email: "speloqu24@gmail.com",
    password: "Bean123!",
    videos: [],
  },
];

db.BeanVideo.deleteMany({})
  .then(() =>
    db.BeanVideo.collection.insertMany([
      ...htmlVideoArray,
      ...cssVideoArray,
      ...JsVideoArray,
      ...ReactVideoArray,
      ...userArray,
    ])
  )
  .then(() => db.BeanUser.collection.insertMany(userArray))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });