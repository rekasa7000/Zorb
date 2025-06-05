import { createFileRoute } from "@tanstack/react-router";
import { Heart, Linkedin, Github, Facebook } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className={`w-full relative inset-0 bg-gradient-to-b from-transparent to-gray-900/50`}>
        <div
          className="absolute h-64 w-64 rounded-full bg-purple-500/20 blur-3xl animate-pulse"
          style={{
            top: "20%",
            left: "30%",
            animationDuration: "15s",
          }}
        />
        <div className="text-[32.5rem] font-bold whitespace-nowrap transition-transform duration-100 ease-out h-full">
          <span className="text-c_secondary ">Zorb</span>
        </div>
      </div>
      <footer className="relative z-10 px-6 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between gap-8">
            <p className="text-gray-400 flex gap-2">
              Made with <Heart className="text-red-500" /> by Rekasa
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 transition">
                <Linkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">
                <Github />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
