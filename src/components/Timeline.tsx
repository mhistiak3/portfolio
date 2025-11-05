import DynamicIcon from "./DynamicIcon";

const Timeline = ({
  data,
  title,
  icon,
}: {
  data: { year: string; title: string; organization: string }[];
  title: string;
  icon: string;
}) => {
  return (
    <div>
      <DynamicIcon icon={icon} className="text-5xl text-secondary mb-1.5" />

      <h3 className="text-base mb-6">{title}</h3>
      <div className="timeline_wrapper">
        {data.map(
          (
            item: { year: string; title: string; organization: string },
            index: number
          ) => (
            <div key={`education-${index}`} className="timeline_item">
              <p>{item.year}</p>
              <p className=" text-primary/80">{item.title}</p>
              <p>{item.organization}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Timeline;
