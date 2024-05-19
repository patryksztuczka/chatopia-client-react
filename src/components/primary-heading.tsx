export interface IPrimaryHeadingProps {
  text: string;
}

const PrimaryHeading = ({ text }: IPrimaryHeadingProps) => {
  return <h1 className="text-xl mb-4 px-2">{text}</h1>;
};

export default PrimaryHeading;
