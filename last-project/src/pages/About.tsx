import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const About = () => {
useEffect(()=>{
  AOS.init();
},[])
  return (
   <>
   <div className="about" >
   <img className='photoOne' src="https://dlcdnwebimgs.asus.com/files/media/15CD2FE5-6264-4944-8D67-5E3EC233F188/v3/images/large/1x/animation/s1/bg.webp" alt="" />
   <img className='photoTwo' src="https://dlcdnwebimgs.asus.com/files/media/15CD2FE5-6264-4944-8D67-5E3EC233F188/v3/images/large/1x/animation/s1/model.webp" alt="" />
   <img className='photoThird' src="https://dlcdnwebimgs.asus.com/files/media/15CD2FE5-6264-4944-8D67-5E3EC233F188/v3/images/large/1x/kv_logo.webp" alt="" />
   </div>
  <div className="about-second" data-aos="fade-down"  >
  <div className="container ">
  <div className="text-white text-center ">
    <h1 className='fw-bold '>Seriously Cool. Surprisingly Quiet.</h1>
    <p>ROG uses a strategic mix of hardware and features to achieve ideal cooling for each combination of components and chassis, while keeping noise levels low. Cutting-edge fan design and liquid metal work together with smart software to optimize your experience for work and play.</p>
   </div>
  </div>
  <iframe width="60%" height="515" src="https://www.youtube.com/embed/gYAyaSKWc1A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  <div className="row my-5">
    <div className="col-12 col-sm-6 col-md-4">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ni35rv3f2a4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <div className="col-12 col-sm-6 col-md-4">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/O-IRfVjV6jQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <div className="col-12 col-sm-6 col-md-4">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/7Gmk6UNQ2PA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  </div>
   <div className="container" data-aos="fade-down">
   <div className="photos">
   <div className="row">
      <div className="col-12 col-sm-6 col-md-6">
        <div className="common">
        <img src="https://dlcdnwebimgs.asus.com/files/media/15CD2FE5-6264-4944-8D67-5E3EC233F188/v3/images/large/1x/s3/red/banner.webp" alt="" />
        <div className="text">
          <h3><strong>Conductonaut Extreme liquid metal</strong></h3>
          <p>reduces CPU temperatures</p>
        </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6" data-aos="fade-down">
        <div className="common">
        <img src="https://dlcdnwebimgs.asus.com/files/media/15CD2FE5-6264-4944-8D67-5E3EC233F188/v3/images/large/1x/s3/blue/banner.webp" alt="" />
        <div className="text">
          <h3><strong>Full-surround Vents</strong></h3>
          <p>Full-surround Vents</p>
        </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-6 col-md-6" data-aos="fade-down">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6">
            <div className="common">
            <img src="https://dlcdnwebimgs.asus.com/files/media/15CD2FE5-6264-4944-8D67-5E3EC233F188/v3/images/large/1x/s3/red/nav1.webp" alt="" />
            <div className="text">
          <h3><strong>Vapor Chamber</strong></h3>
          <p> covers more area for efficient heat removal</p>
        </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6" data-aos="fade-down">
            <div className="common">
               <img src="https://dlcdnwebimgs.asus.com/files/media/15CD2FE5-6264-4944-8D67-5E3EC233F188/v3/images/large/1x/s3/red/nav2.webp" alt="" />
               <div className="text">
                <h3><strong>Full-width Heatsink</strong></h3>
                <p> dissipates more heat with ultra dense fins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6" data-aos="fade-down">
      <div className="row">
          <div className="col-12 col-sm-6 col-md-6" data-aos="fade-down">
            <div className="common">
            <img src="https://dlcdnwebimgs.asus.com/files/media/15CD2FE5-6264-4944-8D67-5E3EC233F188/v3/images/large/1x/s3/blue/nav1.webp" alt="" />
            <div className="text">
              <h3><strong>Dust Filter</strong></h3>
              <p> helps keep dust and fibers out</p>
            </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6" data-aos="fade-down">
            <div className="common">
               <img src="https://dlcdnwebimgs.asus.com/files/media/15CD2FE5-6264-4944-8D67-5E3EC233F188/v3/images/large/1x/s3/blue/nav2.webp" alt="" />
               <div className="text">
                <h3><strong>Arc Flow Fans™</strong></h3>
                <p>increase airflow by up to 32%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-6 col-md-6" data-aos="fade-down">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6">
            <div className="common">
            <img src="https://dlcdnwebimgs.asus.com/files/media/15CD2FE5-6264-4944-8D67-5E3EC233F188/v3/images/large/1x/s3/purple/nav1.webp" alt="" />
                <div className="text">
                  <h3><strong>Scenario Profiles</strong></h3>
                  <p> automatically adjust</p>
                  <p>cooling modes</p>
                </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6" data-aos="fade-down">
            <div className="common">
               <img src="https://dlcdnwebimgs.asus.com/files/media/15CD2FE5-6264-4944-8D67-5E3EC233F188/v3/images/large/1x/s3/purple/nav2.webp" alt="" />
               <div className="text">
                <h3><strong>0dB Ambient Cooling</strong></h3>
                <p>keeps your laptop truly silent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6" data-aos="fade-down">
        <div className="common">
        <img src="https://dlcdnwebimgs.asus.com/files/media/15CD2FE5-6264-4944-8D67-5E3EC233F188/v3/images/large/1x/s3/blue/banner2.webp" alt="" />
        <div className="text">
          <h3><strong>Tri-Fan Technology</strong></h3>
          <p>boosts internal airflow with three fans</p>
        </div>
        </div>
      </div>
    </div>
   </div>
   </div>
  </div>
  <div className="about-third">
    <div className="container " data-aos="zoom-in">
    <h2 className='text-white py-5' data-aos="zoom-in">Keep your <span> CPU and GPU cool</span> with liquid metal</h2>
    <div className='line'></div>
    <p>Over a year of testing with various processors, ROG engineers observed reductions in temperatures up to 13 degrees Celsius with liquid metal, depending on the CPU. And unlike typical pastes, liquid metal will also never dry out, improving long term stability.​</p>
    <p>New for 2022, select ROG models now feature Thermal Grizzly’s cutting-edge Conductonaut Extreme, which improves liquid metal's heat transfer even further. Compared to traditional thermal pastes, this indium- and gallium-based compound offers 17X higher conductivity and CPU/GPU temperatures up to 15 degrees cooler. Used exclusively by ROG, this material offers the highest thermal transfer available on a laptop.​</p>
    <p>*Temperature improvements compared to the previous gen thermal compound, as tested internally by ASUS. Thermal conductivity compared to industry standard.</p>
    </div>
  </div>
  <div className="upgrade">
    <img src="https://cdn.discordapp.com/attachments/1064953230091624448/1106850584537075712/thermal.webp" style={{"width":"100%","height":"auto"}} alt="" />
    <div className="text d-none d-md-block" data-aos="fade-up"
     data-aos-duration="1000">
      <h2 >Upgraded <span>Arc Flow Fans™</span> move more air with less noise</h2>
      <p>Slim chassis leave little room for cooling, so we enhance every aspect of our Arc Flow fans. Traditional fan blades have a single thickness from base to tip. Our 84-blade Arc Flow Fans™ have a variable thickness design, down to 0.1mm at the tip. This approach reduces resonance and turbulence, moving up to 13% more air.*</p>
      <div className="d-flex">
        <p className='fw-bolder fs-2 ' style={{color:"#33D1FF"}}>13%</p>
        <p className='fw-bolder fs-2 ms-5' style={{color:"#33D1FF"}}>down to 0.1mm</p>
      </div>
    </div>
  </div>
  <div className="last">
    <img src="https://dlcdnwebimgs.asus.com/files/media/15CD2FE5-6264-4944-8D67-5E3EC233F188/v3/images/medium/1x/s14_bg.webp" style={{width:"100%"}} alt="" />
    <div className="text d-none d-md-block" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
      <h2>Explore all the gaming laptops that feature ROG <br/> Intelligent Cooling</h2>
      <p>No matter the situation, ROG has a solution that will blow you away. Explore all the gaming laptops that feature ROG  Intelligent Cooling at the links below. Laptop gaming has never been cooler.</p>
     <LinkContainer to='/shop'>
     <Button variant="outline-primary"  className='mt-4 fs-4' >Explore all the gaming laptops</Button>
     </LinkContainer>
    </div>
  </div>

   
   
   </>
  )
}

export default About
