import ContainedButton from "./ContainedButton";
import TextButton from "./TextButton";

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string;
  variant?: "contained" | "text";
  title?: string;
}
export default function LinkButton({ link, variant, title, ...props }: IProps) {
  return variant === "text" ? (
    <TextButton link={link} title={title} {...props} />
  ) : (
    <ContainedButton link={link} title={title} {...props} />
  );
}
