"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./carousel.module.scss";
import { ArticleItem } from "../../../../components/articleList/ArticleItem";
import { IArticle } from "../../../../models/interfaces/article";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 5000, min: 2000 },
    items: 4,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    slidesToSlide: 1,
    items: 1,
  },
};

export default function ArticleCarousel({ data }: { data: IArticle[] }) {
  if (!data || data.length === 0) return null;

  return (
    <Carousel
      responsive={responsive}
      showDots={false}
      keyBoardControl
      transitionDuration={500}
      containerClass={styles.carouselContainer}
      removeArrowOnDeviceType={["superLargeDesktop", "tablet", "mobile"]}
      itemClass={styles.carouselItem}
    >
      {data.map((el) => (
        <ArticleItem key={el.id} {...el} />
      ))}
    </Carousel>
  );
}
