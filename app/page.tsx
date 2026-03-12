import Image from "next/image";
import { Card } from "flowbite-react";

export default function Home() {
  return (
    <div>
      <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          About Me
        </h5>
        <p className="font-normal text-black-700 dark:text-black-400">
          My name is brandon and a few things about me are listed below.

        </p>
      </Card>

      <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Projects 
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Some of the project i have made recently will be listed below.

        </p>
      </Card>

      <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Skills
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Some of my skills are listed below.

        </p>
      </Card>

      <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          LinkedIn
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here is where the LinkedIn would be
        </p>
      </Card>

      <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Resume
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here is where the resume would be
        </p>
      </Card>
    </div>
  );
}
