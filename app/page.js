"use client";
import Image from "next/image";
import profilePic from "./images/48183779-4AF9-48C2-9ECD-7D739AE287A2.jpg";
import Navbar from "./components/Navbar";
import computerCode from "./images/compurt-code.jpg";
import Stack from "./components/Stack";
import backGroundStyle from "./components/background.module.css";
import Foot from "./components/foot";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <br />
      <main>
        <div className="flex  justify-evenly flex-row text-black bg-white -mt-6 py-5">
          <div className="self-center">
            <h1 className="text-7xl mb-3">Devon Lapierre</h1>
            <h2 className="text-7xl">Full Stack Developer</h2>
            <div className="flex space-x-5 mt-6 text-3xl">
              <button className="bg-amber-600  text-white rounded h-16 w-32">
                GitHub
              </button>
              <button className="bg-amber-600 text-white rounded h-16 w-32">
                Linkedin
              </button>
            </div>
          </div>
          {/* <div className={`${backGroundStyle.child}`}> */}
          <motion.div
            // className="bg-red-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            duration={{ delay: 1 }}
          >
            <Image
              className="rounded-full"
              src={profilePic}
              alt="Picture of Devon"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
        <br />
        <section id="About" className="mt-10">
          <div className="flex  justify-center flex-row">
            <div>
              <Image
                src={computerCode}
                alt="Picture of Devon"
                width={500}
                height={500}
              />
            </div>
            <div className="w-[500px] ml-60">
              <h2 className="text-6xl mb-10">Introduction</h2>
              <p className="text-3xl mb-5">
                🚀 Hey there, I'm Devon Lapierre, your friendly Full Stack
                Maestro!
              </p>
              <p className="text-3xl ">
                🌐 My Creative Playground: Imagine the web as a vast canvas, and
                I'm the artist armed with my trusty paintbrushes – front-end and
                back-end technologies. My mission? To conjure up vibrant
                web-based experiences that will leave users absolutely
                spellbound!
              </p>
            </div>
          </div>
        </section>
        <section id="tech-stack">
          <Stack />
        </section>
        <section id="project-gallery"></section>
      </main>
      <footer className="bg-amber-600 py-2">
        <Foot />
      </footer>
    </>
  );
}
