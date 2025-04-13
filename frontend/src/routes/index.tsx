import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  MessageCircle,
  Rocket,
  Shield,
  Send,
  ChevronRight,
  Zap,
  Heart,
  Linkedin,
  Github,
  Facebook,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const TypingText = (text: string) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timer);
    }

    if (index === text.length) {
      const timer = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return (
    <div className="h-8">
      <motion.span>
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      </motion.span>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);
  const logoScale = useTransform(scrollY, [0, 500], [1, 0.9]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  const features = [
    {
      icon: <MessageCircle className="h-6 w-6 text-green-400" />,
      title: "Seamless Conversations",
      description:
        "Experience fluid, real-time messaging with elegant thread organization",
    },
    {
      icon: <Rocket className="h-6 w-6 text-purple-400" />,
      title: "Galaxy Exploration",
      description:
        "Discover new conversation spaces themed after celestial bodies",
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-400" />,
      title: "Zen Privacy",
      description: "End-to-end encryption with matcha-inspired peace of mind",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-zinc-900 to-gray-900 text-white relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"
        style={{ y: backgroundY }}
      />
      <motion.div
        className="absolute h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"
        style={{
          top: "20%",
          left: "30%",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-green-500/10 blur-3xl"
        style={{
          top: "50%",
          right: "20%",
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 5,
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-green-900/30 via-transparent to-transparent"
        animate={{
          background: [
            "linear-gradient(to top right, rgba(22, 101, 52, 0.3), transparent, transparent)",
            "linear-gradient(to top right, rgba(16, 185, 129, 0.2), transparent, transparent)",
            "linear-gradient(to top right, rgba(22, 101, 52, 0.3), transparent, transparent)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.nav
        className="relative z-10 px-6 py-5 flex justify-between items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center space-x-2"
          style={{ scale: logoScale }}
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center relative">
            <Zap className="h-5 w-5 text-white" />

            <motion.div
              className="absolute inset-0"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: "100%",
                height: "100%",
                transformOrigin: "center center",
              }}
            >
              <div
                className="absolute rounded-full bg-yellow-300"
                style={{
                  width: "8px",
                  height: "8px",
                  top: "-7px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </motion.div>

            <motion.div
              className="absolute inset-0"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: "100%",
                height: "100%",
                transformOrigin: "center center",
              }}
            >
              <div
                className="absolute rounded-full bg-purple-300"
                style={{
                  width: "6px",
                  height: "6px",
                  left: "-6px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
            </motion.div>

            <motion.div
              className="absolute inset-0"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: "100%",
                height: "100%",
                transformOrigin: "center center",
              }}
            >
              <div
                className="absolute rounded-full bg-blue-300"
                style={{
                  width: "6px",
                  height: "6px",
                  left: "-5px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
            </motion.div>
          </div>
          <motion.span
            className="text-xl font-bold"
            animate={{
              color: ["#10b981", "#8b5cf6", "#10b981"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Zorb
          </motion.span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          <motion.a
            className="hover:text-green-400 transition duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            href="#features"
          >
            Features
          </motion.a>
          <motion.a
            href="#about"
            className="hover:text-green-400 transition duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            About
          </motion.a>
          <motion.a
            href="#contact"
            className="hover:text-green-400 transition duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            Contact
          </motion.a>
          <Link
            to="/signin"
            className="bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-green-500/30 transition"
          >
            Sign in
          </Link>
        </div>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </motion.button>
      </motion.nav>
      {isMenuOpen && (
        <motion.div
          className="md:hidden absolute z-20 top-16 inset-x-0 bg-gray-900/95 backdrop-blur-sm py-4 px-6 border-b border-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex flex-col space-y-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#features"
              className="hover:text-green-400 transition py-2"
              variants={fadeInUp}
            >
              Features
            </motion.a>
            <motion.a
              href="#about"
              className="hover:text-green-400 transition py-2"
              variants={fadeInUp}
            >
              About
            </motion.a>

            <motion.a
              href="#contact"
              className="hover:text-green-400 transition py-2"
              variants={fadeInUp}
            >
              Contact
            </motion.a>
            <Link
              to="/signin"
              className="bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-green-500/30 transition w-full"
            >
              Sign in
            </Link>
          </motion.div>
        </motion.div>
      )}
      <motion.section
        className="relative z-10 px-6 pt-16 pb-24 md:pt-24 md:pb-32 max-w-7xl mx-auto"
        style={{ opacity: heroOpacity }}
      >
        <motion.div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                className="text-green-400 inline-block"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                Matcha
              </motion.span>{" "}
              <motion.span variants={fadeInUp}>Meets the</motion.span>{" "}
              <motion.span
                className="text-purple-400 inline-block"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                Cosmos
              </motion.span>
            </motion.h1>
            <motion.p
              className="mt-2 text-gray-300 text-lg md:text-xl"
              variants={fadeInUp}
            >
              {TypingText("Experience chat in a new dimension with Zorb.")}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <Link to="/signup">
                <motion.button
                  className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-green-500/30 transition flex items-center justify-center group"
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(16, 185, 129, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try now
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 5 }}
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <motion.div
              className="absolute -inset-4 rounded-xl bg-gradient-to-r from-green-500/20 to-purple-500/20 blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="relative bg-gray-800/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-12 bg-gray-900 flex items-center px-4 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-sm text-gray-400">Zorb Chat</div>
              </div>
              <div className="p-4 h-80">
                <motion.div
                  className="flex flex-col space-y-4"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    className="flex items-start"
                    variants={fadeInUp}
                    transition={{ delay: 1 * 0.5 }}
                  >
                    <motion.div
                      className={`h-8 w-8 rounded-full bg-purple-600 flex-shrink-0`}
                      whileHover={{ scale: 1.1 }}
                    />
                    <motion.div
                      className={`ml-3 bg-gray-700 rounded-lg p-3 rounded-tl-none max-w-xs`}
                      initial={{ opacity: 0, x: -20, y: 10 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ delay: 1 + 1 * 0.5, duration: 0.5 }}
                    >
                      <p className="text-sm">
                        Have you tried the new galaxy theme?
                      </p>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="flex items-start flex-row-reverse"
                    variants={fadeInUp}
                    transition={{ delay: 1 * 0.5 }}
                  >
                    <motion.div
                      className={`h-8 w-8 rounded-full bg-green-600 flex-shrink-0`}
                      whileHover={{ scale: 1.1 }}
                    />
                    <motion.div
                      className={`mr-3 bg-green-600/30 rounded-lg p-3 rounded-tr-none max-w-xs`}
                      initial={{ opacity: 0, x: -20, y: 10 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ delay: 1 + 2 * 0.5, duration: 0.5 }}
                    >
                      <p className="text-sm">
                        Yes! I love how it shows actual constellations as you
                        type!
                      </p>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    variants={fadeInUp}
                    transition={{ delay: 1 * 0.5 }}
                  >
                    <motion.div
                      className={`h-8 w-8 rounded-full bg-purple-600 flex-shrink-0`}
                      whileHover={{ scale: 1.1 }}
                    />
                    <motion.div
                      className={`ml-3 bg-gray-700 rounded-lg p-3 rounded-tl-none max-w-xs`}
                      initial={{ opacity: 0, x: -20, y: 10 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ delay: 1 + 3 * 0.5, duration: 0.5 }}
                    >
                      <p className="text-sm">
                        The matcha zen mode is perfect for focus time too.
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute bottom-4 inset-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                >
                  <motion.div
                    className="flex items-center bg-gray-700/50 border border-gray-600 rounded-full p-1 pl-4"
                    whileHover={{ borderColor: "rgba(16, 185, 129, 0.5)" }}
                  >
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="bg-transparent w-full focus:outline-none text-sm"
                    />
                    <motion.button
                      className="ml-2 h-8 w-8 rounded-full bg-green-500 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Send className="h-4 w-4 text-white" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-green-400"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.section>
      <motion.section
        id="features"
        className="relative z-10 px-6 py-20 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            animate={{
              color: ["#10b981", "#8b5cf6", "#10b981"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Galaxy-Class Features
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-300 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Experience the perfect blend of cosmic wonder and matcha serenity
            with our unique feature set.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gray-800/50 transition"
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(16, 185, 129, 0.2)",
              }}
            >
              <motion.div
                className="h-12 w-12 rounded-lg bg-gray-700/50 flex items-center justify-center mb-4"
                whileHover={{ rotate: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <motion.section
        className="relative z-10 px-6 py-20 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="relative">
          <motion.div
            className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-green-500/30 to-purple-500/30 blur-xl"
            animate={{
              background: [
                "linear-gradient(to right, rgba(16, 185, 129, 0.3), rgba(139, 92, 246, 0.3))",
                "linear-gradient(to right, rgba(139, 92, 246, 0.3), rgba(16, 185, 129, 0.3))",
                "linear-gradient(to right, rgba(16, 185, 129, 0.3), rgba(139, 92, 246, 0.3))",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-4"
              variants={fadeInUp}
            >
              Ready to Join the Cosmic Conversation?
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Launch into a new era of communication where the calm focus of
              matcha meets the endless wonder of the cosmos.
            </motion.p>
            <motion.button
              className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-3 rounded-full font-medium text-lg hover:shadow-lg hover:shadow-green-500/30 transition relative overflow-hidden"
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(16, 185, 129, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span className="relative z-10">Get Started</motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.footer
        className="relative z-10 px-6 py-12 border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex justify-between gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-gray-400 flex gap-2 ">
              Made with <Heart className="text-red-500" /> by Rekasa
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <Linkedin />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <Github />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <Facebook />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
