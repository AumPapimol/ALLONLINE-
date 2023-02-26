// สไลด์เดอร์ หน้า Homepage // ภาพิมล แก้วโลก
import React, { Component ,useState ,useEffect } from "react";
import Slider from "react-slick";
import './home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// สไลด์เดอร์ หน้า Homepage // ภาพิมล แก้วโลก
const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control" onClick={onClick}>
        <button className="next">
        ▶
        </button>
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control" onClick={onClick}>
        <button className="next2">
        ◀
        </button>
      </div>
    );
  };

// สไลด์เดอร์ หน้า Homepage // ภาพิมล แก้วโลก
export default function Slikproduct ({ep}) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    };
    
    // สไลด์เดอร์ หน้า Homepage // ภาพิมล แก้วโลก
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      fetch(`http://localhost:3111/promotion`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        mode:'cors'
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
          setData(data);
          setLoading(false);
          
        });
    }, []);

    // สไลด์เดอร์ หน้า Homepage // ภาพิมล แก้วโลก
    if (isLoading) return <p>Loading... :</p>;
    if (!data) return <p>No profile data</p>;
    let row = ''
    if (ep === "lod") row = 'ของใช้ภายในบ้าน';
    else if (ep === "home") row = 'ของใช้ภายในบ้าน';
    else if (ep === "fashion") row = 'แฟชั่น';
    else if (ep === "iT") row = 'เครื่องใช้ไฟฟ้า';
    else if (ep === "pets") row = 'ผลิตภัณฑ์สำหรับสัตว์เลี้ยง';
    else if (ep === "health") row = 'สุขภาพและเครื่องกำลังกาย';
    else if (ep === "beauti") row = 'ความงาม';
    else if (ep === "super") row = 'ซูเปอร์มาร์เก็ต';
    return (
      <div>
        <Slider {...settings}>
            {data.filter((element)=>{
                return element.category == row
            }).map((element)=>{
                return(
                    <div>
                    <div><img className="img" src={element.image}></img></div>
                    <div className="name">{element.product_name}</div>
                    <div className="price">{element.sell_price} </div>
                  </div>
                )
            })
                }
         
        </Slider>
      </div>
    );
  
}
// สไลด์เดอร์ หน้า Homepage // ภาพิมล แก้วโลก