import DynamicComponent from "../../../src/shared/dynamicComponent/DynamicComponent";
import getData from "../../../src/helpers/getData";
import NotFound from "../../not-found";
import { siteTitle } from "../../../src/constants/titles";
import { ICalendarData } from "../../../src/models/interfaces/calendar";
import ModifiedMarkdown from "../../../src/hok/modifiedMarkdown";
import CalendarPage from "../../../src/widgets/Calendar";
import { TLang } from "../../../src/models/interfaces/getData";

export const metadata = {
  title: `Օրացուցային պլան | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի օրացուցային պլան",
};

export default async function About({ params }: { params: { locale: TLang } }) {
  const { locale } = await params;
  const { data }: { data: ICalendarData } = await getData({ type: "calendar", locale });

  if (!data) {
    return <NotFound />;
  }

  const { calendar } = data;

  return (
    <CalendarPage calendar={calendar} />
  );
}
