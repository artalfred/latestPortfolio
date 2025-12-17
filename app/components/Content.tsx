type Props = {
  content: string;
  style: string;
};

export default function Content({ content, style }: Props) {
  return (
    <h5
      className={`2xl:w-[85%] lg:w-[70%] md:w-[60%] sm:w-full w-full ${style}`}
    >
      {content}
    </h5>
  );
}
