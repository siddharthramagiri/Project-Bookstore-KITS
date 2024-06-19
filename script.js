let submit = false
        document.querySelector("form").addEventListener('submit', function(event) { 
            event.preventDefault(); 
            let username = document.getElementById("username").value
            console.log(username)
            let emailadd = document.getElementById("email").value
            console.log(emailadd)

            document.querySelector(".logform").classList.add("hide")
            document.querySelector(".person").classList.remove("hide")

            document.querySelector(".username").innerHTML+=`${username}!`;
            document.querySelector(".emailvalue").value=`${emailadd}`
            submit = true
        });


        const products=[{
                name:"Web Development TextBook",
                img:"https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-2499-1",
                author:"Jorg Krause",
                rs:"1099.00",
                rate:"3.9",
                info:"Are you interested in going back to the basics? Do you want to learn how to develop web pages the old way? Then welcome to this guide.In the same way that a building can only be as strong as its foundation, a webpage can only be as good as the bits and pieces that hold it together. In this case, we're talking about HTML.",
            },{
                name:"Complete CSS TextBook",
                img:"https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4302-0225-7",
                author:"Andy Clarke,Simson Collision",
                rs:"290.00",
                rate:"4.5",
                info:"Come on a tour of “modern” CSS in 2020. This example-driven book demonstrates the concepts by showing code examples, screenshots, and diagrams to help clearly communicate the information.",
            },{
                name:"Java Script Modern Wp",
                img:"https://m.media-amazon.com/images/I/5107+nK-zDL.jpg",
                author:"Alok Ranjan,Abhilasha sinha,Ranjit Battewad",
                rs:"999.00",
                rate:"4.5",
                info:"Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined.",
            },{
                name:"TextBook of Python 2nd year",
                img:"https://jupiterbooks.in/wp-content/uploads/2022/04/python-001.jpg",
                author:"Harsh Bhasin",
                rs:"498.00",
                rate:"4.4",
                info:"A step-by-step guide by the famous computing author Herbert Schildt, Java: The Complete Reference, Seventh Edition is an introductory book to Java. Whether a person is a rookie or a pro programmer, this book is for everyone. Introducing the readers to Java from the scratch to its importance and contribution to the web, the book has it all.",
            },{
                name:"JAVA TextBook",
                img:"https://m.media-amazon.com/images/I/618YQosPQTL._AC_UF1000,1000_QL80_.jpg",
                author:"Herbert Schildt",
                rs:"2427.00",
                rate:"4.5",
                info:"A step-by-step guide by the famous computing author Herbert Schildt, Java: The Complete Reference, Seventh Edition is an introductory book to Java. Whether a person is a rookie or a pro programmer, this book is for everyone. Introducing the readers to Java from the scratch to its importance and contribution to the web, the book has it all.",
            },{
                img:"https://m.media-amazon.com/images/I/91iM1mMOTOL._AC_UF1000,1000_QL80_.jpg",
                name:"Artificial Intelligence",
                author:"Prakashan Goyal Brothers",
                rs:"1089.00",
                rate:"4.3",
                info:"Reading books is a kind of enjoyment. Reading books is a good habit. We bring you a different kinds of books. You can carry this book where ever you want. It is easy to carry. It can be an ideal gift to yourself and to your loved ones. Care instruction keep away from fire.",
            },{
                img:"https://m.media-amazon.com/images/I/41FZh18ysyL.jpg",
                name:"Machine Learning TextBook",
                author:" Andrew Wolf",
                rs:"1899.00",
                rate:"3.2",
                info:"A Complete Overview for Beginners to Master the Basics of Python Programming and Understand How to Build Artificial Intelligence Through Data Science",
            },{
                img:"https://m.media-amazon.com/images/I/71rUP3ZW4NL._AC_UF1000,1000_QL80_.jpg",
                name:"C++ Fourth Edition" ,
                author: "Herbert Schildt",
                rs:"2177.00",
                rate:"4.4",
                info:"Genius Herb Schildt covers everything from keywords, syntax, and libraries, to advanced features such as overloading, inheritance, virtual functions, namespaces, templates, and RTTI, plus, a complete description of the Standard Template Library (STL).",
            },{
                img:"https://m.media-amazon.com/images/I/510XL4CQ24L._SY466_.jpg",
                name:"Database Management System ",
                author: "Safa Hamdare & A.K. Sen Bhavesh",
                rs:"2028.00",
                rate:"3.0",
                info:"Written Strictly as per Mumbai University syllabus, this book provides a complete guide to the theoretical as well as the practical implementation of DBMS concepts including E-R Model, Relational Algebra, SQL queries, Integrity, Security, Database design, Transaction management ,Query processing and Procedural SQL language.",
            },{
                img:"https://m.media-amazon.com/images/I/71SKAdbF2fL._SY466_.jpg",
                name:"Beginning SQL Queries: From Novice to Professional",
                author: "Clare Churcher ",
                rs:"3628.00",
                info:"Beginning Queries with SQL is a friendly and easily read guide to writing queries with the all-important - in the database world - SQL language. Anyone who does any work at all with databases needs to know something of SQL, and that is evidenced by the strong sales of such books as Learning SQL",
                rate:"4.5",
            },{
                img:"https://m.media-amazon.com/images/I/81eF-RxjuaL._SY466_.jpg",
                author:"Silberschatz, Galvin, Gagne",
                name: "Operating System Principles ",
                rs:"2628.00",
                info:"Reading books is a kind of enjoyment. Reading books is a good habit. We bring you a different kinds of books. You can carry this book where ever you want. It is easy to carry. It can be an ideal gift to yourself and to your loved ones. Care instruction keep away from fire.",
                rate:"4.2",
            }
        ]
        
        let container = document.querySelectorAll(".container");
        let body = document.querySelector(".main");
        let navs = document.querySelector(".navs");
        let box = document.querySelectorAll(".grid");
        let addc = document.querySelectorAll(".addcart");
        let cartbody = document.querySelector(".add_to_cart");
        let addw = document.querySelectorAll(".addwish");
        let wishbody = document.querySelector(".wishbody");
        let remcart = document.querySelectorAll(".removecart");
        let img = document.querySelectorAll(".image");
        let show = document.querySelectorAll(".open");
        let productbody = document.querySelector(".productbody");
        let last = document.querySelector(".members");

        const list = document.getElementById("child1")

        const searchbooks =() =>{
            const searchbox = document.getElementById("search").value.toUpperCase()
            console.log(searchbox)
            const product = document.querySelectorAll(".product")
            const pname = list.getElementsByClassName("bookname")
            console.log(pname)

            for(var i=0;i<pname.length;i++){
                let match = product[i].getElementsByClassName('bookname')[0];
                if(match){
                    let textvalue = match.innerHTML||match.textContent
                    if(textvalue.toUpperCase().indexOf(searchbox)>-1){
                        product[i].style.display = "";
                        list.classList.add("hide")
                    } else {
                        product[i].style.display = "none";
                        list.classList.remove("hide")
                    }
                }
            }
        }

        function mainproducts(){
            container.classList.add("hide");
        }

        let sticky = navs.offsetTop;
        let fixnavs = () => {
            if(window.pageYOffset>=sticky){
                navs.classList.add("sticky");
            } else {
                navs.classList.remove("sticky");
            }
        }
        window.onscroll = function(){fixnavs()};


        //SHOW PRODUCT...................
        function showproduct(n){
            list.classList.add("hide")
            productbody.innerHTML=`
                <div class="products">
                <div class="products_img" >
                    <img name="10" class="image" src="${products[n].img}" width="450px">
                </div>
                <div class="product_div">
                    <div class="product_info" > 
                        <h1 style="font-size:40px;"> ${products[n].name} </h1>
                        <h1> Author: ${products[n].author} </h1>
                        <h3 class="info">
                            ${products[n].info}
                        </h3>
                        <h2>Ratings <br>
                            <span class="material-symbols-outlined">
                                star_half
                                <p> ${products[n].rate} </p>
                            </span>
                        </h2>
                        <h2 style="font-size: xx-large;">&#8377 ${products[n].rs}</h2>
                    </div>
                    <div class="in_prod_btns" style="">
                        <button class="addcart" style="width:180px;height: 50px;font-size:large;margin:5px;" name="${n}" onclick="addtocart(${n})" >Add to Bag</button>
                        <button class="addwish" style="width:180px;height: 50px;font-size:large;margin:5px;" onclick="addtowish(${n})">Add to Wishlist</button>
                        <button class="removewish" style="width:180px;height: 50px;font-size:large;margin:5px;" name="${n}">Buy Now</button>
                    </div>
                </div>
            </div>`;
            body.classList.add("hide");
            productbody.classList.remove("hide");
            document.querySelector(".cartbody").classList.add("hide");
            wishbody.classList.add("hide");
            last.classList.add("hide");
        }

        show.forEach((open)=>{
            open.addEventListener("click",()=>{
                console.log(`image was clicked`);
                const n = open.getAttribute("name");
                console.log(`product ${n} was clicked`);
                showproduct(n);
            })
        })

        let price=0;
        let Shipping=40;
        let tax=10;
        let countbag = 0;
        let countwish = 0;
        let total = 0;

        

    /////   CART BODY
        function summary(){
            //cart
            document.querySelector(".countbag").innerHTML=`${countbag}`;
            document.querySelector(".countbag1").innerHTML=`${countbag}`;
            document.querySelector(".subprice").innerText=`${price}.00`;
            document.querySelector(".total").innerText=`${total}.00`;

            //wish
            document.querySelector(".countwish").innerHTML=`${countwish}`;
            document.querySelector(".countwish1").innerHTML=`${countwish}`;
        }

        //DELETE FROM CART 
        function deletecart(n){
            const cartprods = document.querySelector(`.cartitem-${n}`);
            countbag-=1;
            let number = parseInt(products[n].rs);
            price=price-number;
            if(countbag>=1){
                total=price+50;
            }
            else if(countbag == 0){
                total=0;
                document.querySelector(".noitems").classList.remove("hide");
            }
            console.log(`Total Price: ${price}`);
            summary();
            console.log(cartprods);
            cartprods.remove();
            
        }
        //ADD TO CART FUNCTION.............
        function addtocart(n){ 
            if (submit==true){
                booknow.innerText="BOOK NOW";
                booknow.style.backgroundColor="rgb(54, 152, 111)";
                booknow.style.color="white";
                booknow.disabled=false;
                countbag+=1;
                document.querySelector(".noitems").classList.add("hide");
                let number = parseInt(products[n].rs);
                console.log(`initial Price: ${price}`);
                console.log(`current Book Price: ${number}`);
                price=price+number;
                console.log(`Total Price: ${price}`);
                if(countbag>=1){
                    total=price+50;
                }
                summary();
                window.alert(`${products[n].name} Added to The Cart`);
                cartbody.innerHTML=cartbody.innerHTML+`
                    <div class="cartgrid cartitem-${n}" value="${n}">
                        <div class="cart_img_out" >
                            <img class="image" src="${products[n].img}" onclick="showproduct(${n})" >
                        </div>
                        <div class="cart_info" >
                            <h2 style="font-weight: bolder;">${products[n].name}</h2>
                            <p>Author: ${products[n].author}</p>
                            <h1>price: &#8377 ${products[n].rs}</h1>
                        </div>
                        <div style="display: grid;">
                            <button class="addwish" name="${n}"  onclick="movetowish(${n})" >Move to Wishlist</button>
                            <button class="removecart" name="${n}" onclick="deletecart(${n})">Remove from Bag</button>
                        </div>
                    </div>`;
            } else {
                alert("ERROR!!! Login to Continnue");
                login()
            }
        }
        addc.forEach((addcart)=>{
            addcart.addEventListener("click",()=>{
                console.log(`product ${addcart.getAttribute("name")} Added to Cart`);
                const n = addcart.getAttribute("name");
                addtocart(n);
            })
        })
        
    /////   WISH BODY

        
        //DELETE FROM WISH
        function deletewish(n){
            countwish-=1;
            const wishprods = document.querySelector(`.wp-${n}`);
            console.log(wishprods);
            wishprods.remove();
            summary();
        }

        //ADD TO WISHLIST FUNCTION.................
        function addtowish(n){
            countwish+=1;
            summary();
            wishbody.innerHTML=wishbody.innerHTML+`
                <div class="wish_prod wp-${n}" >
                    <div class="wishgrid ">
                        <div class="wish_img_out" >
                            <img class="image" src="${products[n].img}" onclick="showproduct(${n})" >
                        </div>
                        <div class="wish_info">
                            <h2 style="font-weight: bolder;">${products[n].name}</h2>
                            <p>author  ${products[n].author}</p>
                            <h3>price: &#8377 ${products[n].rs}</h3>
                        </div>
                        <div style="display: flex;margin-top: 25px;">
                            <button class="removewish" onclick="deletewish(${n})">
                                <span class="material-symbols-outlined">
                                    close
                                </span>
                            </button>
                            <button class="addcart long_add" style="width:180px;height:60px;font-size:large;margin-top: 0px;margin-left:20px" name="${n}" onclick="addtocart(${n})">
                                Add to Bag
                            </button>
                            <button class="addcart short_add" onclick="addtocart(${n})">
                                <span class="material-symbols-outlined">
                                    shopping_bag
                                </span>
                            </button>
                        </div>
                    </div>
                    <hr>
                </div>`;
        }

        addw.forEach((addwish)=>{
            addwish.addEventListener("click",()=>{
                addwish.innerHTML="Wishlisted";
                addwish.style.backgroundColor="transparent";
                addwish.style.color="rgb(54, 152, 111)";
                addwish.disabled=true;
                const n = addwish.getAttribute("name");
                console.log(`product ${n} Added to wishlist`);
                addtowish(n);
            })
        })


        function movetowish(n){
            addtowish(n);
            deletecart(n);
        }


        //Confirm Order Placing
        
        function orderproduct(n){
            countbag--;
            summary();
            document.querySelector(".shippment").innerHTML+=`
            <div class="statusgrid ">
                <div style="width:100px">
                    <img class="image" src="${products[n].img}" height="120px" onclick="showproduct(${n})" >
                </div>
                <div class="status_info">
                    <h2 style="font-weight: bolder;">${products[n].name}</h2>
                    <p>author  ${products[n].author}</p>
                    <h3>price: &#8377 ${products[n].rs}</h3>
                </div>
                <div class="status_icons" style="display: flex;margin-top: 25px;">
                    <div style="text-align: center;">
                        <button class="status_measure" style="border-radius: 50px; color:white; border:4px solid rgb(54, 152, 111);background-color: rgb(54, 152, 111);">
                            <span class="material-symbols-outlined">
                                Done
                            </span>
                        </button>
                        <h3 class="status_text" style="margin-top: 15px;color:rgb(54, 152, 111)">Order Confirmed----</h3>
                    </div>
                    <div style="text-align: center;">
                        <button class="status_measure" style="border-radius: 50px; color:white; border:4px solid rgb(54, 152, 111);background-color: rgb(54, 152, 111);">
                            <span class="material-symbols-outlined">
                                Package_2
                            </span>
                        </button>
                        <h3 class="status_text" style="margin-top: 15px;color:rgb(54, 152, 111)">---------Packing----------</h3>
                    </div>
                    <div style="text-align: center;">
                        <button class="status_measure" style="border-radius: 50px; color:rgb(150, 64, 64); border:4px solid rgb(150, 64, 64);background-color: transparent;">
                            <span class="material-symbols-outlined">
                                Local_Shipping
                            </span>
                        </button>
                        <h3 class="status_text" style="margin-top: 15px;color:rgb(150, 64, 64)">--------Order Shipped------</h3>
                    </div>
                    <div style="text-align: center;">
                        <button class="status_measure" style="border-radius: 50px; color:rgb(150, 64, 64); border:4px solid rgb(150, 64, 64);background-color: transparent;">
                            <span class="material-symbols-outlined">
                                House
                            </span>
                        </button>
                        <h3 class="status_text" style="margin-top: 15px;color:rgb(150, 64, 64)">------Delivered Order</h3>
                    </div>
                </div>
            </div>`;
        }

        let booknow = document.querySelector(".book");
        booknow.addEventListener("click",()=>{
            let count = countbag;
            if(countbag>=1){
                for(let i=0; i<count; i++){
                    let cartaccess = document.querySelector(".cartgrid");
                    let productname = cartaccess.getAttribute("value");
                    document.querySelector(`.cartitem-${productname}`).remove();
                    orderproduct(productname);
                }
                booknow.innerText="ORDER BOOKED";
                booknow.style.backgroundColor="transparent";
                booknow.style.color="rgb(54, 152, 111)";
                booknow.disabled=true;
                alert(`order placed to your Location Price: ${total}.Rs`);
            } else {
                alert(`Bag is empty`);
            }   
        })

        //Theme changer
        mode = document.querySelector(".theme");
        let theme="light";
        mode.addEventListener("click",()=>{
            if (theme==="light"){
                document.querySelector("body").setAttribute("class","dark");
                theme="dark";
                document.querySelector(".search").style.color="white";
                document.querySelector(".promo").style.color="white";
                document.querySelector(".left").style.backgroundColor="rgb(53, 53, 53)";
                list.style.backgroundColor="rgb(53, 53, 53)"
                list.style.Color="white"
                console.log(`Theme turned to ${theme}`);
            } else if(theme==="dark"){
                document.querySelector("body").removeAttribute("class","dark");
                document.querySelector("body").setAttribute("class","light");
                theme="light";
                document.querySelector(".search").style.color="black";
                document.querySelector(".promo").style.color="black";
                document.querySelector(".left").style.backgroundColor="white";
                list.style.backgroundColor="white"
                list.style.Color="black"
                console.log(`Theme turned to ${theme}`);
            }
        })


        //Each Button Reactions..... Hiding pages
        document.querySelector(".cart").addEventListener("click",()=>{
            console.log(`Opened Cart`);

            body.classList.add("hide");
            document.querySelector(".cartbody").classList.remove("hide");
            wishbody.classList.add("hide");
            productbody.classList.add("hide");
            last.classList.remove("hide");
            list.classList.add("hide");
            document.querySelector(".aboutus").classList.add("hide");
            document.querySelector(".user").classList.add("hide");
        })
        document.querySelector(".wish").addEventListener("click",()=>{
            console.log(`Opened Wishlist`);

            body.classList.add("hide");
            wishbody.classList.remove("hide");
            document.querySelector(".cartbody").classList.add("hide");
            productbody.classList.add("hide");
            last.classList.remove("hide");
            list.classList.add("hide");
            document.querySelector(".aboutus").classList.add("hide");
            document.querySelector(".user").classList.add("hide");
        })
        let gotohome = () =>{
            if(mobile == true) {
                closemenu();
            }
            body.classList.remove("hide");
            document.querySelector(".cartbody").classList.add("hide");
            wishbody.classList.add("hide");
            productbody.classList.add("hide");
            last.classList.remove("hide");
            list.classList.add("hide");
            document.querySelector(".aboutus").classList.add("hide");
            document.querySelector(".user").classList.add("hide");
        }

        document.querySelector(".about").addEventListener("click",()=>{
            if(mobile == true) {
                closemenu();
            }
            body.classList.add("hide");
            document.querySelector(".cartbody").classList.add("hide");
            wishbody.classList.add("hide");
            productbody.classList.add("hide");
            last.classList.add("hide");
            list.classList.add("hide");
            document.querySelector(".user").classList.add("hide");
            document.querySelector(".aboutus").classList.remove("hide");
        })
        document.querySelector(".log").addEventListener("click",(login))
        function login(){
            console.log("opened user page")
            body.classList.add("hide")
            document.querySelector(".cartbody").classList.add("hide");
            wishbody.classList.add("hide");
            productbody.classList.add("hide");
            last.classList.add("hide");
            document.querySelector(".aboutus").classList.add("hide");
            document.querySelector(".user").classList.remove("hide");
            if(submit == true){
                document.querySelector(".logform").classList.add("hide");
                document.querySelector(".person").classList.remove("hide");
                last.classList.remove("hide");
            } else {
                document.querySelector(".logform").classList.remove("hide");
                document.querySelector(".person").classList.add("hide");
            }
        }
        let mobile = false;
        function showmenu(){
            mobile=true;
            navs.style.display="block";
            navs.style.right="0";
        }
        function closemenu(){
            mobile=true;
            navs.style.right="-240px";
            navs.style.display="none";
        }