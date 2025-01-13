import Link from "next/link";


export default function Home() {
  return (
    <div className="flex justify-between">
     <Link href={"/client"}>Link page</Link>
        <Link href={"/server"}>server page</Link>
        <Link href={"/middleware"}>mid page</Link>
    </div>
  );
}
