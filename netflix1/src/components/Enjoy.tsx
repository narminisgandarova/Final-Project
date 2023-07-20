import React from 'react'

const Enjoy = () => {
  return (
   <>
    <div className="enjoy">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6">
                  <div className="text d-flex flex-column justify-content-center  ">
                    <h3>Enjoy on your TV</h3>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    <div className="saperated"></div>
    {/* download */}
    <div className="download">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6">
                   <div className="left-down">
                   <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                    <div className="box">
                      <img className='m-2' style={{width:"22%"}} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                     <div className="d-flex justify-content-center align-items-center">
                     <div className="text1 ">
                        <h5 className='text-white'>Stranger Things</h5>
                        <p>Downloading...</p>
                      </div>
                      <i className="fa-solid fa-down-long text-white ms-3"></i>
                     </div>
                    </div>
                   </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                  <div className="text d-flex flex-column justify-content-center  ">
                    <h3>Download your shows to watch offline</h3>
                    <p>Save your favorites easily and always have something to watch.</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <div className="saperated"></div>
    {/* watch */}
    <div className="watch">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6">
                  <div className="text d-flex flex-column justify-content-center  ">
                    <h3>Watch everywhere</h3>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    <div className="saperated"></div>
    {/* create */}
    <div className="create">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6">
                    <img src="https://occ-0-6194-2773.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55" alt="" />
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                  <div className="text d-flex flex-column justify-content-center  ">
                    <h3>Create profiles for kids</h3>
                    <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <div className="saperated"></div>
   
   </>
  )
}

export default Enjoy