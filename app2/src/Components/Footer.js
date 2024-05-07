import React from 'react'

function Footer() {
  return (
    <div>
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3">Athena</i>
              </h6>
              <p>
                Athena is a micro-front-end shell UI implementing global user settings and API client management features. It is integrated into Security Cloud Launcher through Webpack Module Federation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4">
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://www.cisco.com/"> Cisco</a>
      </div>
    </footer>
    </div>
  )
}

export default Footer