'use client'

import Image from "next/image";
import { Card } from "flowbite-react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <Navbar fluid rounded>
        <NavbarBrand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Brandons Portfolio
          </span>
        </NavbarBrand>
      </Navbar>

      <div>
        <Card href="#" className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h5>
          <p className="font-normal text-black-700 dark:text-black-400">
            My name is Brandon and a few things about me are below.
          </p>
          <p className="font-normal text-black-700 dark:text-black-400">
            I like playing video games watching shows and spending time with my pet cats.
          </p>
          <p className="font-normal text-black-700 dark:text-black-400">
            Phone Number: 208-539-3690
          </p>
          <p className="font-normal text-black-700 dark:text-black-400">
            Email: bmdvanhorn@icloud.com
          </p>
        </Card>

        <Card href="#" className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Projects
          </h5>
          <p className="font-normal text-gray-700 dark:text-white">
            Some of the project i have made recently will be listed below.
          </p>
          <p className="font-normal text-gray-700 dark:text-white">
          <link rel="stylesheet" href="https://vanhornbc2-z1uv.vercel.app"/>
            All For One NextJS Rebuild
          </p>
          <p className="font-normal text-gray-700 dark:text-white">
          <link rel="stylesheet" href="https://allforoneapi-hhdrdah6b0hgfgdz.westus3-01.azurewebsites.net"/>
            All For One Api
          </p>
          <p className="font-normal text-gray-700 dark:text-white">
          <link rel="stylesheet" href="https://rpslsprototype-heakdjezgtcvhfap.westus3-01.azurewebsites.net/RPS/RPSServices"/>
            Rock Paper Scissors Lizard Spock Prototype
          </p>
        </Card>

        <Card href="#" className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Skills
          </h5>
          <p className="font-normal text-gray-700 dark:text-white">
            Some of my skills are listed below.
          </p>
          <p className="font-normal text-gray-700 dark:text-white">
            coding languages and subject learned in academy.
            like c# and javascript and other coding related subjects.
          </p>
        </Card>

        <Card href="#" className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            LinkedIn
          </h5>
          <p className="font-normal text-gray-700 dark:text-white">
            Here is where the LinkedIn would be.
          </p>
        </Card>

        <Card href="#" className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Resume
          </h5>
          <p className="font-normal text-gray-700 dark:text-white">
            Here is where the Resume would be.
          </p>
        </Card>
      </div>
    </div>
  );
}
