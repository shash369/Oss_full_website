import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
         Hello
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
           Know our <span className="text-lime-400">TEAM</span>
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <button className="bg-lime-500 text-white font-bold py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          <Link href={'/members'}>connect with us</Link>
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/ml.jpg",
  },
  {
    id: 2,
    src: "/ml.jpg",
  },
  {
    id: 3,
    src: "/ml.jpg",
  },
  {
    id: 4,
    src: "/ml.jpg",
  },
  {
    id: 5,
    src: "/ml.jpg",
  },
  {
    id: 6,
    src: "/ml.jpg",
  },
  {
    id: 7,
    src: "/ml.jpg",
  },
  {
    id: 8,
    src: "/ml.jpg",
  },
  {
    id: 9,
    src: "/ml.jpg",
  },
  {
    id: 10,
    src: "/ml.jpg",
  },
  {
    id: 11,
    src: "/ml.jpg",
    },
  {
    id: 12,
    src: "/ml.jpg",
    },
  {
    id: 13,
    src: "/ml.jpg",
    },
  {
    id: 14,
    src: "/ml.jpg",
    },
  {
    id: 15,
    src: "/ml.jpg",
    },
  {
    id: 16,
    src: "/ml.jpg",
    },
  {
    id: 17,
    src: "/ml.jpg",
    },
  {
    id: 18,
    src: "/ml.jpg",
    },
  {
    id: 19,
    src: "/ml.jpg",
    },
  {
    id:20,
    src: "/ml.jpg",
  },
  {
    id:21,
    src: "/webDev.jpg",
  },
    
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;