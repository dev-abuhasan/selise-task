import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavAuthors } from '../../services/redux/favoriteAuthors/favoriteAuthorsActions';

const FavoriteAuthors = () => {
    const dispatch = useDispatch();
    const { favoriteAuthors } = useSelector(({ favoriteAuthors }) => favoriteAuthors);

    const handleFavAuthors = id => {
        dispatch(removeFavAuthors(id));
    }
    return (
        <div className='row my-4'>
            {favoriteAuthors.length ? favoriteAuthors?.map((d, i) =>
                <div key={i} className='col-md-6 col-lg-4 mb-3'>
                    <div className="authors_card h-100">
                        <Card className="text-center h-100">
                            <Card.Header><h5 className="text-center m-0"><span className="text-success">{d.name}</span></h5></Card.Header>
                            <Card.Body className="desc py-3 d-flex flex-column justify-content-between">
                                <Card.Text>
                                    {d.bio}
                                </Card.Text>
                                <strong className="text-success">
                                    {d.description}
                                </strong>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-danger btn-default" onClick={() => handleFavAuthors(d.id)}>Remove Favorite <i className="fa-solid fa-heart" /> </button>
                                    <Link to={d.link} className="text-muted p-2"><i className="fa-solid fa-up-right-from-square" /></Link>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>

                </div>
            ) : <h3 className='my-5 text-danger'>You Dont Have Any Favorite Authors!</h3>}
        </div>
    );
};

export default FavoriteAuthors;