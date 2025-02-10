import React, { useEffect,useSate } from 'react';
const UseEffectEx = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount(1000); 
//     }, 5000);
//     document.title = count;
//   }, [count]);
    const [users , setUsers]= useSate([]);
    useEffect(()=>{
        fetch("https://jsoplaceholder.typiocode.com?users")
        .then(res=>res.json().then(data=>{
            setUsers(data);
        }))
        .catch(err=>console.log(err))
    },[setUsers])
  return (
    <div className='parent'>UseEffextEx
      {
        users.map((user, index) => {
            return(
                <React.Fragment key={index}>
                    <h1>{user.name}</h1>
                    <h3>{user.email}</h3>
                </React.Fragment>
            )
        })
      }
    </div>
  );
};
export default UseEffectEx;
