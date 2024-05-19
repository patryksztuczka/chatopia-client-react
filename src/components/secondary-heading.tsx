interface ISecondaryHeadingProps {
  text: string;
}

const SecondaryHeading = ({ text }: ISecondaryHeadingProps) => {
  return <h2 className="text-lg">{text}</h2>;
};

export default SecondaryHeading;
