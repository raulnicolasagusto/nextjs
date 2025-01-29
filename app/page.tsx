import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log("what am I doing here - Server/Client");
  
  return (
    <div className="text-center text-3xl">
      <h1>Welcome Next.js</h1>
      <Hello />
    </div>
    
  ); 
}
