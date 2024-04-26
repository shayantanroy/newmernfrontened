import React from 'react'
import {motion} from "framer-motion"
import me from "../../assets/20201220153509306.png"



const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Shayantan Roy</h3>

        <p>
          Hey, Everyone I am Shayantan Roy, the founder of B.tech Food Wala.
          <br />
          Our aim is to create the most tasty Food on our country.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;

