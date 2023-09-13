import Header from './../components/header/Header'

function Home() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h1 className="title-1">Skills</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, ReactJS, HTML, CSS, NPM, BootStrap, ChakraUI.</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>MS SQL server</p>
            </li>

            <li className="content-list__item">
              <h2 className="title-2">WEB Design</h2>
              <p>Figma, Tilda.</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home
