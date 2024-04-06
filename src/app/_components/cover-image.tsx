import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  url: string;
};

const CoverImage = ({ title, src, url }: Props) => {
  return (
    <div className="sm:mx-0">
      <Link href={url} aria-label={title}>
        <Image
          src={src}
          alt={`Cover Image for ${title}`}
          className="shadow-sm w-full hover:shadow-lg transition-shadow duration-200"
          width={1300}
          height={630}
        />
      </Link>
    </div>
  );
};

export default CoverImage;
