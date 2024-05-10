import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src?: string;
  url: string;
};

const CoverImage = ({ title, src, url }: Props) => {
  return (
    <div className="shadow-sm">
      <Link href={url} aria-label={title}>
        {src && (
          <div>
            <Image
              src={src}
              alt={`Cover image for ${title}`}
              className="w-full aspect-[4/3] object-contain"
              width={800}
              height={600}
            />
          </div>
        )}

        {!src && (
          <div className="flex aspect-[4/3] justify-center content-center items-center">
            <div>
              <Image
                className="opacity-20"
                src={"/icons/placeholder-image-black.png"}
                alt={`Placeholder image icon`}
                width={64}
                height={64}
              />
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default CoverImage;
