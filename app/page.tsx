import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const userList = await fetch(`https://jsonplaceholder.typicode.com/users`, { next: { revalidate: 10 } });
  const data = await userList.json();
  console.log(data)
  return (
    <>
      <h1>Users List</h1>
      <ul>
        {data?.map((user:any) => (
          <li><Link href={`/${user?.id}`}>{user?.name}</Link></li>
        ))}
      </ul>
    </>
  );
}
