import './loginPage.css'
function loginPage() {
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
        <div>
          <h2>Welcome Back</h2>
          <p>Sign in to continue to your DevDesk workspace.</p>
          <form>
            <label>Email Address</label>
            <input typeof='email' placeholder='moshe@devdesk.io' />
            <label>Password</label>
            <input type='password' placeholder='***********' />
          </form>
          <div>
            <input type='checkbox' /> <label>Remember me </label>
            <a href='#'>Forgot Password?</a>
          </div>
          <button type='submit'>Sign In</button>
          <div>
            <a href='#'>New to DevDesk</a> <a href='#'>Create account</a>
          </div>
        </div>
        <p>Secure workspace • Privacy-first • Built for agencies</p>
      </section>
    </section>
  )
}
export default loginPage
