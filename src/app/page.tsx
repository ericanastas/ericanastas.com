import Image from "next/image";

export default function Index() {
  return (
    <main>
      <p className="">Hi there 👋 I'm...</p>
      <p className="text-7xl font-black mb-4 tracking-tighter">Eric Anastas</p>
      <p className="mb-12">I'm a software engineer in San Francisco.</p>
      <div>
        <Image
          height={250}
          width={250}
          src={"/images/headshot_bw.jpg"}
          alt="Head shot"
        />
      </div>
    </main>
  );
}
