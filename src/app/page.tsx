import Image from "next/image";
import Link from "next/link";
import Header from "./_components/header";
import Footer from "./_components/footer";

export default function Index() {
  return (
    <>
      <Header hideTitle />
      <main>
        <div className="flex justify-center max-w-4xl mx-auto mt-10">
          <div className="flex flex-col">
            <div className="flex md:flex-row flex-col">
              <div className="flex flex-col w-100 md:pr-8">
                <p className="">Hi there 👋 I'm...</p>
                <h1 className="text-7xl font-black mb-4 tracking-tight">
                  Eric Anastas
                </h1>
                <p className="mb-8">
                  I'm a software engineer in San Francisco with over 18 years
                  experience driving the advancement of technology in the AEC
                  industry.
                </p>
              </div>
              <div className="shrink-0 flex justify-center align-start">
                <div>
                  <Image
                    height={250}
                    width={250}
                    src={"/images/headshot_bw.jpg"}
                    alt="Head shot"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-5 md:grid-cols-10 justify-between gap-y-4 pt-8">
              <Link
                href={"https://www.linkedin.com/in/ericanastas/"}
                className="flex justify-center"
              >
                <Image
                  height={64}
                  width={64}
                  src={"/images/picons-social/104452_linkedin_icon.png"}
                  alt="Linkedin"
                />
              </Link>

              <Link
                href={"https://stackoverflow.com/users/88427/eric-anastas"}
                className="flex justify-center"
              >
                <Image
                  height={64}
                  width={64}
                  src={
                    "/images/picons-social/394191_overflow_stack_stackoverflow_icon.png"
                  }
                  alt="Stack Overflow"
                />
              </Link>

              <Link
                href={"https://github.com/ericanastas"}
                className="flex justify-center"
              >
                <Image
                  height={64}
                  width={64}
                  src={"/images/picons-social/394187_github_icon.png"}
                  alt="GitHub"
                />
              </Link>

              <Link
                href={"https://vimeo.com/ericanastas"}
                className="flex justify-center"
              >
                <Image
                  height={64}
                  width={64}
                  src={"/images/picons-social/104450_video_vimeo_icon.png"}
                  alt="Vimeo"
                />
              </Link>
              <Link
                href={
                  "https://www.youtube.com/channel/UCD05Q0S8a6FBz-xti77NCIw"
                }
                className="flex justify-center"
              >
                <Image
                  height={64}
                  width={64}
                  src={"/images/picons-social/104445_video_youtube_icon.png"}
                  alt="YouTube"
                />
              </Link>

              <Link
                href={"https://www.instagram.com/ericanastas/"}
                className="flex justify-center"
              >
                <Image
                  height={64}
                  width={64}
                  src={"/images/picons-social/104425_instagram_icon.png"}
                  alt="Instagram"
                />
              </Link>
              <Link
                href={"https://soundcloud.com/eric-anastas"}
                className="flex justify-center"
              >
                <Image
                  height={64}
                  width={64}
                  src={"/images/picons-social/104428_soundcloud_icon.png"}
                  alt="Soundcloud"
                />
              </Link>

              <Link
                href={"https://www.facebook.com/eric.anastas"}
                className="flex justify-center"
              >
                <Image
                  height={64}
                  width={64}
                  src={
                    "/images/picons-social/104458_facebook_social media_fb_social_icon.png"
                  }
                  alt="Facebook"
                />
              </Link>
              <Link
                href={"https://twitter.com/EricAnastas"}
                className="flex justify-center"
              >
                <Image
                  height={64}
                  width={64}
                  src={"/images/picons-social/104461_twitter_icon.png"}
                  alt="Twitter"
                />
              </Link>

              <Link
                href={"https://www.reddit.com/user/aireq/"}
                className="flex justify-center"
              >
                <Image
                  height={64}
                  width={64}
                  src={"/images/picons-social/1181212_reddit_icon.png"}
                  alt="reddit"
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
