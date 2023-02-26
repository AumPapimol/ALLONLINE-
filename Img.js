// สไลด์เดอร์ หน้า Homepage // ภาพิมล แก้วโลก
import { Carousel } from 'antd';
const contentStyle = {
  height: '200%',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src='https://www.allonline.7eleven.co.th/media/i/%E0%B8%A1%E0%B8%B1%E0%B8%94%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%94%E0%B8%B5-%E0%B8%9F%E0%B8%A3%E0%B8%B5%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%96%E0%B8%A1-(24-Jan---23-Feb-23)-web-192991-0.jpg'/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src='https://www.allonline.7eleven.co.th/media/i/%E0%B8%8A%E0%B9%89%E0%B8%AD%E0%B8%9B%E0%B8%94%E0%B8%B5%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%B7%E0%B8%99-(24-Jan---23-Feb-23)-193155-0.jpg'/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src='https://www.allonline.7eleven.co.th/media/i/Mid-Month-Sale-(12-16-Feb-23)-web-195371-0.jpg'/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src='https://www.allonline.7eleven.co.th/media/i/CAKE-%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87-%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B1%E0%B8%81-(24-Jan---23-Feb-23)-web-193002-0.jpg'/></h3>
    </div>
  </Carousel>
);
export default App;
// สไลด์เดอร์ หน้า Homepage // ภาพิมล แก้วโลก