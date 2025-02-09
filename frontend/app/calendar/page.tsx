import DynamicComponent from "../../src/shared/dynamicComponent/DynamicComponent";
import getData from "../../src/helpers/getData";
import NotFound from "../not-found";
import { siteTitle } from "../../src/constants/titles";
import { ICalendarData } from "../../src/models/interfaces/calendar";
import ModifiedMarkdown from "../../src/hok/modifiedMarkdown";

export const metadata = {
  title: `Օրացուցային պլան | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի օրացուցային պլան",
};

export default async function About() {
  const { data }: { data: ICalendarData } = await getData({ type: "calendar" });

  if (!data) {
    return <NotFound />;
  }

  const { calendar } = data;

  return (
    <main>
      <h1>Օրացուցային պլան</h1>
      <p>
        *Ժամկետը կախված ՀՇԱ օրացուցային պլանից կարող է փոփոխվել։ Բոլոր մրցաշարերի անցկացման մասին նախօրոք կհայտարարվի
        կայքում և ֆեյսբուքյան էջում։
      </p>

      <ModifiedMarkdown>{calendar}</ModifiedMarkdown>
    </main>
  );
}
