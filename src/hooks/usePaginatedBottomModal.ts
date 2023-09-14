import { useState } from "react";
import { BottomModalPage } from "../components/base/modal/types";

export const usePaginatedBottomModal = (pages: BottomModalPage[]) => {
  const [currentPage, setCurrentPage] = useState(0);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === pages.length - 1;

  const prev = () =>
    setCurrentPage((curr) => {
      if (curr <= 0) return curr;
      return curr - 1;
    });

  const next = () =>
    setCurrentPage((curr) => {
      if (curr >= pages.length - 1) return curr;
      return curr + 1;
    });

  const reset = () => setCurrentPage(0);

  return {
    currentPageIndex: currentPage,
    component: pages[currentPage].component,
    title: pages[currentPage].title,
    subtitle: pages[currentPage].subtitle,
    isFirstPage,
    isLastPage,
    prev,
    next,
    reset,
  };
};
