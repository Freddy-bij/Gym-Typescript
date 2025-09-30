import type { SelectedPage } from "@/shared/types"
import logo from "@/assets/logo.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Footer = ({ setSelectedPage }: Props) => {
    return (
        <footer className="bg-red-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap=16 md:flex ">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={logo} alt="logo" />
                    <p className="my-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Expedita vero tenetur delectus possimus officiis voluptatem eius pariatur sequi quos vel sint quam tempora, 
                        quas saepe quae est aliquid nesciunt doloribus.
                    </p>
                    <p>&copy;Evogym All Right Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold"> Links </h4>
                    <p className="my-5"> Mass orci senectus</p>
                    <p>Et gravida id et  etiamc</p>
                    <p>Ullamcorper vivamus</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us </h4>
                    <p className="my-5"> Tempus metus mattis risus volutpat egastas.</p>
                    <p>(333)425-6825</p>
                    <p>Ullamcorper vivamus</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer