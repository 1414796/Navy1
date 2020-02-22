import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <a class="hiddenanchor" id="signup"></a>
            <a class="hiddenanchor" id="signin"></a>
            <div class="login_wrapper">
               <Login/>
               <Register/>
            </div>
         </div>
      );
   }
}
class Login extends React.Component {
   render() {
      return (
         <div class="animate form login_form">
          <section class="login_content">
            <form>
              <h1>Login</h1>
              <div >
              	<label class="left-site">Username</label>
                <input type="text" class="form-control" placeholder="Username" required="" />
              </div>
              <div>
              	<label class="left-site">Password</label>
                <input type="password" class="form-control" placeholder="Password" required="" />
              </div>
              <div>
                <a class="btn btn-default submit" href="index.html">Log in</a><br />
                <a class=" reset_pass1" href="#">Lost your password?</a>
              </div>

              <div class="clearfix"></div>

              <div class="separator">
                <p class="change_link">New to site?
                  <a href="#signup" class="to_register"> Create Account </a>
                </p>

                <div class="clearfix"></div>
                <br />

                <div>									
	                  <i class="fa fa-paw"></i> Navy
                  <p>©2016 All Rights Reserved. Navy ...</p>
                </div>
              </div>
            </form>
          </section>
        </div>
      );
   }
}
class Register extends React.Component {
   render() {
      return (
         <div id="register" class="animate form registration_form">
          <section class="login_content">
            <form>
              <h1>Create Account</h1>
              <div>
                <label class="left-site">Username</label>
                <input type="text" class="form-control" placeholder="Username" required="" />
              </div>
              <div>
                <label class="left-site">Email</label>
                <input type="email" class="form-control" placeholder="Email" required="" />
              </div>
              <div>
                <label class="left-site">Password</label>
                <input type="password" class="form-control" placeholder="Password" required="" />
              </div>
              <div>
                <a class="btn btn-default submit" href="index.html">Register</a>
              </div>

              <div class="clearfix"></div>

              <div class="separator">
                <p class="change_link">Already a member ?
                  <a href="#signin" class="to_register" > Log in </a>
                </p>

                <div class="clearfix"></div>
                <br />


                <div>
                  <i class="fa fa-paw"></i> Navy
                  <p>©2016 All Rights Reserved. Navy ...</p>
                </div>

              </div>
            </form>
          </section>
        </div>
      );
   }
} 

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <Header/>
//             <Content/>
//          </div>
//       );
//    }
// }

export default App; 