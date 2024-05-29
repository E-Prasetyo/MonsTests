import { useNavigate } from 'react-router-dom';

const Menu = (props) => {
  const { value } = props;
  const navigate = useNavigate();

  const handleClick = (id) => {
      navigate(`/character/${id}`)
  }
  return (
    <div
      className='group w-60 h-60 p-6 bg-cover rounded-full text-center shadow-lg bg-slate-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.8)),url('${value?.image}')`
      }}
      onClick={handleClick.bind(null, value?.id)}
    >
      <p className='h-full flex justify-center items-center font-bold text-2xl group-hover:text-black text-white'>
        {value?.name ?? 'Title'}
      </p> 
    </div>
  )
}

export default Menu