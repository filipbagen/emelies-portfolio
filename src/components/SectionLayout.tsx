import React, { ReactNode } from 'react';

interface SectionLayoutProps {
  title: string;
  description: string;
  content: ReactNode;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  title,
  description,
  content,
}) => {
  return (
    <div className="flex flex-col gap-12 mt-28 dark:text-white">
      <div className="flex flex-col gap-5">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="flex flex-col gap-16 justify-center">{content}</div>
    </div>
  );
};

export default SectionLayout;
