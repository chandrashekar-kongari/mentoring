import { Box, Typography } from "@mui/material";
import "./scrollingcards.css";
import { motion, Variants } from "framer-motion";


const cardVariants= {
  offscreen: {
    y: 400
  },
  onscreen: {
    y: 30,
    rotate: -2,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 2
    }
  }
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB }) {
   const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.9 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants} >
        
        <Typography sx={{fontSize:'25px',fontWeight:'bold'}}>{emoji}</Typography>
     
      </motion.div>
    </motion.div>
  );
}

const food = [
  ["Create account, Next program start's from Jan 1st 2024", 205, 245],
  
  
];

export default function ScrollingCards() {
  return food.map(([emoji, hueA, hueB]) => (
    <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
  ));
}
