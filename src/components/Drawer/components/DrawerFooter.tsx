import Button from "@/components/Button/Button";

const DrawerFooter= () => (
    <div className="px-4 py-5 border-t border-gray-200 sm:p-6">
        <ul className="space-y-4">
            <li className="flex items-center justify-between">
                <p className="text-sm font-medium text-palletTwoQuaternary">Sub total</p>
                <p className="text-sm font-medium text-palletTwoQuaternary">$399</p>
            </li>
            <li className="flex items-center justify-between">
                <p className="text-sm font-medium text-palletTwoTertiary">Total</p>
                <p className="text-sm font-bold text-palletTwoTertiary">$399</p>
            </li>
        </ul>
        <div className="mt-5 space-y-3">
            <Button style="w-full px-6 py-4 text-sm font-bold text-palletTwoSecondary bg-palletThreeQuaternary border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-transparent hover:border-palletTwoQuaternary focus:bg-transparent hover:text-palletTwoQuaternary focus:border-palletTwoQuaternary">
                Checkout
            </Button>
            <Button style="w-full px-6 py-4 text-sm font-bold text-palletTwoQuaternary bg-palletTwoTertiary border-2 border-palletTwoTertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-transparent focus:bg-gray-200">
                Continuar compra
            </Button>
        </div>
    </div>
);

export default DrawerFooter;