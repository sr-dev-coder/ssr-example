import Image from "next/image";

export default async function SingleUser({ params }:{ params: { id: string} }) {
  const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${params?.id}`, { next: { revalidate: 10 } });
  const data = await userData.json();
  console.log(data)
  return (
    <>
      <h1>Single User Details</h1>
      <div>
        <p>Name: {data?.name}</p>
        <p>UserName: {data?.username}</p>
      </div>
    </>
  );
}
