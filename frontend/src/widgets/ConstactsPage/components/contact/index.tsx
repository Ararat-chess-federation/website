import Image from "next/image";
import styles from "./contact.module.scss";

interface IContactProps {
  img: string;
  alt: string;
  link: string;
  text: string;
  additionalText?: string;
}

export default function Contact({
  img,
  alt,
  link,
  text,
  additionalText,
}: IContactProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className={styles.contact}>
        <Image src={img} alt={alt} width={24} height={24} />
        <div className={styles.contact_info}>
          {additionalText && <span>{additionalText}</span>}
          {text && <span>{text}</span>}
        </div>
      </div>
    </a>
  );
}
