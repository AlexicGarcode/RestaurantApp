import React from 'react'

const Title = () => {
  const array = [
    {
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 30
    },
    {
      nombre: 'Pedro',
      apellido: 'Gomez',
      edad: 25
    },
    {
      nombre: 'Maria',
      apellido: 'Gomez',
      edad: 25
    },
    {
      nombre: 'Maria',
      apellido: 'Gomez',
      edad: 25
    },
    {
      nombre: 'Maria',
      apellido: 'Gomez',
      edad: 25
    },
    {
      nombre: 'Maria',
      apellido: 'Gomez',
      edad: 25
    },
    {
      nombre: 'Maria',
      apellido: 'Gomez',
      edad: 25
    }
  ]

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.nombre}</td>
                <td>{item.apellido}</td>
                <td>{item.edad}</td>
              </tr>
            )
          })}
          </tbody>WD
      </table>
    </>
  )
}

export default Title