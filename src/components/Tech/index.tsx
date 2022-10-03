import { IconType } from "react-icons";
import TechWrapper from "./styles";

interface Props {
  title: string;
  icon: IconType;
}

function Tech({ title, icon: Icon }: Props) {
  return (
    <TechWrapper>
      <p className="techName">{title}</p>
      <Icon></Icon>
    </TechWrapper>
  );
}

export default Tech;
