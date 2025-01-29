import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div>Usuarios</div>
    <li><Link href="/dashboard/usuarios/1">User1</Link></li>
    <li><Link href="/dashboard/usuarios/2">User2</Link></li>
    <li><Link href="/dashboard/usuarios/3">User3</Link></li>
    </>
  )
}

export default page