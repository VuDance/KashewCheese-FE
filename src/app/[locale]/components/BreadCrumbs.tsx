"use client"

import { Box, Breadcrumbs } from '@mui/material';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


interface ListBreadcrumbModel {
  link?: string;
  title: string;
}

interface BreadCrumbProps {
  isLoading?: boolean;
  listBreadcrumb: ListBreadcrumbModel[];
}

const BreadCrumbs = ((props:BreadCrumbProps) => {
  const { listBreadcrumb } = props;
  const [domNode, setDomNode] = useState<any>();

  useEffect(() => {
    const node = document.getElementById("breadcrumbs");
    setDomNode(node);
  }, []);

  const getContent: () => JSX.Element = () => {
    return (
      <Box className="breadcrumbs" paddingTop="5px">
        <Breadcrumbs
          aria-label="breadcrumb"
        >
          {listBreadcrumb &&
            listBreadcrumb.map((item: any, index: number) => (
              <div key={index}>
                  <div
                    key={index}
                    className='text-2xl font-semibold'
                  >
                    {item.title}
                  </div>
              </div>
            ))}
        </Breadcrumbs>
      </Box>
    );
  };
  if (domNode) {
    return ReactDOM.createPortal(getContent(), domNode);
  }

  return null;
});


export default BreadCrumbs;
