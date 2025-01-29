import Link from 'next/link'

const page = ({params }: {params: {id: string}}) => {
    const {id} = params;
  return (
    <>
    <div>Usuarios</div>
    <h1>user Id: {id}</h1>
    </>
  )
}

export default page