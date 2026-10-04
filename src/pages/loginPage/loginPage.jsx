import './loginPage.css'
import { Link } from 'react-router-dom'
function LoginPage() {
  return (
    <section className='loginPage'>
      <section className='sidePannle'>
        <h1 className='devDeskHeader'>DevDesk</h1>
        <section className='mainLeftSideSection'>
          <div>
            <h2 className='runClientText'>
              Run client work without the tool sprawl.
            </h2>
            <p className='subheaderSmallText'>
              Projects, clients, tasks, messages and invoices — one focused
              workspace for your agency.
            </p>
          </div>
          <section className='blueQuote'>
            <backquote>
              “DevDesk gives our delivery team one clear source of truth.”
            </backquote>
            <p>Moshe Schwartzberg - Admin</p>
          </section>
        </section>
      </section>

      <section className='mainPannle'>
        <div className='subPannle'>
          <div>
            <h2 className='welBacTxt'>Welcome Back</h2>
            <p className='signInText'>
              Sign in to continue to your DevDesk workspace.
            </p>
          </div>
          <form className='signInForm'>
            <label htmlFor='email'>Email Address</label>
            <input typeof='email' id='email' placeholder='moshe@devdesk.io' />
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='***********' />
            <div className='forgotOrRemember'>
              <div>
                <input type='checkbox' id='checkbox' className='checkboxBTN' />
                <label htmlFor='checkbox' className='checkboxTxt'>
                  &nbsp;Remember me
                </label>
              </div>
              <Link to='/dashboard'>Forgot Password?</Link>
            </div>
            <Link to='/dashboard'>
              <button type='submit' className='signInBtn'>
                Sign In
              </button>
            </Link>
            <div className='createAccountDivSignInPage'>
              <Link to='/dashboard'>New to DevDesk?</Link> &nbsp;&nbsp;&nbsp;
              <Link to='/dashboard'>Create account</Link>
            </div>
          </form>
          <p className='footerTextQestionMark'>
            Secure workspace • Privacy-first • Built for agencies
          </p>
        </div>
      </section>
    </section>
  )
}
export default LoginPage
