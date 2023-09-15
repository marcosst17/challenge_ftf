"use client"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Development Information</h1>
        <div className="max-w-md mx-auto p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">User Search</h2>
          <p className="mb-4">Enter a github username to get all publicly available repositories.</p>
          <p className="mb-4">You can search for mine typing marcosst17</p>
        </div>
      </div>
    </main>
  )
}
