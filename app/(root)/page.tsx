
import HeaderBox from '@/components/ui/HeaderBox'

const Home = () => {
  const loggedIn ={ firstName: 'Cyra'};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">

         <HeaderBox
         type="greeting"
         title="Welcome"
         user={loggedIn?.firstName || 'Guest'}
         subtext="Access and manage your account and transactions efficiently."
         />
      
        </header>

      </div>
      
    </section>
  )
}

export default Home
