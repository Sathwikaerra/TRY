import React from 'react'

const footer = () => {
  return (
    <footer class="bg-body-tertiary text-center">
  
  <div class="container p-4 pb-0">
  
    <section class="mb-4">
  
      <a
      data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{ backgroundColor: 'blue' }}
        href="#!"
        role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

     
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{ backgroundColor: 'blue' }}
        href="#!"
        role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{ backgroundColor: 'red' }}
        href="#!"
        role="button"
        ><i class="fab fa-google"></i
      ></a>

     
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{ backgroundColor: 'brown' }}
        href="#!"
        role="button"
        ><i class="fab fa-instagram"></i
      ></a>

     
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{ backgroundColor: 'green' }}
        href="#!"
        role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>
     
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{ backgroundColor: 'orange' }}
        href="#!"
        role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
  
  </div>
 

  <div class="text-center p-3" style={{ backgroundColor: 'black',color:'white' }}>
    © 2020 Copyright:
    <a class="text-body text-white"  href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  
</footer>
  )
}

export default footer
