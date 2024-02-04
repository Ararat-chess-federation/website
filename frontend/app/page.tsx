import Image from "next/image";
import getData from "../src/helpers/getData";
import { IArticle } from "../src/models/interfaces/article";
import { ArticleList } from "./articles/page";
import "./Home.css";
import defaultExample from "../public/defaultExample.webp";
import MoreButton from "../src/components/moreButton/MoreButton";

export default async function Home() {
  const { meta: trainersMeta }: { meta: any } = await getData({
    type: "trainers",
    params: "pagination[limit]=2",
  });
  const { meta: branchesMeta }: { meta: any } = await getData({
    type: "branches",
    params: "pagination[limit]=2",
  });
  const { data: articles }: { data: IArticle[] } = await getData({
    type: "articles",
    params: "sort[0]=publishDate:desc&pagination[limit]=2",
  });

  return (
    <main>
      <div>
        <div>
          <h2>Վերջին նորություններ</h2>
        </div>
        <section className="articles_container">
          <ArticleList data={articles} />
        </section>
        <MoreButton link="/articles" />
      </div>
      <section className="region_info">
        <div className="short_info_container">
          <div>
            <h2>Մասնաճյուղեր</h2>
          </div>
          <div className="short_info">
            <Image src={defaultExample} alt="Chess board" />
            <span className="short_info_text">
              Արարատի մարզի բոլոր համայնքներում ընհանուր առմամբ գործում է{" "}
              {branchesMeta.pagination.total} մասնաճյուղ, որտեղ շախմատի
              պարապմունքների են հաճախում ավելի քան 1000 երեխա
            </span>
          </div>
          <MoreButton link="/branches" />
        </div>

        <div className="short_info_container">
          <div>
            <h2>Մարզիչներ</h2>
          </div>
          <div className="short_info">
            <Image src={defaultExample} alt="Chess board" />
            <span className="short_info_text">
              Արարատի մարզի շախմատի ֆեդերացիայի մարզադպրոցներում ընհանուր առմամբ
              աշխատում է {trainersMeta.pagination.total} մարզիչ, ովքեր իրենց
              փորձն ու գիտելիքներն են փոխանցում ապագա սերնդին։
            </span>
          </div>
          <MoreButton link="/trainers" />
        </div>
      </section>
    </main>
  );
}
