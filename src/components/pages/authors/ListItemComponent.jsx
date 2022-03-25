import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavAuthors } from "../../services/redux/favoriteAuthors/favoriteAuthorsActions";

const ListItemComponent = ({ list }) => {
    const dispatch = useDispatch();

    const handleFavAuthors = (id) => {
        dispatch(addToFavAuthors(id))
    }
    return (
        <div className='row my-4'>
            {list?.map((d, i) =>
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
                                    <button className="btn btn-success btn-default" onClick={() => handleFavAuthors(d._id)}>Add Favorite <i className="fa-solid fa-heart" /> </button>
                                    <Link to={d.link} className="text-muted p-2"><i className="fa-solid fa-up-right-from-square" /></Link>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>

                </div>
            )}
        </div>
    );
};

export default ListItemComponent;