import cart from '../../assets/cart.png'

const CartWidget = () => {
    return (
        <div>
            <img className='carritoImg' src={cart} alt="cartwidget" />
            0
        </div>
    );
}

export default CartWidget;