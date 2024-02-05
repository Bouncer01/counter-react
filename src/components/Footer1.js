import React from 'react'

function Footer1() {
    const year = new Date().getFullYear()
    const mydate = document.getElementById('date')
    mydate.innerHTML = year

  return (
    <div>
         <div class="footer">
            <p>@ <span id="date"></span> Designed By Bouncer</p>
        </div>
    </div>
  )
}

export default Footer1