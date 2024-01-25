import { ReactNode } from "react";
type SectionProps = {
  title?: string;
  children: ReactNode;
};
//This is the old way to write react with typeScript Code
// const Section: React.FC<SectionProps> = ({ children, title }) => {
//   return (
//     <section>
//       <h1>{title}</h1>
//       <p>{children}</p>
//     </section>
//   );
// };
const Section = ({ children, title = "Hello" }: SectionProps) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
};
export default Section;
