//const home=require("../app/http/controllers/home")
const homemenu = require("../app/models/menuhome");
const menucategory = require("../app/models/menucategory");
const user = require("../app/models/user");
const order = require("../app/models/order");
const getuser=user.find({});
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const { render } = require("ejs");
const passport = require("passport");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const guest=require("../app/http/middleware/guest");
const auth=require("../app/http/middleware/auth");
const admin=require("../app/http/middleware/admin");
const moment=require("moment");

function allRoutes(app) {
    app.get("/", (req, res) => {
        homemenu.find().then(function (food) {
            // console.log(food)
            res.render("home", { food: food });

        })

    })


    app.get("/login", guest, (req, res) => {
        res.render("login");
    })

    app.get("/ragister", guest, (req, res) => {
        res.render("ragister");
    })

    app.get("/cart", (req, res) => {
        res.render("cart");
    })

    app.get("/food-pizza/:id", (req, res, next) => {
        let id = req.params.id;

        let show = homemenu.findById(id);

        show.exec((err, food) => {
            if (err) throw err;
            res.render("shop_cart_pizza", { food: food });
        })
    })

    app.get("/food-burger/:id", (req, res, next) => {
        let id = req.params.id;

        let show = homemenu.findById(id);

        show.exec((err, food) => {
            if (err) throw err;
            res.render("shop_cart_burger", { food: food });
        })
    })


    app.get("/food-biryani/:id", (req, res, next) => {
        let id = req.params.id;

        let show = homemenu.findById(id);

        show.exec((err, food) => {
            if (err) throw err;
            res.render("shop_cart_biryani", { food: food });
        })
    })


    app.get("/food-kfc/:id", (req, res, next) => {
        let id = req.params.id;

        let show = homemenu.findById(id);

        show.exec((err, food) => {
            if (err) throw err;
            res.render("shop_cart_kfc", { food: food });
        })
    })


    app.get("/category", (req, res) => {
        menucategory.find().then(function (food) {
            //  console.log(food)
            res.render("category-food", { food: food });

        })

    });

    app.get("/shop_cart_schezwan/:id", (req, res, next) => {
        let id = req.params.id;

        let show = homemenu.findById(id);

        show.exec((err, food) => {
            if (err) throw err;
            res.render("shop_cart_schezwan", { food: food });
        })
    })


    app.get("/shop_cart_aalu/:id", (req, res, next) => {
        let id = req.params.id;

        let show = homemenu.findById(id);

        show.exec((err, food) => {
            if (err) throw err;
            res.render("shop_cart_aalu", { food: food });
        })
    })

    app.get("/shop_cart_masala/:id", (req, res, next) => {
        let id = req.params.id;

        let show = homemenu.findById(id);

        show.exec((err, food) => {
            if (err) throw err;
            res.render("shop_cart_masala", { food: food });
        })
    })

    app.get("/shop_cart_poha/:id", (req, res, next) => {
        let id = req.params.id;

        let show = homemenu.findById(id);

        show.exec((err, food) => {
            if (err) throw err;
            res.render("shop_cart_poha", { food: food });
        })
    })

    app.get("/shop_cart_shira/:id", (req, res, next) => {
        let id = req.params.id;

        let show = menucategory.findById(id);

        show.exec((err, food) => {
            if (err) throw err;
            res.render("shop_cart_shira", { food: food });
        })
    })

    app.get("/shop_cart_triple/:id", (req, res, next) => {
        let id = req.params.id;

        let show = menucategory.findById(id);

        show.exec((err, food) => {
            if (err) throw err;
            res.render("shop_cart_triple", { food: food });
        })
    })

    app.get("/shop_cart_uthappa/:id", (req, res, next) => {
        let id = req.params.id;

        let show = menucategory.findById(id);

        show.exec((err, food) => {
            if (err) throw err;
            res.render("shop_cart_uthappa", { food: food });
        })
    })

    app.get("/shop_cart_sarso/:id", (req, res, next) => {
        let id = req.params.id;

        let show = menucategory.findById(id);

        show.exec((err, food) => {
            if (err) throw err;
            res.render("shop_cart_sarso", { food: food });
        })
    })


    app.get("/shop_cart_chole/:id", (req, res, next) => {
        let id = req.params.id;

        let show = menucategory.findById(id);

        show.exec((err, food) => {
            if (err) throw err;
            res.render("shop_cart_chole", { food: food });
        })
    })

    app.get("/shop_cart_medu/:id", (req, res, next) => {
        let id = req.params.id;

        let show = menucategory.findById(id);

        show.exec((err, food) => {
            if (err) throw err;
            res.render("shop_cart_medu", { food: food });
        })
    })

    app.get("/shop_cart_upma/:id", (req, res, next) => {
        let id = req.params.id;

        let show = menucategory.findById(id);

        show.exec((err, food) => {
            if (err) throw err;
            res.render("shop_cart_upma", { food: food });
        })
    })

    app.get("/shop_cart_manchu/:id", (req, res, next) => {
        let id = req.params.id;

        let show = menucategory.findById(id);

        show.exec((err, food) => {
            if (err) throw err;
            res.render("shop_cart_manchu", { food: food });
        })
    })

    /*
    app.get("/add-to-cart/:id", (req,res,next)=>
    {
        let id=req.params.id;
        var cart=new Cart(req.session?req.session:{items:{}});
    
        menucategory.findById(id, function(err, menucategory) {
            if(err)
            {
                return res.redirect("/shop_cart_aalu");
            }
    
            cart.add(menucategory, menucategory.id);
            req.session=cart;
            console.log(req.session);
            res.redirect("/cart");
        })
    });
    */


    app.post("/updateCart", (req, res, next) => {
        if (!req.session.cart) {
            req.session.cart =
            {
                items: {},
                qty: 0,
                totalQty: 0,
                totalPrice: 0
            }
        }


        let cart = req.session.cart;
       // console.log(req.body);



        if (!cart.items[req.body._id]) {
            cart.items[req.body._id] =
            {
                items: req.body,
                qty: req.body
            }


            //cart.items[req.body.cart].qty=req.body.qty;
            cart.totalQty = parseInt(cart.totalQty) + parseInt(req.body.qty);
            cart.totalPrice = parseInt(cart.totalPrice) + parseInt(req.body.price);
            //   res.render("cart", {msg:"Added sucess"})

        }
        else {

            // cart.totalQty=cart.totalQty+1;
          //  console.log("we cannot added again");
            //res.render("cart", {msg:"Added Fail"})
        }

        //console.log(cart.totalPrice);

        return res.json({ totalQty: req.session.cart.totalQty });


    })

    app.post("/search", (req, res, next) => {
        let category = req.body.menus;
        let filter;

        if (category === "south indian") {
            filter = { type: "south" }
        }
        else if (category === "Panjabi Food") {
            filter = { type: "panjabi" }
        }
        else if (category === "Fast Food") {
            filter = { type: "fast" }
        }
        else if (category === "Chinese Food") {
            filter = { type: "Chinese" }
        }
        else if (category === "BreakFast") {
            filter = { type: "breakfast" }
        }
        else if(category === "All"){
            filter = {}
        }
        else
        {
            filter = {}
        }

        let datamenu = menucategory.find(filter);
        datamenu.exec((err, food) => {
            if (err) throw err;
            res.render("category-food", { food: food })
        })


    })

    app.post("/ragister", async(req,res,next)=>
    {
        const {name, email, password}=req.body;

       // console.log(req.body);

        if(!name || !email || !password)
        {
            
       /* userdata.save((err,res2)=>
        {
            if(err) throw err;

            getuser.exec((err, data)=>
            {
                if(err) throw err;

                res.render("/login", {records:data})
            })
        })*/
            req.flash("error", "All field is Required !");
            req.flash("name", name);
            req.flash("email", email);
            req.flash("password", password);

            return res.redirect("/ragister");

        }

        user.exists({email:email}, (errr, result)=>
        {
            if(result)
            {
                req.flash("error", "Eamil Already Taken !");
                req.flash("name", name);
                req.flash("email", email);
                
                return res.redirect("/ragister");

            }
        })


        //bcripts password
        const hashpassword=await bcrypt.hash(password, 10);

        const userdata=new user({
            name:name,
            email:email,
            password:hashpassword
        });

        userdata.save().then((user)=>
        {
            return res.redirect("/");
        }).catch(err=>
            {
                req.flash("error", "Something went to wrong !");
                return res.redirect("/ragister");
            })
    })


    app.post("/login", (req,res,next)=>
    {
        const {email, password}=req.body;

        if(!email || !password)
        {
            req.flash("error", "All field is Required !");
            return res.redirect("/login");

        }

        passport.authenticate('local', (err, userdata, info)=>
        {
            if(err)
            {
                req.flash("error", info.message);
                return next(err);
            }

            if(!userdata)
            {
                req.flash("error", info.message);
                return res.redirect("/login");
            }

            function _getredirecturl(req) {
                
                return req.user.role === 'admin' ? "/admin/orders" :"/orders";
            }

            req.logIn(userdata, (err)=>
            {
                if(err)
                {
                    req.flash("error", info.message);
                    return next(err);
                }

                return res.redirect(_getredirecturl(req));

            })
        })(req,res,next)
    })

    app.post("/logout", (req, res, next)=>
    {
        req.logout();
        return res.redirect("/login");
    })

    app.post("/orders",auth, (req,res,next)=>
    {
        const {phone, address}=req.body;

        if(!phone || !address)
        {
            req.flash("error", "All fields are required !");
            return res.redirect("/");

        }

        

        const orderdata=new order({
            customerID:req.user._id,
            items:req.session.cart.items,
            phone,
            address,
            totalprice:req.session.cart.totalPrice,
        })

       // console.log(orderdata);

        orderdata.save().then(result=>
            {
                req.flash("sucess", "Order Placed Sucessfully!");
                delete req.session.cart;

                const eventEmitter=req.app.get('eventEmitter');
                eventEmitter.emit("orderPlaced", result)
                return res.redirect("/orders");

            }).catch(err=>
                {
                    req.flash("error", "Something went wrong !");
                    return res.redirect("/cart");

                })
       
    })

    app.get("/orders", auth, async(req,res)=>
    {
         const ord=await order.find({customerID:req.user._id}, null, {sort:{"createdAt":-1}});
        res.header("Cache-Control","no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0");

       //console.log(ord);
        res.render("orders", {ord:ord, moment:moment});
    })


    app.get("/admin/orders", admin, (req,res,next)=>
    {
        order.find({status:{$ne:'completed'}}, null,
        {sort:{createdAt:-1}})
        .populate("customerID","-password")
        .exec((err, order)=>
        {
            if(req.xhr)
            {
                return res.json(order);
            }
            else
            {
                res.render("admin/orders");
            }
            
        });
      
    })

    app.post("/admin/status", admin, (req,res)=>
    {
        order.updateOne({_id:req.body.orderId},{status:req.body.status}, (err,data)=>
        {
            if(err)
            {
                res.redirect("/admin/orders");
            }

            // Emit event 
            const eventEmitter = req.app.get('eventEmitter')
            eventEmitter.emit('orderUpdated', { id: req.body.orderId, status: req.body.status })
            return res.redirect('/admin/orders')
           
        })
    })

    app.get("/orders/:id", auth, async(req, res)=>
    {
      
        const orderdata=await order.findById(req.params.id);
        //console.log(orderdata);
        
        //auth
        if(req.user._id.toString()===orderdata.customerID.toString())
        {
            res.render("customer/singleOrder", {orderdata:orderdata});
        }
        else
        {
            res.redirect("/");
        }
    })

    app.post("/searchfood", (req,res)=>
    {
        let search=req.body.search;
        let filter;

        if(search!=="")
        {
            filter={name:search}
        }
        else
        {
            filter={}
        }

        let find=menucategory.find(filter);

        find.exec((err,food)=>
        {
            if(err) throw err;
            res.render("category-food", {food:food, sucess:""});
        })

    });
}

module.exports = allRoutes;