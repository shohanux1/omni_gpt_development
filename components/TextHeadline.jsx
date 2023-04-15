const TextHeadline = ({ title, textColor = "#1FC77E", size }) => {
  const regex = /"([^"]+)"/g;
  const matches = title.match(regex);
  let newText = title;

  if (matches) {
    matches.forEach((match) => {
      const text = match.replace(/"/g, "");
      newText = newText.replace(
        match,
        `<span style="color: ${textColor}">${text}</span>`
      );
    });
  }

  return (
    <h1
      className={`text-4xl font-medium mb-8 ${size === "sm" && "text-[26px]"}`}
      dangerouslySetInnerHTML={{ __html: newText }}
    />
  );
};

export default TextHeadline;
