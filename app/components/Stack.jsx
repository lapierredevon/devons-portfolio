import Image from "next/image";
import reactIcon from "../images/react.png";
import postgresIcon from "../images/postgresql.png";
import javaScriptIcon from "../images/javascript-logo.png";
import htmlIcon from "../images/html.png";
import cssIcon from "../images/css3.png";
import bootIcon from "../images/bootstrap.png";
import typeIcon from "../images/typescript.png";
import nodeIcon from "../images/node-js.png";
import nextIcon from "../images/favicon.jpg";

export default function Stack() {
  return (
    <div className="bg-white mt-20 pb-5">
      <h1 className="text-center text-black text-6xl pt-5">Tech Stack</h1>
      <div className="grid grid-cols-3 gap-4 place-items-center mt-5">
        <Image src={reactIcon} width={100} height={100} className="" />
        <Image src={postgresIcon} width={100} height={100} />
        <Image src={javaScriptIcon} width={100} height={100} />
        <Image src={htmlIcon} width={100} height={100} />
        <Image src={cssIcon} width={100} height={100} />
        <Image src={bootIcon} width={100} height={100} />
        <Image src={typeIcon} width={100} height={100} />
        <Image src={nodeIcon} width={100} height={100} />
        <Image src={nextIcon} width={100} height={100} />
      </div>
    </div>
  );
}
