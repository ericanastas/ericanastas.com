import Image from "next/image";
import Link from "next/link";

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

      <div className="flex justify-center	">
        <div className="grid grid-cols-5 gap-x-2">
          <Link href={"https://www.instagram.com/ericanastas/"}>
            <Image
              height={64}
              width={64}
              src={"/images/picons-social/104425_instagram_icon.png"}
              alt="Instagram"
            />
          </Link>
          <Link href={"https://soundcloud.com/eric-anastas"}>
            <Image
              height={64}
              width={64}
              src={"/images/picons-social/104428_soundcloud_icon.png"}
              alt="Soundcloud"
            />
          </Link>
          <Link
            href={"https://www.youtube.com/channel/UCD05Q0S8a6FBz-xti77NCIw"}
          >
            <Image
              height={64}
              width={64}
              src={"/images/picons-social/104445_video_youtube_icon.png"}
              alt="YouTube"
            />
          </Link>
          <Link href={"https://vimeo.com/ericanastas"}>
            <Image
              height={64}
              width={64}
              src={"/images/picons-social/104450_video_vimeo_icon.png"}
              alt="Vimeo"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/ericanastas/"}>
            <Image
              height={64}
              width={64}
              src={"/images/picons-social/104452_linkedin_icon.png"}
              alt="Linkedin"
            />
          </Link>
          <Link href={"https://www.facebook.com/eric.anastas"}>
            <Image
              height={64}
              width={64}
              src={
                "/images/picons-social/104458_facebook_social media_fb_social_icon.png"
              }
              alt="Facebook"
            />
          </Link>
          <Link href={"https://twitter.com/EricAnastas"}>
            <Image
              height={64}
              width={64}
              src={"/images/picons-social/104461_twitter_icon.png"}
              alt="Twitter"
            />
          </Link>
          <Link href={"https://github.com/ericanastas"}>
            <Image
              height={64}
              width={64}
              src={"/images/picons-social/394187_github_icon.png"}
              alt="GitHub"
            />
          </Link>
          <Link href={"https://stackoverflow.com/users/88427/eric-anastas"}>
            <Image
              height={64}
              width={64}
              src={
                "/images/picons-social/394191_overflow_stack_stackoverflow_icon.png"
              }
              alt="Stack Overflow"
            />
          </Link>

          <Link href={"https://www.reddit.com/user/aireq/"}>
            <Image
              height={64}
              width={64}
              src={"/images/picons-social/1181212_reddit_icon.png"}
              alt="reddit"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
