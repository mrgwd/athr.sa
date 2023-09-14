import { useTranslation } from "react-i18next";
interface InfoCardProps {
  plan: string;
  features: string[];
}
export default function InfoCard({ plan, features }: InfoCardProps) {
  const { t } = useTranslation();
  console.log(t(`SD.sponsers.${plan}.${features[0]}`));
  return (
    <div className="relative flex flex-col justify-between gap-4 rounded-3xl bg-ma-service/10 p-4 text-center text-ma-service sm:items-center sm:rounded-3xl md:p-6 lg:gap-6 xl:gap-8 xl:p-8">
      <div>
        <h2 className="text-start text-lg font-medium sm:text-center lg:text-xl">
          <span className="text-3xl sm:hidden">
            {t(`SD.sponsers.${plan}.heading`)}
          </span>{" "}
          {t(`SD.sponsers.heading`)}
        </h2>
        <p className="hidden text-4xl font-semibold sm:block lg:text-4xl">
          {t(`SD.sponsers.${plan}.heading`)}
        </p>
      </div>
      <div className="text-start">
        <div className="info-card flex w-full items-start gap-6 text-center">
          {features.map((f: string, index: number) => (
            <>
              <div key={index}>
                <h3>{t(`SD.sponsers.${plan}.subHeadings.${index + 1}`)}</h3>
                <div className="flex flex-col gap-1">
                  <p>{t(`SD.sponsers.${plan}.${f}.1`)}</p>
                  <p>{t(`SD.sponsers.${plan}.${f}.2`)}</p>
                  <p>{t(`SD.sponsers.${plan}.${f}.3`)}</p>
                  <p>{t(`SD.sponsers.${plan}.${f}.4`)}</p>
                  <p>{t(`SD.sponsers.${plan}.${f}.5`)}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        {/* {features.map((feature: string) => (
          <div key={feature} className="flex gap-2">
            <div>
              <Message variant="Bulk" />
            </div>
            <p className="">{t(`SD.sponsers.${plan}.${feature}`)}</p>
          </div>
        ))} */}
      </div>
      {/* <button
        className={`rounded-full bg-white py-2 ${
          plan[0] === "O"
            ? "text-dm-service sm:bg-dm-service sm:hover:bg-[#5162f5]"
            : plan[0] === "W"
            ? "sm:hover:bg text-wd-service sm:bg-wd-service"
            : "sm:hover:bg text-ma-service sm:bg-ma-service"
        } self-stretch transition-all sm:text-white`}
      >
        {t("OS.plans.buyButton")}
      </button> */}
    </div>
  );
}
