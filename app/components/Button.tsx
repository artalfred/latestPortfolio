import Link from "next/link";

type Props = {
  title: string;
  bgColor: string;
  style: string;
  link: string;
  fontSize: string;
};

export default function Button({ title, bgColor, style, link }: Props) {
  return (
    <Link href={`${link}`}>
      <button
        className={`rounded-full 2xl:px-6 lg:px-6 md:px-6 sm:px-4 px-4 2xl:py-3 lg:py-3 md:py-3 sm:py-2 py-2 text-md ${bgColor} ${style} `}
      >
        {title}
      </button>
    </Link>
  );
}
