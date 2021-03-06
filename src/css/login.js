import './login.css'

function login() {
    return (
        <div class="loginform">
            <form >
                <div class="loginname">
                <a>Login</a>
                </div>
                <div class="inputsForLoginpage">
                <input type="text" name="usernameLogin" id="" placeholder="Username" />
                </div>
                <div class="inputsForLoginpage">
                <input type="password" name="userNamePassword" placeholder="Password" id="" />
                </div>
                <div class="buttonlogin">
                <button type="submit" name="submit">Login</button>
                </div>
                <div class="notHaveAccount">
                <p>Not have an account?<a href="signup.php">sign up</a></p>
                </div>
            </form>
        </div>
    )
}

export default login