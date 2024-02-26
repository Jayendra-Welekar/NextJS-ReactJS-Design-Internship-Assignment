import Page2Card from "./Page2Cards";

const Page2 = ()=>{
    return (
        <div className='page2'>
            <Page2Card />
            <div className='signup'>
                <p>Sign up and get exclusive special deals</p>
                <div className='signup-input'>
                    <input type="text" />
                    <div>
                        <p>Sign Up</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page2;