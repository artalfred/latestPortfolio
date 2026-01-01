import Link from "next/link";

type Props = {
  title: string;
  style: string;
  link: string;
  Icon: string;
};

export default function Button({ title, style, link, Icon }: Props) {
  return (
    <Link href={`${link}`} target="_blank">
      <button
        className={`flex items-center gap-2 rounded-full 2xl:px-6 lg:px-6 md:px-6 sm:px-4 px-4 2xl:py-3 lg:py-3 md:py-3 sm:py-3 py-3 text-md ${style} `}
      >
        {title}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={Icon} />
          </svg>
        </div>
      </button>
    </Link>
  );
}
