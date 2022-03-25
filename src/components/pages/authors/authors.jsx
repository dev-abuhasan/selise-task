import { useEffect, useState } from 'react';
import './authors.scss';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../Reuseable/Loading/Loading';
import { getAuthorsAction } from '../../services/redux/authors/authorsActions';
import ListItemComponent from './ListItemComponent';

const Authors = () => {
    const dispatch = useDispatch();
    const { data: getAuthors, loading } = useSelector(({ getAuthors }) => getAuthors);

    const getLimitFromStorage = localStorage.getItem('limit');
    const getPageNumFromStorage = localStorage.getItem('pageNum');

    const [limit, /*setLimit*/] = useState(Number(getLimitFromStorage === null ? 10 : getLimitFromStorage));
    const [pageNum, setPageNum] = useState(Number(getPageNumFromStorage === null ? 0 : getPageNumFromStorage));

    // get all data
    useEffect(() => {
        if (!getAuthors) {
            dispatch(getAuthorsAction(limit, pageNum));
        }
    }, [dispatch, getAuthors, limit, pageNum]);

    useEffect(() => {
        dispatch(getAuthorsAction(limit, pageNum));
    }, [dispatch, limit, pageNum]);
    return (
        <div id="authors_main">
            {loading && <Loading />}
            <div className='authors_query py-2 d-flex'>
                <h3>Total Authors: <span className='text-danger'>{getAuthors?.totalCount}</span></h3>
                {/* <input type="number" className='px-2' placeholder='Enter limit!' onBlur={e => {
                    localStorage.setItem('limit', e.target.value);
                    setLimit(e.target.value);
                }} /> */}
            </div>
            <ListItemComponent list={getAuthors?.results} />
            <div className='pagination py-1 mb-5 d-flex align-items-center justify-content-center'>
                <i className={`fa-solid fa-backward-step ${pageNum < 1 ? 'opacity-50' : ''}`}
                    onClick={() => {
                        pageNum > 0 && setPageNum(pageNum - 1);
                        localStorage.setItem('pageNum', pageNum - 1);
                    }}
                />
                <span>Page {pageNum + 1}</span>
                <i className="fa-solid fa-forward-step" onClick={() => {
                    setPageNum(pageNum + 1);
                    localStorage.setItem('pageNum', pageNum + 1);
                }} />
            </div>
        </div>
    );
};

export default Authors;