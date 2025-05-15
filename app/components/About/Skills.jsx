import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ skillRef, isSkillRefInView }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      className="flex flex-col gap-12 justify-center"
      ref={skillRef}
    >
      {/* Skill Title */}
      <motion.h1
        initial={{ x: '-300px' }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-3xl bg-gradient-to-l from-black to-white sm:from-black sm:to-black bg-clip-text text-transparent"
      >
        Skills
      </motion.h1>

      {/* SKill List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isSkillRefInView ? 'visible' : 'hidden'}
        className="flex flex-wrap gap-4"
      >
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          HTML5
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          CSS3
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          Javascript (ES6)
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          React.js
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          Redux
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          Next.js
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          Tailwind CSS
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          GSAP
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          Framer Motion
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          SASS
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          ShadCN
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          Express.js
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          Node.js
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          Mongoose
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          MongoDB
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          MySQL
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          Firebase
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          Git
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          Github
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          Postman
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          Typescript
        </motion.div>
      </motion.div>

      {/* SKill Scroll SVG */}
      <motion.svg
        initial={{ opacity: 0.2, y: 0 }}
        animate={{ opacity: 1, y: '10px' }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: 'easeInOut',
        }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
      >
        <path
          d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
          stroke="#000000"
          strokeWidth="1"
        ></path>
        <path
          d="M12 6V14"
          stroke="#000000"
          strokeWidth="1"
        ></path>
        <path
          d="M15 11L12 14L9 11"
          stroke="#000000"
          strokeWidth="1"
        ></path>
      </motion.svg>
    </div>
  );
};

export default Skills;
