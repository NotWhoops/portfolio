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
            All For One NextJS Rebuild
          </p>
          <p className="font-normal text-gray-700 dark:text-white">
            Influential Person Website
          </p>
          <p className="font-normal text-gray-700 dark:text-white">
            All For One Api
          </p>
          <p className="font-normal text-gray-700 dark:text-white">
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
            Punctual or Early to most things
          </p>
          <p className="font-normal text-gray-700 dark:text-white">
            Restaurant Operation
          </p>
          <p className="font-normal text-gray-700 dark:text-white">
            Multitasking
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
