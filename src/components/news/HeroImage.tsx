import Image from "next/image";

type HeroImageProps = {
  src?: string;
  alt?: string;
};

export default function HeroImage({ src, alt }: HeroImageProps) {
  if (!src) {
    return null;
  }

  return (
    <figure>
      <Image
        src={src}
        alt={alt ?? ""}
        width={1280}
        height={720}
        sizes="(min-width: 1024px) 720px, 100vw"
        className="w-full rounded-xl border border-stone-200 object-cover"
        priority
      />
    </figure>
  );
}
