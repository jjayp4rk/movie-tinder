import React, { Component } from 'react';
import { Pagination, PageItem, PageLink } from 'mdbreact';
import './PaginationBar.scss';

const makePaginationArray = pagesTotal => {
  let paginationArray = [];
  for (let i = 1; i <= pagesTotal; i++) {
    paginationArray.push(i);
  }
  return paginationArray;
};

class PaginationBar extends Component {
  render() {
    const {
      goToFirst,
      goToLast,
      nextPage,
      prevPage,
      goToPage,
      currentPage,
      pagesTotal
    } = this.props;

    let pagesArray;

    if (2 < currentPage) {
      pagesArray = makePaginationArray(pagesTotal).slice(
        currentPage - 3,
        currentPage + 2
      );
    } else {
      pagesArray = makePaginationArray(pagesTotal).slice(0, 5);
    }

    const paginationBar = pagesArray.map(page => (
      <PageItem key={page} active={page === currentPage} data-page={page}>
        <PageLink className="page-link" data-page={page} onClick={goToPage}>
          {page} <span className="sr-only" />
        </PageLink>
      </PageItem>
    ));
    return (
      <div className="pagination-bar">
        <Pagination>
          <PageItem disabled={currentPage === 1 ? true : false}>
            <PageLink className="page-link" onClick={goToFirst}>
              <span>First</span>
            </PageLink>
          </PageItem>
          <PageItem disabled={currentPage === 1 ? true : false}>
            <PageLink onClick={prevPage}>
              <span aria-hidden="true">&laquo;</span>
            </PageLink>
          </PageItem>
          {paginationBar}
          <PageItem
            disabled={currentPage === pagesTotal ? true : false}
            onClick={nextPage}
          >
            <PageLink>
              <span aria-hidden="true">&raquo;</span>
            </PageLink>
          </PageItem>
          {/* <PageItem disabled={currentPage === pagesTotal ? true : false}>
            <PageLink
              className="page-link"
              onClick={() => goToLast(pagesTotal)}
            >
              <span>Last</span>
            </PageLink>
          </PageItem> */}
        </Pagination>
      </div>
    );
  }
}

export default PaginationBar;
