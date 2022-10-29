import './Login.css'

function Login (){

    function showactive(){
        const formbox = document.querySelector('.formbox');
        const body = document.querySelector('body');
        formbox.classList.add('active');
        body.classList.add('active');
    }

    function removeactive(){
        const formbox = document.querySelector('.formbox');
        const body = document.querySelector('body');
        formbox.classList.remove('active');
        body.classList.remove('active');
    }


    return(
        <div className="contianer">
            <div className="bluebg">
                <div className="box singin">
                    <h2>آیا از قبل ثبت نام کردید؟</h2>
                    <button className='singinbtn' onClick={removeactive} >ورود</button>
                </div>
                <div className="box singup">
                    <h2>هنوز ثبت نام نکرده اید؟</h2>
                    <button className='singupbtn' onClick={showactive}>ثبت نام</button>
                </div>
            </div>
            <div className="formbox">
                <div className="form singinform">
                    <form>
                        <h3> Sing in </h3>
                        <input type="text" placeholder='نام کاربری' />
                        <input type="password" placeholder='رمز عبور' />
                        <input type="submit" value="ورود" />
                        <a href="#" className='forget'>فراموشی رمز عبور</a>
                    </form>
                </div>
                <div className="form singupform">
                    <form>
                        <h3> Sing up </h3>
                        <input type="text" placeholder='نام کاربری' />
                        <input type="text" placeholder='ایمیل' />
                        <input type="password" placeholder='رمز عبور' />
                        <input type="password" placeholder='تکرار رمز عبور ' />
                        <input type="submit" value="ثبت نام" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login