import "./PhoneNumber.css";

export default function PhoneNumber({ phoneNumber }: { phoneNumber: string }) {
  return (
    <p>
      Հեռախոսահամար՝
      <a className="phone_number" href={`tel:${phoneNumber}`}>
        {phoneNumber}
      </a>
    </p>
  );
}
