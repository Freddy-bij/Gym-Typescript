


type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center">
        <div>
            <h1>logo</h1>
        </div>
        <div className="flex gap-7">
            <p>Home</p>
            <p>Benefits</p>
            <p>ours classes</p>
            <p>contact us</p>

        </div>
<div className="flex gap-8 ">
     <div>Sign In</div>
        <button>Become members</button>
</div>
       
    </div>
  )
}

export default Navbar