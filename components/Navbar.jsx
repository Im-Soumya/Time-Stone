const Navbar = () => {
    return (
        <nav className="flex justify-between">
            <div>Logo</div>

            <div className="flex">
                <h1>About</h1>
                <h1>Shop</h1>
                <h1>User</h1>
                <div className="snipcart-checkout">
                    <p className="snipcart-total-price">$0.00</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;