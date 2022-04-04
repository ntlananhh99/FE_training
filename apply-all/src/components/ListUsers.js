import React, {useEffect, useState} from 'react'
import getUsers from '../callAPI'

const ListUsers = () => {
  const [users, setUsers] = useState([]);;
  async function callGetUsers(){
    await getUsers()
    .then (response => response.data)
    // .then (te => console.log(te))
    .then (result => {setUsers(result)})
    .catch (err => console.log(err))
  }
  useEffect(() => {
    callGetUsers()
  }, []);
  return (
    <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">
        <div className="overflow-hidden shadow-md sm:rounded-lg mt-5 " >
        <table className="table-fixed min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="uppercase py-5">ID</th>
              <th className="uppercase">First name</th>
              <th className="uppercase">Last name</th>
              <th className="uppercase">Email</th>
              <th colSpan="2" className="uppercase ">Action</th>
            </tr>
          </thead>
        <tbody>
          {users.map(user=>(
                    <tr className="bg-white border-b ">
                    <td className="py-4 px-6 whitespace-nowrap">{user.id}</td>
                    <td className="py-4 px-6 whitespace-nowrap">{user.first_name}</td>
                    <td className="py-4 px-6 whitespace-nowrap">{user.last_name}</td>
                    <td className="py-4 px-6 whitespace-nowrap">{user.email}</td>
                    <td className="py-2 px-4 whitespace-nowrap">
                            {/* <Link to={`/user/edit`}> */}
                                <button><i className="fa-solid fa-pen-to-square text-blue-600"></i></button>
                            {/* </Link> */}
                    </td>
                    <td className="py-2 px-4 whitespace-nowrap">  
                        
                    <button >
                        <i className="fa-solid fa-trash-can text-red-600"></i>
                    </button>

                    
                    </td>
                </tr>
              ))   }
        </tbody>
        </table>
        </div>
    </div>
  )
}

export default ListUsers;