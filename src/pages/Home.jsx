import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <>
      <h2 class="mb-4 font-bold">Search for any Github user or repositories.</h2>
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home
