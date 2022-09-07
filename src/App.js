import DB from './db.json'
import './style.css'

function App() {

  const handleMouse = (e) => {
    let id = e.target.classList
    document.getElementById("result" + id[2]).classList.toggle("active")
  }

  let total = 0
  DB.map(item => {
    total += item.amount
  })

  return (
    <div className="App">
      <section className="balance SoftRed">
        <article>
          <p>My balance</p>
          <p className="balance_value">$921.48</p>
        </article>
        <div className="pay-system">
          <div className="circle hollow"></div>
          <div className="circle DarkBrown"></div>
        </div>
      </section>
      <section className="spending VeryPaleOrange">
        <p className="spending_text">Spending - Last 7 days</p>
        <section className="chart">
          {DB.map(item => (
          <div className="day MediumBrown" key={item.id}>
            <div id={'result' + item.id} className='result DarkBrown'>${item.amount}</div>
            <div
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
              id='scale'
              className={'scale SoftRed ' + item.id}
              style={{height: item.amount * 2}}></div>
            <p>{item.day}</p>
          </div>
          ))}
        </section>
        <div className="line Cream"></div>
        <section>
          <article>
            <p className="MediumBrown">Total this month</p>
            <p className="total_value">${total.toFixed(2)}</p>
          </article>
          <article className="percent-up">
            <p className="percent ">+2.4%</p>
            <p className="MediumBrown">from last month</p>
          </article>
        </section>
      </section>
      
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">xstapix</a>.
      </div>
    </div>
  );
}

export default App;
