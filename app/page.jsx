import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className = 'w-full flex-center flex-col'>
        <h1 className = 'head_text text-center'>
            Discover and Share
            <br />
            <span className = 'orange_gradient text-center'> AI Powered Prompts</span>
        </h1>
        <p className ='desc text-center'>promptopia ia an open-souce AI prompting tools for morden world
            to discover, creat and share creative prompts
        </p>
        <Feed />
    </section>
  )
}

export default Home