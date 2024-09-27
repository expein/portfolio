import Button from "../Button/Button";
import Section from "../Section/Section";

const SectionContactMe = () => {
    return (
        <Section title="Contactame">
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:mt-16">
                <div className="flex justify-center">
        
                    <div className="w-1/2">
                        <form action="#" method="POST" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label className="text-base font-normal text-palletTwoQuaternary"> Santiago </label>
                                <div className="mt-2">
                                    <input type="text" name="name" id="name" placeholder="Ingresa tu nombre completo" className="block w-full px-5 py-4 text-base font-normal text-white placeholder-gray-500 bg-transparent border-2 border-palletTwoTertiary rounded-md focus:border-palletTwoTertiary focus:ring-palletTwoTertiary focus:ring-1" />
                                </div>
                            </div>
        
                            <div>
                                <label className="text-base font-normal text-palletTwoQuaternary"> Email </label>
                                <div className="mt-2">
                                    <input type="email" name="email" id="email" placeholder="Ingresa tu email" className="block w-full px-5 py-4 text-base font-normal text-white placeholder-gray-500 bg-transparent border-2 border-palletTwoTertiary rounded-md focus:border-palletTwoTertiary focus:ring-palletTwoTertiary focus:ring-1" />
                                </div>
                            </div>
        
                            <div className="sm:col-span-2">
                                <label className="text-base font-normal text-palletTwoQuaternary"> Mensaje </label>
                                <div className="mt-2">
                                    <textarea name="message" id="message" placeholder="Escribe tu mensaje" className="block w-full px-5 py-4 text-base font-normal text-white placeholder-gray-500 bg-transparent border-2 border-palletTwoTertiary rounded-md resize-y focus:border-palletTwoTertiary focus:ring-palletTwoTertiary focus:ring-1"></textarea>
                                </div>
                            </div>
        
                            <div className="sm:col-span-2">
                                <Button style=" px-6 py-4 text-sm font-bold text-palletTwoQuaternary bg-palletTwoTertiary border-2 border-palletTwoTertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-transparent focus:bg-gray-200">
                                    Enviar
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default SectionContactMe;