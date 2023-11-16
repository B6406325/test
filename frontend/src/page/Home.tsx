import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
    const test = [
    {
        id: 1,
        name: 'fook',
        gen: 'Z',
    }
    ];
  function handleSubmit(event:any) {
    event.preventDefault();
    navigate('/about',{state:{test}});
  }

  return (
    <>
        <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">About</button>
      </form>
    </>
  );
}