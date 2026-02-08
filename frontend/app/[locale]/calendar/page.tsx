import NotFound from "../../not-found";
import CalendarPage from "../../../src/widgets/Calendar";
import getData from "../../../src/helpers/getData";
import generatePageMetadata from "../../../src/helpers/generatePageMetadata";
import { ICalendarData } from "../../../src/models/interfaces/calendar";
import { IPageProps } from "../../../src/models/interfaces/params";

export async function generateMetadata(props: IPageProps) {
  const { locale } = await props.params;

  return generatePageMetadata({ type: "calendar", locale })
}

export default async function Calendar(props: IPageProps) {
  const { locale } = await props.params;
  const { data }: { data: ICalendarData } = await getData({ type: "calendar", locale });

  if (!data) {
    return <NotFound />;
  }

  const { calendar } = data;

  return (
    <CalendarPage calendar={calendar} />
  );
}
