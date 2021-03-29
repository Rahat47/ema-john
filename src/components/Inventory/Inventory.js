import React from 'react';
const Inventory = () => {

    async function handleAddProduct(e) {
        e.preventDefault()
        const product = {}
        if (product) {
            try {
                const response = await fetch("http://localhost:5000/add-product", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(product)
                })

                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("There is no product to add");
        }

    }


    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            borderRadius: "5px",
            border: "1px solid crimson",
            margin: "25px"
        }}>
            <form style={{ display: "flex", flexDirection: "column", }} onSubmit={(e) => handleAddProduct(e)} >
                <h1>This form is not working and currently is not handled...</h1>
                <p>

                    <span>Name </span><input type="text" />
                </p>
                <p>
                    <span>Price </span><input type="number" />
                </p>
                <p>
                    <span>Quantity </span><input type="Number" />
                </p>
                <p>
                    <span>Image </span><input type="file" accept="image/*" />
                </p>
                <button type="submit">Add Product</button>
            </form>

        </div>
    );
};

export default Inventory;