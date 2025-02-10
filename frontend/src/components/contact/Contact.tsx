import Image from "next/image";
import "./Contact.css"

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
    <div className="contact">
      <span>
        <Image src={img} alt={alt} width={24} height={24} />
      </span>
      <span>
        <a
          className="contact_link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      </span>
      <span>{additionalText}</span>
    </div>
  );
}
