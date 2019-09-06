import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={['sam wight', 'developer',]}
      />

      <section className="text-center">
        {/* <img
          src={catAndHumanIllustration}
          className="block mx-auto w-1/2"
          alt="Cat and human sitting on a couch"
        /> */}

        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">Hi there! This is under construction.</h2>

        <p className="leading-loose">
          I'm Sam Wight, a React, Typescript, and Rails dev and a student at the University of Alabama. {" "}
          <a
            href="https://linkedin.com/in/samwightt"
            className="font-bold no-underline text-blue-700 hover:text-blue-500"
          >Check out my LinkedIn!</a>
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
