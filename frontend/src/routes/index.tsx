import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Send,
  ChevronRight,
  Heart,
  Linkedin,
  Github,
  Facebook,
} from "lucide-react";

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
      <span>
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
      <div
        className="absolute h-64 w-64 rounded-full bg-purple-500/20 blur-3xl animate-pulse"
        style={{
          top: "20%",
          left: "30%",
          animationDuration: "15s",
        }}
      />
      <div
        className="absolute h-96 w-96 rounded-full bg-green-500/10 blur-3xl animate-pulse"
        style={{
          top: "50%",
          right: "20%",
          animationDuration: "20s",
          animationDelay: "5s",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-green-900/30 via-transparent to-transparent" />

      <section className="relative z-10 px-6 pt-16 pb-24 md:pt-24 md:pb-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-green-400 inline-block hover:scale-105 transition-transform">
                Matcha
              </span>{" "}
              <span>Meets the</span>{" "}
              <span className="text-purple-400 inline-block hover:scale-105 transition-transform">
                Cosmos
              </span>
            </h1>
            <p className="mt-2 text-gray-300 text-lg md:text-xl">
              {TypingText("Experience chat in a new dimension with Zorb.")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-green-500/30 transition flex items-center justify-center group hover:scale-105">
                  Try now
                  <div className="ml-2 ">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className="relative hover:animate-pulse">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-green-500/20 to-purple-500/20 blur-xl" />
            <div className="relative bg-gray-800/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl hover:scale-102 transition-transform">
              <div className="h-12 bg-gray-900 flex items-center px-4 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-sm text-gray-400">Zorb Chat</div>
              </div>
              <div className="p-4 h-80">
                <div className="flex flex-col space-y-4 animate-fade-in">
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-purple-600 flex-shrink-0 hover:scale-110 transition-transform" />
                    <div className="ml-3 bg-gray-700 rounded-lg p-3 rounded-tl-none max-w-xs">
                      <p className="text-sm">
                        Have you tried the new galaxy theme?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start flex-row-reverse">
                    <div className="h-8 w-8 rounded-full bg-green-600 flex-shrink-0 hover:scale-110 transition-transform" />
                    <div className="mr-3 bg-green-600/30 rounded-lg p-3 rounded-tr-none max-w-xs">
                      <p className="text-sm">
                        Yes! I love how it shows actual constellations as you
                        type!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-purple-600 flex-shrink-0 hover:scale-110 transition-transform" />
                    <div className="ml-3 bg-gray-700 rounded-lg p-3 rounded-tl-none max-w-xs">
                      <p className="text-sm">
                        The matcha zen mode is perfect for focus time too.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 inset-x-4 animate-fade-in-up">
                  <div className="flex items-center bg-gray-700/50 border border-gray-600 rounded-full p-1 pl-4 hover:border-green-500/50 transition-colors">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="bg-transparent w-full focus:outline-none text-sm"
                    />
                    <button className="ml-2 h-8 w-8 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 active:scale-90 transition-transform">
                      <Send className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20 max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-green-500/30 to-purple-500/30 blur-xl" />
          <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join the Cosmic Conversation?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Launch into a new era of communication where the calm focus of
              matcha meets the endless wonder of the cosmos.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-3 rounded-full font-medium text-lg hover:shadow-lg hover:shadow-green-500/30 transition relative overflow-hidden hover:scale-105 active:scale-95">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-6 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between gap-8">
            <p className="text-gray-400 flex gap-2">
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
          </div>
        </div>
      </footer>
    </div>
  );
}
