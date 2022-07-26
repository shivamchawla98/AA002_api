import { privacyPolicy } from '@/framework/static/privacy';
import { Link, Element } from 'react-scroll';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import { getLayout } from '@/components/layouts/layout';
import Seo from '@/components/seo/seo';

function makeTitleToDOMId(title: string) {
  return title.toLowerCase().split(' ').join('_');
}

export default function PrivacyPage() {
  const { t } = useTranslation('policy');
  const { title, date, content } = privacyPolicy;

  return (
    <>
      <Seo title="Privacy" url="privacy" />
      <section className="mx-auto w-full max-w-1920 bg-light py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <header className="mb-10 sm:mt-2 lg:mb-14 xl:mt-4">
          <h1 className="mb-4 text-xl font-bold text-heading sm:mb-5 sm:text-3xl md:text-2xl 2xl:mb-7 2xl:text-4xl">
            {t("About Us")}
          </h1>
          {/* <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
            {date}
          </p> */}
        </header>
        {/* End of page header */}

        <div className="flex flex-col mxd:flex-row">
          {/* <nav className="mb-8 md:mb-0 md:w-72 xl:w-3/12">
            <ol className="sticky z-10 md:top-16 lg:top-22">
              {content?.map((item) => (
                <li key={item.title}>
                  <Link
                    spy={true}
                    offset={-120}
                    smooth={true}
                    duration={500}
                    to={makeTitleToDOMId(item.title)}
                    activeClass="text-sm lg:text-base text-heading font-semibold"
                    className="inline-flex cursor-pointer py-3 uppercase text-sub-heading"
                  >
                    {t(item.title)}
                  </Link>
                </li>
              ))}
            </ol>
          </nav> */}
          {/* End of section scroll spy menu */}

          <div className="md:w-9/12 md:pb-10 ltr:md:pl-8 rtl:md:pr-8">
          <h2 className="mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl">
                  {/* {t("TEST")} */}
                </h2>
                <div
                  className="leading-loose text-body-dark"
                  dangerouslySetInnerHTML={{ __html: t("Pickurneeds is an e commerce company that focuses on selling the best quality home and Electronic products at competitive prices. Customer is our priority and we serve Industries, Offices, Contractors, Builders, Retailers, Homes, etc. We offer a wide range of products in categories like Electrical, Electronic Appliances, Personal Grooming and much more. To achieve on-time delivery, we have tied up with world-leading logistic companies. We have the best-in-class professionals working round the clock implementing smart techniques in the e-commerce business processes leading to substantial savings, huge discounts, best buying experience, and customer satisfaction. All our products undergo a stringent quality inspection process to ensure that our customers always receive 100% genuine products. Before buying the product itself, Pickurneeds ensure that our customers get enriched with all possible product information and specification. We have been asked how we’ve grown so quickly, the answer is simple. We have positioned the organization in providing the best and cheapest products and providing the best customer service possible through technology. We now serve customers all over the world and are thrilled to be a part of the Eco-friendly wing of the Electronics items industry.") }}
                />
          </div>
          {/* End of content */}
        </div>
      </section>
    </>
  );
}

PrivacyPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'policy'])),
    },
  };
};
