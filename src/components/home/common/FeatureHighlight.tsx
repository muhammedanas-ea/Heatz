const FeatureHighlight = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="text-white flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-5">
      <h1 className="font-semibold text-3xl md:text-[2.1rem] max-w-sm">
        {title}
      </h1>
      <p className="text-xs max-w-full md:max-w-[31rem]">{description}</p>
    </div>
  );
};

export default FeatureHighlight;
