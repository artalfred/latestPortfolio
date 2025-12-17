type Props = {
  content: string;
  style: string;
};

export default function Description({ content, style }: Props) {
  return (
    <h5
      className={`${style} 2xl:text-gray-400 lg:text-gray-400 md:text-gray-50 sm:text-gray-50 text-gray-50`}
    >
      {content}
    </h5>
  );
}
