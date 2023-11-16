import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

export default function About() {
    const location = useLocation();
    console.log(location.state);
    const navigate = useNavigate();

    function handleSubmit(event:any) {
        event.preventDefault();
        navigate('/');
    }

  return (
    <>
        <h1>About</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Home</button>
      </form>
    </>
  );
}