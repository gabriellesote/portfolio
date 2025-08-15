interface SectionProps {
  bgColor: string;
  children: React.ReactNode;
}

function Section({ bgColor, children }: SectionProps) {
  return (
    <section
      className={`h-screen snap-start flex  flex-col items-center justify-center ${bgColor}`}
    >
      {children}
    </section>
  );
}

export default Section;
