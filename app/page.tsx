"use client";
import brandon from "./assets/meforportfolio.jpg";
import afoAPI from "./assets/All For One API.png";
import afoRebuild from "./assets/All For One NextJS.png";
import rpslsPrototype from "./assets/Rock Paper Scissors Lizard Spock .png";
import azure from "./assets/azure logo.png";
import figma from "./assets/figma logo.webp";
import github from "./assets/github logo.png";
import postman from "./assets/postman logo.webp";
import unity from "./assets/unity logo.png";
import vercel from "./assets/vercel logo.png";
import vscode from "./assets/vscode logo.png";
import resume from "./assets/resume1.png";
import resume2 from "./assets/resume2.png";
import Image from "next/image";``
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    router.push("https://vanhornbc2-z1uv.vercel.app");
    console.log("Image was clicked!");
  };
  const handleClick2 = () => {
    setIsClicked(!isClicked);
    router.push(
      "https://allforoneapi-hhdrdah6b0hgfgdz.westus3-01.azurewebsites.net",
    );
    console.log("Image was clicked!");
  };
  const handleClick3 = () => {
    setIsClicked(!isClicked);
    router.push(
      "https://rpslsprototype-heakdjezgtcvhfap.westus3-01.azurewebsites.net/RPS/RPSServices",
    );
    console.log("Image was clicked!");
  };
  const handleClick4 = () => {
    setIsClicked(!isClicked);
    router.push(
      "https://portal.azure.com/?quickstart=True#view/Microsoft_Azure_Resources/QuickstartCenterMenuBlade/~/overviewTab",
    );
    console.log("Image was clicked!");
  };
  const handleClick5 = () => {
    setIsClicked(!isClicked);
    router.push("https://www.figma.com");
    console.log("Image was clicked!");
  };
  const handleClick6 = () => {
    setIsClicked(!isClicked);
    router.push("https://github.com");
    console.log("Image was clicked!");
  };
  const handleClick7 = () => {
    setIsClicked(!isClicked);
    router.push("https://www.postman.com");
    console.log("Image was clicked!");
  };
  const handleClick8 = () => {
    setIsClicked(!isClicked);
    router.push("https://unity.com");
    console.log("Image was clicked!");
  };
  const handleClick9 = () => {
    setIsClicked(!isClicked);
    router.push("https://www.vercel.com");
    console.log("Image was clicked!");
  };
  const handleClick10 = () => {
    setIsClicked(!isClicked);
    router.push("https://code.visualstudio.com");
    console.log("Image was clicked!");
  };

  return (
    <div className="pt-5">
      <div className="bg-black text-white text-center whitespace-nowrap text-xl font-semibold">
        Brandons Portfolio
      </div>
      <div className="bg-white">
        <div className="columns-2 text-center">
          <div className="pt-50">
            <h5 className="text-2xl font-bold tracking-tight dark:text-black">
              About Me
            </h5>
            <p className="font-normal dark:text-black">
              Phone Number: 208-539-3690
            </p>
            <p className="font-normal dark:text-black">
              Email: bmdvanhorn@icloud.com
            </p>
            <p className="font-normal dark:text-black">
              I like playing video games and coding and watching shows and
              spending time with my cats.
            </p>
          </div>
          <div className="flex justify-center pt-8 pb-8">
            <Image
              alt="portfolio image"
              src={brandon}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>

      <div className="bg-black pt-3 pb-3 text-center">
        <h5 className="text-2xl font-bold tracking-tight dark:text-white">
          Projects
        </h5>
        <p className="pt-2 pb-8 font-normal dark:text-white">
          Some of the project i have made recently will be listed below.
        </p>
        <div className="columns-3">
          <div className="font-normal dark:text-white">
            All For One NextJS Rebuild
            <div
              onClick={handleClick}
              style={{ cursor: "pointer" }}
              className="pl-62"
            >
              <Image
                alt="afo nextjs image"
                src={afoRebuild}
                style={{
                  maxWidth: "27%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="font-normal dark:text-white">
            All For One Api
            <div
              onClick={handleClick2}
              style={{ cursor: "pointer" }}
              className="pl-64"
            >
              <Image
                alt="afo api image"
                src={afoAPI}
                style={{
                  maxWidth: "30%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="font-normal dark:text-white">
            Rock Paper Scissors Lizard Spock Prototype
            <div
              onClick={handleClick3}
              style={{ cursor: "pointer" }}
              className="pl-66"
            >
              <Image
                alt="rpsls prototype image"
                src={rpslsPrototype}
                style={{
                  maxWidth: "30%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <h5 className="text-2xl text-center font-bold tracking-tight dark:text-black">
          Skills
        </h5>
        <p className="text-center font-normal dark:text-black">
          Some skills I have are coding langauges for example javascript and c#
          and html and sql. Along with learning how to code for the past few
          months I also learned some programs or applications for example azure
          and vercel and visual studio code and github and figma and unity and
          postman to name a few. In my time at codestack we also learned how to
          make websites and create 2d projects in unity and how to host coded
          projects in nextjs or regular code with azure or similar programs.
        </p>
        <div className="font-normal dark:text-black">
          <div className="flex items-center">
            <div className="flex flex-col items-center" onClick={handleClick4} style={{ cursor: "pointer" }}>
              <p className="pt-4">Azure</p>
              <Image
                alt="azure logo"
                src={azure}
                style={{
                  maxWidth: "30%",
                  height: "auto",
                }}
              />
            </div>
            <div className="flex flex-col items-center" onClick={handleClick5} style={{ cursor: "pointer" }}>
              <p className="pt-20">Figma</p>
              <Image
                alt="figma logo"
                src={figma}
                style={{
                  maxWidth: "30%",
                  height: "auto",
                }}
              />
            </div>
            <div className="flex flex-col items-center" onClick={handleClick6} style={{ cursor: "pointer" }}>
              <p className="pt-4">Github</p>
              <Image
                alt="github logo"
                src={github}
                style={{
                  maxWidth: "30%",
                  height: "auto",
                }}
              />
            </div>
            {/* <div className="flex flex-col items-center pr-20" onClick={handleClick7} style={{ cursor: "pointer" }}>
              <p className="pt-55 pb-2">Postman</p>
              <Image
                alt="postman logo"
                src={postman}
                style={{
                  maxWidth: "50%",
                  height: "auto",
                }}
              />
            </div> */}
          </div>
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center pl-16" onClick={handleClick8} style={{ cursor: "pointer" }}>
              <p className="pt-4">Unity</p>
              <Image
                alt="unity logo"
                src={unity}
                style={{
                  maxWidth: "50%",
                  height: "auto",
                }}
              />
            </div>
            <div className="flex flex-col items-center pl-70" onClick={handleClick9} style={{ cursor: "pointer" }}>
              <p className="pt-4">Vercel</p>
              <Image
                alt="vercel logo"
                src={vercel}
                style={{
                  maxWidth: "70%",
                  height: "auto",
                }}
              />
            </div>
            <div className="flex flex-col items-center" onClick={handleClick10} style={{ cursor: "pointer" }}>
              <p className="pt-4">VsCode</p>
              <Image
                alt="vscode logo"
                src={vscode}
                style={{
                  maxWidth: "50%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-center">
        <h5 className="text-2xl font-bold tracking-tight dark:text-white">
          Linked In
        </h5>
        <p className="font-normal dark:text-white">
          www.linkedin.com/in/brandonvanhorn2
        </p>
      </div>
      <div className="bg-black text-center">
        <h5 className="text-2xl font-bold tracking-tight dark:text-white">
          Github
        </h5>
        <p className="font-normal dark:text-white">
          https://github.com/NotWhoops/portfolio
        </p>
      </div>

      <div className="bg-white text-center">
        <h5 className="text-2xl font-bold tracking-tight dark:text-black">
          Resume
        </h5>
        <p className="font-normal dark:text-black">
          <Image
                alt="unity logo"
                src={resume}
                style={{
                  maxWidth: "40%",
                  height: "auto",
                }}
              />
          <Image
                alt="unity logo"
                src={resume2}
                style={{
                  maxWidth: "40%",
                  height: "auto",
                }}
              />
        </p>
      </div>
    </div>
  );
}
