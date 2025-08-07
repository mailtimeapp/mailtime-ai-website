const FaqAccordion = ({ children, ...props }) => {
  return (
    <div className="flex flex-col space-y-[1.6rem]" {...props}>
      {children}
    </div>
  );
};

export default FaqAccordion;
