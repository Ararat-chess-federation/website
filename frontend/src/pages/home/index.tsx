import "./home.css";
import { siteTitle } from "../../constants/titles";

export const metadata = {
  title: siteTitle,
  description: siteTitle,
  metadataBase: new URL(`${process.env.PROTOCOL}://${process.env.HOST_NAME}`),
  openGraph: {
    images: "/ogLogo.png",
  },
};

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/597de618ee4fbad2bb2d24f95d4168343576f2b6?width=2880"
          alt="Hero slider"
          className="hero-image"
        />
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="section-header">
          <h2 className="section-title">Նորութ��ուններ</h2>
          <div className="title-line"></div>
        </div>

        <div className="news-grid">
          <article className="news-card">
            <div className="news-image-container">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/db7ba324cf5f4e3d0bd30dc2bcb4a2727c554c1e?width=734"
                alt="Արտաշատ քաղաքում ավարտվեց 4-րդ կարգի որակավորման մրցաշարը"
                className="news-image"
              />
            </div>
            <div className="news-content">
              <h3 className="news-title">
                Արտաշատ քաղաքում ավարտվեց 4-րդ կարգի որակավորման մրցաշարը
              </h3>
              <div className="news-meta">
                <span className="news-location">Արտաշատ</span>
                <div className="meta-separator"></div>
                <span className="news-date">25 հունիսի 2025</span>
              </div>
            </div>
            <button className="read-more-btn">Ավելին</button>
          </article>

          <article className="news-card">
            <div className="news-image-container">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b3503f49698fc1e1b3e31bcac385f38872fac2fd?width=804"
                alt="Հայկ Մարտիրոսյանը Freedom թիմի կազմում դարձավ արագ շախմատի թիմային առաջնության բրոնզե մեդալակիր"
                className="news-image"
              />
            </div>
            <div className="news-content">
              <h3 className="news-title">
                Հայկ Մարտիրոսյանը Freedom թիմի կազմում դարձավ արագ շախմատի
                թիմային առաջնության բրոնզե մեդալակիր
              </h3>
              <div className="news-meta">
                <span className="news-location">Մեծ Բրիտանիա, Լոնդոն</span>
                <div className="meta-separator"></div>
                <span className="news-date">27 մայիսի 2025</span>
              </div>
            </div>
            <button className="read-more-btn">Ավելին</button>
          </article>

          <article className="news-card">
            <div className="news-image-container">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/deaaf3296c37e294b9f367e1535576ca62c55a77?width=813"
                alt="Ավարտվեց «Գարուն 2025» ազգային և միջազգային վարկանիշի հաշվարկով մրցաշա��ը"
                className="news-image"
              />
            </div>
            <div className="news-content">
              <h3 className="news-title">
                Ավարտվեց «Գարուն 2025» ազգային և միջազգային վարկանիշի հաշվարկով
                մրցաշարը
              </h3>
              <div className="news-meta">
                <span className="news-location">Հայաստան</span>
                <div className="meta-separator"></div>
                <span className="news-date">14 մայիսի 2025</span>
              </div>
            </div>
            <button className="read-more-btn">Ավելին</button>
          </article>
        </div>

        <div className="section-more">
          <span className="more-link">Ավելին</span>
        </div>
      </section>

      {/* Branches Section */}
      <section className="branches-section">
        <div className="section-header">
          <h2 className="section-title">Մասնաճյուղեր</h2>
          <div className="title-line"></div>
        </div>

        <div className="branches-content">
          <div className="armenia-map">
            <svg
              className="map-svg"
              width="138"
              height="105"
              viewBox="0 0 138 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.36977 15.0511C2.88832 14.4419 3.52888 14.8988 5.78609 14.381C6.51816 14.1982 7.40274 14.0155 8.28733 13.4672C9.87348 12.462 10.7276 10.939 10.7276 10.939C10.7581 10.8781 11.2156 10.0556 12.0392 9.23321C12.2222 9.05045 12.3747 8.89814 12.6492 8.83722C13.0458 8.71538 13.3508 8.86768 14.0524 9.14183C14.5709 9.32459 15.0895 9.50735 15.6995 9.62919C16.2181 9.72057 16.6756 9.78149 17.1942 9.62919C17.6212 9.50735 17.8957 9.29413 18.2923 8.9286C20.519 7.04007 21.6171 6.09581 21.7391 5.88259C21.8001 5.79121 21.9526 5.51706 22.1051 5.54752C22.2576 5.57799 22.2881 5.82167 22.4407 6.09581C22.5322 6.27857 22.6237 6.36995 23.4167 7.04007C24.1793 7.67974 24.2403 7.67974 24.3318 7.8625C24.6064 8.38032 24.4233 8.9286 24.3928 9.01998C24.3013 9.29413 24.0573 9.56827 23.5998 10.1166C23.1422 10.6344 22.9897 10.7258 22.8677 11.0608C22.8067 11.2436 22.6542 11.5786 22.7762 11.9137C22.8982 12.2488 23.1422 12.3097 23.4778 12.6447C23.7218 12.9189 23.8438 13.1626 24.0573 13.6804C24.2403 14.0764 24.4843 14.6856 24.6369 15.508C24.7284 16.1172 24.6979 16.5132 25.0029 16.6959C25.1554 16.7873 25.2774 16.7873 25.5214 16.7569C25.979 16.7264 26.467 16.7873 26.9246 16.7569C28.0532 16.635 29.2733 17.3052 29.7918 17.6098C30.3409 17.9144 31.0425 18.3103 31.5915 19.1023C31.7135 19.2851 32.0186 19.7115 32.2016 20.3207C32.3236 20.7167 32.3236 20.9908 32.5371 21.7219C32.6896 22.2397 32.7811 22.4225 32.9336 22.5443C33.1777 22.7575 33.5132 22.7575 33.8487 22.7575C35.0993 22.788 34.8858 23.0012 35.8924 22.9707C36.3805 22.9707 37.082 22.9403 37.8751 22.6357C38.3937 22.4529 38.3937 22.3311 39.0647 22.0569C39.6443 21.8133 40.0713 21.7219 40.7119 21.5391C41.81 21.265 42.359 21.1431 42.8776 21.1127C43.4876 21.0822 43.8842 21.1127 44.0672 20.869C44.2197 20.6253 44.0672 20.4121 44.1282 19.9856C44.1892 19.4678 44.5247 19.1328 44.8908 18.7063C45.3483 18.219 45.6533 18.0667 46.3549 17.5488C46.9345 17.1224 47.331 16.7873 48.1241 16.1172C48.9171 15.4166 49.5577 14.8379 49.8017 14.5942C50.5643 13.8632 50.9608 13.4976 51.2049 13.2235C51.5404 12.858 51.7539 12.6143 52.1504 12.3401C52.669 11.9746 53.096 11.7919 53.1875 11.7614C53.6451 11.5786 54.0721 11.4263 54.5907 11.5482C54.7127 11.5786 55.1092 11.67 55.4753 12.0051C55.6583 12.1878 55.8413 12.4315 56.0243 13.2235C56.1463 13.6804 56.1768 14.0155 56.2683 15.0816C56.3903 16.3304 56.3904 16.4827 56.4819 16.8178C56.5734 17.1224 56.7564 17.4575 57.1529 18.1276C57.2444 18.2799 57.3664 18.4931 57.6105 18.5845C57.824 18.6759 58.0375 18.6149 58.0985 18.6149C58.8306 18.4626 59.5931 18.5845 60.3252 18.4626C61.0268 18.3713 62.7959 18.0971 64.6566 18.1885C64.9616 18.1885 65.3582 18.219 66.1513 18.219C66.7613 18.2494 67.2799 18.2494 67.9509 18.158C68.195 18.1276 68.3475 18.0971 68.4085 18.0971C68.8965 18.0057 69.5066 17.823 70.9402 17.1224C71.4283 16.8787 71.6723 16.7569 72.2213 16.5132C73.2279 16.0563 73.472 16.0258 73.6245 16.1477C73.9905 16.3913 73.655 17.1224 73.9905 17.3661C74.387 17.6707 75.3326 17.0919 75.8207 16.7873C76.8578 16.1781 78.0779 15.7517 80.5181 14.9293C83.0804 14.0459 84.087 14.1373 84.697 13.1321C85.002 12.6143 84.941 12.2792 85.4291 11.7005C85.9171 11.1217 86.4052 10.939 87.3508 10.4212C88.4184 9.81195 88.5404 9.59873 89.3334 9.14183C90.7671 8.25848 92.1092 7.92342 93.5733 7.52744C94.8545 7.19237 94.885 7.28375 99.2164 6.52225C102.114 6.03489 102.541 5.91305 103.182 5.51706C104.158 4.90786 104.371 4.39004 105.927 3.41531C106.72 2.92795 107.269 2.56243 108.123 2.31875C108.825 2.10553 110.411 1.67908 111.357 2.41013C111.57 2.56243 111.784 2.83657 112.302 3.11071C112.333 3.14117 112.729 3.35439 113.217 3.50669C114.468 3.93314 115.81 3.71991 117.152 4.05498C117.518 4.14636 119.409 4.63372 120.111 6.12627C120.202 6.33949 120.294 6.94869 120.507 8.19756C120.69 9.35505 120.721 9.99471 120.751 10.4821C120.782 11.2436 120.782 11.6091 120.69 12.0051C120.538 12.6752 120.294 12.858 119.958 13.7413C119.958 13.7413 119.745 14.3201 119.562 15.0816C119.257 16.3304 119.44 17.2442 119.531 18.554C119.623 19.9552 119.562 20.9908 119.47 22.3006C119.318 24.9202 118.982 25.1334 119.196 26.3214C119.501 27.8444 120.294 28.9105 120.69 29.3978C120.904 29.6415 121.91 30.8904 123.649 31.6824C124.412 32.0479 125.052 32.322 125.815 32.1697C126.364 32.0783 126.669 31.8042 126.821 31.9565C127.065 32.1697 126.486 32.9617 126.272 34.241C126.181 34.8502 126.272 34.9111 126.272 36.0991C126.272 38.5968 125.906 38.9319 126.272 39.3583C126.882 40.0894 127.92 39.2669 129.597 40.0589C130.604 40.5463 130.482 40.9727 131.336 41.2773C132.831 41.8256 133.654 40.729 134.752 41.2773C135.637 41.7342 136.125 42.9526 135.972 43.8664C135.789 44.7802 135.088 44.8716 134.295 45.9986C133.715 46.8211 133.563 47.7653 133.227 49.6539C132.861 51.7861 132.678 52.8522 132.922 54.2533C133.197 55.8982 133.685 55.8068 134.02 57.7563C134.203 58.7005 134.417 59.8885 134.142 61.3506C133.837 62.9649 133.288 63.2086 133.38 64.488C133.471 65.5541 133.898 65.8587 133.715 66.6811C133.532 67.3512 133.197 67.4731 132.587 68.4782C132.251 69.057 131.915 69.6357 131.793 70.3668C131.549 71.8593 132.464 72.4381 132.129 73.9611C132.037 74.3875 131.946 74.8444 131.549 75.0272C130.878 75.3927 130.207 74.4484 129.384 74.753C128.865 74.9358 128.957 75.3622 127.92 76.5197C127.34 77.1594 127.249 77.1289 127.004 77.464C126.425 78.3169 126.638 79.2611 126.76 80.5709C126.821 81.2411 126.791 82.5508 126.76 85.2009C126.73 87.5768 126.608 88.3078 126.059 88.6124C125.571 88.917 125.174 88.5515 124.381 88.8561C123.741 89.0998 123.466 89.4958 122.765 90.2877C122.49 90.6228 121.392 91.7803 120.263 92.6941C118.891 93.7602 118.738 93.3947 117.793 94.278C116.878 95.1309 116.908 95.5878 115.81 96.8062C115.657 96.989 115.291 97.3849 114.041 98.4511C111.753 100.401 110.624 101.375 109.496 101.863C108.093 102.441 106.842 102.563 106.019 102.655C105.286 102.715 104.554 102.715 103.121 102.685C101.413 102.655 100.559 102.624 100.223 102.35C99.3689 101.71 99.7044 100.736 98.6368 99.5476C98.2098 99.0907 97.8437 98.5729 97.4167 98.6034C96.8677 98.6643 96.9592 99.5172 96.1661 100.157C95.3425 100.827 94.0919 100.796 93.2988 100.796C92.6277 100.796 92.2007 100.675 91.6517 100.949C91.2246 101.162 91.1331 101.375 90.7671 101.588C90.0045 102.015 89.1809 101.802 88.8149 101.741C88.7844 101.741 85.3986 101.954 78.6879 102.411C75.2106 102.655 73.5024 102.776 73.4414 102.776C73.2279 102.868 72.4349 103.172 72.1603 102.868C71.9468 102.624 72.3433 102.198 72.2823 101.558C72.2213 100.34 70.6962 99.4258 70.4522 99.3039C69.5371 98.7861 69.2015 98.9993 68.6525 98.4815C68.4695 98.2988 68.195 97.9942 67.7679 96.5016C67.1579 94.3999 67.2799 93.6383 66.7003 93.3337C66.2123 93.0901 65.8767 93.4556 65.1752 93.151C64.5041 92.8464 64.1991 92.2067 64.1381 92.0849C63.8941 91.5671 64.0466 91.2929 64.0771 89.8917C64.1076 88.3687 63.9551 88.0641 63.8025 87.8814C63.5585 87.6072 63.223 87.4854 62.4299 87.394C60.2642 87.1199 59.5626 87.5768 58.007 87.2417C57.1529 87.0589 56.5124 86.7239 56.1768 86.5411C55.2617 86.0538 54.6517 85.475 53.6451 84.5308C52.3335 83.2819 52.486 83.1905 51.8454 82.7336C50.8083 82.033 50.4728 82.3072 49.1917 81.6066C48.3986 81.1497 47.6055 80.6928 47.148 79.8094C46.904 79.3525 46.8734 78.5606 46.8124 77.0071C46.7514 75.3622 46.8429 75.2404 46.6904 74.814C46.4464 74.1743 46.1109 73.9611 44.6467 72.7427C42.298 70.7932 41.9625 70.3363 41.749 69.9708C41.1694 68.9961 40.9559 68.0213 40.8949 67.6558C40.6509 66.3765 41.0169 66.0719 40.7119 64.8535C40.4374 63.696 39.8578 62.904 39.6748 62.6604C39.1867 61.9902 38.6377 61.5942 38.1801 61.2592C37.5091 60.7414 36.9295 60.4672 36.7465 60.3758C35.3434 59.6448 34.3978 58.1522 32.6286 55.4413C31.8355 54.1924 30.8899 53.0349 30.0969 51.7861C29.8529 51.3901 29.6088 51.0246 29.1513 50.7504C28.2972 50.2326 27.6566 50.6286 26.8636 50.0803C26.589 49.8975 26.3755 49.5929 25.9485 48.9837C25.4604 48.3136 25.2164 47.8262 25.0944 47.613C24.3318 46.3337 23.1422 46.5165 19.7564 44.6888C19.3294 44.4452 18.7803 44.1406 17.9567 43.9578C17.3772 43.836 16.9196 43.8055 16.0351 43.8055C14.4794 43.775 14.2964 43.9273 13.4423 43.8055C12.6492 43.7141 12.0697 43.6227 11.4901 43.2268C10.453 42.5262 10.5445 41.5819 9.29392 40.8509C8.95839 40.6681 8.98889 40.729 8.53135 40.5158C8.53135 40.5158 7.34174 39.8761 6.51816 38.9014C5.20654 37.3175 5.38955 35.0025 5.45056 33.845C5.48106 33.3272 5.72509 32.2306 6.15213 30.0375C6.48766 28.3622 6.60967 27.9967 6.45715 27.2961C6.27414 26.4127 5.93861 26.3214 5.11503 24.5547C4.50497 23.2753 4.74899 23.3972 4.26095 22.4529C3.62039 21.2041 3.16284 20.869 2.6748 19.5897C2.58329 19.346 2.43078 18.95 2.30876 18.4322C2.06474 17.2442 1.72921 15.8126 2.36977 15.0511Z"
                fill="#FBF7F4"
                stroke="#1A1146"
                strokeWidth="3"
                strokeMiterlimit="10"
              />
            </svg>

            {/* Map markers */}
            <div
              className="map-marker"
              style={{ left: "81px", top: "69px" }}
            ></div>
            <div
              className="map-marker"
              style={{ left: "22px", top: "41px" }}
            ></div>
            <div
              className="map-marker"
              style={{ left: "114px", top: "36px" }}
            ></div>
            <div
              className="map-marker"
              style={{ left: "120px", top: "80px" }}
            ></div>
            <div
              className="map-marker"
              style={{ left: "86px", top: "105px" }}
            ></div>
            <div
              className="map-marker"
              style={{ left: "54px", top: "62px" }}
            ></div>
          </div>

          <div className="branches-description">
            <p>
              Արարատի մարզի համայնքներում գործում է 8 մասնաճյուղ, որտեղ շախմատի
              պարապմունքների են հաճախում ավելի քան 600 երեխա։
            </p>
          </div>
        </div>

        <div className="section-more">
          <span className="more-link">Ավելին</span>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="trainers-section">
        <div className="section-header">
          <h2 className="section-title">Մարզիչներ</h2>
          <div className="title-line"></div>
        </div>

        <div className="trainers-content">
          <div className="trainers-image">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/fb3b614520f5c90f3cc7e9056dff58b196fac9ef?width=324"
              alt="Մարզիչներ"
              className="trainer-image"
            />
          </div>

          <div className="trainers-description">
            <p>
              Արարատի մարզի համայնքներում գործում է 8 մասնաճյուղ, որտեղ շախմատի
              պարապմունքների են հաճախում ավելի քան 600 երեխա։
            </p>
          </div>
        </div>

        <div className="section-more">
          <span className="more-link">Ավելին</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3f7e48a59088a55d82617a13ca6499a818e50275?width=136"
              alt="Logo"
              className="footer-logo-image"
            />
          </div>

          <div className="footer-navigation">
            <a href="/about" className="footer-nav-link">
              Մեր մասին
            </a>
            <a href="/ratings" className="footer-nav-link">
              Վարկանիշներ
            </a>
            <a href="/useful" className="footer-nav-link">
              Օգտակար հղումներ
            </a>

            <div className="language-flags">
              <div className="flag armenian-flag">
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_122_380)">
                    <path
                      d="M0.0678711 0.864502H21.9323V6.28823H0.0678711V0.864502Z"
                      fill="#D90012"
                    />
                    <path
                      d="M0.0678711 6.28809H21.9323V11.7118H0.0678711V6.28809Z"
                      fill="#0033A0"
                    />
                    <path
                      d="M0.0678711 11.7119H21.9323V17.1356H0.0678711V11.7119Z"
                      fill="#F2A800"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_122_380">
                      <rect
                        width="21.8644"
                        height="16.2712"
                        fill="white"
                        transform="translate(0.0678711 0.864502)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flag russian-flag">
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_122_95)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.0678711 0.864502H21.9323V17.1357H0.0678711V0.864502Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.0678711 6.28809H21.9323V17.1355H0.0678711V6.28809Z"
                      fill="#0039A6"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.0678711 11.7119H21.9323V17.1356H0.0678711V11.7119Z"
                      fill="#D52B1E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_122_95">
                      <rect
                        x="0.0678711"
                        y="0.864502"
                        width="21.8644"
                        height="16.2712"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/62766f3442b6caa308b4b4683a6b4371e5d65ef8?width=60"
                alt="English flag"
                className="flag english-flag"
              />
            </div>
          </div>

          <div className="footer-contacts">
            <h4 className="contacts-title">Կոնտակտներ</h4>

            <div className="contact-group">
              <span className="contact-label">Մարզի պատասխանատու</span>
              <span className="contact-phone">+374 93 881339</span>
            </div>

            <div className="contact-group">
              <span className="contact-label">Մրցաշարային հարցերի դեպքում</span>
              <span className="contact-phone">+374 98 339020</span>
            </div>

            <div className="contact-group">
              <span className="contact-label">
                Կայքի հետ կապված հարցերի դեպքում
              </span>
              <span className="contact-phone">+374 98 339020</span>
            </div>
          </div>

          <div className="partner-logos">
            <div className="partner-logo">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4a2001bcb8edf6b66e273267119754ca9fbc1063?width=60"
                alt="Lichess"
                className="partner-image"
              />
            </div>
            <div className="partner-logo">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ce53f78cc4ddbebd7be5ba9a5a67775566b5f71f?width=48"
                alt="Chess Federation"
                className="partner-image"
              />
            </div>
            <div className="partner-logo">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a931e7d287a026965c02f3a50cf2b1225eb90c9e?width=48"
                alt="Partner"
                className="partner-image"
              />
            </div>
            <div className="partner-logo">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4d4e885a9975e3ac26d6cb6733d6b0521db02970?width=60"
                alt="Partner"
                className="partner-image"
              />
            </div>
            <div className="partner-logo chess-arbiter">
              <div className="chess-arbiter-bg">
                <span className="chess-arbiter-text">Chess Arbiter</span>
              </div>
            </div>
            <div className="partner-logo">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b39deca1a06bc831f25b978ff3f48ae5c9681b40?width=56"
                alt="Partner"
                className="partner-image"
              />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-credit">
            Կայքի նախագծող՝ -------- ---------
          </span>
        </div>
      </footer>

      {/* Decorative Image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/61f6763e658da9c7ffa4f02365a15f937fcd8944?width=504"
        alt="Decorative"
        className="decorative-image"
      />
    </div>
  );
}
