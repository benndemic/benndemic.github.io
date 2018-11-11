/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
      <h5 class="card-title">Welcome to the Symptom Checker Demo.</h5>
      <div class="card-text">
        <p>Welcome to BUmedic, this diagnosis will last for approximately 3 minutes </p>
        <p>Please click <span class="badge badge-primary">Next</span> to move to the first question.</p>
        <p class="text-muted small"><i class="fa fa-info-circle"></i> This is the welcome screen. In a real life scenario you will probably want to display T&C here. In the background, the new <a target="_blank" href="https://developer.infermedica.com/docs/diagnosis#helping-us-improve-the-engine">Interview-Id</a> was created.</p>
      </div>
    `);
  });
};

export default template;
