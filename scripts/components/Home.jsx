import React from 'react'

const Home = React.createClass({
  render () {
    return (
      <div>
        <section className="hero is-primary is-medium">
          <div className="hero-content">
            <div className="container">
              <h1 className="title is-1">
                Track &amp; Bill Your Time!
              </h1>
              <h2 className="subtitle is-3">
                An easy solution to track your projects, clients, invoices and more.
              </h2>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">

            <article className="section columns">
              <div className="column is-8">
                <h3 className="title">Create Your Project</h3>
                <p>Pie gummies marzipan tootsie roll. Biscuit toffee sugar plum marshmallow cookie. Cheesecake toffee bear claw. Candy canes topping biscuit brownie. Chocolate bar cake cupcake powder cheesecake marshmallow. Brownie jelly-o cotton candy powder cake gingerbread chocolate bar gingerbread jelly. Carrot cake pudding sesame snaps chocolate bar candy apple pie pie. Wafer bear claw dragée chocolate cookie lemon drops gummi bears.</p>
              </div>
              <div className="column">
                <img src="http://lorempixel.com/image_output/technics-q-c-640-480-6.jpg" className="border" />
              </div>
            </article>


            <article className="section columns">
              <div className="column is-8">
                <h3 className="title">Assign To A Client</h3>
                <p>Cake tiramisu danish danish lollipop topping tootsie roll. Tiramisu topping dragée marshmallow tiramisu tiramisu donut chocolate wafer. Lemon drops liquorice chocolate. Marzipan toffee chocolate croissant topping muffin. Lemon drops cotton candy muffin dessert toffee tiramisu gummies sugar plum. Macaroon jelly beans cheesecake gummi bears tiramisu soufflé pudding.</p>
              </div>
              <div className="column">
                <img src="http://lorempixel.com/image_output/animals-q-c-640-480-9.jpg" className="border" />
              </div>
            </article>

            <article className="section columns">
              <div className="column is-8">
                <h3 className="title">Setup Your Services</h3>
                <p>Croissant soufflé cookie sugar plum jelly beans pastry sweet roll. Fruitcake danish lemon drops cake. Jelly beans chocolate bar marshmallow pudding. Chocolate cake halvah candy icing cupcake icing jelly beans liquorice dragée. Sugar plum pastry topping chupa chups marshmallow sugar plum cake halvah chupa chups. Apple pie tart candy chupa chups icing sugar plum apple pie gummi bears gummi bears. Cake brownie candy canes marshmallow. Soufflé gummi bears chocolate bar jelly.</p>
              </div>
              <div className="column">
                <img src="http://lorempixel.com/image_output/nightlife-q-c-640-480-5.jpg" className="border" />
              </div>
            </article>

            <article className="section columns">
              <div className="column is-8">
                <h3 className="title">Send Out Your Invoices</h3>
                <p>Topping macaroon chocolate cake chupa chups. Chocolate cake gummies chocolate cake dessert ice cream pie icing. Sesame snaps chocolate cake brownie chocolate caramels apple pie. Bonbon candy soufflé sweet topping bonbon donut. Toffee fruitcake sesame snaps caramels. Lemon drops sesame snaps cake ice cream tiramisu croissant jelly-o cookie powder. Pie toffee tart cake gummies marzipan carrot cake toffee. Icing candy candy cake cookie jelly cheesecake tiramisu oat cake. Wafer sugar plum sweet. Liquorice soufflé marzipan macaroon.</p>
              </div>
              <div className="column">
                <img src="http://lorempixel.com/image_output/city-q-c-640-480-9.jpg" className="border" style={{width:'390px'}} />
              </div>
            </article>

          </div>
        </section>

      </div>
    )
  }
})

export default Home
