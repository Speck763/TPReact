import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className="loader">
        <Spinner animation="border" variant="primary" className="lader-spinner"/>
    </div>
  )
}

export default Loader