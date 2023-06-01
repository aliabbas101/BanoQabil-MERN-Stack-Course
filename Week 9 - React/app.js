let root = document.getElementById('root');

let container = ReactDOM.createRoot(root);
let myName = 'ali';

const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

container.render(
  <div>
    {myName}
    <Cars />
    <LoginForm />
  </div>
);

/**
 * JSX = Javascript Extended
 *
 */

/**
 * Input/Parameter - props
 * Processing - HTML+Javascript+styling | Logic
 * Output => JSX
 */
function Cars() {
  /** Fragments */
  return (
    <>
      <ul>
        <li>Lamborghini</li>
        <li>Ferrari</li>
        <li>Mehran</li>
      </ul>
    </>
  );
}

function LoginForm() {
  return (
    <>
      <CustomField type="text" customph="Enter Password" />
      <CustomField type="email" customph="Enter Email" />
      <CustomField />
    </>
  );
}

function CustomField(options) {
  return (
    <>
      <input
        type={options.type}
        className="customInput"
        placeholder={options.customph}
      />
      <br />
      <br />
    </>
  );
}
