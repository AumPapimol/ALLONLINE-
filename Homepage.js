// ภาพิมล แก้วโลก
// พชร วิเชียรน้อย

// หน้าโครงสร้าง Front- end ของ Homepage // ภาพิมล แก้วโลก
import React, { Component, useEffect } from 'react'
import './home.css'
import Img from './Img'
import Silkporduct from './silkproduct'

function Homepage() {
    useEffect(() => {
        //     const script = document.createElement('script')
        //     script.src = './home.js'
        //     script.async = true
        //     document.body.appendChild(script)
    })
    // render() {

    // navbar Homepage // ภาพิมล แก้วโลก
    return (
          <React.Fragment>
        <div className="hearder">
                <div className="promotin">
                    <img className="nav-promotion" src="./All/pormotion.jpg" alt="" />
                </div>

                <div className="div-gray">
                    <div className="container text-center">
                        <div className="row row-cols-4">
                            <div className="col">
                                <p className="col-p"> <a href="./Homepage/contact.html">📞ติดต่อสอบถาม 1371</a></p>
                            </div>

                            <div className="col"></div>
                            <div className="col">
                                <p className="col-p"> <a href="./Homepage/order.html">ติดตามสถานะการสั่งซื้อ</a></p>
                            </div>

                            <div className="col link-a">
                                <p className="col-p"> <a href="/login" > 👤เข้าสู่ระบบ </a>| <a
                                    href="/register"> สมัครสมาชิก </a></p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* // navbar Homepage // ภาพิมล แก้วโลก*/}
                <div className="logo_allOnLine">
                    <img src="./All/allonline.png" alt="" style={{ height: "100px" }} />
                </div>

                {/* // Dropdown Click ส่วนของค้นหาข้อมูล หน้า Homepage // ภาพิมล แก้วโลก*/}
                <div className="wrap">
                    <div className="input-group">
                        <input type="text" className="form-control" aria-label="Text input with dropdown button"
                            Aria-label="Recipient's username with two button addons" />
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">หมวดหมู่ทั้งหมด</button>
                        <ul className="dropdown-menu dropdown-menu-end">

                            <hr className="dropdown-divider" />

                            <li><a className="dropdown-item" href="#">หมวดหมู่ทั้งหมด</a></li>

                            <hr className="dropdown-divider" />

                            <li><a className="dropdown-item" href="#">ซูเปอร์มาร์เก๊ต</a></li>

                            <hr className="dropdown-divider" />

                            <li><a className="dropdown-item" href="#">ผลิตภัณฑ์ความงาม</a></li>

                            <hr className="dropdown-divider" />

                            <li><a className="dropdown-item" href="#">สินค้าเพื่อสุขภาพ</a></li>

                            <hr className="dropdown-divider" />

                            <li><a className="dropdown-item" href="#">เครื่องใช้ไฟฟ้า</a></li>

                            <hr className="dropdown-divider" />

                            <li><a className="dropdown-item" href="#">บ้านและสวน</a></li>

                            <hr className="dropdown-divider" />

                            <li><a className="dropdown-item" href="#">ผลิตภัณฑ์สำหรับสัตว์เลี้ยง</a></li>

                            <hr className="dropdown-divider" />

                            <li><a className="dropdown-item" href="#">แม่และเด็ก ผู้สูงอายุ</a></li>

                            <hr className="dropdown-divider" />

                            <li><a className="dropdown-item" href="#">แฟชั่น</a></li>

                        </ul>
                        <button className="btn btn-outline-secondary" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="" height="16" fill="currentColor"
                                className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg></button>
                    </div>
                </div>

            {/* // ปุ่มค้นหา ของหน้า Homepage // ภาพิมล แก้วโลก */}
            <div className="Search_hit">
                <div className="Search_hit1">
                    <a href="#">คำค้นยอดฮิต</a>
                </div>

                <div className="Search_hit1">    
                    <a href="./Homepage/mask.html" >หน้ากากอนามัย</a>
                </div>

                <div className="Search_hit1">    
                    <a href="./Homepage/alcohol.html" >แอลกอฮอล์</a>
                </div>  
                    
                <div className="Search_hit1">
                    <a href="./Homepage/air purifier.html" >เครื่องฟอกอากาศ</a>
                </div>

                <div className="Search_hit1">
                    <a href="./Homepage/rice.html" >ข้าวตราฉัตร</a>
                </div>

                <div className="Search_hit1">
                    <a className='Search' href="./Homepage/diaper.html" >ผ้าอ้อมผู้ใหญ่</a>
                </div>

                <div className="Search_hit1">
                    <a className='Search' href="./Homepage/whit-a-day.html" >วิตอะเดย์</a>
            </div>

                <div className="Search_hit1">
                    <a className='Search' href="./Homepage/battery.html" >แบตเตอรี่สำรอง</a>
                </div>
          </div>

            
    {/* // หน้า Homepage (navbar )ในส่วนของตะกร้าสินค้า และสินค้าโปรด // ภาพิมล แก้วโลก */}
    <div className="Shop_">
                    <div className="cart">
                        <a href="./Homepage/shopping.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor"
                                className="bi bi-cart2" viewBox="0 0 16 16">
                                <path
                                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg><br />
                            <p style={{ fontSize: "12px" }}> ตะกร้าสินค้า </p>
                        </a>
                    </div>

                    {/* // หน้า Homepage (navbar )ในส่วนของสินค้าโปรด // ภาพิมล แก้วโลก*/}
                    <div className="heart">
                        <a href="./Homepage/products.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                className="bi bi-suit-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                            </svg> <br />
                            <p style={{ fontSize: "12px" }}> สินค้าโปรด</p>
                        </a>
                    </div>
                </div>
            </div>
            <br />
            <br />
{/* 
            // รายการสินค้า // ภาพิมล แก้วโลก*/}
            <div className="green">
                <table style={{ width: "100%", fontSize: "16px" }}>
                    <th>สินค้าขายดี</th>
                    <th>สินค้าโปรโมชั่น</th>
                    <th>สินค้ามาใหม่</th>
                    <th>รวมคูปองส่วนลด</th>
                    <th>Flash Sale</th>
                    <th>ผ่อน 0 %</th>
                    <th>ลดล้างสต๊อก</th>
                </table>
            </div>

            {/* // Dropdown Click ด้านซ้าย ( 9 หมวดหมู่) ของหน้า Homepage // ภาพิมล แก้วโลก */}
            {/* // ซูเปอร์มาร์เก็ต // ภาพิมล แก้วโลก*/}
            <div className="sindbar">
                <div className="dropdown">
                    <button className="dropbtn">🛒 ซูเปอร์มาร์เก็ต</button>
                    <div className="dropdown-content">
                        <a href="./Supermarket/supermarket1.html">เครื่องดื่มและผงชงดื่ม</a>
                        <a href="/freshfood">เครื่องปรุงรสและของแห้ง</a>
                        <a href="/CandyandChocolate">ขนมขบเคี้ยว และซ็อกโกแลต</a>
                        <a href="./Supermarket/supermarket4.html">อาหารสด ผัก ผลไม้และเบเกอรี่</a>
                        <a href="./Supermarket/supermarket5.html">สุขภาพ</a>
                    </div>
              </div>

                {/* // ความงาม // ภาพิมล แก้วโลก */}
                <div className="dropdown">
                    <button className="dropbtn">💄ความงาม</button>
                    <div className="dropdown-content">
                        <a href="/skincare">ผลิตภัณฑ์ดูแลผิวหน้า</a>
                        <a href="/beauty">ผลิตภัณฑ์ดูแลเส้นผม</a>
                        <a href="./Beauty/beauty3.html">เครื่องสำอาง</a>
                        <a href="/bodycare">ผลิตภัณฑ์อาบน้ำและดูแลผิวกาย</a>
                        <a href="./Beauty/beauty5.html">ผ้าอนามัย</a>
                    </div>
                </div>

                {/* // สุขภาพ // ภาพิมล แก้วโลก */}
                <div className="dropdown">
                    <button className="dropbtn">💊 สุขภาพ</button>
                    <div className="dropdown-content">
                        <a href="./Health/health1.html">ยารับประทาน สามัญประจำบ้าน</a>
                        <a href="./Health/health2.html">ยาใช้ภายนอก สามัญประจำบ้าน</a>
                        <a href="./Health/health3.html">ผลิตภัณฑ์อาหารเสริม</a>
                        <a href="./Health/health4.html">เวชภัณฑ์และผลิตภัณฑ์เฉพาะด้าน</a>
                        <a href="/AccessoriesFitness">อุปกรณ์ออกกำลังกาย</a>
                    </div>
                </div>

                {/* // เครื่องใช้ไฟฟ้า // ภาพิมล แก้วโลก */}
                <div className="dropdown">
                    <button className="dropbtn">🏠 เครื่องใช้ไฟฟ้า</button>
                    <div className="dropdown-content">
                        <a href="./Utensils/utensils1.html">เครื่องใช้ไฟฟ้าในครัว</a>
                        <a href="/electrical">เครื่องปรับอากาศ</a>
                        <a href="./Utensils/utensils3.html">เตารีด</a>
                        <a href="./Utensils/utensils4.html">เครื่องปรับอากาศ</a>
                        <a href="/fan">พัดลม</a>
                    </div>
                </div>

                {/* // บ้านและสวน // ภาพิมล แก้วโลก */}
                <div className="dropdown">
                    <button className="dropbtn">🏡บ้านและสวน</button>
                    <div className="dropdown-content">
                        <a href="./Home & Garden/house1.html">ของตกแต่งบ้าน</a>
                        <a href="./Home & Garden/house2.html">ไฟ</a>
                        <a href="./Home & Garden/house3.html">ห้องนอน</a>
                        <a href="./Home & Garden/house4.html">ห้องน้ำ</a>
                        <a href="./Home & Garden/house5.html">ห้องครัว</a>
                    </div>
                </div>
                
                {/* // ผลิตภัณฑ์สำหรับสัตว์เลี้ยง //ภาพิมล แก้วโลก */}
                <div className="dropdown">
                    <button className="dropbtn">🐻ผลิตภัณฑ์สำหรับสัตว์เลี้ยง</button>
                    <div className="dropdown-content">
                        <a href="./Pet/pet1.html">อาหารสุนัข</a>
                        <a href="./Pet/pet2.html">อาหารแมว</a>
                        <a href="./Pet/pet3.html">บ้านเลี้ยงสัตว์</a>
                        <a href="./Pet/pet4.html">อุปกรณ์ให้อาหาร</a>
                        <a href="./Pet/pet5.html">ของเล่น</a>
                    </div>
                </div>
               
                {/* // แม่และเด็ก ผู้สูงอายุ // ภาพิมล แก้วโลก */}
                <div className="dropdown">
                    <button className="dropbtn">👩🏻แม่และเด็ก ผู้สูงอายุ</button>
                    <div className="dropdown-content">
                        <a href="./Mother & Child/mother1.html">นมผงและอาหารสำหรับเด็ก</a>
                        <a href="./Mother & Child/mother2.html">ผ้าอ้อมและโถนั่งเด็ก</a>
                        <a href="./Mother & Child/mother3.html">อุปกรณ์จำเป็นสำหรับให้อาหารเด็ก</a>
                        <a href="./Mother & Child/mother4.html">ผลิตภัณฑ์อาบน้ำและดูแลสุขภาพเด็ก</a>
                        <a href="./Mother & Child/mother5.html">เกมส์และของเล่นเด็ก</a>
                    </div>
                </div>

            {/* // ไอที & กล้อง // ภาพิมล แก้วโลก */}
            <div class="dropdown">
            <button class="dropbtn">📷 ไอที & กล้อง</button>
            <div class="dropdown-content">
                <a href="./IT & Cameras/it1.html">กล้อง</a>
                <a href="./IT & Cameras/it2.html">คอมพิวเตอร์โน๊ตบุ๊ค</a>
                <a href="./IT & Cameras/it3.html">ลำโพงและหูฟัง</a>
                <a href="./IT & Cameras/it4.html">อุปกรณ์สำรองไฟ</a>
                <a href="./IT & Cameras/it5.html">อุปกรณ์เครือข่าย</a>
             </div>
        </div>
                
            {/* // แฟชั่น // ภาพิมล แก้วโลก */}
            <div className="dropdown">
            <button className="dropbtn">👘 แฟชั่น</button>
            <div className="dropdown-content">
                        <a href="/fashion">ไลฟ์สไตล์และแฟชั่น</a>
                        <a href="./Fashion/fashion2.html">กระเป๋า</a>
                        <a href="./Fashion/fashion3.html">นาฬิกา</a>
                        <a href="./Fashion/fashion4.html">รองเท้า</a>
                        <a href="./Fashion/fashion5.html">แว่นตา</a>
                   </div>
                </div>

            {/* // หนังสือ นิตยสาร และเครื่องเขียน // ภาพิมล แก้วโลก  */}
            <div class="dropdown">
            <button class="dropbtn">📖 หนังสือ นิตยสาร และเครื่องเขียน</button>
            <div class="dropdown-content">
                <a href="./Book/book1.html">อุปกรณ์สำนักงาน</a>
                <a href="./Book/book2.html">กระดาษและสมุด</a>
                <a href="./Book/book3.html">อุปกรณ์การเขียน</a>
                <a href="./Book/book4.html">สีและอุปกรณ์วาดภาพ</a>
                <a href="./Book/book5.html">อุปกรณ์งานฝีมือ</a>
            
            </div>
        </div>   
    </div>

            {/* // ทำข้อมูลข่าวสารที่น่าสนใจของสินค้า // ภาพิมล แก้วโลก */}
            <div className="slidImg">
                <div className="slideshow-container">
                    <div><Img /></div>

                    <div className="mySlides fade">
                        {/* <!-- <div className="numbertext">1 / 9</div> --> */}
                        <img src="./All/promotion_img1.jpg" style={{ width: "100%" }} />
                    </div>

                    <div className="mySlides fade">
                        {/* <!-- <div className="numbertext">2 / 9</div> --> */}
                        <img src="./All/promotion_img3.jpg" style={{ width: "100%" }} />
                    </div>

                    <div className="mySlides fade">
                        {/* <!-- <div className="numbertext">3 / 9</div> --> */}
                        <img src="./All/promotion_img4.jpg" style={{ width: "100%" }} />
                    </div>

                    <div className="mySlides fade">
                        {/* <!-- <div className="numbertext">4 / 9</div> --> */}
                        <img src="./All/promotion_img6.jpg" style={{ width: "100%" }} />
                    </div>

                    <div className="mySlides fade">
                        {/* <!-- <div className="numbertext">5 / 9</div> --> */}
                        <img src="./All/promotion_img7.jpg" style={{ width: "100%" }} />
                    </div>

                    <div className="mySlides fade">
                        {/* <!-- <div className="numbertext">6 / 9</div> --> */}
                        <img src="./All/promotion_img8.jpg" style={{ width: "100%" }} />
                    </div>

                    <div className="mySlides fade">
                        {/* <!-- <div className="numbertext">7 / 9</div> --> */}
                        <img src="./All/promotion_img9.jpg" style={{ width: "100%" }} />
                    </div>

                    <div className="mySlides fade">
                        {/* <!-- <div className="numbertext">8 / 9</div> --> */}
                        <img src="./All/protion_img2.jpg" style={{ width: "100%" }} />
                    </div>

                    <div className="mySlides fade">
                        {/* <!-- <div className="numbertext">9 / 9</div> --> */}
                        <img src="./All/protion_img5.jpg" style={{ width: "100%" }} />
                    </div>
                </div>
            <br />
        </div>
             
            {/* // ทำข้อมูลข่าวสารที่น่าสนใจของสินค้า // ภาพิมล แก้วโลก */}
            <div className="IMG-Ri">
                <img className="promotion_img4" src="./All/all_img2.jpg" alt="" />
                <img className="promotion_img5" src="./All/all.img3.jpg" alt="" srcSet="" />
        </div>

             {/* // ทำข้อมูลข่าวสารที่น่าสนใจของสินค้า // ภาพิมล แก้วโลก */}
            <div className="pro_One">
                <a href="#">
                    <img className="oneTo1" src="./All/1to1.png" alt=""
                        style={{ height: "210px", borderRadius: "30px", marginTop: "5px", marginLeft: "60px" }} />
                </a>

                <a href="#">
                    <img className="sell" src="./All/sell.png" alt="" style={{ height: "210px", borderRadius: "30px", marginLeft: "2px" }} />
                </a>

                <a href="#">
                    <img className="allmember" src="./All/allmember.png" alt=""
                        style={{ height: "210px", borderRadius: "30px", marginLeft: "2px" }} />
                </a>

                <a href="#">
                    <img className="kummm" src="./All/kummm.png" alt=""
                        style={{ height: "210px", borderRadius: "30px", marginLeft: "2px" }} />
                </a>

                <a href="#">
                    <img className="phon" src="./All/phon.png" alt="" style={{ height: "210px", borderRadius: "30px", marginLeft: "2px" }} />
                </a>
            </div>

             {/* // ทำข้อมูลข่าวสารที่น่าสนใจของสินค้า // ภาพิมล แก้วโลก */}
            <div className="pro_Two">
                <a href="#">
                    <img className="shopdee" src="./All/shopdee.png" alt=""
                        style={{ height: "210px", borderRadius: "30px", marginTop: "5px", marginLeft: "60px" }} />
                </a>

                <a href="#">
                    <img className="puun" src="./All/puun.png" alt="" style={{ height: "210px", borderRadius: "30px", marginLeft: "2px" }} />
                </a>

                <a href="#">
                    <img className="true" src="./All/true.png" alt="" style={{ height: "210px", borderRadius: "30px", marginLeft: "2px" }} />
                </a>

                <a href="#">
                    <img className="garni" src="./All/garni.png" alt=""
                        style={{ height: "210px", borderRadius: "30px", marginLeft: "2px" }} />
                </a>

                <a href="#">
                    <img className="store" src="./All/store.png" alt=""
                        style={{ height: "210px", borderRadius: "30px", marginLeft: "2px" }} />
                </a>

            </div>

           
           {/* // หน้าแสดงสินค้า หมวดหมู่ลดอย่างแรง // ภาพิมล แก้วโลก */}
           <div className="promotion">
                <h2>ลดอย่างแรง</h2>
            </div>

            <div className="allimg">
                <img className="imgbig" src="./All/protest.jpg" alt="" />
                <div className="imgs">
                    <img className="imgsmall" src="./All/por.jpg" alt="" />
                    <img className="imgsmall" src="./All/Doraeman.jpg" alt="" />
                    <img className="imgsmall" src="./All/shon.jpg" alt="" />
                    <img className="imgsmall" src="./All/Attack.jpg" alt="" />
                </div>
            </div>
            <br></br>
            <Silkporduct ep='lod' />


             {/* // หน้าแสดงสินค้า หมวดหมู่ซูเปอร์มาร์เก๊ต // ภาพิมล แก้วโลก */}
            <br />
            <br />
            <br />
            <div className="supermarket">
                <h2>ซูเปอร์มาร์เก็ต</h2>
            </div>

            <div className="super">
                <img className="imgAll" src="./All/12.jpg" alt="" />
                <div className="imgs-1">
                    <img className="imgsmall-2" src="./All/13.jpg" alt="" />
                    <img className="imgsmall-2" src="./All/14.jpg" alt="" />
                    <img className="imgsmall-2" src="./All/15.jpg" alt="" />
                    <img className="imgsmall-2" src="./All/16.jpg" alt="" />
                </div>
            </div>
            <br></br>
            <Silkporduct ep='super' />

            {/* // หน้าแสดงสินค้า หมวดหมู่ผลิตภัณฑ์สำหรับสัตว์เลี้ยง // ภาพิมล แก้วโลก */}
            <br />
            <br />
            <br />
            <div className="food">
                <h2>ผลิตภัณฑ์สำหรับสัตว์เลี้ยง</h2>
            </div>

            <div className="fruit">
                <img className="imgAll-1" src="./All/17.jpg" alt="" />
                <img className="imgAll-1" src="./All/18.jpg" alt="" />

                <div className="imgs-2">
                    <img className="imgsmall-3" src="./All/19.jpg" alt="" />
                    <img className="imgsmall-3" src="./All/20.jpg" alt="" />

                </div>
            </div>
            <br></br>
            <Silkporduct ep='pets' />

           {/* // หน้าแสดงสินค้า หมวดหมู่ความงามและของใช้ส่วนตัว // ภาพิมล แก้วโลก */}
            <br />
            <br />
            <br />
            <div className="beauty">
                <h2>ความงามและของใช้ส่วนตัว</h2>
            </div>

            <div className="beauty-1">
                <img className="imgB" src="./All/21.jpg" alt="" />
                <img className="imgB" src="./All/22.jpg" alt="" />
            </div>
            <br></br>
            <Silkporduct ep='beauti' />

            {/* // หน้าแสดงสินค้า หมวดหมู่แฟชั่น // ภาพิมล แก้วโลก */}
            <br />
            <br />
            <br />
            <div className="fashion">
                <h2>แฟชั่น</h2>
            </div>

            <div className="fashion-1">
                <img className="imgAll-2" src="./All/27.jpg" alt="" />
                <img className="imgAll-2" src="./All/28.jpg" alt="" />

                <div className="imgs-3">
                    <img className="imgsmall-4" src="./All/29.jpg" alt="" />
                    <img className="imgsmall-4" src="./All/30.jpg" alt="" />

                </div>
            </div>
            <br></br>
            <Silkporduct ep='fashion' />

             {/* // หน้าแสดงสินค้า หมวดหมู่อุปกรณ์และของใช้ภายในบ้าน // ภาพิมล แก้วโลก */}
            <br />
            <br />
            <br />
            <div className="householditems">
                <h2>อุปกรณ์และของใช้ภายในบ้าน</h2>
            </div>

            <div className="householditems-1">
                <img className="imgAll-3" src="./All/31.jpg" alt="" />


                <div className="imgs-5">
                    <img className="imgs-6" src="./All/32.jpg" alt="" />
                    <img className="imgs-6" src="./All/33.jpg" alt="" />
                    <img className="imgs-6" src="./All/34.jpg" alt="" />
                    <img className="imgs-6" src="./All/35.jpg" alt="" />
                </div>
            </div>
            <br></br>
            <Silkporduct ep='home' />

            {/* <!-- footer --> */}
            {/* // ช่องทางติดต่อ // ภาพิมล แก้วโลก */}
            <br />
            <br />

             {/* // ช่องทางติดต่อ // ภาพิมล แก้วโลก */}
            <div className="footer">
                <div className="so_c">
                    
                    <img className=" social facebook" src="./All/facebook.png"
                        style={{ width: "50px", height: "50px", marginRight: "20px" }} />
                    <img className="social instagram" src="./All/instagram.png"
                        style={{ width: "50px", height: "50px", marginRight: "20px" }} />
                    <img className="social line" src="./All/line.png" style={{ width: "50px", height: "50px", marginRight: "20px" }} />
                    <img className="social twitter" src="./All/twitter.png" style={{ width: "50px", height: "50px", marginRight: "20px" }} />
                    <img className="social youtube" src="./All/youtube.png" style={{ width: "50px", height: "50px", marginRight: "20px" }} />

                </div>

                 {/* // ช่องทางติดต่อ // ภาพิมล แก้วโลก */}
                <div className="footer-middle">
                    <div className="footer-middle1">
                        <h5 style={{ marginLeft: "125px", marginTop: "10%", color: "#3e8e41", }}>บริการลูกค้า</h5>
                        <a style={{ marginLeft: "125px" }} href="">ศูนย์ช่วยเหลือ</a><br />
                        <a style={{ marginLeft: "125px" }} href="">วิธีสั่งซื้อและชำระเงิน</a><br />
                        <a style={{ marginLeft: "125px" }} href="">วิธีการจัดส่ง</a><br />
                        <a style={{ marginLeft: "125px" }} href="">สถานะการสั่งซื้อ</a><br />
                        <a style={{ marginLeft: "125px" }} href="">ใบส่งสินค้า</a><br />
                        <a style={{ marginLeft: "125px" }} href="">การคืนสินค้าและคืนเงิน</a>
                    </div>

                    
                    {/* // ช่องทางติดต่อ // ภาพิมล แก้วโลก */} 
                    <div className="footer-middle2">
                        <h5 style={{ marginLeft: "100px", marginTop: "10%", color: "#3e8e41" }}>เกี่ยวกับเรา</h5>
                        <a style={{ marginLeft: "100px" }} href="">ข้อตกลงและเงื่อนไข</a><br />
                        <a style={{ marginLeft: "100px" }} href="">การแจ้งการประมวลผลข้อมูลส่วนบุคคล</a><br />
                        <a style={{ marginLeft: "100px" }} href="">ของสมาชิก(Privacy Notice)</a><br />
                        <a style={{ marginLeft: "100px" }} href="">นโยบายการใช้คุกกี้</a><br />
                        <a style={{ marginLeft: "100px" }} href="">ติดต่อเรา</a><br />
                    </div>

                    
             {/* // ช่องทางติดต่อ // ภาพิมล แก้วโลก */}
                    <div className="footer-middle3">
                        <img src="./All/app7.png" style={{ height: "200px" }} />
                        <img src="./All/allonline.png" style={{ height: "100px" }} />
                    </div>
                </div>

                
             {/* // ช่องทางติดต่อ // ภาพิมล แก้วโลก */} 
                <br />
                <div className="mainbot-1">
                    <div>
                        <h6 className="pay">วิธีการชำระเงิน</h6>
                        <div className='pay55'>
                            <img className="imgpay" src="./All/36.png" alt="" />
                            <img className="imgpay" src="./All/37.png" alt="" />
                            <img className="imgpay" src="./All/38.png" alt="" />
                            <img className="imgpay" src="./All/39.png" alt="" />
                        </div>
                    </div>

                    <div>
                        
             {/* // ช่องทางติดต่อ // ภาพิมล แก้วโลก */}
                        <h6 className="po">บริการได้รับการตรวจสอบแล้ว</h6>
                        <div className='check'>
                            <img className="po-1" src="./All/40.png" alt="" />
                            <img className="po-1" src="./All/41.png" alt="" />
                        </div>
                    </div>
                <div>
                        <h6 className="so">สำหรับสมาชิก</h6>
                        <div>
                            <img className="so-1" src="./All/allonline.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}
// }
export default Homepage
