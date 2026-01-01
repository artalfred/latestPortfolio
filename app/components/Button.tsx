import Link from "next/link";

type Props = {
  title: string;
  style: string;
  link: string;
};

export default function Button({ title, style, link }: Props) {
  return (
    <Link href={`${link}`}>
      <button
        className={`flex items-center gap-2 rounded-full 2xl:px-6 lg:px-6 md:px-6 sm:px-4 px-4 2xl:py-3 lg:py-3 md:py-3 sm:py-3 py-3 text-md ${style} `}
      >
        {title}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="size-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </button>
    </Link>
  );
}
