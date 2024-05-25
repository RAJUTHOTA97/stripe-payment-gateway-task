const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PJTcZSIvmbJGQ43hAXbInzevHsV6hg1caCiR1AjomL234kKQyq2DrrWSqOJrelMdeJiebjtECP6AEKrkL2yYooM00RQBvIzJx");

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("server running");
});

app.post("/api/create-checkout-session", async (req, res) => {
    const { product } = req.body;
    

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [{
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: product.Name,
                    },
                    unit_amount: product.Amount * 100,
                },
                quantity: 1,
            }],
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error(error);
        
        res.status(500).send('Something went wrong');
    }
});

app.listen(3000, () => {
    console.log("server start");
});