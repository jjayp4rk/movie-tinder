import React, { Component } from 'react';
import { Pagination, PageItem, PageLink } from 'mdbreact';

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
      nextPage,
      prevPage,
      goToPage,
      currentPage,
      pagesTotal
    } = this.props;

    let pagesArray = makePaginationArray(pagesTotal);

    const paginationBar = pagesArray.map(page => (
      <PageItem key={page} active={page === currentPage}>
        <PageLink className="page-link" data-page={page} onClick={goToPage}>
          {page} <span className="sr-only" />
        </PageLink>
      </PageItem>
    ));
    return (
      <div className="pagination-bar">
        <Pagination className="pagination-circle-large">
          <PageLink className="page-link">
            <span>First</span>
          </PageLink>
          <PageItem disabled={currentPage === 1 ? true : false}>
            <PageLink aria-label="Previous" onClick={prevPage}>
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </PageLink>
          </PageItem>
          {paginationBar}
          <PageItem onClick={nextPage}>
            <PageLink className="page-link" onClick={nextPage}>
              &raquo;
            </PageLink>
          </PageItem>
          <PageLink className="page-link">
            <span>Last</span>
          </PageLink>
        </Pagination>
      </div>
    );
  }
}

export default PaginationBar;
