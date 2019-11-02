import React from 'react';
import logo from './logo.svg';
import './App.css';
import './asset/css/font_css.css';
import './asset/css/style.css';
import img1 from './asset/images/image1.jpg';
import img2 from './asset/images/image2.jpg';
import img3 from './asset/images/image3.jpg';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

import {get_data} from "./api/api";






class App extends React.Component {

  constructor() {
    super();
     this.state = {
       keyword:'skill',
       isLoaded:false,
       numFound:'',
       data : []
      
    };

}
componentDidMount() {
  this.search();
     
}

search(){

this.setState({
            isLoaded:true
          
          });
   get_data(this.state.keyword)
    
      .then(
        (result) => {
         console.log(result.data.response.numFound);
         this.setState({
            data: result.data.response.docs,
            numFound: result.data.response.numFound,
            isLoaded:false
          
          });
          
        },
       
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }
  render(){
    const {data,isLoaded,keyword,numFound}=this.state;
    console.log(data);
     return (
      <div className="App">
       {isLoaded && 
        <div className="loader">
           <Loader
             type="ThreeDots"
             color="#00BFFF"
             height={100}
             width={100}
          />
        </div>  
       } 
         <header className="nav-opt-sprite nav-locale-in nav-lang-en nav-ssl nav-rec">
          <div id="navbar" cel_widget_id="Navigation-desktop-navbar" data-template="layoutSwapToolBar" role="navigation" className="nav-sprite-v1 celwidget nav-bluebeacon nav-a11y-t1 nav-packard-glow hamburger">
            <div id="nav-belt">
              {/*<div className="nav-left">
                              <a href="#" aria-label="Open Menu" id="nav-hamburger-menu" role="button"><i className="hm-icon nav-sprite" /></a>
                              <div id="nav-logo">
                                <a href="#" className="nav-logo-link" aria-label="Amazon" tabIndex={6}>
                                  <span className="nav-sprite nav-logo-base" />
                                  <span className="nav-sprite nav-logo-ext" />
                                  <span className="nav-sprite nav-logo-locale" />
                                </a>
                              </div>
                            </div>*/}
              <div className="nav-right">
                <div id="nav-tools" className="layoutToolbarPadding">
                  {/*<a href="#" id="icp-nav-flyout" className="nav-a nav-a-2 icp-link-style-2">
                                      <span className="icp-nav-link-inner">
                                        <span className="nav-line-1">
                                          <span className="icp-nav-globe-mozart-t2-img-2" />
                                        </span>
                                        <span className="nav-line-2">&nbsp;
                                          <span className="nav-icon nav-arrow" />
                                        </span>
                                      </span>
                                    </a>*/}
                  <a href="#" className="nav-a nav-a-2 nav-truncate  " data-nav-ref="nav_ya_signin" data-nav-role="signin" data-ux-jq-mouseenter="true" id="nav-link-accountList" tabIndex={12}>
                  </a>
                </div>
              </div>
              <div className="nav-fill">
                <div id="nav-search">
                  <div id="nav-bar-left" />
                  <form className="nav-searchbar" >
                    <div className="nav-left">
                      <div id="nav-search-dropdown-card">
                         {/*<div className="nav-search-scope nav-sprite">
                         <div className="nav-search-facade" data-value="search-alias=aps">
                                                      <span className="nav-search-label">All</span>
                                                      <i className="nav-icon" />
                                                    </div>
                                                    <select className="nav-search-dropdown searchSelect"  style={{display: 'block'}} tabIndex={8} title="Search in">
                                                      <option selected="selected" value="search-alias=aps">All Categories</option>
                                                      <option value="search-alias=alexa-skills">Alexa Skills</option>
                                                      <option value="search-alias=amazon-devices">Amazon Devices</option>
                                                      <option value="search-alias=fashion">Amazon Fashion</option>
                                                      <option value="search-alias=nowstore">Amazon Fresh</option>
                                                      <option value="search-alias=amazon-global-store">Amazon Global Store</option>
                                                      <option value="search-alias=pantry">Amazon Pantry</option>
                                                      <option value="search-alias=appliances">Appliances</option>
                                                      <option value="search-alias=mobile-apps">Apps &amp; Games</option>
                                                      <option value="search-alias=baby">Baby</option>
                                                      <option value="search-alias=beauty">Beauty</option>
                                                      <option value="search-alias=stripbooks">Books</option>
                                                      <option value="search-alias=automotive">Car &amp; Motorbike</option>
                                                      <option value="search-alias=apparel">Clothing &amp; Accessories</option>
                                                      <option value="search-alias=collectibles">Collectibles</option>
                                                      <option value="search-alias=computers">Computers &amp; Accessories</option>
                                                      <option value="search-alias=electronics">Electronics</option>
                                                      <option value="search-alias=furniture">Furniture</option>
                                                      <option value="search-alias=lawngarden">Garden &amp; Outdoors</option>
                                                      <option value="search-alias=gift-cards">Gift Cards</option>
                                                      <option value="search-alias=grocery">Grocery &amp; Gourmet Foods</option>
                                                      <option value="search-alias=hpc">Health &amp; Personal Care</option>
                                                      <option value="search-alias=kitchen">Home &amp; Kitchen</option>
                                                      <option value="search-alias=industrial">Industrial &amp; Scientific</option>
                                                      <option value="search-alias=jewelry">Jewellery</option>
                                                      <option value="search-alias=digital-text">Kindle Store</option>
                                                      <option value="search-alias=luggage">Luggage &amp; Bags</option>
                                                      <option value="search-alias=luxury-beauty">Luxury Beauty</option>
                                                      <option value="search-alias=dvd">Movies &amp; TV Shows</option>
                                                      <option value="search-alias=popular">Music</option>
                                                      <option value="search-alias=mi">Musical Instruments</option>
                                                      <option value="search-alias=office-products">Office Products</option>
                                                      <option value="search-alias=pets">Pet Supplies</option>
                                                      <option value="search-alias=instant-video">Prime Video</option>
                                                      <option value="search-alias=shoes">Shoes &amp; Handbags</option>
                                                      <option value="search-alias=software">Software</option>
                                                      <option value="search-alias=sporting">Sports, Fitness &amp; Outdoors</option>
                                                      <option value="search-alias=home-improvement">Tools &amp; Home Improvement</option>
                                                      <option value="search-alias=toys">Toys &amp; Games</option>
                                                      <option value="search-alias=videogames">Video Games</option>
                                                      <option value="search-alias=watches">Watches</option>
                                                    </select>
                                                  </div>*/}
                      </div>
                    </div>
                    <div className="nav-right">
                      <div className="nav-search-submit nav-sprite">
                        <span id="nav-search-submit-text" className="nav-search-submit-text nav-sprite">
                          Go
                        </span>
                        <input type="button" className="nav-input"  tabIndex={10} onClick={(e)=>this.search(e)} onKeyDown={(e)=>this.search(e)} disabled={keyword==""}/>
                      </div>
                    </div>
                    <div className="nav-fill">
                      <div className="nav-search-field ">
                        <label id="nav-search-label" htmlFor="twotabsearchtextbox" className="aok-offscreen">
                          Search
                        </label>
                        <input type="text" id="twotabsearchtextbox"  className="nav-input" dir="auto" tabIndex={9} value={keyword} onChange={(event) => this.setState({keyword: event.target.value})}/>
                      </div>
                      <div id="nav-iss-attach" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div id="nav-main" className="nav-sprite">
              {/*<div className="nav-left">
                              <div id="nav-global-location-slot">
                                <span className="a-declarative" data-a-modal="{&quot;width&quot;:375,&quot;closeButton&quot;:&quot;false&quot;,&quot;popoverLabel&quot;:&quot;Choose your location&quot;,&quot;name&quot;:&quot;glow-modal&quot;,&quot;url&quot;:&quot;/gp/glow/get-address-selections.html?selectedLocationType=ADDRESS_ID&selectedLocationValue=65KPOU5DV26TOXAQYYGQG12JKAJON03IYA1CYI30NOJAKJ3PXTQ2EYA2OXYWKFDE&deviceType=desktop&pageType=Search&storeContext=gateway&quot;,&quot;footer&quot;:null,&quot;header&quot;:&quot;Choose your location&quot;}" data-action="a-modal">
                                  <a className="nav-a nav-a-2 a-popover-trigger a-declarative" tabIndex={20}>
                                    <div className="nav-sprite" id="nav-packard-glow-loc-icon" />
                                    <div id="glow-ingress-block"><span className="nav-line-1" id="glow-ingress-line1">Deliver to sumit</span><span className="nav-line-2" id="glow-ingress-line2">Mohali 160070‌</span></div>
                                  </a>
                                </span>
                                <input data-addnewaddress="add-new" id="unifiedLocation1ClickAddress" name="dropdown-selection" type="hidden"  /><input data-addnewaddress="add-new" id="ubbShipTo" name="dropdown-selection-ubb" type="hidden"  />
                              </div>
                            </div>
                            <div className="nav-right">
                              <div id="nav-swmslot">
                              </div>
                            </div>
                            <div className="nav-fill">
                              <div id="nav-shop">
                              </div>
                              <div id="nav-xshop-container" className>
                                <div id="nav-xshop">
                                  <a href="#" className="nav-a  " tabIndex={28}>Today's Deals</a>
                                  <a id="nav-your-amazon" href="#" className="nav-a  " tabIndex={27}><span id="nav-your-amazon-text"><span className="nav-shortened-name" /></span></a>
                                  <a href="#" className="nav-a  " tabIndex={30}>Browsing History</a>
                                  <a href="#" className="nav-a  " tabIndex={26}>Buy Again</a>
                                  <a href="#" className="nav-a  " tabIndex={31}>Gift Card Service</a>
                                  <a href="#" className="nav-a  " tabIndex={32}>Sell</a>
                                  <a href="#" className="nav-a  " tabIndex={33}>Amazon Business </a>
                                </div>
                              </div>
                            </div>*/}
            </div>
            <div id="nav-subnav-toaster" />
          </div>
        </header>
         <a id="skippedLink" tabIndex={-1} />
         <div id="search">
          <span data-component-type="s-result-info-bar" className="rush-component">
            <h1 className="a-size-base a-spacing-base s-desktop-toolbar a-text-normal">
              <div className="sg-row-align-items-center sg-row">
                <div className="sg-col-14-of-20 sg-col-26-of-32 sg-col-18-of-24 sg-col sg-col-22-of-28 s-breadcrumb sg-col-10-of-16 sg-col-30-of-36 sg-col-6-of-12">
                  <div className="sg-col-inner">
                    <div className="a-section a-spacing-small a-spacing-top-small">
                      <span>{numFound ? numFound : '0'} results for</span><span> </span><span className="a-color-state a-text-bold">{keyword}</span>
                    </div>
                  </div>
                </div>
                <div className="sg-col-6-of-20 sg-col sg-col-6-of-36 sg-col-6-of-28 sg-col-6-of-16 sg-col-6-of-32 sg-col-6-of-24 sg-col-6-of-12">
                  <div className="sg-col-inner">
                  </div>
                </div>
              </div>
            </h1>
          </span>
          <div className="sg-row">
            <div className="sg-col-4-of-24 sg-col-4-of-12 sg-col-4-of-36 sg-col-4-of-28 sg-col-4-of-16 sg-col sg-col-4-of-20 sg-col-4-of-32">
              <div className="sg-col-inner">
                <div className="s-screenreader">
                  <a className="a-link-normal aok-offscreen" title="tab to skip to main search results" href="#">
                    Skip to main search results
                  </a>
                </div>
                <div id="s-skipLinkTargetForFilterOptions" tabIndex={-1} />
                <div className="a-section a-spacing-double-large">
                  <span data-component-type="s-filters-panel-view" className="rush-component">
                    <div id="s-refinements" className="a-section">
                     {/* <div id="departments" className="a-section a-spacing-none">
                                             <div id="n-title" className="a-section a-spacing-small">
                                               <span className="a-size-base a-color-base a-text-bold">Department</span>
                                             </div>
                                             <ul aria-labelledby="n-title" className="a-unordered-list a-nostyle a-vertical a-spacing-medium">
                                               <li id="n/976392031" className="a-spacing-micro"><span className="a-list-item">
                                                   <a data-routing="off" className="a-link-normal s-navigation-item" href="#">
                                                     <span className="a-size-base a-color-base">Computers &amp; Accessories</span>
                                                   </a>
                                                 </span>
                                               </li>
                                               <li id="n/1375442031" className="a-spacing-micro s-navigation-indent-1"><span className="a-list-item">
                                                   <a data-routing="off" className="a-link-normal s-navigation-item" href="#">
                                                     <span className="a-size-base a-color-base">PC Speakers</span>
                                                   </a>
                                                 </span>
                                               </li>
                                               <li id="n/976419031" className="a-spacing-micro"><span className="a-list-item">
                                                   <a data-routing="off" className="a-link-normal s-navigation-item" href="#">
                                                     <span className="a-size-base a-color-base">Electronics</span>
                                                   </a>
                                                 </span>
                                               </li>
                                               <li id="n/15765862031" className="a-spacing-micro s-navigation-indent-1"><span className="a-list-item">
                                                   <a data-routing="off" className="a-link-normal s-navigation-item" href="#">
                                                     <span className="a-size-base a-color-base">Smart Speakers</span>
                                                   </a>
                                                 </span>
                                               </li>
                                               <li id="n/1389373031" className="a-spacing-micro s-navigation-indent-1"><span className="a-list-item">
                                                   <a data-routing="off" className="a-link-normal s-navigation-item" href="#">
                                                     <span className="a-size-base a-color-base">Multimedia Speaker Systems</span>
                                                   </a>
                                                 </span>
                                               </li>
                                               <li id="n/1389369031" className="a-spacing-micro s-navigation-indent-1"><span className="a-list-item">
                                                   <a data-routing="off" className="a-link-normal s-navigation-item" href="#">
                                                     <span className="a-size-base a-color-base">Tower Speakers</span>
                                                   </a>
                                                 </span>
                                               </li>
                                               <li id="n/1388921031" className="a-spacing-micro s-navigation-indent-1"><span className="a-list-item">
                                                   <a data-routing="off" className="a-link-normal s-navigation-item" href="#">
                                                     <span className="a-size-base a-color-base">Audio Headphones</span>
                                                   </a>
                                                 </span>
                                               </li>
                                             </ul>
                                           </div>
                      <div id="reviewsRefinements" className="a-section a-spacing-none">
                        <div id="p_72-title" className="a-section a-spacing-small">
                          <span className="a-size-base a-color-base a-text-bold">Avg. Customer Review</span>
                        </div>
                        <ul aria-labelledby="p_72-title" className="a-unordered-list a-nostyle a-vertical a-spacing-medium">
                          <li id="p_72/1318476031">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" href="#">
                                <section aria-label="4 Stars & Up">
                                  <i className="a-icon a-icon-star-medium a-star-medium-4"><span className="a-icon-alt">4 Stars &amp; Up</span></i>
                                  <span className="a-size-small a-color-base">&amp; Up</span>
                                </section>
                              </a>
                            </span>
                          </li>
                          <li id="p_72/1318477031">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" href="#">
                                <section aria-label="3 Stars & Up">
                                  <i className="a-icon a-icon-star-medium a-star-medium-3"><span className="a-icon-alt">3 Stars &amp; Up</span></i>
                                  <span className="a-size-small a-color-base">&amp; Up</span>
                                </section>
                              </a>
                            </span>
                          </li>
                          <li id="p_72/1318478031">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" href="#">
                                <section aria-label="2 Stars & Up">
                                  <i className="a-icon a-icon-star-medium a-star-medium-2"><span className="a-icon-alt">2 Stars &amp; Up</span></i>
                                  <span className="a-size-small a-color-base">&amp; Up</span>
                                </section>
                              </a>
                            </span>
                          </li>
                          <li id="p_72/1318479031">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" href="#">
                                <section aria-label="1 Star & Up">
                                  <i className="a-icon a-icon-star-medium a-star-medium-1"><span className="a-icon-alt">1 Star &amp; Up</span></i>
                                  <span className="a-size-small a-color-base">&amp; Up</span>
                                </section>
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>*/}
                      <div id="brandsRefinements" className="a-section a-spacing-none">
                        <div id="p_89-title" className="a-section a-spacing-small">
                          <span className="a-size-base a-color-base a-text-bold">Brand</span>
                        </div>
                        <ul aria-labelledby="p_89-title" className="a-unordered-list a-nostyle a-vertical a-spacing-medium">
                          <li id="p_89/HEXAGEAR" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox" /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">HEXAGEAR</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/Docooler" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox"  /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">Docooler</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/rts" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox"  /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">rts</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/Farraige" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox" /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">Farraige</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/Leoie" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox" /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">Leoie</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/TEQIN" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox" /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">TEQIN</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/Festnight" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox"  /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">Festnight</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/DECDEAL" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox" /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">DECDEAL</span>
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div id="brandsRefinements" className="a-section a-spacing-none">
                        <div id="p_89-title" className="a-section a-spacing-small">
                          <span className="a-size-base a-color-base a-text-bold">Internal Solid State Drive Interface</span>
                        </div>
                        <ul aria-labelledby="p_89-title" className="a-unordered-list a-nostyle a-vertical a-spacing-medium">
                          <li id="p_89/HEXAGEAR" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox"  /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">SATA III (6 Gbit/s)</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/Docooler" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox" /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">SATA III (3 Gbit/s)</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/rts" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox"/><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">SATA III (1.5 Gbit/s)</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/Farraige" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox" /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">SATA III (6 Gbit/s)</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/Leoie" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox"  /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">PATA (IDE)</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/TEQIN" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox"  /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">PATA (IDE)</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/Festnight" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox" /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">PATA (IDE)</span>
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div id="brandsRefinements" className="a-section a-spacing-none">
                        <div id="p_89-title" className="a-section a-spacing-small">
                          <span className="a-size-base a-color-base a-text-bold">SSD Size</span>
                        </div>
                        <ul aria-labelledby="p_89-title" className="a-unordered-list a-nostyle a-vertical a-spacing-medium">
                          <li id="p_89/HEXAGEAR" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox"  /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">2 TB &amp; Up</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/Docooler" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox"  /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">1 to 1.9 TB</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/rts" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox"  /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">960 to 999 GB</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/Farraige" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox"  /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">480 to 959 GB</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/Leoie" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox" /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">240 to 479 GB</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/TEQIN" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox" /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">120 to 239 GB</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/Festnight" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox" /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">119 GB &amp; Under</span>
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div id="brandsRefinements" className="a-section a-spacing-none">
                        <div id="p_89-title" className="a-section a-spacing-small">
                          <span className="a-size-base a-color-base a-text-bold">Data Storage Platform Support</span>
                        </div>
                        <ul aria-labelledby="p_89-title" className="a-unordered-list a-nostyle a-vertical a-spacing-medium">
                          <li id="p_89/HEXAGEAR" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox"  /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">Mac</span>
                              </a>
                            </span>
                          </li>
                          <li id="p_89/Docooler" className="a-spacing-micro">
                            <span className="a-list-item">
                              <a data-routing className="a-link-normal s-navigation-item" tabIndex={-1} href="#">
                                <div className="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox"  /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label" /></label></div>
                                <span className="a-size-base a-color-base">PC</span>
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="sg-col-20-of-24 sg-col-28-of-32 sg-col-16-of-20 sg-col s-right-column sg-col-32-of-36 sg-col-8-of-12 sg-col-12-of-16 sg-col-24-of-28">
              <div className="sg-col-inner">
                <div id="s-skipLinkTargetForMainSearchResults" tabIndex={-1} />
                <span data-component-type="s-shopping-page-navigation" className="rush-component">
                </span>
                <span data-component-type="s-top-banner" className="rush-component">
                </span>
                <span data-component-type="s-search-results" className="rush-component s-latency-cf-section">
                  <div className="s-result-list s-search-results sg-row">

                    {data   && data.length > 0 &&

                        data.map((item, key) => (
                          <div key={key} className="sg-col-20-of-24 s-result-item sg-col-0-of-12 sg-col-28-of-32 sg-col-16-of-20 sg-col sg-col-32-of-36 sg-col-12-of-16 sg-col-24-of-28">
                            <div className="sg-col-inner">
                              <span cel_widget_id="SEARCH_RESULTS-SEARCH_RESULTS" className="celwidget slot=SEARCH_RESULTS template=SEARCH_RESULTS widgetId=search-results index=2">
                                <div className="s-include-content-margin s-border-bottom">
                                  <div className="a-section a-spacing-medium">
                                    <div className="sg-row">
                                      <div className="a-section a-spacing-micro s-min-height-small">
                                        <a className="a-link-normal" href="#">
                                        </a>
                                      </div>
                                    </div>
                                    <div className="sg-row">
                                      {/*<div className="sg-col-4-of-24 sg-col-4-of-12 sg-col-4-of-36 sg-col-4-of-28 sg-col-4-of-16 sg-col sg-col-4-of-20 sg-col-4-of-32">
                                                                              <div className="sg-col-inner">
                                                                                <div className="a-section a-spacing-none">
                                                                                  <span data-component-type="s-product-image" className="rush-component">
                                                                                    <a className="a-link-normal" target="_blank" href="#">
                                                                                      <div className="a-section aok-relative s-image-fixed-height">
                                                                                        <img src={img1} className="s-image" alt="" />
                                                                                      </div>
                                                                                    </a>
                                                                                  </span>
                                                                                </div>
                                                                              </div>
                                                                            </div>*/}
                                      <div className="sg-col-4-of-12 sg-col-8-of-16 sg-col-16-of-24 sg-col-12-of-20 sg-col-24-of-32 sg-col sg-col-28-of-36 sg-col-20-of-28">
                                        <div className="sg-col-inner">
                                          <div className="sg-row">
                                            <div className="sg-col-4-of-12 sg-col-8-of-16 sg-col-12-of-32 sg-col-12-of-20 sg-col-12-of-36 sg-col sg-col-12-of-24 sg-col-12-of-28">
                                              <div className="sg-col-inner">
                                                <div className="a-section a-spacing-none">
                                                <span className="a-size-medium a-color-base a-text-normal">Agent : {item.agent}</span><br/>
                                                      <span className="a-size-medium a-color-base a-text-normal">Agent Reg No : {item.agent_reg_no}</span><br/>
                                                      <span className="a-size-medium a-color-base a-text-normal">Assignee : {item.assignee}</span><br/>
                                                      <span className="a-size-medium a-color-base a-text-normal">Examiner : {item.examiner}</span><br/>
                                                      <span className="a-size-medium a-color-base a-text-normal">Firm : {item.firm}</span><br/>
                                                      <span className="a-size-medium a-color-base a-text-normal">Practitioner : {item.practitioner}</span><br/>
                                                      <span className="a-size-medium a-color-base a-text-normal">Invention Title : {item.invention_title}</span>
                                                      <span className="a-size-medium a-color-base a-text-normal">Status : {item.status}</span>
                                                  <h2 className="a-size-mini a-spacing-none a-color-base s-line-clamp-2">
                                                    <a className="a-link-normal a-text-normal" target="_blank" href="#">
                                                      
                                                    </a>
                                                  </h2>
                                                </div>
                                                {/*<div className="a-section a-spacing-none a-spacing-top-micro">
                                                                                                  <div className="a-row a-size-small">
                                                                                                    <span aria-label="4.0 out of 5 stars">
                                                                                                      <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:false,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&asin=B017K7TO6G&ref=acr_search__popover&contextId=search&quot;}">
                                                                                                        <a href="#" className="a-popover-trigger a-declarative"><i className="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span className="a-icon-alt">4.0 out of 5 stars</span></i><i className="a-icon a-icon-popover" /></a>
                                                                                                      </span>
                                                                                                    </span>
                                                                                                    <span aria-label="1,841">
                                                                                                      <a className="a-link-normal" target="_blank" href="/#">
                                                                                                        <span className="a-size-base">1,841</span>
                                                                                                      </a>
                                                                                                    </span>
                                                                                                  </div>
                                                                                                </div>*/}
                                              </div>
                                            </div>
                                          </div>
                                          {/*<div className="sg-row">
                                                                                      <div className="sg-col-4-of-24 sg-col-4-of-12 sg-col-4-of-36 sg-col-4-of-28 sg-col-4-of-16 sg-col sg-col-4-of-20 sg-col-4-of-32">
                                                                                        <div className="sg-col-inner">
                                                                                          <div className="a-section a-spacing-none a-spacing-top-small">
                                                                                            <div className="a-row a-size-base a-color-base">
                                                                                              <div className="a-row">
                                                                                                <a className="a-size-base a-link-normal s-no-hover a-text-normal" target="_blank" href="#">
                                                                                                  <span className="a-price" data-a-size="l" data-a-color="price"><span className="a-offscreen">₹449</span><span aria-hidden="true"><span className="a-price-symbol">₹</span><span className="a-price-whole">449</span></span></span>
                                                                                                  <span className="a-price a-text-price" data-a-size="b" data-a-strike="true" data-a-color="secondary"><span className="a-offscreen">₹945</span><span aria-hidden="true">₹945</span></span>
                                                                                                </a>
                                                                                                <span className="a-letter-space" /><span>Save ₹496 (52%)</span><span className="a-letter-space" />
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                          <div className="a-section a-spacing-none a-spacing-top-micro">
                                                                                            <div className="a-row a-size-base a-color-secondary s-align-children-center">
                                                                                              <div className="a-row s-align-children-center">
                                                                                                <span aria-label="Get it by Monday, November 4">
                                                                                                  <span>Get it by </span><span className="a-text-bold">Monday, November 4</span>
                                                                                                </span>
                                                                                              </div>
                                                                                              <div className="a-row">
                                                                                                <span aria-label="FREE Delivery over ₹499. Fulfilled by Amazon.">
                                                                                                  <span>FREE Delivery over ₹499. Fulfilled by Amazon.</span>
                                                                                                </span>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>*/}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>

                          ))}
                   
                    <div className="s-border-top-overlap" />
                  </div>
                  <div className="s-result-list-placeholder aok-hidden sg-row">
                    <div className="a-spinner-wrapper"><span className="a-spinner a-spinner-medium" /></div>
                  </div>
                </span>
                <span data-component-type="s-fkmr" className="rush-component s-latency-cf-section">
                </span>
                <span data-component-type="s-corrected-search-results" className="rush-component s-latency-cf-section">
                </span>
                <span data-component-type="s-bottom-slot" className="rush-component">
                </span>
                <div className="s-screenreader">
                  <a className="a-link-normal aok-offscreen" title="tab to go back to filtering menu" href="#">
                    Go back to filtering menu
                  </a>
                </div>
                <span data-component-type="s-pagination" className="rush-component">
                  {/*<div className="a-section s-border-bottom">
                                      <span cel_widget_id="PAGINATION-PAGINATION" className="celwidget slot=PAGINATION template=PAGINATION widgetId=pagination-button index=0">
                                        <div className="a-section a-spacing-none a-padding-base">
                                          <div className="a-text-center">
                                            <ul className="a-pagination">
                                              <li className="a-disabled">←<span className="a-letter-space" /><span className="a-letter-space" />Previous</li>
                                              <li className="a-selected"><a href="#">1</a></li>
                                              <li className="a-normal"><a href="#">2</a></li>
                                              <li className="a-normal"><a href="#">3</a></li>
                                              <li className="a-disabled">4</li>
                                              <li className="a-last"><a href="#">Next<span className="a-letter-space" /><span className="a-letter-space" />→</a></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </span>
                                    </div>*/}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
