import React from 'react'

export default function App() {

  const user = {
    name: "Muskan",
    age: 22,
    field: "Frontend"
  }

  localStorage.setItem("user", JSON.stringify(user))

  const admin = JSON.parse(localStorage.getItem("user"))
  console.log(admin)

  return (
    <div>App</div>
  )
}
