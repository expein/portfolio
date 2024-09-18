import Image from "next/image";
import myImage from "../../assets/img/My.jpg";

const SectionToMe = () => {
    return (
        <div className="h-screen w-full grid grid-cols-2 gap-10 px-10">
            <div className="flex items-center justify-center">
                <div className="rounded-full overflow-hidden lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] relative" style={{ filter: 'drop-shadow(0 4px 6px rgba(255, 0, 0, 0.3))' }}>
                    <Image src={myImage} alt="sectionToMe" layout="fill" className="object-cover" />
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-10 items-center justify-center h-full">
                    <div className="text-left w-full">
                        <h1 className="text-4xl font-bold">Hola, soy <span className="text-palletTwoTertiary">Santiago</span></h1>
                        <p className="text-xl">Desarrollador FullStack</p>
                    </div>
                    <div className="text-justify w-full">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempore reprehenderit, fugit quisquam inventore quae rem vel ut molestiae ad architecto, corrupti quo similique nihil blanditiis assumenda in magni delectus?</p>
                    </div>
                    <div className="w-full">
                        <button className="bg-palletTwoSecondary text-palletTwoQuaternary transition-all duration-200 px-5 py-2 rounded-full hover:bg-palletTwoQuaternary hover:text-palletTwoSecondary font-bold">Cartera (Mis redes)</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionToMe;