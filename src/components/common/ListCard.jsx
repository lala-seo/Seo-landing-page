import { Arrowright } from "../../assets/icons";

export default function ListCard({
  articles,
  title = "black",
  text = "black",
  fill = "black",
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 lg:px-0">
      {articles.map((item, index) => {
        // Determine if we have a valid image
        const hasImage = item.image && !item.image.includes("undefined");

        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[435px] mx-auto flex flex-col no-underline hover:opacity-90 transition-opacity"
          >
            <div className="w-full flex flex-col">
              {/* Image container with fallback */}
              <div className="w-full h-[250px] sm:h-[381px] md:h-[381px] mb-4 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                {hasImage ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.replaceWith(renderFallbackThumbnail());
                    }}
                  />
                ) : (
                  renderFallbackThumbnail()
                )}
              </div>

              <p
                className={`font-[400] text-[20px] sm:text-[22px] md:text-[24px] font-primary leading-[140%] text-${title} text-start underline`}
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
                {item.type === "video" ? "Watch Video" : "Read More"}{" "}
                <Arrowright fill={fill} />
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

function renderFallbackThumbnail() {
  return (
    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
      </svg>
    </div>
  );
}
