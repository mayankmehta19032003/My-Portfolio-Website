import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText("mayankmehta880@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/profile-photo.png"
              alt="grid-1"
              className="w-full rounded-br-full rounded-bl-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Mayank mehta</p>
              <p className="grid-subtext ">
                I'm a passionate software developer skilled in both front-end
                and back-end development. I focus on creating dynamic web
                applications and specialize in building immersive 3D animated
                websites. I continually seek to enhance my skills and knowledge.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="flex flex-wrap justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
                alt="Tech Logo 1"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
                alt="Tech Logo 2"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/JavaScript.svg"
                alt="Tech Logo 3"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968282.png"
                alt="Tech Logo 4"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/C.svg"
                alt="Tech Logo 5"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/Bootstrap.svg"
                alt="Tech Logo 6"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"
                alt="Tech Logo 7"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/React.svg"
                alt="Tech Logo 8"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/Sass.svg"
                alt="Tech Logo 9"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/Three.js.svg"
                alt="Tech Logo 10"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/Node.js.svg"
                alt="Tech Logo 11"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/Express.svg"
                alt="Tech Logo 12"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/PostgresSQL.svg"
                alt="Tech Logo 13"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/Azios.svg"
                alt="Tech Logo 14"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/Firebase.svg"
                alt="Tech Logo 15"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/Git.svg"
                alt="Tech Logo 16"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png"
                alt="Tech Logo 17"
                className="w-12 h-12 m-2"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg"
                alt="Tech Logo 18"
                className="w-12 h-12 m-2"
              />
              {/* Add more logos as needed */}
            </div>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext ">
                I specialize in <b>React</b>, alongside front-end technologies
                like <b>HTML</b>, <b> CSS</b>, <b>Javascript</b>, and{" "}
                <b>Tailwind CSS</b>. On the back end, I work with <b>Node.js</b>
                ,<b>Express.js</b> , and <b>PostgreSQL</b>, and I’m also
                proficient in <b>Java</b> and <b>RESTful APIs</b>.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                Remote Work and Location Flexibility.
              </p>
              <p className="grid-subtext">
                I am based in India and available for remote work. I am also
                open to opportunities in the following cities: Jaipur, Noida,
                Gurugram, Pune, Kota and Bangalore.
              </p>
              <a
                href="/assets/Mayank-mehta-resume.pdf"
                download="MayankMehta_Resume.pdf"
              >
                <Button name="Resume" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3 ">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My passion for coding</p>
              <p className="grid-subtext">
                Coding isn't just my job - it's my passion. I love the thrill of
                problem-solving and turning abstract ideas into tangible
                results. Every project is a new puzzle, and I'm constantly
                learning and growing as a developer. The satisfaction of seeing
                something I've created come to life is incredibly rewarding.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2 ">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={copied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">
                  mayankmehta880@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
