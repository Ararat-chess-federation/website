import { useTranslations } from "next-intl";
import "./PhoneNumber.css";

export default function PhoneNumber({ phoneNumber }: { phoneNumber: string }) {
  const t = useTranslations("contactsInfo");
  return (
    <p>
      {t("phone")}
      <a className="phone_number" href={`tel:${phoneNumber}`}>
        {phoneNumber}
      </a>
    </p>
  );
}
