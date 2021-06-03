import React from 'react';
import './Landing.css';
import Zoom from 'react-reveal/Zoom';

const Landing = () => {

    return (
        <section className='project'>
            <header>
                
            <div id="app">
                <div className="title">
                    <div className="title-inner">
                        <div className="cafe">
                            <div className="cafe-inner"><span className="title-s">S</span>urface Tension</div>
                        </div>
                        <div className="mozart">
                            <div className="mozart-inner">By <span className="title-s">S</span>hreshth Agarwal</div>
                        </div>
                    </div>
                </div>

                <div className="image">
                    <img className="mainpage-img" src='https://media.istockphoto.com/photos/maple-leaf-floating-on-fresh-water-picture-id175419157?k=6&m=175419157&s=612x612&w=0&h=bTKbtIPHzBxlTFrN9505rFkS-x_JBJvmBtmghIu_0G8=' alt=''/>
                </div>
            </div>


            </header>

            <section class="slanted-div">
                <Zoom>
                <div>
                    <h1>What is surface Tension?</h1>
              <p>Surface tension is the tendency of liquid surfaces at rest to shrink into the minimum 
                  surface area possible. Surface tension is what allows heavier than water i.e., denser than water 
                  objects such as razor blades, insects (e.g. water striders), to float and slide on a water surface without 
                  becoming even partly submerged.
                </p>
                </div>
                </Zoom>
            </section>

            <section class="slanted-div1">
                <Zoom><div>
                <h1 className="slanted-div-1">Causes of Surface Tension</h1>
              <p className="slanted-div-1">Due to the cohesive forces a molecule is pulled equally in every direction by neighbouring liquid molecules, 
                  resulting in a net force of zero. The molecules at the surface do not have the same molecules on all sides of them 
                  and therefore are pulled inward. This creates some internal pressure and forces liquid surfaces to contract to the 
                  minimum area. <br/><br/>
                  There is also a tension parallel to the surface at the liquid-air interface which will resist an external 
                  force, due to the cohesive nature of water molecules.
                </p>
                </div></Zoom>
            </section>
            <section class="slanted-div">
                <Zoom>
                <div>
                <h1>Effects of Surface Tension</h1>
              <p>Several effects of surface tension can be seen with ordinary water: <br/><br/>
             <span>1.</span> 
              Beading of rain water on a waxy surface, such as a leaf. Water adheres weakly to wax and strongly to itself, 
              so water clusters into drops. Surface tension gives them their near-spherical shape, because a sphere has the smallest
              possible surface area to volume ratio. 
                </p>
                <img className="beading-leaf" alt="" src="https://p1.pxfuel.com/preview/971/880/866/leaf-leaves-wet-water.jpg" />

                </div>
                </Zoom>
            </section>
            <section class="slanted-div1">
                <Zoom>
                    <div>
                <h1 className="slanted-div-1">Effects of Surface Tension</h1>
              <p className="slanted-div-1"><span>2.</span> Formation of drops occurs when a mass of liquid is stretched. The image 
              shows water
              adhering to the faucet gaining mass until it is stretched to a point where the surface tension can no longer keep 
              the drop linked to the faucet. It then separates and surface tension forms the drop into a sphere. If a stream of water 
              were running from the faucet, the stream would break up into drops during its fall. Gravity stretches the stream, then 
              surface tension pinches it into spheres.
                </p>
                <img className="beading-leaf" alt="" src="https://hips.hearstapps.com/pop.h-cdn.co/assets/15/40/1443559966-gettyimages-534581737.jpg" />
                </div>
                </Zoom>
            </section>
            <section class="slanted-div">
               <Zoom>
               <div>
                <h1>Effects of Surface Tension</h1>
              <p><span>3.</span>Flotation of objects denser than water occurs when the object is nonwettable and its weight is 
              small enough to be borne by the forces arising from surface tension. For example, water striders use surface tension 
              to walk on the surface of a pond in the following way. The nonwettability of the water strider's leg means there is no 
              attraction between molecules of the leg and molecules of the water, so when the leg pushes down on the water, the surface
               tension of the water only tries to recover its flatness from its deformation due to the leg. This behavior of the water 
               pushes the water strider upward so it can stand on the surface of the water as long as its mass is small enough that
                the water can support it. The surface of the water behaves like an elastic film: the insect's feet cause indentations
                 in the water's surface, increasing its surface area and tendency of minimization of surface curvature (so area) 
                 of the water pushes the insect's feet upward.
                </p>
                <img className="beading-leaf" alt="" src="https://qph.fs.quoracdn.net/main-qimg-466bc9be9b96c716c662c64cc5e1eb79" />
                </div>
               </Zoom>
            </section>
            <section class="slanted-div1">
                <Zoom>
                <div>
                <h1 className="slanted-div-1">Physical Unit of Surface Tension</h1>
              <p className="slanted-div-1">
              Surface tension, represented by the symbol γ (alternatively σ or T), is measured in force per unit length. Its SI unit 
              is newton per meter but the cgs unit of dyne per centimeter is also used. For example,
                </p>
                <img classNane="physical-img" alt='' src='https://wikimedia.org/api/rest_v1/media/math/render/svg/f84d74bdd99c878b58613a7963c1831d66e898a9' />
                </div>
                </Zoom>
                </section>
                
        
            <footer>
                <Zoom>
                <p>Developed by: <br/>Shreshth Agarwal <br/> XI- Aquila</p>
                </Zoom>

            </footer>
        </section>

    );
}

export default Landing;