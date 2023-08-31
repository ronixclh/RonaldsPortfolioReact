function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Jelgava, Latvija</p>
          </li>

          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+37129828671">+371 29828671</a>
            </p>
          </li>

          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:ronalds.borisovs@inbox.lv">
                ronalds.borisovs@inbox.lv
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Contacts
