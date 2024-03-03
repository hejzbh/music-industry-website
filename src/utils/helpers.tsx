export const boldMarkedText = ({
  text = "",
  boldClassName = "",
}: {
  text: string;
  boldClassName?: string;
}) => {
  const firstIndex = text.lastIndexOf("<b>") + "<b>".length;
  const lastIndex = text.lastIndexOf("</b>");

  const boldedText = text.slice(firstIndex, lastIndex);
  return (
    <>
      <span className={boldClassName}>{boldedText}</span>{" "}
      {text.slice(lastIndex + 4)}
    </>
  );
};
