import React from 'react';
import '../styles/solarsystem.css'
import UnityGame from './UnityGame';

const PlanetInfo = () => {

    return (
        <div>
            <h1 className='logo'>
                Veni vidi vici
            </h1>
            {/**
            <input checked='checked'  className='planet9' id='pluto' name='planet' type='radio'></input>
            <label className='pluto menu' for='pluto'>
                <div className='preview'></div>
                <div className='info'>
                    <h2>
                        <div className='pip'></div>
                        Contact
                    </h2>
                    <h3>Impact</h3>
                </div>
            </label>
            <input checked='checked'  className='planet8' id='neptune' name='planet' type='radio'></input>
            <label className='neptune menu' for='neptune'>
                <div className='preview'></div>
                <div className='info'>
                    <h2>
                        <div className='pip'></div>
                        Guides
                    </h2>
                    <h3>30.06 AU</h3>
                </div>
            </label>
            **/}
            <input checked='checked' className='planet7' id='uranus' name='planet' type='radio'></input>
            <label className='uranus menu' for='uranus'>
                <div className='preview'></div>
                <div className='info'>
                    <h2>
                        <div className='pip'></div>
                        Contact
                    </h2>
                    <h3>Got questions? Let's make things happen!</h3>
                </div>
            </label>
            <input checked='checked' className='planet6' id='saturn' name='planet' type='radio'></input>
            <label className='saturn menu' for='saturn'>
                <div className='preview'></div>
                <div className='info'>
                    <h2>
                        <div className='pip'></div>
                        Guides
                    </h2>
                    <h3>Step-by-step insights to level up your skills—clear, concise, and straight to the point!</h3>
                </div>
            </label>

            <input checked='checked' className='planet5' id='jupiter' name='planet' type='radio'></input>
            <label className='jupiter menu' for='jupiter'>
                <div className='preview'></div>
                <div className='info'>
                    <h2>
                        <div className='pip'></div>
                        Picture album
                    </h2>
                    <h3>A picture album crafted for my daughter—capturing memories today, inspiring a digital future tomorrow. 😉</h3>
                </div>
            </label>
            <input checked='checked' className='planet4' id='mars' name='planet' type='radio'></input>
            <label className='menu mars' for='mars'>
                <div className='preview'></div>
                <div className='info'>
                    <h2>
                        <div className='pip'></div>
                        Unity
                    </h2>
                    <h3>Bringing interactive worlds to life—where creativity meets cutting-edge Unity development.</h3>
                </div>
            </label>
            <input checked='checked' className='planet3' id='earth' name='planet' type='radio'></input>
            <label className='menu earth' for='earth'>
                <div className='preview'></div>
                <div className='info'>
                    <h2>
                        <div className='pip'></div>
                        Web portfolio
                    </h2>
                    <h3>Showcasing a journey of innovation, from concept to execution</h3>
                </div>
            </label>
            <input checked='checked' className='planet2' id='venus' name='planet' type='radio'></input>
            <label className='menu venus' for='venus'>
                <div className='preview'></div>
                <div className='info'>
                    <h2>
                        <div className='pip'></div>
                        Work experience
                    </h2>
                    <h3>Experience that orbits around innovation, always moving forward.</h3>
                </div>
            </label>
            <input checked='checked' className='planet1' id='mercury' name='planet' type='radio'></input>
            <label className='menu mercury' for='mercury'>
                <div className='preview'></div>
                <div className='info'>
                    <h2>
                        <div className='pip'></div>
                        Impact site
                    </h2>
                    <h3>Where innovation meets execution—crafting digital experiences that leave a lasting impact.</h3>
                </div>
            </label>
            <div className='solar'>
                <div className='solar_systm'>
                    <div className='planet mercury'>
                        <div className='planet_description mercury'>
                            <h2>IMPACT</h2>
                            <h1>Rasmus Jensen Portfolio</h1>
                            <p>Fueled by curiosity, driven by innovation – explore the fast-paced world of my digital creations.</p>
                            <label for='readMercury'>
                                {/**<a>
                                    Read Mor
                                    <span>e</span>
                                </a>**/}
                            </label>
                        </div>
                        <div className='overlay'></div>
                    </div>
                </div>
                <div className='solar_systm'>
                    <div className='planet venus'>
                        <div className='planet_description venus'>
                            <h2>Work</h2>
                            <h1>Experience</h1>
                            <p>From shaping iconic play experiences at LEGO System to driving innovation in the automotive industry at Ejner Hessel, my journey blends creativity with practical solutions to deliver impactful results.</p>
                            <label for='readVenus'>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a >
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className='overlay'></div>
                    </div>
                </div>
                <div className='solar_systm'>
                    <div className='planet earth'>
                        <div className='moon moon'>
                            <h3>Moon</h3>
                            <h2>Moon</h2>
                        </div>
                        <div className='trajectory m'></div>
                        <div className='planet_description earth'>
                            <h2>Web</h2>
                            <h1>Portfolio</h1>
                            <p>Get insights into my own universe, exploring innovative designs, impactful solutions, and the stories behind every project.</p>
                            <label for='readEarth'>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a>
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className='overlay'></div>
                    </div>
                </div>
                <div className='solar_systm'>
                    <div className='planet mars'>
                        <div className='moon deimos'>
                            <h3>Moon</h3>
                            <h2>Deimos</h2>
                        </div>
                        <div className='trajectory d'></div>
                        <div className='moon phoebos'>
                            <h3>Moon</h3>
                            <h2>Phoebos</h2>
                        </div>
                        <div className='trajectory p'></div>
                        <div className='planet_description mars'>
                            <h2>Unity</h2>
                            <h1>Game development</h1>
                            <p>Where imagination and code collide—creating immersive, interactive experiences with Unity game development.</p>
                            <label for='readMars'>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a>
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className='overlay'></div>
                    </div>
                </div>
                <div className='solar_systm'>
                    <div className='planet jupiter'>
                        <div className='moon lo'>
                            <h3>Moon</h3>
                            <h2>Io</h2>
                        </div>
                        <div className='moon europa'>
                            <h3>Moon</h3>
                            <h2>Europa</h2>
                        </div>
                        <div className='moon ganymede'>
                            <h3>Moon</h3>
                            <h2>Ganymede</h2>
                        </div>
                        <div className='trajectory lop'></div>
                        <div className='trajectory eu'></div>
                        <div className='trajectory ga'></div>
                        <div className='planet_description jupiter'>
                            <h2>Picture</h2>
                            <h1>Album</h1>
                            <p>Capturing moments, one photo at a time. A journey through memories, framed for a lifetime.</p>
                            <label for='readJupiter'>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a>
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className='overlay'></div>
                    </div>
                </div>
                <div className='solar_systm'>
                    <div className='planet saturn'>
                        <div className='moon titan'>
                            <h3>Moon</h3>
                            <h2>Titan</h2>
                        </div>
                        <div className='moon dione'>
                            <h3>Moon</h3>
                            <h2>Dione</h2>
                        </div>
                        <div className='moon enceladus'>
                            <h3>Moon</h3>
                            <h2>Enceladus</h2>
                        </div>
                        <div className='trajectory ti'></div>
                        <div className='trajectory di'></div>
                        <div className='trajectory enc'></div>
                        <div className='planet_description saturn'>
                            <h2>Developer</h2>
                            <h1>Guides</h1>
                            <p>Unlocking the secrets of coding, one guide at a time. Empowering you to build better, faster, and smarter solutions.</p>
                            <label for='readSaturn'>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a>
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className='overlay'></div>
                    </div>
                </div>
                <div className='solar_systm'>
                    <div className='planet uranus'>
                        <div className='moon miranda'>
                            <h3>Moon</h3>
                            <h2>Miranda</h2>
                        </div>
                        <div className='moon ariel'>
                            <h3>Moon</h3>
                            <h2>Ariel</h2>
                        </div>
                        <div className='moon umbriel'>
                            <h3>Moon</h3>
                            <h2>Umbriel</h2>
                        </div>
                        <div className='trajectory mir'></div>
                        <div className='trajectory ari'></div>
                        <div className='trajectory umb'></div>
                        <div className='planet_description uranus'>
                            <h2>GET IN</h2>
                            <h1>Contact</h1>
                            <p>Have a question or just want to chat? Reach out, and let's make things happen!</p>
                            <label for='readUranus'>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a>
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className='overlay'></div>
                    </div>
                </div>
                <div className='solar_systm'>
                    <div className='planet neptune'>
                        <div className='moon triton'>
                            <h3>Moon</h3>
                            <h2>Triton</h2>
                        </div>
                        <div className='moon proteus'>
                            <h3>Moon</h3>
                            <h2>Proteus</h2>
                        </div>
                        <div className='moon nereid'>
                            <h3>Moon</h3>
                            <h2>Nereid</h2>
                        </div>
                        <div className='trajectory tri'></div>
                        <div className='trajectory pro'></div>
                        <div className='trajectory ner'></div>
                        <div className='planet_description neptune'>
                            <h2>Planet</h2>
                            <h1>Neptune</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                            <label for='readNeptune'>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a>
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className='overlay'></div>
                    </div>
                </div>
                <div className='solar_systm'>
                    <div className='planet pluto'>
                        <div className='planet_description pluto'>
                            <h2>Dwarf planet</h2>
                            <h1>Pluto</h1>
                            <p>Pluto, once considered the ninth and most distant planet from the sun, is now the largest known dwarf planet in the solar systm.</p>
                            <label for='readPluto'>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a>
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className='overlay'></div>
                    </div>
                </div>
            </div>
            <input className='read' id='readMercury' name='mercuryRead' type='radio'></input>
            <label className='closeBig' for='closeMercury'></label>
            <input className='read' id='closeMercury' name='mercuryRead' type='radio'></input>
            <div className='panel'>
                <h1>Mercury</h1>
                <p>Mercury is the closest planet to the sun. As such, it circles the sun faster than all the other planets, which is why Romans named it after their swift-footed messenger god.</p>
                <p>The Sumerians also knew of Mercury since at least 5,000 years ago. It was often associated with Nabu, the god of writing. Mercury was also given separate names for its appearance as both a morning star and as an evening star. Greek astronomers knew, however, that the two names referred to the same body, and Heraclitus, around 500 B.C., correctly thought that both Mercury and Venus orbited the sun, not Earth.</p>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src='https://i2.wp.com/www.astronomytrek.com/wp-content/uploads/2012/11/mercury-1.jpg?fit=678%2C381&amp;ssl=1'></img>
                <h2>A year on Mercury is just 88 days long.</h2>
                <p>One solar day (the time from noon to noon on the planet’s surface) on Mercury lasts the equivalent of 176 Earth days while the sidereal day (the time for 1 rotation in relation to a fixed point) lasts 59 Earth days. Mercury is nearly tidally locked to the Sun and over time this has slowed the rotation of the planet to almost match its orbit around the Sun. Mercury also has the highest orbital eccentricity of all the planets with its distance from the Sun ranging from 46 to 70 million km.</p>
                <h2>Mercury is the smallest planet in the Solar Systm.</h2>
                <p>One of five planets visible with the naked eye a, Mercury is just 4,879 Kilometres across its equator, compared with 12,742 Kilometres for the Earth.</p>
                <h2>Mercury is the second densest planet.</h2>
                <p>Even though the planet is small, Mercury is very dense. Each cubic centimetre has a density of 5.4 grams, with only the Earth having a higher density. This is largely due to Mercury being composed mainly of heavy metals and rock.</p>
                <h2>Mercury has wrinkles.</h2>
                <p>As the iron core of the planet cooled and contracted, the surface of the planet became wrinkled. Scientist have named these wrinkles, Lobate Scarps. These Scarps can be up to a mile high and hundreds of miles long.</p>
                <br></br>
            </div>
            <input className='read' id='readVenus' name='venusRead' type='radio'></input>
            <label className='closeBig' for='closeVenus'></label>
            <input className='read' id='closeVenus' name='venusRead' type='radio'></input>
            <div className='panel'>
                <h1>Work Experience</h1>
                {/**<img src={Workpicture} style={{ maxWidth: "250px", width: "100%", height: "auto", right: "0" }} alt="Work Example" />**/}

                <h2>Ejner Hessel A/S</h2>
                <h3>Datateknik Elev Programmering</h3>
                <p>Aug 2020 - May 2022 · 1 yr 10 mos · Brande, Middle Jutland, Denmark</p>
                <p>
                    As a programming trainee at Ejner Hessel, I worked on a variety of projects to enhance the company's internal systems. I focused primarily on backend development, API integrations, and system optimization using technologies such as the .NET Framework, ASP.NET Web API, Entity Framework, and AngularJS. One key project was the replacement of the company’s internal system for managing sales, leasing, and invoicing, as well as integrating third-party systems via REST APIs.
                </p>
                <p>
                    Additionally, I contributed to the integration of a third-party OCR system for digitalizing key company documents, making processes faster and more efficient. The system I worked on communicated across five different physical servers in Ejner Hessel’s virtual environment, improving data management and streamlining internal workflows.
                </p>
                <p>
                    The projects involved using technologies like SQL, Microsoft Azure, MySQL, and REST APIs, where I gained practical experience in handling large-scale solutions and working within corporate IT infrastructures.
                </p>

                <h2>The LEGO Group</h2>
                <h3>Mobile Developer Trainee</h3>
                <p>Mar 2019 - Mar 2020 · 1 yr 1 mo · Billund, South Denmark, Denmark</p>
                <p>
                    During my time as a mobile developer trainee at The LEGO Group, I worked on various mobile development projects, primarily focusing on Android and iOS applications. My role involved designing and developing user-friendly mobile experiences, integrating backend services, and optimizing app performance. One of the main projects I contributed to was the development of new features and functionalities for the LEGO mobile applications, aimed at improving user engagement and providing a seamless experience for users across different devices.
                </p>
                <p>
                    I also worked on implementing Agile methodologies and collaborated with cross-functional teams in a fast-paced, iterative environment. This experience helped me improve my mobile development skills while contributing to an innovative global brand.
                </p>
                <p>
                    Working with technologies like Swift, Kotlin, Xcode, and Gitlab, I was involved in the full development cycle, from the initial planning phases to testing and deployment. I also focused on improving the overall user experience (UX) by refining user interfaces and ensuring that the applications met the highest standards of quality and performance.
                </p>

                <h3>IT Support Trainee</h3>
                <p>Mar 2018 - Mar 2019 · 1 yr 1 mo · Billund, South Denmark, Denmark</p>
                <p>
                    As an IT support trainee at The LEGO Group, I provided global end-user support, assisting with troubleshooting technical issues and helping to resolve software and hardware problems for employees worldwide. During this time, I utilized ITIL frameworks and tools like ServiceNow, while also working on various projects to automate support tasks and improve system processes.
                </p>

                <h2>Trifork</h2>
                <h3>Software Developer Intern</h3>
                <p>Jan 2021 - Jun 2021 · 6 mos · Aarhus, Denmark</p>
                <p>
                    During my time as a software developer intern at Trifork, I worked on various exciting projects involving cloud solutions and web development. I was involved in the development of scalable, high-performance applications using Microsoft Azure and .NET technologies. A key project I contributed to was the creation of cloud-based solutions for e-commerce platforms, where I was responsible for integrating third-party APIs, optimizing backend systems, and ensuring seamless data flow between platforms.
                </p>
                <p>
                    In addition to backend development, I also had the opportunity to explore frontend technologies like React and JavaScript. I worked closely with senior developers and contributed to the development of responsive, user-friendly interfaces for clients. This internship allowed me to strengthen my skills in both cloud development and full-stack web development, while working with cutting-edge technologies in a collaborative environment.
                </p>
            </div>


            <input className='read' id='readEarth' name='earthRead' type='radio'></input>
            <label className='closeBig' for='closeEarth'></label>
            <input className='read' id='closeEarth' name='earthRead' type='radio'></input>
            <div className='panel'>
                <h1>Earth</h1>
                <p>Earth, our home, is the third planet from the sun. It is the only planet known to have an atmosphere containing free oxygen, oceans of liquid water on its surface, and, of course, life.</p>
                <p>Earth is the fifth largest of the planets in the solar systm — smaller than the four gas giants, Jupiter, Saturn, Uranusand Neptune, but larger than the three other rocky planets,</p>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src='https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350'></img>
                <h2>The Earth’s rotation is gradually slowing.</h2>
                <p>This deceleration is happening almost imperceptibly, at approximately 17 milliseconds per hundred years, although the rate at which it occurs is not perfectly uniform. This has the effect of lengthening our days, but it happens so slowly that it could be as much as 140 million years before the length of a day will have increased to 25 hours.</p>
                <h2>The Earth was once believed to be the centre of the universe.</h2>
                <p>Due to the apparent movements of the Sun and planets in relation to their viewpoint, ancient scientists insisted that the Earth remained static, whilst other celestial bodies travelled in circular orbits around it. Eventually, the view that the Sun was at the centre of the universe was postulated by Copernicus, though this is also not the case.</p>
                <h2>Earth has a powerful magnetic field.</h2>
                <p>This phenomenon is caused by the nickel-iron core of the planet, coupled with its rapid rotation. This field protects the Earth from the effects of solar wind.</p>
                <h2>There is only one natural satellite of the planet Earth.</h2>
                <p>As a percentage of the size of the body it orbits, the Moon is the largest satellite of any planet in our solar systm. In real terms, however, it is only the fifth largest natural satellite.</p>
                <br></br>
            </div>
            <input className='read' id='readMars' name='marsRead' type='radio'></input>
            <label className='closeBig' for='closeMars'></label>
            <input className='read' id='closeMars' name='marsRead' type='radio'></input>
            <div className='panel'>
                <h1>Unity</h1>
                <p>Mars is the fourth planet from the sun. Befitting the red planet's bloody color, the Romans named it after their god of war. The Romans copied the ancient Greeks, who also named the planet after their god of war, Ares. Other civilizations also typically gave the planet names based on its color — for example, the Egyptians named it "Her Desher," meaning "the red one," while ancient Chinese astronomers dubbed it "the fire star."</p>
                <UnityGame></UnityGame>
                <h2>Mars and Earth have approximately the same landmass.</h2>
                <p>Even though Mars has only 15% of the Earth’s volume and just over 10% of the Earth’s mass, around two thirds of the Earth’s surface is covered in water. Martian surface gravity is only 37% of the Earth’s (meaning you could leap nearly three times higher on Mars).</p>
                <h2>Mars is home to the tallest mountain in the solar systm.</h2>
                <p>Olympus Mons, a shield volcano, is 21km high and 600km in diameter. Despite having formed over billions of years, evidence from volcanic lava flows is so recent many scientists believe it could still be active.</p>
                <h2>Only 18 missions to Mars have been successful.</h2>
                <p>As of September 2014 there have been 40 missions to Mars, including orbiters, landers and rovers but not counting flybys. The most recent arrivals include the Mars Curiosity mission in 2012, the MAVEN mission, which arrived on September 22, 2014, followed by the Indian Space Research Organization’s MOM Mangalyaan orbiter, which arrived on September 24, 2014. The next missions to arrive will be the European Space Agency’s ExoMars mission, comprising an orbiter, lander, and a rover, followed by NASA’s InSight robotic lander mission, slated for launch in March 2016 and a planned arrival in September, 2016.</p>
                <h2>Mars has the largest dust storms in the solar systm.</h2>
                <p>They can last for months and cover the entire planet. The seasons are extreme because its elliptical (oval-shaped) orbital path around the Sun is more elongated than most other planets in the solar systm.</p>
                <br></br>
            </div>
            <input className='read' id='readJupiter' name='jupiterRead' type='radio'></input>
            <label className='closeBig' for='closeJupiter'></label>
            <input className='read' id='closeJupiter' name='jupiterRead' type='radio'></input>
            <div className='panel'>
                <h1>Jupiter</h1>
                <p>Jupiter is the largest planet in the solar systm. Fittingly, it was named after the king of the gods in Roman mythology. In a similar manner, the ancient Greeks named the planet after Zeus, the king of the Greek pantheon.</p>
                <p>Jupiter helped revolutionize the way we saw the universe and ourselves in 1610, when Galileo discovered Jupiter's four large moons — Io, Europa, Ganymede and Callisto, now known as the Galilean moons. This was the first time that celestial bodies were seen circling an object other than Earth, major support of the Copernican view that Earth was not the center of the universe.</p>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src='http://hanaleikauaivacation.com/wp-content/uploads/parser/jupiter-landscape-1.jpg'></img>
                <h2>Jupiter is the fourth brightest object in the solar systm.</h2>
                <p>Only the Sun, Moon and Venus are brighter. It is one of five planets visible to the naked eye from Earth.</p>
                <h2>The ancient Babylonians were the first to record their sightings of Jupiter.</h2>
                <p>This was around the 7th or 8th century BC. Jupiter is named after the king of the Roman gods. To the Greeks, it represented Zeus, the god of thunder. The Mesopotamians saw Jupiter as the god Marduk and patron of the city of Babylon. Germanic tribes saw this planet as Donar, or Thor.</p>
                <h2>Jupiter has the shortest day of all the planets.</h2>
                <p>It turns on its axis once every 9 hours and 55 minutes. The rapid rotation flattens the planet slightly, giving it an oblate shape.</p>
                <h2>Jupiter orbits the Sun once every 11.8 Earth years.</h2>
                <p>From our point of view on Earth, it appears to move slowly in the sky, taking months to move from one constellation to another.</p>
                <br></br>
            </div>
            <input className='read' id='readSaturn' name='saturnRead' type='radio'></input>
            <label className='closeBig' for='closeSaturn'></label>
            <input className='read' id='closeSaturn' name='saturnRead' type='radio'></input>
            <div className='panel'>
                <h1>Guides</h1>
                <p>Saturn is the sixth planet from the sun and the second largest planet in the solar system. Saturn was the Roman name for Cronus, the lord of the Titans in Greek mythology. Saturn is the root of the English word "Saturday."</p>
                <p>Saturn is the farthest planet from Earth visible to the naked human eye, but it is through a telescope that the planet's most outstanding features can be seen: Saturn's rings. Although the other gas giants in the solar system — Jupiter, Uranus, and Neptune — also have rings, those of Saturn are without a doubt the most extraordinary.</p>

                {/* YouTube Video */}
                <div className="video-container">
                    <h2>Remote access to win server through 0-day NSA exploit.</h2>
                    <hr />
                    <iframe
                        width="100%"
                        height="500px"
                        src="https://www.youtube.com/embed/sugUOHUIScg"
                        title="Exploit"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <p>Windows server 2012 on VirtualBox.
                    Kali linux on VirtualBox.

                    This trick? needs a sharefolder to a guest login.

                    Highly recommended for windows server users
                    to disable the guest login but i suppose many
                    of you allready done dat. Good job. </p>

                {/* YouTube Video */}
                <div className="video-container">
                    <h2>Snapping networks packets to read telnet messages.</h2>
                    <hr />
                    <iframe
                        width="100%"
                        height="500px"
                        src="https://www.youtube.com/embed/5YgRdw97FyU"
                        title="Telnet"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <p>Saturn can be seen with the naked eye. It is the fifth brightest object in the solar system and is also easily studied through binoculars or a small telescope.</p>

                {/* YouTube Video */}
                <div className="video-container">
                    <h2>Snapping networks packets to read telnet messages.</h2>
                    <hr />
                    <iframe
                        width="100%"
                        height="500px"
                        src="https://www.youtube.com/embed/VHM496H397o"
                        title="Windows Management"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <p>Using system.Management to withdraw data from Win32_PnPSignedDriver.
                    Add reference to your project .
                    Right click your Reference in Solution explorer, Choose "Add Reference". Find System.Management and add it.
                    Remember to add using System.Management - In your project too. </p>



                <h2>Saturn was known to the ancients, including the Babylonians and Far Eastern observers.</h2>
                <p>It is named for the Roman god Saturnus, and was known to the Greeks as Cronus.</p>

                <h2>Saturn is the flattest planet.</h2>
                <p>Its polar diameter is 90% of its equatorial diameter, this is due to its low density and fast rotation. Saturn turns on its axis once every 10 hours and 34 minutes giving it the second-shortest day of any of the solar system’s planets.</p>

                <h2>Saturn orbits the Sun once every 29.4 Earth years.</h2>
                <p>Its slow movement against the backdrop of stars earned it the nickname of “Lubadsagush” from the ancient Assyrians. The name means “oldest of the old”.</p>
            </div>
            <input className='read' id='readUranus' name='uranusRead' type='radio'></input>
            <label className='closeBig' for='closeUranus'></label>
            <input className='read' id='closeUranus' name='uranusRead' type='radio'></input>
            <div className='panel'>
                <h1>Uranus</h1>
                <p>Uranus is the seventh planet from the sun and the first to be discovered by scientists. Although Uranus is visible to the naked eye, it was long mistaken as a star because of the planet's dimness and slow orbit. The planet is also notable for its dramatic tilt, which causes its axis to point nearly directly at the sun.</p>
                <p>British astronomer William Herschel discovered Uranus accidentally on March 13, 1781, with his telescope while surveying all stars down to those about 10 times dimmer than can be seen by the naked eye. One "star" seemed different, and within a year Uranus was shown to follow a planetary orbit.</p>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src='http://www.cosmosup.com/wp-content/uploads/2016/02/Uranus-Facts-About-the-Planet-Uranus-700x325.jpg'></img>
                <h2>Uranus was officially discovered by Sir William Herschel in 1781.</h2>
                <p>It is too dim to have been seen by the ancients. At first Herschel thought it was a comet, but several years later it was confirmed as a planet. Herscal tried to have his discovery named “Georgian Sidus” after King George III. The name Uranus was suggested by astronomer Johann Bode. The name comes from the ancient Greek deity Ouranos.</p>
                <h2>Uranus turns on its axis once every 17 hours, 14 minutes.</h2>
                <p>The planet rotates in a retrograde direction, opposite to the way Earth and most other planets turn.</p>
                <h2>Uranus makes one trip around the Sun every 84 Earth years.</h2>
                <p>During some parts of its orbit one or the other of its poles point directly at the Sun and get about 42 years of direct sunlight. The rest of the time they are in darkness.</p>
                <h2>Uranus is often referred to as an “ice giant” planet.</h2>
                <p>Like the other gas giants, it has a hydrogen upper layer, which has helium mixed in. Below that is an icy “mantle, which surrounds a rock and ice core. The upper atmosphere is made of water, ammonia and the methane ice crystals that give the planet its pale blue colour.</p>
                <br></br>
            </div>
            <input className='read' id='readNeptune' name='neptuneRead' type='radio'></input>
            <label className='closeBig' for='closeNeptune'></label>
            <input className='read' id='closeNeptune' name='neptuneRead' type='radio'></input>
            <div className='panel'>
                <h1>Neptune</h1>
                <p>Neptune is the eighth planet from the sun. It was the first planet to get its existence predicted by mathematical calculations before it was actually seen through a telescope on Sept. 23, 1846. Irregularities in the orbit of Uranus led French astronomer Alexis Bouvard to suggest that the gravitational pull from another celestial body might be responsible. German astronomer Johann Galle then relied on subsequent calculations to help spot Neptune via telescope. Previously, astronomer Galileo Galilei sketched the planet, but he mistook it for a star due to its slow motion. In accordance with all the other planets seen in the sky, this new world was given a name from Greek and Roman mythology — Neptune, the Roman god of the sea.</p>
                <p>Only one mission has flown by Neptune – Voyager 2 in 1989 – meaning that astronomers have done most studies using ground-based telescopes. Today, there are still many mysteries about the cool, blue planet, such as why its winds are so speedy and why its magnetic field is offset.</p>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8Dd14tbXAzh1iz-EJl9tulRwH7Bb-SxX6sXpKFDbqb-NKwpE'></img>
                <h2>Neptune was not known to the ancients.</h2>
                <p>It is not visible to the naked eye and was first observed in 1846. Its position was determined using mathematical predictions. It was named after the Roman god of the sea.</p>
                <h2>Neptune spins on its axis very rapidly.</h2>
                <p>Its equatorial clouds take 18 hours to make one rotation. This is because Neptune is not solid body.</p>
                <h2>Neptune is the smallest of the ice giants.</h2>
                <p>Despite being smaller than Uranus, Neptune has a greater mass. Below its heavy atmosphere, Uranus is made of layers of hydrogen, helium, and methane gases. They enclose a layer of water, ammonia and methane ice. The inner core of the planet is made of rock.</p>
                <h2>The atmosphere of Neptune is made of hydrogen and helium, with some methane.</h2>
                <p>The methane absorbs red light, which makes the planet appear a lovely blue. High, thin clouds drift in the upper atmosphere.</p>
            </div>
            <input className='read' id='readPluto' name='plutoRead' type='radio'></input>
            <label className='closeBig' for='closePluto'></label>
            <input className='read' id='closePluto' name='plutoRead' type='radio'></input>
            <div className='panel'>
                <h1>Pluto</h1>
                <p>Pluto, once considered the ninth and most distant planet from the sun, is now the largest known dwarf planet in the solar systm. It is also one of the largest known members of the Kuiper Belt, a shadowy zone beyond the orbit of Neptune thought to be populated by hundreds of thousands of rocky, icy bodies each larger than 62 miles (100 kilometers) across, along with 1 trillion or more comets.</p>
                <p>In 2006, Pluto was reclassNameified as a dwarf planet, a change widely thought of as a demotion. The question of Pluto's planet status has attracted controversy and stirred debate in the scientific community, and among the general public, since then. In 2017, a science group (including members of the New Horizon mission) proposed a new definition of planethood based on "round objects in space smaller than stars," which would make the number of planets in our solar systm expand from 8 to roughly 100.</p>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/asd.jpeg'></img>
                <h2>Pluto is named after the Greek god of the underworld.</h2>
                <p>This is a later name for the more well known Hades and was proposed by Venetia Burney an eleven year old schoolgirl from Oxford, England.</p>
                <h2>Pluto was reclassNameified from a planet to a dwarf planet in 2006.</h2>
                <p>This is when the IAU formalised the definition of a planet as “A planet is a celestial body that (a) is in orbit around the Sun, (b) has sufficient mass for its self-gravity to overcome rigid body forces so that it assumes a hydrostatic equilibrium (nearly round) shape, and (c) has cleared the neighbourhood around its orbit.”</p>
                <h2>Pluto was discovered on February 18th, 1930 by the Lowell Observatory.</h2>
                <p>For the 76 years between Pluto being discovered and the time it was reclassNameified as a dwarf planet it completed under a third of its orbit around the Sun.</p>
                <h2>Pluto has five known moons.</h2>
                <p>The moons are Charon (discovered in 1978,), Hydra and Nix (both discovered in 2005), Kerberos originally P4 (discovered 2011) and Styx originally P5 (discovered 2012) official designations S/2011 (134340) 1 and  S/2012 (134340) 1.</p>
            </div>
        </div>
    );
};

export default PlanetInfo;
