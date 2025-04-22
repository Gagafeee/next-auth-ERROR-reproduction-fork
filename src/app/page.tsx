import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
        <Link href={"/api/auth/signin"}>Se connecter</Link>
    </div>
  );
}
