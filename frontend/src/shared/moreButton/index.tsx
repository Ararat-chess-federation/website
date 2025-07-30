import ContainedButton from "./ContainedButton";
import TextButton from "./TextButton";
interface IProps {
  link: string;
  variant?: "contained" | "text";
}
export default function MoreButton({ link, variant }: IProps) {
  return variant === "text" ? (
    <TextButton link={link} />
  ) : (
    <ContainedButton link={link} />
  );
}
