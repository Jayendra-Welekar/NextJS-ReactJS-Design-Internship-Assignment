import Cards from "./Cards"
import Options from "./Options"
import PostHeading from "./PostHeading"

 const Page1 = ()=>{
    return (
        <div className = "page1">
            <div className="heading">
                <p>Best Website builders in the US</p>
            </div>
            <PostHeading /> 
            <Options />
            <Cards />
        </div>
    )
}
export default Page1