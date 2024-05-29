import { useState } from "react";
import useCharacters from '../../hooks/useCharacters'
import Modal from "../../components/modal";

const classCreate = (flag) => {
    const anchor = [
        'Alive', 'Dead',
        'Female','Male',
        'unknown',
    ]
    const style = [
        'py-1 px-4 rounded-full bg-green-600',
        'py-1 px-4 rounded-full bg-black',
        'py-1 px-4 rounded-full bg-rose-700',
        'py-1 px-4 rounded-full bg-blue-600',
        'py-1 px-4 rounded-full bg-slate-600',
    ]
    const color = anchor.indexOf(flag);
    return style[color]
}

const shoLocation = (array, search) => {
    if (array.length <= 0) return '-'
    const show = array.find(value => value.name == search)?.name ?? '-'
    return show
}

const Content = ({ data, onFlag }) => {
    const [input, setInput] = useState('');
    const [modalAdd, setModalAdd] = useState(false);
    const [modalChange, setModalChange] = useState(false);
    const [select, setSelect] = useState(0);
    const [show, setShow] = useState(false);
    const [showw, setShoww] = useState(false);
    const [error, setError] = useState({isError: false, massage: ''});
    const [errorr, setErrorr] = useState({isError: false, massage: ''});
    const dataCTX = useCharacters();

    const handleToggle = () => {
        setShow(prev => !prev)
        setShoww(false)
    }
    const handleTogglee = () => {
        setShow(false)
        setShoww(prev => !prev)
    }
    
    
    const handleSubmitLocation = (evt) => {
        evt.preventDefault();
        if (input != '') {
            if (!dataCTX.locationList.filter((value) => value.name == input).length > 0) {
                const count = JSON.parse(localStorage.getItem('locationEdit'));
                const ids = (count?.length > 0) ? count?.length+1 : 1
                localStorage.setItem('locationEdit',JSON.stringify([...dataCTX.locationList,{ id: ids, name: input }]))
                dataCTX.setAddLocation({ id: ids, name: input })
                setError({ isError: false, massage: 'Success' });
                setModalAdd(true);
            } else {
                setError({ isError: true, massage: 'Location Exist' });
                setModalAdd(true);
            }
        } else {
            setError({ isError: true, massage: 'Fill this form' });
            setModalAdd(true);
        }
        
    }

    const handleChangeLocation = (evt) => {
        evt.preventDefault();
        if (select != 0) {
            const name = dataCTX.locationList.find(value => value.id == select)?.name;
            dataCTX.characterList.map((value) => {
                if (value.id == data?.id) {
                    value.location.id = select
                    value.location.name = name
                }
            });
            localStorage.setItem('character',JSON.stringify(dataCTX.characterList))
            setErrorr({ isError: false, massage: 'Success' });
            setModalChange(true);
            onFlag()
        } else {
            setErrorr({ isError: true, massage: 'Fill this form' });
            setModalChange(true);
        }
    }

    
    return (
        <div className=''>
            <Modal open={modalAdd} setOpen={setModalAdd} data={error} />
            <Modal open={modalChange} setOpen={setModalChange} data={errorr} />
            <div className='flex flex-col justify-center items-center mt-8'>
                <div
                        className='h-80 w-80 rounded-full bg-cover bg-center bg-no-repeat' 
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.8)),url('${data?.image}')`
                        }}
                    >
                </div>
                <div className='py-8 text-white space-y-3'>
                        <h1 className='text-2xl text-center'>{data.name}</h1>
                        <p className="text-sm space-x-1">
                            <span>Status :</span>
                            <span className={classCreate(data?.status)}>
                                {data?.status}
                            </span>
                        </p>
                        <p className="text-sm space-x-1">
                            <span>Gender :</span>
                            <span className={classCreate(data?.gender)}>
                                {data?.gender}
                            </span>
                        </p>
                        <p className="text-sm space-x-1">
                            <span>Gender :</span>
                            <span className='py-1 px-4 rounded-full bg-slate-400'>
                                {data?.species}
                            </span>
                        </p>
                        <p className="text-sm space-x-1">
                            <span>Location :</span>
                            <span className='py-1 px-4 rounded-full bg-slate-400'>
                                {shoLocation(dataCTX.locationList,data?.location.name)}
                            </span>
                        </p>
                </div>
                
            </div>
            <div className='p-4 w-full flex flex-col justify-center items-center space-x-2 text-white'>
                <p className="text-2xl">Assign Location</p>
                <div className='py-2 w-full flex flex-row item-center justify-center space-x-2 text-white '>
                    <button
                        className="px-2 bg-blue-500 rounded-full text-center text-xs cursor-pointer"
                        onClick={handleToggle}
                    >
                        Add New Location
                    </button>
                    {(dataCTX?.locationList.length > 0) && (
                        <button
                            className="px-2 bg-blue-500 rounded-full text-center text-xs cursor-pointer"
                            onClick={handleTogglee}
                        >
                            Select Change Location
                        </button>
                    )}
                </div>
            </div>
            <div className={`${show ? '':'hidden'} px-4 text-white flex flex-col justify-center items-center` }>
                    <form className="px-8 pb-8 mb-4" >
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                            Name Location
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            required
                        />
                        {/* {error && <p className={`${error ? 'text-red-500': 'text-emerald-500'} text-xs italic`}>{error.massage}</p>} */}
                        </div>
                        <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleSubmitLocation}
                        >
                            Submit
                        </button>
                        </div>
                    </form>
            </div>
            <div className={`${showw ? '' : 'hidden'} px-4 text-white flex flex-col justify-center items-center`}>
                <div className="w-40 mb-3 grid">
                    <select
                        className="p-2 rounded-lg appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 "
                        onChange={(e) => setSelect(e.target.value)}
                        value={select}
                    >
                        <option value={0}  disabled>select item</option>
                        {dataCTX?.locationList?.map((value, _i) => {
                            return (
                                <option key={_i} value={value.id}>
                                    {value.name}
                                </option>
                            )
                        })}
                    
                    </select>
                </div>
                {/* {errorr && <p className={`${errorr ? 'text-red-500': 'text-emerald-500'} text-xs italic`}>{errorr.massage}</p>} */}
                <button
                    className="bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleChangeLocation}
                >
                    Change Location
                </button>
            </div>
        </div>
    )
}
    
export default Content