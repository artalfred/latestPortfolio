import Link from "next/link";

type Props = {
  title: string;
  bgColor: string;
  style: string;
  link: string;
  fontSize: string;
};

export default function Button({
  title,
  bgColor,
  style,
  link,
  fontSize,
}: Props) {
  return (
    <Link href={`${link}`}>
      <button className={`${bgColor} ${style} ${fontSize} `}>{title}</button>
    </Link>
  );
}
