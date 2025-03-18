import { Experience } from "../types/experience";
import { HiExternalLink } from "react-icons/hi";

const ExperienceCard = ({
  logo,
  title,
  startDate,
  endDate,
  company,
  website,
  description,
  bulletPoints,
  location,
  jobType,
}: Experience) => {
  const formatDateRange = (start: Date, end: Date | null) => {
    const startMonth = start.toLocaleString("en-US", { month: "short" });
    const startYear = start.getFullYear();

    if (!end) {
      return `${startMonth} ${startYear} - Present`;
    }

    const endMonth = end.toLocaleString("en-US", { month: "short" });
    const endYear = end.getFullYear();

    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  };

  return (
    <div className="flex flex-col w-full max-w-2xl bg-white shadow-lg p-6 border border-gray-200 rounded-2xl">
      {/* Group: Logo and Company Details */}
      <div className="flex items-start">
        {/* Logo Container (Square, Fixed Width) */}
        <div className="w-24 h-24 flex-shrink-0 mr-6 flex items-center justify-center bg-gray-100 rounded-lg border border-gray-200">
          <img
            src={logo}
            alt={`${company} logo`}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Company Details */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500">
            {website ? (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:underline"
              >
                {company}
                <HiExternalLink className="ml-1 text-sm text-gray-400" />{" "}
                {/* External link icon */}
              </a>
            ) : (
              company
            )}
          </p>
          <p className="text-sm text-gray-400">
            {formatDateRange(startDate, endDate)} • {jobType}
          </p>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
      </div>

      {/* Bullet Points (Full Width Below Logo and Details) */}
      <p className="text-sm mt-2">{description}</p>
      <ul className="mt-4 text-gray-700 list-disc pl-6">
        {bulletPoints.map((point, index) => (
          <li key={index} className="mb-2 text-sm">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
