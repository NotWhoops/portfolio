"use client";
import brandon from "./assets/meforportfolio.jpg";
import afoAPI from "./assets/All For One API.png";
import afoRebuild from "./assets/All For One NextJS.png";
import rpslsPrototype from "./assets/Rock Paper Scissors Lizard Spock .png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-5">
      <div className="bg-white">
        <div className="text-center whitespace-nowrap text-xl font-semibold dark:text-black">
          Brandons Portfolio
        </div>
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
          <div className="flex justify-center pb-8">
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
        <h5 className="text-2xl text-center font-bold tracking-tight dark:text-white">
          Projects
        </h5>
        <p className="text-center font-normal dark:text-white">
          Some of the project i have made recently will be listed below.
        </p>
        <div className="columns-3">
          <div className="font-normal dark:text-white">
            <link rel="stylesheet" href="https://vanhornbc2-z1uv.vercel.app" />
            All For One NextJS Rebuild
            <div className="pl-62">
              <Image
                alt="afo nextjs image"
                src={afoRebuild}
                style={{
                  maxWidth: "30%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="font-normal dark:text-white">
            <link
              rel="stylesheet"
              href="https://allforoneapi-hhdrdah6b0hgfgdz.westus3-01.azurewebsites.net"
            />
            All For One Api
            <div className="pl-64">
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
            <link
              rel="stylesheet"
              href="https://rpslsprototype-heakdjezgtcvhfap.westus3-01.azurewebsites.net/RPS/RPSServices"
            />
            Rock Paper Scissors Lizard Spock Prototype
            <div className="pl-66">
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

      <div className="bg-white text-center">
        <h5 className="text-2xl font-bold tracking-tight dark:text-black">
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
      </div>

      <div className="bg-black text-center">
        <h5 className="text-2xl font-bold tracking-tight dark:text-white">
          Linked In
        </h5>
        <p className="font-normal dark:text-white">
          Here is where the link for LinkedIn would be and some info about it.
        </p>
      </div>

      <div className="bg-white text-center">
        <h5 className="text-2xl font-bold tracking-tight dark:text-black">
          Resume
        </h5>
        <p className="font-normal dark:text-black">
          Here is where the link to the Resume would be and some a summary about
          me and info on the resume or some other infofmation.
        </p>
      </div>
    </div>
  );
}
