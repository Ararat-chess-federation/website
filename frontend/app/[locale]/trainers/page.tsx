import NotFound from "../../not-found";
import TrainersPage from "../../../src/widgets/TrainersPage";
import getData from "../../../src/helpers/getData";
import generatePageMetadata from "../../../src/helpers/generatePageMetadata";
import { ITrainer } from "../../../src/models/interfaces/trainer";
import { IPageProps } from "../../../src/models/interfaces/params";

export async function generateMetadata(props: IPageProps) {
  const { locale } = await props.params;

  return generatePageMetadata({ type: "trainers", locale })
}

export default async function Trainers(props: IPageProps) {
  const { locale } = await props.params;
  const { data }: { data: ITrainer[] } = await getData({
    type: "trainers",
    locale,
    populate: {
      profilePhoto: {
        fields: ["url"],
      },
      branches: {
        fields: ["url", "title"],
      },
    },
  });

  if (!data?.length) {
    return <NotFound />;
  }

  return (
    <TrainersPage data={data} />
  );
}
