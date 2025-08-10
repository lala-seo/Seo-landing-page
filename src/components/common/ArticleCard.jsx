import { Arrowright } from "../../assets/icons";

export default function ArticleCard({
  articles,
  title = "white",
  text = "[#E0E0E0]",
  fill = "white",
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 lg:px-0 ">
      {articles.map((item, index) => (
        <div key={index} className="w-full max-w-[435px] mx-auto flex flex-col">
          <img
            src={item.image}
            alt=""
            className="w-full h-[250px] sm:h-[381px] md:h-[381px] object-cover mb-4 rounded-md"
          />
          <div className="max-w-[359px]">
            <p
              className={`font-[400] text-[20px] sm:text-[22px] md:text-[24px] font-primary leading-[140%] text-${title} text-start underline   tracking-[-0.02em]`}
            >
              {item.title}
            </p>
            <p
              className={`mt-4 mb-4 font-secondary font-[400] text-[14px] sm:text-[15px] text-${text} leading-[148%] text-start`}
            >
              {item.description}
            </p>
            <p
              className={`flex items-center gap-2 text-${text} font-secondary font-[400] text-[15px]`}
            >
              Read More <Arrowright fill={fill} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
