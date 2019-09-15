import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProfilePic from '../images/profile-pic.jpg'
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

const IndexPage = () => {
  React.useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) console.log("DARK")
    window.matchMedia("(prefers-color-scheme: dark)").addListener(e => console.log("HELLO"))
    window.matchMedia("(prefers-color-scheme: light)").addListener(e => console.log("LIGHT"))

    console.log("HI")
  })

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={['sam wight', 'developer',]}
      />

      <section className="text-center">
        <img src={ProfilePic}
          className="block mx-auto w-1/3 rounded-full"
          alt="My profile picture" />

        <h2 className="bg-white text-blue-800 text-2xl font-bold inline-block my-8 p-3">Hi there! I'm Sam Wight!</h2>
        <p className="text-blue-900 bg-white text-xl font-semibold mb-4 p-1">I'm a React, Typescript, and Rails dev. I'm also a computer science and applied math major at the University of Alabama.</p>
        <p className="text-blue-900 bg-white text-lg">Feel free to <a href="https://linkedin.com/in/samwightt" className="text-blue-800 font-semibold hover:bg-blue-600 hover:text-white rounded">connect with me on LinkedIn</a>{", "}
          <a href="https://twitter.com/samwightt" className="text-blue-500 font-semibold hover:bg-blue-400 hover:text-white rounded">follow my random ramblings on Twitter</a>{", "}
          <a href="https://github.com/samwightt" className="text-gray-800 font-semibold hover:bg-gray-800 hover:text-white rounded">see what I'm building on GitHub</a>{", "}
          <a href="mailto:me@samw.dev" className="text-green-600 font-semibold hover:bg-green-800 hover:text-white rounded">or contact me at my fancy email</a>.</p>
      </section>
    </Layout >
  );
}

export default IndexPage;
