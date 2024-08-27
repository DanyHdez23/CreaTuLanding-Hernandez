import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav> 
            <h3> Doggies Pet Shop </h3>
            <div> 
                <button> Alimento </button>
                <button> Ropa </button>
                <button> Arneses </button>
                <button> Camas </button>
                <button> Juguetes </button>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default NavBar;
