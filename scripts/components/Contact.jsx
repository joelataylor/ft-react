import React from 'react';
import FontAwesome from 'react-fontawesome';

const Contact = React.createClass({
  render () {
    return (
      <div>

        <section className="section">
          <div className="container content">
            <h1 className="title">Contact</h1>
            <p>Chocolate bar gummies pie cheesecake tootsie roll chocolate bar marshmallow. Wafer cotton candy cotton candy carrot cake caramels. Cookie cookie oat cake chocolate cake muffin carrot cake tart. Oat cake candy canes brownie chocolate cake marzipan. Marzipan jujubes croissant. Muffin jelly-o toffee lemon drops pudding. Wafer candy canes fruitcake jelly sesame snaps pie wafer apple pie. Danish cake cotton candy tiramisu cheesecake donut. Chupa chups croissant cake gummies. Dragée biscuit dessert. Cupcake cookie caramels bear claw cheesecake bear claw cake cotton candy. Wafer tart powder ice cream marzipan topping soufflé tootsie roll.</p>
            <p>Candy canes topping jujubes tiramisu. Gummies chupa chups pudding topping. Pudding jelly-o jelly beans. Sesame snaps chocolate bar sesame snaps bonbon lollipop tart. Danish gummi bears pie macaroon jelly beans gummies gummi bears cotton candy. Chupa chups jujubes chocolate. Marzipan sesame snaps chocolate bar topping danish powder tart jelly-o oat cake. Sesame snaps cotton candy tootsie roll chocolate bear claw halvah chupa chups. Cheesecake muffin jelly-o candy canes candy canes. Gingerbread chupa chups halvah jelly tart candy cotton candy liquorice jelly beans. Jelly beans tart fruitcake pudding sesame snaps apple pie. Gummies pastry liquorice. Jelly-o jelly-o donut liquorice.</p>
          </div>
        </section>

        <section className="hero is-primary is-bold">
          <div className="hero-content">
            <div className="container">
              <div id="mc_embed_signup" className="columns is-vcentered">
                <div className="column is-third is-left">
                  <p className="title">FT <strong>Newsletter</strong></p>
                  <p className="subtitle">Get notified when v1 is ready!</p>
                </div>

                <div className="column">
                  <form action="//joelataylor.us2.list-manage.com/subscribe/post?u=df413e86ffa2cb0b8f04f827a&amp;id=c1b8080b7a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate="noValidate">
                    <div id="mc_embed_signup_scroll">
                      <div className="control is-withicon is-horizontal">
                        <input type="email" value="" name="EMAIL" className="input is-flat required email" id="mce-EMAIL" placeholder="email address" required="" aria-required={true} />
                        <i className="fa fa-envelope"></i>
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button is-primary is-outlined is-inverted" />
                      </div>
                      <div id="mce-responses">
                        <div className="notification is-danger response" id="mce-error-response" style={{display:'none'}}></div>
                        <div className="notification is-success response" id="mce-success-response" style={{display:'none'}}></div>
                      </div>
                      <div style={{position:'absolute', left:'-5000px'}} aria-hidden={true}>
                        <input type="text" name="b_df413e86ffa2cb0b8f04f827a_c1b8080b7a" tabIndex="-1" defaultValue="" />
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
})

export default Contact
