"use client";
import brandon from "./assets/meforportfolio.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-5">
      <div className="bg-white">
        <div className="text-center whitespace-nowrap text-xl font-semibold dark:text-black">
          Brandons Portfolio
        </div>
        <div className="columns-sm">
          <div>
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
          <div className="flex justify-end">
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

      <div className="bg-black pt-3 pb-3">
        <h5 className="text-2xl font-bold tracking-tight dark:text-white">
          Projects
        </h5>
        <p className="font-normal dark:text-white">
          Some of the project i have made recently will be listed below.
        </p>
        <p className="font-normal dark:text-white">
          <link rel="stylesheet" href="https://vanhornbc2-z1uv.vercel.app" />
          All For One NextJS Rebuild
        </p>
        <p className="font-normal dark:text-white">
          <link
            rel="stylesheet"
            href="https://allforoneapi-hhdrdah6b0hgfgdz.westus3-01.azurewebsites.net"
          />
          All For One Api
        </p>
        <p className="font-normal dark:text-white">
          <link
            rel="stylesheet"
            href="https://rpslsprototype-heakdjezgtcvhfap.westus3-01.azurewebsites.net/RPS/RPSServices"
          />
          Rock Paper Scissors Lizard Spock Prototype
        </p>
      </div>

      <div className="bg-white">
        <h5 className="text-2xl font-bold tracking-tight dark:text-black">
          Skills
        </h5>
        <p className="font-normal dark:text-black">
          coding languages and subject learned in academy. like c# and
          javascript and other coding related subjects.
        </p>
      </div>

      <div className="bg-black">
        <h5 className="text-2xl font-bold tracking-tight dark:text-white">
          LinkedIn
        </h5>
        <p className="font-normal dark:text-white">
          Here is where the LinkedIn would be.
        </p>
      </div>

      <div className="bg-white">
        <h5 className="text-2xl font-bold tracking-tight dark:text-black">
          Resume
        </h5>
        <p className="font-normal dark:text-black">
          Here is where the Resume would be.
        </p>
      </div>
    </div>
  );
}
