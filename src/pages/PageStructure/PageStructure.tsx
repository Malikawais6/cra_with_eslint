import React from "react";

import { PageStructureStyle } from "./styles";

interface PageStructureProps {
  moduleTitle: string;
  pageTitle: string;
  headerBorderBottom?: boolean;
  TimeTracker?: React.ReactType;
  Extras?: React.ReactType;
}

export const PageStructure: React.FC<PageStructureProps> = props => {
  const {
    moduleTitle,
    pageTitle,
    TimeTracker,
    Extras,
    children,
    headerBorderBottom
  } = props;

  return (
    <PageStructureStyle headerBorderBottom={headerBorderBottom}>
      <header className="page-header">
        <div className="title-wrapper">
          <h3>{moduleTitle}</h3>
          <div className="page-title">
            <h1>{pageTitle}</h1>
            {TimeTracker && <TimeTracker />}
          </div>
        </div>
        {Extras && <Extras />}
      </header>
      <div className="page-content">{children}</div>
    </PageStructureStyle>
  );
};
